import { inject, injectable } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';

import Order from '../../orders/infra/typeorm/entities/Order';
import IOrdersRepository from '../../orders/repositories/IOrdersRepository';
import IUsersRepository from '../../users/repositories/IUsersRepository';
import IBooksRepository from '../../books/repositories/IBooksRepository';

enum delivery {
  defaultPrice = 14.75,
  discountAbove = 70
}

interface IRequest {
  customer_id: string;
  books_id: string[];
}

interface IGetSum {
  total: number;
  num: number;
}

@injectable()
class CreateOrderService {
  private ordersRepository: IOrdersRepository;

  private usersRepository: IUsersRepository;

  private booksRepository: IBooksRepository;

  constructor(
    @inject('OrdersRepository')
    ordersRepository: IOrdersRepository,

    @inject('UsersRepository')
    usersRepository: IUsersRepository,

    @inject('BooksRepository')
    booksRepository: IBooksRepository,
  ) {
    this.ordersRepository = ordersRepository;
    this.usersRepository = usersRepository;
    this.booksRepository = booksRepository;
  }

  public async execute({
    customer_id,
    books_id
  }: IRequest): Promise<Order> {
    let books: string[] = [];

    const booksOrdered = await this.booksRepository.findMatchingBooks(books_id)

    if (!booksOrdered) {
      throw new AppError('Books not available on stock')
    }

    booksOrdered.map(book => books.push(book.bookCoverUrl))

    // test if i will need use user saved on db
    const customer = await this.usersRepository.findById(customer_id);

    if (!customer) {
      throw new AppError('Customer not found')
    }

    const orderTotal = booksOrdered
      .map(book => book.price)
      .reduce((accumulator, currentValue) => accumulator + parseFloat(String(currentValue)), 0);

    console.log(orderTotal);

    const totalDelivery = orderTotal > delivery.discountAbove ? 0 : delivery.defaultPrice;

    const order = await this.ordersRepository.create({
      books_ordered: books,
      customer_id,
      delivery: totalDelivery,
      order_total: orderTotal
    });

    return order;
  }
}

export default CreateOrderService;