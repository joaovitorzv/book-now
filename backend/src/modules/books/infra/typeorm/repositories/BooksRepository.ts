import "reflect-metadata";
import { getRepository, Repository, Any } from 'typeorm'
import Book from '../../../../books/infra/typeorm/entities/Book';

import IBooksRepository from '../../../../books/repositories/IBooksRepository';

class BooksRepository implements IBooksRepository {
  private ormRepository: Repository<Book>;

  constructor() {
    this.ormRepository = getRepository(Book);
  }

  public async findAllBooks(): Promise<Book[]> {
    const books = await this.ormRepository.find();

    return books;
  }

  public async findMatchingBooks(books_id: string[]): Promise<Book[] | undefined> {
    const books = await this.ormRepository.find({
      where: {
        id: Any([books_id])
      }
    })

    return books;
  }
}

export default BooksRepository;