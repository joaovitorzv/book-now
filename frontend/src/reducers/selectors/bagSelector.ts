import Book from '../../types/Book';
import BagStorage from '../../service/BagStorage';

export function clearSelect(): Book[] {
  BagStorage.clearBag();
  return [];
}

export function removeSelect(books: Book[], id = ''): Book[] {
  BagStorage.removeBookOfBag(id);
  return books.filter(book => book.id !== id);
}

export function addSelect(books: Book[], addedBook?: Book): Book[] {
  if (addedBook && !books.find(book => book.id === addedBook.id)) {
    BagStorage.addBookToBag(addedBook);
    console.log('caiu no conto')
    return [...books, addedBook];
  }
  return books;
}