const CadastroSindico = require("../models/Sindico");
const Condominio = require("../models/Condomino");
const Blocos = require("../models/Bloco")
const bcrypt = require("bcryptjs")
const { generateToken } = require("../util");
const Apartamento = require("../models/Apartamento");


module.exports = {

    async index(req, res) {

        try {
            
            const sindico = await CadastroSindico.findAll({
              include: [
                {
                  association: "Apartamento",
                  attributes: ["id", "numero","bloco_id"],
                },
              ]
            });

            res.send(sindico);
          } catch (error) {
            console.log(error);
            res.status(500).send({ error: "Síndico não encontrado"});
          }
        },

        async find(req, res) {

        const sindicoId = req.params.id;

        try {
          let sindico = await CadastroSindico.findByPk(sindicoId, {
            attributes: ["id", "name", "cpf", "email"]
            
          });
    
          //se sindicostrador não encontrado, retornar not found
          if (!sindico)
            return res.status(404).send({ erro: "Síndico não encontrado" });
    
          res.send(sindico);
        } catch (error) {
          console.log(error);
          res.status(500).send({ error });
        }

    },

    async findSindico(req, res) {

      const { userId } = req
  
      try {
  
        const condominio = await Condominio.findOne({
          where: {
            admin_id: userId
          }
        })
  
        

        const blocos = await Blocos.findAll({
          where: {
            condominio_id: condominio.id
          }
        })

        const blocosID = blocos.map((data) => {
          const { id, ...props } = data.dataValues
          return id
        })

        const apartamento = await Apartamento.findAll({
          where: {
            bloco_id: blocosID
          }
        })

        const apartamentoID = apartamento.map((data) => {
          const { id, ...props } = data.dataValues
          return id
        })


        const sindico = await CadastroSindico.findAll({
          where: {
            apartamento_id: apartamentoID
          }
        })
  
        res.send(sindico);
        
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
    },

    async store(req, res) {

        //recebendo os dados no body
        const{name,surname,cpf,birth,email,password,apartamento_id} = req.body;


        try {
          let apartamento= await Apartamento.findByPk(apartamento_id)
  
  
          if(!apartamento)
          return res.status(404).send({error:'Apartamento não encontrado'})
  
        let sindico = await CadastroSindico.findOne({
            where:{
                email:email,
                cpf:cpf
            }
        })

        if(sindico){
            return res.status(400)
            .send({error: "Este Síndico já está cadastrado"})
        }

        const passwordHash = bcrypt.hashSync(password);

        sindico = await apartamento.createSindico({

            name:name,
            surname:surname,
            cpf:cpf,
            birth:birth,
            email:email,
            password:passwordHash,
            apartamento_id : apartamento_id
        })


        // aqui vai ser gerado o token

        const token = generateToken({

            sindicoId: sindico.id,
            sindicoName: sindico.name,
        });
       
        res.send({

            sindico:{
                sindicoId: sindico.id,
                name:sindico.name,
                surname:sindico.surname,
                cpf:sindico.cpf,
                birth:sindico.birth,
                email:sindico.email,
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


    const sindicoId = req.params.id;

    //recuperar o dados do corpo
    const { name,surname,cpf,birth,email,password, condominio, bloco, apartamento} = req.body;

    try {
      let sindico = await CadastroSindico.findByPk(sindicoId);

      if (!sindico) res.status(404).send({ error: "Síndico não encontrado" });

      sindico.name = name;
      sindico.surname = surname;
      sindico.cpf = cpf;
      sindico.birth = birth;
      sindico.email = email;
      sindico.password = password;
      sindico.condominio = condominio;
      sindico.bloco = bloco;
      sindico.apartamento = apartamento;
    


      sindico.save();

      //retornar resposta
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
        

    },

    async delete(req, res) {
ss
        const sindicoId = req.params.id;

        try {
          let sindico = await CadastroSindico.findByPk(sindicoId);
    
          if (!sindico)
            return res.status(404).send({ error: "Síndico não encontrado" });
    
          await sindico.destroy();
    
          //devolver resposta de sucesso
          res.status(204).send();
        } catch (error) {
          console.log(error);
          res.status(500).send(error);
        }
    }
}