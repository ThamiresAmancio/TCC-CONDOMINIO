const apartamentos = require("../models/Apartamento");
const Bloco = require("../models/Bloco");

module.exports = {

    async index(req, res) {

        try {
            const apartamento = await apartamentos.findAll();
            res.send(apartamento);
          } catch (error) {
            console.log(error);
            res.status(500).send({ error: "Apartamento não encontrado"});
          }
        },

        async find(req, res) {

        const apartamentoId = req.params.id;

        try {
          let apartamento = await apartamentos.findByPk(apartamentoId, {
            attributes: ["id", "numero"]
            
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
        const{numero} = req.body;

        const {id} = req.params;

        try {
          let bloco= await Bloco.findByPk(id)
  
  
          if(!bloco)
          return res.status(404).send({error:'Bloco não encontrado'})

        let apartamento = await apartamentos.findOne({
            where:{
              numero,
            }
        })


        if(apartamento){
            return res.status(400)
            .send({error: "Este Apartamento já está cadastrado"})
        }
        apartamento= await apartamentos.create({
           numero:numero,
           bloco_id :id
        })

        res.send({

            apartamento:{
                apartamentoId: apartamento.id,
                numero:apartamento.numero,
               
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
    const {numero} = req.body;

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