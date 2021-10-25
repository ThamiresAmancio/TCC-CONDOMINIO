const CadastroPorteiro = require("../models/Porteiro");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../util");

module.exports = {

    async store(req, res) {
        const { email, password } = req.body;
    
        try {
          const porteiro = await CadastroPorteiro.findOne({
            where: {
              email,
            },
          });
    
          if (!porteiro || !bcrypt.compareSync(password, porteiro.password))
            return res.status(403).send({ error: "Usuário e/ou senha inválidos" });
    
           const token = generateToken({
              userId: porteiro.id,
              userName: porteiro.name,
              perfil: "porteiros",
            });
        
    
          setTimeout(() => {
            res.status(201).send({
              porteiro: {
                porteiroId: porteiro.id,
                name: porteiro.name,
                telephone:porteiro.telephone,
                email:porteiro.email,
              },
              token,
            });
          }, 3000);
        } catch (error) {
          console.log(error);
          res.status(500).send(error);
        }
      },
}