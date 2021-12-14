const Agendamento = require("../models/Agendamento");
//const Morador = require("../models/Morador");
const Condominio = require("../models/Condomino")

module.exports = {

  //pegar os agendamentos
  async index(req, res) {

    try {
      const agendamento = await Agendamento.findAll({
        include: [
          {
            association: "Condominio",
            attributes: ["id", "name"],
          },
        ]
      });
      res.send(agendamento);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "Agendamento não encontrado" });
    }
  },

  async findPorMorador(req, res) {

    try {

      const condominio_id  = req.params.id

      const agendamento = await Agendamento.findAll({
        include: [
          {
            association: "Condominio",
            attributes: ["id", "name"],
          },
        ],
        where: {
          condominio_id: condominio_id
        }
      });
      res.send(agendamento);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "Agendamento não encontrado" });
    }
  },


  //criar agendamento
  async store(req, res) {

    //recebendo os dados no body
    const {
      nome,
      data,
      horainicio,
      horatermino,
      condominio_id  } = req.body

    //  const condominio_id  = req.params.id


    try {

      const condominio = await Condominio.findByPk(condominio_id)

      if (!condominio)
        return res.status(404).send({ error: 'Condomínio não encontrado' })

      let agendamento = await Agendamento.findOne({
        where: {
          data: data
        }
      })

      if (agendamento) {
        if (agendamento.data == data) return res.status(400).send({ error: "Este dia já está agendado" })
      }

      agendamento = await Agendamento.create({
        nome: nome,
        data: data,
        horainicio: horainicio,
        horatermino: horatermino,
        condominio_id: condominio_id
      })

      res.status(200).send({
        agendamento: {
          agendamentoId: agendamento.id,
          nome: agendamento.nome,
          data: agendamento.data,
          horainicio: agendamento.horainicio,
          horatermino: agendamento.horatermino
        },
      })
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  //editar agendamento
  async update(req, res) {


    const agendamentoId = req.params.id;

    //recuperar o dados do corpo
    const { nome, data, horainicio, horatermino } = req.body;

    try {
      let agendamento = await Agendamento.findByPk(agendamentoId);

      if (!agendamento) res.status(404).send({ error: "Agendamento não encontrado" });

      agendamento.nome = nome;
      agendamento.data = data;
      agendamento.horainicio = horainicio;
      agendamento.horatermino = horatermino

      agendamento.save();

      //retornar resposta
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  //deletar agendamento
  async delete(req, res) {

    const agendamentoId = req.params.id;

    try {
      let agendamento = await Agendamento.findByPk(agendamentoId);

      if (!agendamento)
        return res.status(404).send({ error: "Agendamento não encontrado" });

      await agendamento.destroy();

      //devolver resposta de sucesso
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}