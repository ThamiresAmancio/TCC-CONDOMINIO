const CadastroCondominio = require("../models/Condomino");
const { generateToken } = require("../util");
const CadastroAdmin = require("../models/Admin");

module.exports = {

  async index(req, res) {
 
      
      try {

        const id = req.params.id
        
        let admin= await CadastroAdmin.findByPk(id)


        if(!admin)
        return res.status(404).send({error:'Admin não encontrado'})

        const condominio = await CadastroCondominio.findAll({
          where:{
            admin_id: id
          }
        });
        res.send(condominio);
        } catch (error) {
          console.log(error);
          res.status(500).send({ error: "Condominio não encontrado"});
        }
      },

      async find(req, res) {

      const condominioId = req.params.id;

      try {
        let condominio = await CadastroCondominio.findByPk(condominioId, {
          attributes: ["id", "name", "cnpj"]          
        });
  
        if (!condominio)
          return res.status(404).send({ erro: "Condominio não encontrado" });
  
        res.send(condominio);
      } catch (error) {
        console.log(error);
        res.status(500).send({ error });
      }
  },

  async store(req, res) {

  
      const{name,bairro,estado,cep,rua,cidade,numero,cnpj} = req.body;

      const {id} = req.params;
      console.log(id)

      
      try {
        let admin= await CadastroAdmin.findByPk(id)


        if(!admin)
        return res.status(404).send({error:'Admin não encontrado'})

        let condominio = await CadastroCondominio.findOne({
          where:{
              name:name,
              cnpj:cnpj
          }
      })

      if(condominio){
          return res.status(400)
          .send({error: "Este Condominio já está cadastrado"})
      }

      
      condominio = await CadastroCondominio.create({

          name:name,
          bairro:bairro,
          estado:estado,
          cep:cep,
          rua:rua,
          cidade:cidade,
          numero:numero,
          cnpj:cnpj,
          admin_id : id

      })

      res.send({

          condominio:{
              condominioId: condominio.id,
              name:condominio.name,
              bairro:condominio.bairro,
              estado:condominio.estado,
              cep:condominio.cep,
              rua:condominio.rua,
              cidade:condominio.cidade,
              numero:condominio.numero,
              cnpj:condominio.cnpj,
          },
          admin,
      })
      } catch (error) {
        console.log(error)
        res.status(500).send(error)
      }
  },

  async update(req, res) {

  const condominioId = req.params.id;

  const { name,bairro,estado,cep,rua,cidade,numero,cnpj } = req.body;

  try {
    let condominio = await CadastroCondominio.findByPk(condominioId);

    if (!condominio) res.status(404).send({ error: "Condominio não encontrado" });

    condominio.name = name;
    condominio.bairro = bairro;
    condominio.estado = estado;
    condominio.cep = cep;
    condominio.cidade = cidade;
    condominio.numero = numero;
    condominio.cnpj = cnpj;
    condominio.rua = rua;

    condominio.save();

    //retornar resposta
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
  },

  async delete(req, res) {
      const condominioId = req.params.id;
      try {
        let condominio = await CadastroCondominio.findByPk(condominioId);

        if (!condominio)
          return res.status(404).send({ error: "Condominio não encontrado" });
          await condominio.destroy();
  
        res.status(204).send();
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
  }
}
