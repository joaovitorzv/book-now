import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateOrderService from '@modules/orders/services/CreateOrderService';

class OrdersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { books_id } = request.body;
    const { id: customer_id } = request.user

    const createOrder = container.resolve(CreateOrderService);

    const order = await createOrder.execute({ customer_id, books_id });

    return response.status(200).json(classToClass(order));
  }
}

export default OrdersController;