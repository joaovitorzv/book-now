import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateOrderService from '../../../../orders/services/CreateOrderService';
import ShowOrdersService from '../../../../orders/services/ShowOrdersService';
import ShowUserService from '../../../../users/services/ShowUserService';

class OrdersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { books_id } = request.body;
    const { id: customer_id } = request.user

    const createOrder = container.resolve(CreateOrderService);

    const order = await createOrder.execute({ customer_id, books_id });

    return response.status(200).json(classToClass(order));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { id: customer_id } = request.user;

    const getOrders = container.resolve(ShowOrdersService);
    const getUser = container.resolve(ShowUserService);

    const orders = await getOrders.execute({ customer_id });

    return response.status(200).json(classToClass(orders));
  }
}

export default OrdersController;