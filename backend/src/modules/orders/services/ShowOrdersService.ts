import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Order from '@modules/orders/infra/typeorm/entities/Order';
import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface IRequest {
  customer_id: string;
}

@injectable()
class ShowOrdersService {
  private ordersRepository: IOrdersRepository;

  private usersRepository: IUsersRepository;

  constructor(
    @inject('OrdersRepository')
    ordersRepository: IOrdersRepository,

    @inject('UsersRepository')
    usersRepository: IUsersRepository,
  ) {
    this.ordersRepository = ordersRepository;
    this.usersRepository = usersRepository;
  }

  public async execute({ customer_id }: IRequest): Promise<Order[]> {
    const userExists = await this.usersRepository.findById(customer_id);

    if (!userExists) {
      throw new AppError('User not found');
    }

    const orders = await this.ordersRepository.findAllOrders(customer_id);

    return orders;
  }
}

export default ShowOrdersService;