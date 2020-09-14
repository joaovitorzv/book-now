import { Request, Response, RequestHandler } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateBookService from '../../../../books/services/CreateBooksService';

class BooksController {
  public async index(request: Request, response: Response): Promise<Response> {

    try {
      const getBooks = container.resolve(CreateBookService);
    } catch (error) {
      console.log('Primeiro catch');

      console.log(error);
    }

    const getBooks = container.resolve(CreateBookService);

    try {
      const user = await getBooks.execute();
    } catch (error) {
      console.log('Segundo catch');
      console.log(error);
    }

    const user = await getBooks.execute();

    return response.status(200).json(classToClass(user));
  }
}

export default BooksController;