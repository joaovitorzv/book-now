import IFindMatchingBooks from '@modules/books/dtos/IFindMatchingBooks';
import Book from '@modules/books/infra/typeorm/entities/Book';

export default interface IBooksRepository {
  findAllBooks(): Promise<Book[]>
  findMatchingBooks(books_id: IFindMatchingBooks): Promise<Book[] | undefined>
}
