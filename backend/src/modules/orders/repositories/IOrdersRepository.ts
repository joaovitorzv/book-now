import Order from '@modules/orders/infra/typeorm/entities/Order';
import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import IFindAllOrdersFromCustomerDTO from '@modules/orders/dtos/IFindAllOrdersFromCustomerDTO';

export default interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<Order>;
  findAllOrders(customer: IFindAllOrdersFromCustomerDTO): Promise<Order[]>;
}