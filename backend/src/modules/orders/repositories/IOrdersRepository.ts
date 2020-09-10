import Order from '@modules/orders/infra/typeorm/entities/Order';
import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';

export default interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<Order>;
  findAllOrders(customer: string): Promise<Order[]>;
}