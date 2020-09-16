import React, { useState } from 'react';

import { Container, Order, ShowItems, OrderItems } from './styles';
import { BookCover } from '../../GlobalStyles';

import { convertToLocaleStrig, formatDate } from '../../utils/bagUtils';
import IOrder from '../../types/IOrder';

const OrderItem: React.FC<{
  order: IOrder
}> = ({ order }) => {
  const [showItems, setShowItems] = useState(false);

  const orderSum = parseFloat(order.order_total) + parseFloat(order.delivery);

  return (
    <Container>
      <Order>
        <div className="between-items">
          <h3>Pedido realizado</h3>
          <label>{formatDate(order.created_at)}</label>
        </div>

        <ShowItems onClick={() => showItems ? setShowItems(false) : setShowItems(true)}>
          Ver items
        </ShowItems>
        <OrderItems isShown={showItems} >
          {order.books_ordered.map(bookCoverUrl => (
            <BookCover key={bookCoverUrl} bookCoverUrl={bookCoverUrl} />
          ))}
        </OrderItems>

        <div className="customer-details">
          <label>Entregue para:</label>
          <p>{order.customer.name}</p>
          <label>email:</label>
          <p>{order.customer.email}</p>
          <label>Frete:</label>
          <p>{order.delivery === '0' ? 'Gratis' : convertToLocaleStrig(order.delivery)}</p>
        </div>

        <div className="between-items order-total">
          <label>Total Pago: </label>
          <p>{orderSum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
      </Order>
    </Container>
  );
}

export default OrderItem;