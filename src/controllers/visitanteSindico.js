const CadastroVisitante = require("../models/VisitanteSindico")
const Sindico = require("../models/Sindico")
const { generateToken } = require("../util");

module.exports = {

    async index(req, res) {
        try {

          const visitante = await CadastroVisitante.findAll();

            res.send(visitante);
          } catch (error) {
            console.log(error);
            res.status(500).send({ error: "Visitante não encontrado"});
          }
        },

        async find(req, res) {


        const visitanteId = req.params.id;

        try {
          let visitante = await CadastroVisitante.findByPk(visitanteId, {
            attributes: ["id", "name", "cpf" ]
            
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

        const{name,rg,cpf} = req.body;


        const {id} = req.params;


        try {

          let sindico= await Sindico.findByPk(id)


          if(!sindico)
          return res.status(404).send({error:'Síndico não encontrado'})
  

        let visitante = await CadastroVisitante.findOne({
            where:{
                name:name,
                cpf:cpf
            }
        })

        if(visitante){
            return res.status(400)
            .send({error: "Este Visitante já está cadastrado"})
        }


        console.log(CadastroVisitante)

        visitante = await CadastroVisitante.create({

            name:name,
            rg:rg,
            cpf:cpf,
            image: firebaseUrl,
            sindico_id : id
        })


        // aqui vai ser gerado o token

        const token = generateToken({

            visitanteId: visitante.id,
            visitanteName: visitante.name,
        });
       
        res.send({

            visitante:{
                visitanteId: visitante.id,
                name:visitante.name,
                rg:visitante.rg,
                cpf:visitante.cpf,
                image:visitante.image

            },

            token,
            sindico
        })
      } catch (error) {
        console.log(error)
        res.status(500).send(error)
      }
    },

    async update(req, res) {


    const visitanteId = req.params.id;

    //recuperar o dados do corpo
    const { name,rg,cpf} = req.body;

    try {
      let visitante = await CadastroVisitante.findByPk(visitanteId);

      if (!visitante) res.status(404).send({ error: "Visitante não encontrado" });

      visitante.name = name;
      visitante.rg = rg;
      visitante.cpf = cpf;
    

      visitante.save();

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
          let visitante = await CadastroVisitante.findByPk(visitanteId);
    
          if (!visitante)
            return res.status(404).send({ error: "Visitante não encontrado" });
    
          await visitante.destroy();
    
          //devolver resposta de sucesso
          res.status(204).send();
        } catch (error) {
          console.log(error);
          res.status(500).send(error);
        }
    }
}