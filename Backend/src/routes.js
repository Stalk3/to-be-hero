const express = require("express");


const routes = express.Router();
const crypto = require('crypto');
const connection = require('./database/connection');
const { response } = require("express");

const Ongcontroller = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfilleController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


routes.get('/ongs', Ongcontroller.index);
routes.post('/ongs', Ongcontroller.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfilleController.index);

routes.post('/session', SessionController.create);




module.exports = routes;