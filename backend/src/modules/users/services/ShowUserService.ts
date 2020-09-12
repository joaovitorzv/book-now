import { inject, injectable } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';

import User from '../../users/infra/typeorm/entities/User';
import IUsersRepository from '../../users/repositories/IUsersRepository';


interface IRequest {
  customer_id: string;
}

@injectable()
class ShowUserService {
  private usersRepository: IUsersRepository;

  constructor(
    @inject('UsersRepository')
    usersRepository: IUsersRepository,
  ) {
    this.usersRepository = usersRepository;
  }

  public async execute({ customer_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(customer_id);

    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }
}

export default ShowUserService;