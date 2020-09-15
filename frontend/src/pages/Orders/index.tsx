import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import OrderItem from '../../components/OrderItem';
import Order from '../../types/IOrder';

import { Container, OrderContainer } from './styles';

import api from '../../apis/api';


const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([])

  const token = localStorage.getItem('@booknow:token');

  useEffect(() => {
    console.log(api.defaults.headers.authorization);

    try {
      api.get('/orders')
        .then(response => {
          setOrders(response.data);
        })
    } catch (error) {
      console.log(error);
    }
  }, [token])

  return (
    <>
      <Header />
      <Container>
        <h1>Seus pedidos</h1>

        <OrderContainer>
          {orders.length > 0 ?
            orders.map((order: Order) => (
              <OrderItem
                order={order}
                key={order.id}
              />
            ))
            : <p>Você ainda não tem pedidos</p>
          }
        </OrderContainer>
      </Container>
    </>
  );
}

export default Orders;