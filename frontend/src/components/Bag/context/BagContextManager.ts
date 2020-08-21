import Book from '../../../types/Book';

export default interface BagContextManager {
  clearBag: Function;
  removeItem: (id?: string) => void;
  addItem: (book: Book) => void;
  hasInTheBag: (book: Book) => boolean;
  books: Book[];
}