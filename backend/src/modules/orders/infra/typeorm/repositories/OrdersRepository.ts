import { getRepository, Repository } from 'typeorm';
import Order from '../../../../orders/infra/typeorm/entities/Order';

import IOrdersRepository from '../../../../orders/repositories/IOrdersRepository';
import ICreateOrderDTO from '../../../../orders/dtos/ICreateOrderDTO';

class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async create({
    customer_id,
    books_ordered,
    order_total,
    delivery,
  }: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create({
      customer_id,
      books_ordered,
      order_total,
      delivery
    });

    await this.ormRepository.save(order);

    return order;
  }

  public async findAllOrders(customer_id: string): Promise<Order[]> {
    const findOrders = await this.ormRepository.find({
      where: {
        customer_id
      }
    });

    return findOrders;
  }
}

export default OrdersRepository;