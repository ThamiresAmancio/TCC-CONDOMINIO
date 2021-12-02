
const Bloco = require("../models/Bloco");
const Condominio = require("../models/Condomino");

module.exports = {

  async index(req, res) {
  
    const  {userId}  = req 
    try {
    
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

      if (!bloco) return res.status(404).send({ error: 'bloco não encontrado' })

      return res.status(200).send(bloco)
    } catch (error) {
      res.status(500).send({ error });
    }
  },

  async find(req, res) {

    const blocoId = req.params.id;

    try {
      let bloco = await Bloco.findByPk(blocoId, {
        attributes: ["id", "name"]

      });

      //se aluno não encontrado, retornar not found
      if (!bloco)
        return res.status(404).send({ erro: "bloco não encontrado" });

      res.send(bloco);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error });
    }

  },

  async store(req, res) {

    //recebendo os dados no body
    const { name, condominio_id } = req.body;

    try {
      let condominio = await Condominio.findByPk(condominio_id)


      if (!condominio)
        return res.status(404).send({ error: 'Condomínio não encontrado' })


      let bloco = await Bloco.findOne({
        where: {
          name: name
        }
      })

      if (bloco) {
        return res.status(400)
          .send({ error: "Este bloco já está cadastrado" })

      }

      bloco = await Bloco.create({
        name: name,
        condominio_id: condominio_id
      })
      res.send({

        bloco: {
          blocoId: bloco.id,
          name: bloco.name,
        },
        condominio,
      })
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  async update(req, res) {


    const blocoId = req.params.id;

    //recuperar o dados do corpo
    const { name } = req.body;

    try {
      let bloco = await Bloco.findByPk(blocoId);

      if (!bloco) res.status(404).send({ error: "bloco não encontrado" });

      bloco.name = name;

      bloco.save();

      //retornar resposta
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  async delete(req, res) {

    const blocoId = req.params.id;

    try {
      let bloco = await Bloco.findByPk(blocoId);

      if (!bloco)
        return res.status(404).send({ error: "bloco não encontrado" });

      await bloco.destroy();

      //devolver resposta de sucesso
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}