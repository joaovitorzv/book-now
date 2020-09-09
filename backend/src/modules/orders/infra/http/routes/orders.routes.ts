import { Router, Request, Response } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';
import OrdersController from '../controllers/OrdersController';

import EnsureAuthentication from '@modules/users/infra/http/middlewares/EnsureAuthentication';

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

ordersRouter.get('/', (req: Request, res: Response) => {
  res.json('Working flilho')
})

export default ordersRouter; 