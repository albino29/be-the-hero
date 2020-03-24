const express = require('express');

const routes = express.Router();

const OngsController = require('./controllers/Ongs');
const IncidentsController = require('./controllers/Incidents');
const OngProfileController = require('./controllers/OngProfile');
const SessionController = require('./controllers/Session');

routes.post('/login', SessionController.store);

routes.post('/ongs', OngsController.store);
routes.get('/ongs', OngsController.list);

routes.post('/incident', IncidentsController.store);
routes.get('/incident', IncidentsController.list);
routes.delete('/incident/:id', IncidentsController.delete);

routes.get('/profile', OngProfileController.list);

module.exports = routes;
