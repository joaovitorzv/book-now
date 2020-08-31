import React, { useContext } from 'react';

import { Container } from './styles';

import { BlackButton } from '../../GlobalStyles';
import { BagCheck } from '@styled-icons/bootstrap/BagCheck'

import BagContext from '../Bag/context/BagContext';
import { getTotalBagValue } from '../../utils/bagUtils';


const delivery = {
  defaultPrice: 14.75,
  discountAbove: 70,
}

const Checkout: React.FC = () => {
  const { books } = useContext(BagContext);

  const totalBagValue = getTotalBagValue(books);
  const totalDelivery = totalBagValue > delivery.discountAbove ? 0 : delivery.defaultPrice;
  const totalOrder = totalBagValue + totalDelivery;

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
      <BlackButton>Finalizar pedido <BagCheck size={30} /></BlackButton>
    </Container>
  );
}

export default Checkout;