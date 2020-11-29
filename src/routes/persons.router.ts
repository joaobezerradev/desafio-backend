import { Router } from 'express';

import PersonsController from '@controllers/PersonsController';
import ensureAuthenticated from '@middlewares/ensureAuthenticated';
import { celebrate, Joi, Segments } from 'celebrate';

const personRouter = Router();

const personsController = new PersonsController();

personRouter.use(ensureAuthenticated);

personRouter.get('/', personsController.index);

personRouter.get('/:id',celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
}), personsController.show);


personRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
      gender: Joi.string(),
      birth_date: Joi.string().required(),
      nationality: Joi.string(),
      naturalness: Joi.string(),
      cpf: Joi.string().required(),
    },
  }),
  personsController.create,
);

personRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
      gender: Joi.string(),
      birth_date: Joi.string().required(),
      nationality: Joi.string(),
      naturalness: Joi.string(),
      cpf: Joi.string().required(),
    },
  }),
  personsController.update,
);
personRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  personsController.delete,
);

export default personRouter;
