const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const routes = express.Router();

const OngsController = require('./controllers/Ongs');
const IncidentsController = require('./controllers/Incidents');
const OngProfileController = require('./controllers/OngProfile');
const SessionController = require('./controllers/Session');

routes.post('/login', SessionController.store);

routes.post(
  '/ongs',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string().length(2)
    })
  }),
  OngsController.store
);
routes.get('/ongs', OngsController.list);

routes.post('/incident', IncidentsController.store);
routes.get(
  '/incident',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  IncidentsController.list
);

routes.delete(
  '/incident/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentsController.delete
);

routes.get(
  '/profile',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  OngProfileController.list
);

module.exports = routes;
