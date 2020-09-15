import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import { BlackButton } from '../../GlobalStyles';
import { BagCheck } from '@styled-icons/bootstrap/BagCheck'

import BagContext from '../Bag/context/BagContext';
import { getTotalBagValue } from '../../utils/bagUtils';

import api from '../../apis/api';

const delivery = {
  defaultPrice: 14.75,
  discountAbove: 70,
}

const Checkout: React.FC = () => {
  const history = useHistory();
  const { books } = useContext(BagContext);

  const totalBagValue = getTotalBagValue(books);
  const totalDelivery = totalBagValue > delivery.discountAbove ? 0 : delivery.defaultPrice;
  const totalOrder = totalBagValue + totalDelivery;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckout = async () => {

    setIsSubmitting(true);
    let booksId: string[] = [];
    books.map(book => booksId.push(book.id));

    try {
      await api.post('/orders', {
        books_id: booksId,
      });

      history.push('/orders');
    } catch (error) {
      console.log(error);
    }
  }

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
            {totalDelivery.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>

        <div className="detail total">
          <p>Total</p>
          <span>
            {totalOrder.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
      </div>
      <BlackButton onClick={() => handleCheckout()}>
        {isSubmitting ? "Finalizando pedido..." : "Finalizar pedido"} <BagCheck size={30} />
      </BlackButton>
    </Container>
  );
}

export default Checkout;