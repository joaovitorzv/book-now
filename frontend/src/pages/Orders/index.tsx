import React from 'react';

import { Container } from './styles';
import { BlackButton } from '../../GlobalStyles';

import Header from '../../components/Header';
import ItemList from '../../components/ItemList';

import { BagCheck } from '@styled-icons/bootstrap/BagCheck'

const Orders: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>Seus items <span>4</span></h2>

        <ItemList />
        <ItemList />

        <div className="checkout">
          <BlackButton>Finalizar pedido <BagCheck size={30} /></BlackButton>
        </div>
      </Container>
    </>
  );
}

export default Orders;