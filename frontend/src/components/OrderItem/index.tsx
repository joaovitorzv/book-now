import React, { useState } from 'react';

import { Container, Order, ShowItems, OrderItems } from './styles';
import { BookCover } from '../../GlobalStyles';

const OrderItem: React.FC = () => {
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

  const [showItems, setShowItems] = useState(false);

  return (
    <Container>
      <Order>
        <div className="between-items">
          <h3>Pedido realizado</h3>
          <label>19/05/2020</label>
        </div>

        <ShowItems onClick={() => showItems ? setShowItems(false) : setShowItems(true)}>
          Ver items
        </ShowItems>
        <OrderItems isShown={showItems} >
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
        </OrderItems>

        <div className="customer-details">
          <label>Entregue para:</label>
          <p>João vitor veras</p>
          <label>email:</label>
          <p>resetgamer1@gmail.com</p>
        </div>

        <div className="between-items order-total">

          <label>Total Pago: </label>
          <p>R$ 27,78</p>
        </div>
      </Order>
    </Container>
  );
}

export default OrderItem;