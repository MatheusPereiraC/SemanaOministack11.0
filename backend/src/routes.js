const express = require('express');

const OngController = require('./Controllers/OngController');
const incidentController = require('./Controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', incidentController.index)
routes.post('/incidents', incidentController.create)
routes.delete('/incidents/:id', incidentController.delete)

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;


//rota / recursos

//metodos HTTP 
//get: busca de retornos de informações do back-end
//post: criar informação no back-end
//put: alteração de informações back-end
//delete: deletar uma informação no back-end

//tipos de paramenters:

//Query Params: parametros nomeados enviados na rota após "?" (filtros, paginações)
//Rout Params: Parametros utilizados para identificar recursos
//Request Body: corpo da requisição, utilizado para criar ou alterar recursos

//SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
//NoSQl: MongoDB, CouchDB, etc

//driver: select * from Users
//Query Builder: table('users').select('*').where()




