
const Sequelize = require("sequelize");
const config = require("../config/database");


//models

const Condominio = require("../models/Condomino")
const Apartamento = require("../models/Apartamento");
const Bloco = require("../models/Bloco");
const Admin = require("../models/Admin");
const Morador = require("../models/Morador");
const VisitanteMorador = require("../models/VisitanteMorador");
const visitantes = require("../models/VisitanteSindicos");
const Sindico = require("../models/Sindico");
const Porteiro = require("../models/Porteiro");
const Aviso = require("../models/Aviso");
const Agendamento = require("../models/Agendamento");


const connection = new Sequelize(config.url,config.config);


//inicializando os models
Admin.init(connection);
Porteiro.init(connection);
Sindico.init(connection);
VisitanteMorador.init(connection);
Condominio.init(connection);
Morador.init(connection);
Apartamento.init(connection);
Bloco.init(connection);
visitantes.init(connection)
Aviso.init(connection);
Agendamento.init(connection)

Admin.associate(connection.models);
Condominio.associate(connection.models);
Porteiro.associate(connection.models);
Sindico.associate(connection.models);
VisitanteMorador.associate(connection.models);
visitantes.associate(connection.models)
Morador.associate(connection.models);
Apartamento.associate(connection.models);
Bloco.associate(connection.models);
Aviso.associate(connection.models);
Agendamento.associate(connection.models);
// for (let assoc of Object.keys(visitantes.associations)) {
//     for (let accessor of Object.keys(visitantes.associations[assoc].accessors)) {
//         console.log(visitantes.name + '.' + visitantes.associations[assoc].accessors[accessor] + '()');
//     }
// }

module.exports = connection;