import React, { useContext } from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import ItemList from '../../components/ItemList';
import Checkout from '../../components/Checkout';

import BagContext from '../../components/Bag/context/BagContext';

const Order: React.FC = () => {
  const { books, removeItem } = useContext(BagContext);
  return (
    <>
      <Header />
      <Container>
        {books.length > 0
          ? (
            <>
              <div className="items-list">
                <h2>Seus items <span>{books.length}</span></h2>

                <div className="items-container">
                  {books.map(book => (
                    <ItemList book={book} onRemove={removeItem} />
                  ))}
                </div>
              </div>
              <Checkout books={books} />
            </>)
          : (
            <h2>Voce não tem items na sua sacola :(</h2>
          )}
      </Container>
    </>
  );
}

export default Order;