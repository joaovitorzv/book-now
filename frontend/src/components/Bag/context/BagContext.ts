import React from 'react';
import Book from '../../../types/Book';
import BagContextManager from './BagContextManager';

const BagContext = React.createContext<BagContextManager>({
  removeItem: (id?: string) => console.log(id),
  addItem: (book: Book) => console.log(book),
  clearBag: () => null,
  hasInTheBag: () => false,
  books: [],
});

export default BagContext;