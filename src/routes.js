const express = require("express");
const routes = express.Router();


const adminsController = require("./controllers/admins");
const porteiroController = require("./controllers/porteiros")
const blocoController = require("./controllers/blocos")
const sindicoController = require("./controllers/sindicos");
const cadastradoCondominioCoontroller = require("./controllers/condominios");
const cadastroMoradorController = require("./controllers/moradores");
const apartamentoController = require("./controllers/apartamentos");
const authMiddleware = require("./middlewares/authorization");
const uploadSingleImage = require("./middlewares/uploadSingleImage");
const visitanteSindicoControler = require("./controllers/visitantes");
const visitanteMoradorControler = require("./controllers/visitanteMorador");
const avisoController = require("./controllers/avisos");
const uploadImageFirebase = require("./services/firebase");

//sessions

const sessionController = require("./controllers/sessions")
const sessionControllerPorteiros = require("./controllers/sessionPorteiros");
const sessionControllerSindicos = require("./controllers/sessionSindico");
const sessionControllerMoradores = require("./controllers/sessionsMoradores");



//rotas públicas

routes.post("/sessions", sessionController.store);
routes.post("/sessionsPorteiros", sessionControllerPorteiros.store);
routes.post("/sessionsSindicos", sessionControllerSindicos.store);
routes.post("/sessionsMoradores",sessionControllerMoradores.store);


//rotas de cadastro admin
routes.get("/admins", adminsController.index);
routes.get("/admins/:id", adminsController.find);
routes.post("/admins", adminsController.store);
routes.put("/admins/:id", adminsController.update);
routes.delete("/admins/:id", adminsController.delete);



//rotas de cadastro porteiros
routes.get("/porteiros", porteiroController.index);
routes.get("/porteiros/:id", porteiroController.find);
routes.post("/porteiros/", porteiroController.store);
routes.put("/porteiros/:id", porteiroController.update);
routes.delete("/porteiros/:id", porteiroController.delete);


//rotas de cadastro síndico
routes.get("/sindicos", sindicoController.index);
routes.get("/sindicos/:id", sindicoController.find);
routes.post("/sindicos", sindicoController.store);
routes.put("/sindicos/:id", sindicoController.update);
routes.delete("/sindicos/:id", sindicoController.delete);

//rotas de cadastro visitantes
routes.get("/visitantes/sindico", visitanteSindicoControler.index);
routes.get("/visitantes/sindico/:id", visitanteSindicoControler.find);
routes.post("/visitantes/sindico/:id", uploadSingleImage ,uploadImageFirebase, visitanteSindicoControler.store);
routes.put("/visitantes/sindico/:id", visitanteSindicoControler.update);
routes.delete("/visitantes/sindico/:id", visitanteSindicoControler.delete);

routes.get("/visitantes/morador", visitanteMoradorControler.index);
routes.get("/visitantes/morador/:id", visitanteMoradorControler.find);
routes.post("/visitantes/morador/:id", uploadSingleImage ,uploadImageFirebase, visitanteMoradorControler.store);
routes.put("/visitantes/morador/:id", visitanteMoradorControler.update);
routes.delete("/visitantes/morador/:id", visitanteMoradorControler.delete);

//rotas públicas condominio
routes.post("/condominios/:id", cadastradoCondominioCoontroller.store);

routes.get("/condominios/admin/:id", cadastradoCondominioCoontroller.index);
routes.get("/condominios/:id", cadastradoCondominioCoontroller.find);
routes.put("/condominios/:id", cadastradoCondominioCoontroller.update);
routes.delete("/condominios/:id", cadastradoCondominioCoontroller.delete);


//rotas moradores
routes.post("/moradores", cadastroMoradorController.store);
routes.get("/moradores", cadastroMoradorController.index);
routes.get("/moradores/:id", cadastroMoradorController.find);
routes.put("/moradores/:id", cadastroMoradorController.update);
routes.delete("/moradores/:id", cadastroMoradorController.delete);

//apartamentos
routes.post("/apartamentos", apartamentoController.store );
routes.get("/apartamentos", apartamentoController.index);
routes.get("/apartamentos/:id", apartamentoController.find);
routes.put("/apartamentos/:id", apartamentoController.update);
routes.delete("/apartamentos/:id", apartamentoController.delete);

//rotas bloco
routes.post("/blocos", blocoController.store );
routes.get("/blocos", blocoController.index);
routes.get("/blocos/:id", blocoController.find);
routes.put("/blocos/:id", blocoController.update);
routes.delete("/blocos/:id", blocoController.delete);


routes.post("/avisos", avisoController.store);
routes.get("/avisos", avisoController.index);
routes.put("/avisos/:id", avisoController.update);
routes.delete("/avisos/:id", avisoController.delete);

routes.use(authMiddleware)


module.exports = routes;