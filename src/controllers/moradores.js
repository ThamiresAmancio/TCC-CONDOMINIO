const Morador = require("../models/Morador");
const bcrypt = require("bcryptjs")
const { generateToken } = require("../util");
const Apartamento = require("../models/Apartamento");

module.exports = {

    async index(req, res) {
  
        try {
            const moradores = await Morador.findAll();
      
            res.send(moradores);
          } catch (error) {
            console.log(error);
            res.status(500).send({ error: "Morador não encontrado"});
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
        const{name,surname,cpf,birth,email,password} = req.body;

        
        const {id} = req.params;

        try {
          let apartamento= await Apartamento.findByPk(id)
  
  
          if(!apartamento)
          return res.status(404).send({error:'Apartamento não encontrado'})

        
        let moradores = await Morador.findOne({
            where:{
                name:name,
                cpf:cpf
            }
        })


        if(moradores){
            return res.status(400)
            .send({error: "Este Morador já está cadastrado"})
        }

        
        const passwordHash = bcrypt.hashSync(password);

        moradores= await Morador.create({

            name:name,
            surname:surname,
            cpf:cpf,
            birth:birth,
            email:email,
            password:passwordHash,
            apartamentos_id : id

        })


        // aqui vai ser gerado o token

        const token = generateToken({
          userId: moradores.id,
          userName: moradores.name,
        });
       
        res.send({

            moradores:{
                moradorId: moradores.id,
                name: moradores.name,
                surname:moradores.surname,
                cpf:moradores.cpf,
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
    const {name,surname,cpf,birth,email,password} = req.body;

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
