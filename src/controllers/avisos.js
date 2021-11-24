const Avisos = require("../models/Aviso");
const Condominio = require("../models/Condomino");


module.exports = {

  async index(req, res) {

      try {
        const aviso = await Avisos.findAll({
          include: [
            {
              association: "Condominio",
              attributes: ["id", "name"],
            },
          ]
        });
        res.send(aviso);
        } catch (error) {
          console.log(error);
          res.status(500).send({ error: "Aviso não encontrado"});
        }
      },


  async store(req, res) {

      const{titulo, mensagem, link, status, data, condominio_id} = req.body;

      console.log(req.body);

      try {

        let condominio= await Condominio.findByPk(condominio_id)

        if(!condominio)
        return res.status(404).send({error:'Condomínio não encontrado'})

        let aviso = await Avisos.findOne({
          where:{
              titulo:titulo,
              mensagem:mensagem
          }
      })

      if(aviso){
          return res.status(400)
          .send({error: "Este Aviso já está cadastrado"})
      }

      
      aviso = await Avisos.create({
          titulo:titulo,
          mensagem:mensagem,
          link:link,
          status:status,
          data:data,
          condominio_id: condominio_id,
      })

      res.send({

          aviso:{
              avisoId: aviso.id,
              titulo:aviso.titulo,
              mensagem:aviso.mensagem,
              link:aviso.link,
              status:aviso.status,
              data:aviso.data,
          },

          condominio_id,
      });
      } catch (error) {
        console.log(error)
        res.status(500).send(error)
      }
  },

  async update(req, res) {

  const avisoId = req.params.id;

  const {titulo,mensagem,link,status,data} = req.body;

  try {
    let aviso = await Avisos.findByPk(avisoId);

    if (!aviso) res.status(404).send({ error: "Aviso não encontrado" });

    aviso.titulo = titulo;
    aviso.mensagem = mensagem;
    aviso.link = link;
    aviso.status = status;
    aviso.data = data;

    aviso.save();

    //retornar resposta
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
  },

  async delete(req, res) {
      const avisoId = req.params.id;
      try {
        let aviso = await Avisos.findByPk(avisoId);

        if (!aviso)
          return res.status(404).send({ error: "Aviso não encontrado" });
          await aviso.destroy();
  
        res.status(204).send();
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
  },
};