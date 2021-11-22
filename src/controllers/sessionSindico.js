const bcrypt = require("bcryptjs");
const { generateToken } = require("../util");
const CadastroSindico = require("../models/Sindico");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    try {
      const sindico = await CadastroSindico.findOne({
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
                    attributes: ["id", "name", "cnpj"]
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

      if (!sindico || !bcrypt.compareSync(password, sindico.password))
        return res.status(403).send({ error: "Usuário e/ou senha inválidos" });

      const token = generateToken({
        userId: sindico.id,
        userName: sindico.name,
        perfil: "sindico",
      });

      const apartamento = sindico.Apartamento;
      const bloco = sindico.Apartamento.Bloco
      const condominio = sindico.Apartamento.Bloco.Condominio

      res.status(201).send({
          sindicoId: sindico.id,
          name: sindico.name,
          surname:sindico.surname,
          cpf:sindico.cpf,
          birth:sindico.birth,
          email:sindico.email,
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
            nome: condominio.name,
            cnpj: condominio.cnpj
          },
          token,
      });
      // res.status(201).send({
      //   sindico,
      //   token,
      // });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
