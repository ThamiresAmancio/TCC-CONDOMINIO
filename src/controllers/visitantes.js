const Visitantes = require("../models/VisitanteSindicos");
const Sindico = require("../models/Sindico")


module.exports = {

    async index(req, res) {
        try {

          const visitanteSindico = await Visitantes.findAll();

            res.send(visitanteSindico);
          } catch (error) {
            console.log(error);
            res.status(500).send({ error: "Visitante não encontrado"});
          }
        },

        async find(req, res) {

        const visitanteId = req.params.id;

        try {
          let visitante = await Visitantes.findByPk(visitanteId, {
            attributes: ["id", "name" ]
            
          });
    
          //se visitate não encontrado, retornar not found
          if (!visitante)
            return res.status(404).send({ erro: "Visitante não encontrado" });
    
          res.send(visitante);
        } catch (error) {
          console.log(error);
          res.status(500).send({ error });
        }

    },

    async store(req, res) {

        //recebendo os dados no body

        const {firebaseUrl} = req.file ? req.file : "";

        if (!firebaseUrl)
          return res.status(400).send({ error: "Campo imagem é obrigatório" });

        const{name,rg,data} = req.body;
        const {id} = req.params;
    

        try {
          let sindico= await Sindico.findByPk(id)

  
          if(!sindico)
          return res.status(404).send({error:'Síndico não encontrado'})

        let visitanteSindico = await Visitantes.findOne({
            where:{
                name:name,
                data: data
            }
        })


        if(visitanteSindico){
            return res.status(400)
            .send({error: "Este Visitante já está cadastrado"})
        }


        visitanteSindico = await Visitantes.create({

            name:name,
            rg:rg,
            data:data,
            image: firebaseUrl,
            sindico_id : id,
        })

        res.send({

            visitanteSindico:{
                visitanteId: visitanteSindico.id,
                name:visitanteSindico.name,
                rg:visitanteSindico.rg,
                data:visitanteSindico.data,
                image:visitanteSindico.image

            },

            sindico,

        })
      } catch (error) {
        console.log(error)
        res.status(500).send(error)
      }
    },

    async update(req, res) {


    const visitanteId = req.params.id;

    //recuperar o dados do corpo
    const { name, data} = req.body;

    try {
      let visitanteSindico = await Visitantes.findByPk(visitanteId);

      if (!visitanteSindico) res.status(404).send({ error: "Visitante não encontrado" });

      visitanteSindico.name = name;
      visitanteSindico.rg = rg;
      visitanteSindico.data = data;
    

      visitanteSindico.save();

      //retornar resposta
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
        

    },

    async delete(req, res) {

        const visitanteId = req.params.id;

        try {
          let visitanteSindico = await Visitantes.findByPk(visitanteId);
    
          if (!visitanteSindico)
            return res.status(404).send({ error: "Visitante não encontrado" });
    
          await visitanteSindico.destroy();
    
          //devolver resposta de sucesso
          res.status(204).send();
        } catch (error) {
          console.log(error);
          res.status(500).send(error);
        }
    }
}