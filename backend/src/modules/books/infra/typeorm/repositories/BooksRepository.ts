import { getRepository, Repository, Not } from 'typeorm'
import Book from '@modules/books/infra/typeorm/entities/Book';

import IBooksRepository from '@modules/books/repositories/IBooksRepository';

class BooksRepository implements IBooksRepository {
  private ormRepository: Repository<Book>;

  constructor() {
    this.ormRepository = getRepository(Book);
  }

  public async findAllBooks(): Promise<Book[]> {
    const books = await this.ormRepository.find();

    return books;
  }
}

export default BooksRepository;