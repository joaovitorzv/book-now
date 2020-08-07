import React from 'react';

import { Container } from './styles';

const ItemList: React.FC = () => {
  return (
    <Container>
      <div className="book-cover">

      </div>

      <div className="book-info">
        <h3>Harry porra in your mind</h3>
        <p><strong>Autor: </strong>JK Rolling</p>
        <h3 className="price">R$29,90</h3>
      </div>
    </Container>
  )
}

export default ItemList;