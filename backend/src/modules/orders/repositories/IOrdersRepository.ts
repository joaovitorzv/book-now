import Order from '../../orders/infra/typeorm/entities/Order';
import ICreateOrderDTO from '../../orders/dtos/ICreateOrderDTO';

export default interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<Order>;
  findAllOrders(customer: string): Promise<Order[]>;
}