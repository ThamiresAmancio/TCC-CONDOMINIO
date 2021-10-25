const CadastroPorteiro = require("../models/Porteiro");
const CadastroCondominio = require("../models/Condomino");
const bcrypt = require("bcryptjs")
const { generateToken } = require("../util");
const Condominio = require("../models/Condomino");

module.exports = {

  async index(req, res) {

            
      try {
          const porteiro = await CadastroPorteiro.findAll();
          res.status(200).send(porteiro);
        } catch (error) {
          console.log(error);
          res.status(500).send({ error: "Porteiro não encontrado"});
        }
      },

      async find(req, res) {

      const porteiroId = req.params.id;

      try {
        let porteiro = await CadastroPorteiro.findByPk(porteiroId, {
          attributes: ["id", "name", "email"]
          
        });
  
        //se poretiro não encontrado, retornar not found
        if (!porteiro)
          return res.status(404).send({ erro: "Porteiro não encontrado" });
  
        res.send(porteiro);
      } catch (error) {
        console.log(error);
        res.status(500).send({ error });
      }

  },

  async store(req, res) {

      //recebendo os dados no body
      const{name,telephone,email,password} = req.body;

      const {id} = req.params;

      try {
        let condominio= await Condominio.findByPk(id)


        if(!condominio)
        return res.status(404).send({error:'Condomínio não encontrado'})


      let porteiro = await CadastroPorteiro.findOne({
          where:{
              name:name,
              email:email,
          }
      })

      if(porteiro){
          return res.status(400)
          .send({error: "Este Porteiro já está cadastrado"})
      }

      const passwordHash = bcrypt.hashSync(password);

      porteiro = await CadastroPorteiro.create({

          name:name,
          telephone:telephone,
          email:email,
          password:passwordHash,
          condominio_id : id

      })

      // aqui vai ser gerado o token
      const token = generateToken({
            userId: porteiro.id,
            userName: porteiro.name,
            perfil: "porteiros"
          });

      res.send({

          porteiro:{
              porteiroId: porteiro.id,
              name:porteiro.name,
              telephone:porteiro.telephone,
              email:porteiro.email,
          },
          token,
          condominio
      })
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  },

  async update(req, res) {

  const porteiroId = req.params.id;

  //recuperar o dados do corpo
  const { name, telephone, email,password } = req.body;

  try {
    let porteiro = await CadastroPorteiro.findByPk(porteiroId);

    if (!porteiro) res.status(404).send({ error: "Porteiro não encontrado" });

    porteiro.name = name;
    porteiro.telephone = telephone;
    porteiro.email = email;
    porteiro.password = password;

    porteiro.save();

    //retornar resposta
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
      
  },

  async delete(req, res) {

      const porteiroId = req.params.id;

      try {
        let porteiro = await CadastroPorteiro.findByPk(porteiroId);
  
        if (!porteiro)
          return res.status(404).send({ error: "Porteiro não encontrado" });
  
        await porteiro.destroy();
  
        //devolver resposta de sucesso
        res.status(204).send();
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
  }
}