const bcrypt = require("bcryptjs");
const { generateToken } = require("../util");
const CadastroMorador = require("../models/Morador");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    try {
      const morador = await CadastroMorador.findOne({
          include: [
            {
              association: "Apartamento",
              attributes: ["id","numero"],
            },
          ],
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

        res.status(201).send({
            moradorId: morador.id,
            name:morador.name,
            surname: morador.surname,
            sobrenome:morador.sobrenome,
            cpf:morador.cpf,
            birth:morador.birth,
            email:morador.email,
          token,
        });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};