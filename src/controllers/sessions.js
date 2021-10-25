const bcrypt = require("bcryptjs");
const { generateToken } = require("../util");
const CadastroAdmin = require("../models/Admin");

module.exports = {
  async store(req, res) {

    
    const { email, password } = req.body;

    try {
      const admin = await CadastroAdmin.findOne({
        where: {
          email,
        },
      });

      if (!admin || !bcrypt.compareSync(password, admin.password))
        return res.status(403).send({ error: "Usuário e/ou senha inválidos" });

      const token = generateToken({
        userId: admin.id,
        userName: admin.name,
        perfil: "admin"
        
      });

        res.status(201).send({
          admin: {
            adminId: admin.id,
            name: admin.name,
            surname:admin.surname,
            cpf:admin.cpf,
            birth:admin.birth,
            email:admin.email,
            
          },
          token,
        });

    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};