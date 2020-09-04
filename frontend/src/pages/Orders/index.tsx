import React from 'react';


import Header from '../../components/Header';
import OrderItem from '../../components/OrderItem';

import { Container, OrderContainer } from './styles';

const Orders: React.FC = () => {
  const books = [
    {
      id: 'a',
      title: "Harry potter and the sorcerers stone",
      author: "JK Rolling",
      price: 19.90,
      bookCoverUrl: 'https://images-na.ssl-images-amazon.com/images/I/61CxJAPauWL._AC_SL1010_.jpg',
      category: 'Atemporal • Drama • Divertido • Conteúdo relevante',
    },
    {
      id: 'b',
      title: "Harry potter and the sorcerers stone",
      author: "JK Rolling",
      price: 19.90,
      bookCoverUrl: 'https://images-na.ssl-images-amazon.com/images/I/61CxJAPauWL._AC_SL1010_.jpg',
      category: 'Atemporal • Drama • Divertido • Conteúdo relevante',
    },
    {
      id: 'c',
      title: "Harry potter and the sorcerers stone",
      author: "JK Rolling",
      price: 19.90,
      bookCoverUrl: 'https://images-na.ssl-images-amazon.com/images/I/61CxJAPauWL._AC_SL1010_.jpg',
      category: 'Atemporal • Drama • Divertido • Conteúdo relevante',
    },
    {
      id: 'd',
      title: "Harry potter and the sorcerers stone",
      author: "JK Rolling",
      price: 19.90,
      bookCoverUrl: 'https://images-na.ssl-images-amazon.com/images/I/61CxJAPauWL._AC_SL1010_.jpg',
      category: 'Atemporal • Drama • Divertido • Conteúdo relevante',
    }
  ]

  return (
    <>
      <Header />

      <Container>
        <h1>Seus pedidos</h1>

        <OrderContainer>
          <OrderItem />

          <OrderItem />

          <OrderItem />
        </OrderContainer>
      </Container>
    </>
  );
}

export default Orders;