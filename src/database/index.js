
const Sequelize = require("sequelize");
const config = require("../config/database");


//models

const Condominio = require("../models/Condomino")
const Apartamento = require("../models/Apartamento");
const Bloco = require("../models/Bloco");
const Admin = require("../models/Admin");
const Morador = require("../models/Morador");
const Visitante = require("../models/Visitante");
const Sindico = require("../models/Sindico");
const Porteiro = require("../models/Porteiro");


const connection = new Sequelize(config.url,config.config);


//inicializando os models
Admin.init(connection);
Porteiro.init(connection);
Sindico.init(connection);
Visitante.init(connection);
Condominio.init(connection);
Morador.init(connection);
Apartamento.init(connection);
Bloco.init(connection);


Admin.associate(connection.models);
Condominio.associate(connection.models);
Porteiro.associate(connection.models);
Sindico.associate(connection.models);
Visitante.associate(connection.models);
Morador.associate(connection.models);
Apartamento.associate(connection.models);
Bloco.associate(connection.models)

// for (let assoc of Object.keys(Visitante.associations)) {
//     for (let accessor of Object.keys(Visitante.associations[assoc].accessors)) {
//         console.log(Visitante.name + '.' + Visitante.associations[assoc].accessors[accessor] + '()');
//     }
// }

module.exports = connection;