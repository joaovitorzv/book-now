import Book from '../types/Book';
import TYPES from './types';
import { clearSelect, removeSelect, addSelect } from './selectors/bagSelector';

interface BagAction {
  type: TYPES,
  id?: string,
  book?: Book;
}

interface BagState {
  books: Book[];
}

export default function BagReducer(state: BagState, action: BagAction): BagState {
  switch (action.type) {
    case TYPES.BAG_CLEAR:
      return {
        books: clearSelect()
      };
    case TYPES.BAG_REMOVE:
      return {
        books: removeSelect(state.books, action.id),
      };
    case TYPES.BAG_ADD:
      return {
        books: addSelect(state.books, action.book),
      };
    default:
      return state;
  }
}