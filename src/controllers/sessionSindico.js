const bcrypt = require("bcryptjs");
const { generateToken } = require("../util");
const CadastroSindico = require("../models/Sindico");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    try {
      const sindico = await CadastroSindico.findOne({
        where: {
          email,
        },
      });

      if (!sindico || !bcrypt.compareSync(password, sindico.password))
        return res.status(403).send({ error: "Usuário e/ou senha inválidos" });

      const token = generateToken({
        userId: sindico.id,
        userName: sindico.name,
        perfil: "sindico"
      });
      setTimeout(() => {
        res.status(201).send({
          sindico: {
            sindicoId: sindico.id,
            name: sindico.name,
            surname:sindico.surname,
            cpf:sindico.cpf,
            birth:sindico.birth,
            email:sindico.email,
            
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