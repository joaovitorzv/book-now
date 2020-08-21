import React, { useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './hooks';
import Routes from './routes';

import BagContext from './components/Bag/context/BagContext';
import BagReducer from './reducers/bagReducer';
import BagStorage from './service/BagStorage';
import TYPES from './reducers/types';
import Book from './types/Book';

import GlobalStyles from './GlobalStyles';

const initialValues = {
  books: BagStorage.getBooksBag(),
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(BagReducer, initialValues);
  function clearBag() {
    dispatch({ type: TYPES.BAG_CLEAR });
  }
  function removeItem(id: string = '0'): void {
    dispatch({ type: TYPES.BAG_REMOVE, id });
  }
  function addItem(book: Book): void {
    dispatch({ type: TYPES.BAG_ADD, book });
  }

  function hasInTheBag(book: Book): boolean {
    return state.books.filter(b => b.id === book.id).length > 0;
  }

  return (
    <Router>
      <AppProvider>
        <BagContext.Provider
          value={{
            clearBag,
            books: state.books,
            removeItem,
            addItem,
            hasInTheBag
          }}
        >
          <Routes />
        </BagContext.Provider>
      </AppProvider>

      <GlobalStyles />
    </Router>
  )
}

export default App;
