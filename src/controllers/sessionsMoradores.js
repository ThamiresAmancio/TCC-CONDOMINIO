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
            attributes: ["id", "numero"],
            include: [
              {
                association: "Bloco",
                attributes: ["id", "name", ],
                include: [
                  {
                    association: "Condominio",
                    attributes: ["id", "cnpj"]
                  }
                ]
              },
            ],
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
        perfil: "morador",
      });

      const apartamento = morador.Apartamento;
      const bloco = morador.Apartamento.Bloco
      const condominio = morador.Apartamento.Bloco.Condominio

      res.status(201).send({
        moradorId: morador.id,
        name: morador.name,
        surname: morador.surname,
        sobrenome: morador.sobrenome,
        cpf: morador.cpf,
        birth: morador.birth,
        email: morador.email,
        apartamento: {
          id: apartamento.id,
          numero: apartamento.numero
        },
        bloco: {
          id: bloco.id,
          nome: bloco.name
        },
        condominio: {
          id: condominio.id,
          cnpj: condominio.cnpj
        },
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
