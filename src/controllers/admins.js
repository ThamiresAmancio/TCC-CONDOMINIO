const CadastroAdmin = require("../models/Admin");
const bcrypt = require("bcryptjs")
const { generateToken } = require("../util");

module.exports = {

    async index(req, res) {
        try {
            console.log(req.body)
            const admin = await CadastroAdmin.findAll();
      
            res.send(admin);
          } catch (error) {
            console.log(error);
            res.status(500).send({ error: "Administrador não encontrado"});
          }
        },

        async find(req, res) {

        const adminId = req.params.id;

        try {
          let admin = await CadastroAdmin.findByPk(adminId, {
            attributes: ["id", "name", "cpf", "email"]
            
          });
    
          //se adminstrador não encontrado, retornar not found
          if (!admin)
            return res.status(404).send({ erro: "Administrador não encontrado" });
    
          res.send(admin);
        } catch (error) {
          console.log(error);
          res.status(500).send({ error });
        }

    },

    async store(req, res) {

        //recebendo os dados no body
        const{name,surname,cpf,birth,email,password} = req.body;

        let admin = await CadastroAdmin.findOne({
            where:{
                email:email,
                cpf:cpf
            }
        })

      
        if(admin){
            return res.status(400)
            .send({error: "Este Administrador já está cadastrado"})
        }

        const passwordHash = bcrypt.hashSync(password);

        admin= await CadastroAdmin.create({

            name:name,
            surname:surname,
            cpf:cpf,
            birth:birth,
            email:email,
            password:passwordHash,
        })


        // aqui vai ser gerado o token

       const token = generateToken({
        userId: admin.id,
        userName: admin.name,
        perfil: "admin"
      });
      
        res.send({

            admin:{
                adminId: admin.id,
                name:admin.name,
                surname:admin.surname,
                cpf:admin.cpf,
                birth:admin.birth,
                email:admin.email,
            },
            
            token,
            perfil: "admin"
        })
    },

    async update(req, res) {


    const adminId = req.params.id;

    //recuperar o dados do corpo
    const { name,surname,cpf,birth,email,password } = req.body;

    try {
      let admin = await CadastroAdmin.findByPk(adminId);

      if (!admin) res.status(404).send({ error: "Adminstrador não encontrado" });

      admin.name = name;
      admin.surname = surname;
      admin.cpf = cpf;
      admin.birth = birth;
      admin.email = email;
      admin.password = password;

      admin.save();

      //retornar resposta
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
        

    },

    async delete(req, res) {

        const adminId = req.params.id;

        try {
          let admin = await CadastroAdmin.findByPk(adminId);
    
          if (!admin)
            return res.status(404).send({ error: "Adminstrador não encontrado" });
    
          await admin.destroy();
    
          //devolver resposta de sucesso
          res.status(204).send();
        } catch (error) {
          console.log(error);
          res.status(500).send(error);
        }
    }
}