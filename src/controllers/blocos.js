
const { generateToken } = require("../util");
const Bloco = require("../models/Bloco");
const CadastroCondominio = require("../models/Condomino");
const Condominio = require("../models/Condomino");

module.exports = {

    async index(req, res) {

        try {
            const bloco = await Bloco.findAll();

            res.send(bloco);
          } catch (error) {
            console.log(error);
            res.status(500).send({ error: "bloco não encontrado"});
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
        const{name} = req.body;

        const {id} = req.params;

      
      try {
        let condominio= await Condominio.findByPk(id)


        if(!condominio)
        return res.status(404).send({error:'Condomínio não encontrado'})


        let bloco = await Bloco.findOne({
            where:{
                name:name
            }
        })

        if(bloco){
            return res.status(400)
            .send({error: "Este bloco já está cadastrado"})

        }

        bloco= await Bloco.create({
            name:name,
            condominio_id: id
        })
        res.send({

            bloco:{
                blocoId: bloco.id,
                name:bloco.name,
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