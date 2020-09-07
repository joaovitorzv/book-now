import { Request, Response, RequestHandler } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateBookService from '@modules/books/services/CreateBooksService';

class BooksController {
  public async index(request: Request, response: Response): Promise<Response> {
    const getBooks = container.resolve(CreateBookService);

    const user = await getBooks.execute();

    return response.status(200).json(classToClass(user));
  }
}

export default BooksController;