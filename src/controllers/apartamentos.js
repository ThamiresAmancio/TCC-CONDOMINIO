const apartamentos = require("../models/Apartamento");
const Bloco = require("../models/Bloco");
const Condominio = require("../models/Condomino");


module.exports = {

  async index(req, res) {

    try {

      const  userId = req.params.id
      if(!userId) return res.status(404).send({error:'User não encontrado'});
      const condominios = await Condominio.findAll({
        where: {
          admin_id: userId
        }
      })

      if (!condominios) return res.status(404).send({ error: 'Condomínio não encontrado' })

      const condominioID = condominios.map((data) => {
        const { id, ...props } = data.dataValues
        return id
      })

      const bloco = await Bloco.findAll({
        where: {
          condominio_id: condominioID
        }
      })

      if (!bloco) return res.status(404).send({ error: 'bloco não encontrado' });
      

      const blocoID = bloco.map((data) => {
        const { id, ...props } = data.dataValues
        return id
      })

      console.log(blocoID)
      const apartamento = await apartamentos.findAll({
        attributes: ["id", "numero"],
        include: [
          {
            association: "Bloco",
            attributes: ["id", "name", "condominio_id"],
          },
        ],
        where: {
          bloco_id: blocoID
        }
      });

      res.send(apartamento);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  async find(req, res) {

    const apartamentoId = req.params.id;

    try {
      let apartamento = await apartamentos.findByPk(apartamentoId, {
        attributes: ["id", "numero"],
        include: [
          {
            association: "Bloco",
            attributes: ["bloco_id", "name"],
          },
        ]

      });

      //se adminstrador não encontrado, retornar not found
      if (!apartamento)
        return res.status(404).send({ erro: "Apartamento não encontrado" });

      res.send(apartamento);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error });
    }
  },

  async store(req, res) {

    //recebendo os dados no body
    const { numero, bloco_id } = req.body;

    try {
      let bloco = await Bloco.findByPk(bloco_id)
      
      if (!bloco)
        return res.status(404).send({ error: 'Bloco não encontrado' })

      let apartamento = await apartamentos.findOne({
        where: {
          numero,
        }
      })

      if (apartamento) {
        return res.status(400)
          .send({ error: "Este Apartamento já está cadastrado" })
      }
      apartamento = await apartamentos.create({
        numero: numero,
        bloco_id: bloco_id
      })

      res.status(201).send({

        apartamento: {
          apartamentoId: apartamento.id,
          numero: apartamento.numero,
        },
        bloco
      })
    } catch (error) {
      console.log(error);
      res.status(500).send({ error });
    }
  },

  async update(req, res) {

    const apartamentoId = req.params.id;

    //recuperar o dados do corpo
    const { numero } = req.body;

    try {
      let porteiro = await apartamentos.findByPk(apartamentoId);

      if (!porteiro) res.status(404).send({ error: "Adminstrador não encontrado" });

      porteiro.numero = numero;

      porteiro.save();

      //retornar resposta
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  async delete(req, res) {

    const apartamentoId = req.params.id;

    try {
      let apartamento = await apartamentos.findByPk(apartamentoId);

      if (!apartamento)
        return res.status(404).send({ error: "Apartamento não encontrado" });

      await apartamento.destroy();

      //devolver resposta de sucesso
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}