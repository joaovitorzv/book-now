import { container } from 'tsyringe';

import '../../modules/users/providers';

import IUsersRepository from '../../modules/users/repositories/IUsersRepository';
import UsersRepository from '../../modules/users/infra/typeorm/repositories/UsersRepository';

import IBooksRepository from '../../modules/books/repositories/IBooksRepository';
import BooksRepository from '../../modules/books/infra/typeorm/repositories/BooksRepository';

import IOrdersRepository from '../../modules/orders/repositories/IOrdersRepository';
import OrdersRepository from '../../modules/orders/infra/typeorm/repositories/OrdersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IBooksRepository>(
  'BooksRepository',
  BooksRepository,
);

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
);