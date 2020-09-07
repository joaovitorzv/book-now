import IBooksRepository from '@modules/books/repositories/IBooksRepository';

import Book from '@modules/books/infra/typeorm/entities/Book';
import { injectable, inject } from 'tsyringe';

@injectable()
class CreateBookService {
  private booksRepository: IBooksRepository;

  constructor(
    @inject('BooksRepository')
    booksRepository: IBooksRepository
  ) {
    this.booksRepository = booksRepository
  }

  public async execute(): Promise<Book[]> {
    const books = await this.booksRepository.findAllBooks();

    return books;
  }

}

export default CreateBookService;