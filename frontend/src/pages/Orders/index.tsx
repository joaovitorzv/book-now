import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import OrderItem from '../../components/OrderItem';

import { Container, OrderContainer } from './styles';

import api from '../../apis/api';


const Orders: React.FC = () => {
  const [orders, setOrders] = useState([])

  const token = localStorage.getItem('@booknow:token');

  useEffect(() => {
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
            orders.map(order => (
              <OrderItem
                order={order}
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