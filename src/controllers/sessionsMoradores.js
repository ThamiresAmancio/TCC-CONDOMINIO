const bcrypt = require("bcryptjs");
const { generateToken } = require("../util");
const CadastroMorador = require("../models/Morador");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    try {
      const morador = await CadastroMorador.findOne({
        where: {
          email,
        },
      });

      if (!morador || !bcrypt.compareSync(password, morador.password))
        return res.status(403).send({ error: "Usuário e/ou senha inválidos" });

      const token = generateToken({
        userId: morador.id,
        userName: morador.name,
        perfil: "morador"
      });

      setTimeout(() => {
        res.status(201).send({
          morador: {
            moradorId: morador.id,
            name:morador.name,
            surname: morador.surname,
            sobrenome:morador.sobrenome,
            cpf:morador.cpf,
            birth:morador.birth,
            email:morador.email,
          },
          token,
        });
      }, 3000);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};