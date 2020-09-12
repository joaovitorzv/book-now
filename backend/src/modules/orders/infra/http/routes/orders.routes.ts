import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';
import OrdersController from '../controllers/OrdersController';

import EnsureAuthentication from '../../../../users/infra/http/middlewares/EnsureAuthentication';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.use(EnsureAuthentication);

ordersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      books_id: Joi.array().required(),
    },
  }),
  ordersController.create,
)

ordersRouter.get(
  '/',
  celebrate({
    [Segments.BODY]: {
      customer_id: Joi.string().required(),
    },
  }),
  ordersController.index,
)

export default ordersRouter; 