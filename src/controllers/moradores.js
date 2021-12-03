const Morador = require("../models/Morador");
const bcrypt = require("bcryptjs")
const { generateToken } = require("../util");
const Apartamento = require("../models/Apartamento");
const Sindico = require("../models/Sindico");
const Bloco = require("../models/Bloco");
const Aviso = require('../models/Aviso');
const Condominio = require("../models/Condomino");

module.exports = {

  async index(req, res) {

    try {
      const moradores = await Morador.findAll({
        include: [
          {
            association: "Apartamento",
            attributes: ["id", "numero", "bloco_id"],
          },
        ]
      });

      res.send(moradores);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "Morador não encontrado" });
    }
  },

  async findMorador(req, res) {

    const { userId } = req

    try {
      const sindico = await Sindico.findByPk(userId)

      const apartamento = await Apartamento.findOne({
        where: {
          id: sindico.ApartamentoId
        }
      })

      // const bloco = await Bloco.findOne({
      //   where: {
      //     id: apartamento.bloco_id
      //   }
      // })

      // const condominio = await Condominio.findOne({
      //   where: {
      //     id: bloco.condominio_id
      //   }
      // })

      const morador = await Morador.findAll({
        where: {
          apartamento_id: apartamento.id
        }
      })

      res.send(morador);
    } catch (error) {
      console.log(error);
      res.status(500).send( error);
    }
  },

  async find(req, res) {

    const moradorId = req.params.id;

    try {
      let moradores = await Morador.findByPk(moradorId, {
        attributes: ["id", "name", "cpf"]

      });

      //se aluno não encontrado, retornar not found
      if (!moradores)
        return res.status(404).send({ erro: "Morador não encontrado" });

      res.send(moradores);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error });
    }

  },

  async store(req, res) {

    //recebendo os dados no body
    const { name, surname, cpf, birth, email, password, apartamento_id } = req.body;




    try {
      let apartamento = await Apartamento.findByPk(apartamento_id)


      if (!apartamento)
        return res.status(404).send({ error: 'Apartamento não encontrado' })


      let moradores = await Morador.findOne({
        where: {
          name: name,
          cpf: cpf
        }
      })


      if (moradores) {
        return res.status(400)
          .send({ error: "Este Morador já está cadastrado" })
      }


      const passwordHash = bcrypt.hashSync(password);

      moradores = await apartamento.createMorador({

        name: name,
        surname: surname,
        cpf: cpf,
        birth: birth,
        email: email,
        password: passwordHash,
        apartamento_id: apartamento_id
      })


      // aqui vai ser gerado o token

      const token = generateToken({
        userId: moradores.id,
        userName: moradores.name,
      });

      res.send({

        moradores: {
          moradorId: moradores.id,
          name: moradores.name,
          surname: moradores.surname,
          cpf: moradores.cpf,
          birth: moradores.birth,
          email: moradores.email,
        },
        token,
        apartamento
      })
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  async update(req, res) {


    const moradorId = req.params.id;

    //recuperar o dados do corpo
    const { name, surname, cpf, birth, email, password } = req.body;

    try {
      let moradores = await Morador.findByPk(moradorId);

      if (!moradores) res.status(404).send({ error: "Morador não encontrado" });

      moradores.name = name;
      moradores.surname = surname;
      moradores.cpf = cpf;
      moradores.birth = birth;
      moradores.email = email;
      moradores.password = password;

      moradores.save();

      //retornar resposta
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  async delete(req, res) {

    const moradorId = req.params.id;

    try {
      let moradores = await Morador.findByPk(moradorId);

      if (!moradores)
        return res.status(404).send({ error: "Morador não encontrado" });

      await moradores.destroy();

      //devolver resposta de sucesso
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}
