import React, { useState } from 'react';

import { Container } from './styles';

import { BlackButton } from '../../GlobalStyles';
import { BagCheck } from '@styled-icons/bootstrap/BagCheck'

import Book from '../../types/Book';
import { getTotalBagValue } from '../../utils/bagUtils';

const Checkout: React.FC<{
  books: Book[]
}> = ({ books }) => {
  const [totalBagValue] = useState(getTotalBagValue(books));
  const delivery = 14.75;
  const [totalOrder] = useState(totalBagValue + delivery);

  return (
    <Container>
      <div className="checkout-details">
        <div className="customer-details">
          <h3>Enviar para</h3>

          <label>nome:</label>
          <p>João vitor veras</p>
          <label>email:</label>
          <p>resetgamer1@gmail.com</p>
        </div>

        <div className="detail">
          <p>Subtotal</p>
          <span>{totalBagValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </div>

        <div className="detail">
          <p>Frete</p>
          <span>
            {delivery.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>

        <div className="detail total">
          <p>Total</p>
          <span>
            {totalOrder.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
      </div>
      <BlackButton>Finalizar pedido <BagCheck size={30} /></BlackButton>
    </Container>
  );
}

export default Checkout;