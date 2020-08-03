import React from 'react';

import { Container } from './styles';

const Item: React.FC = () => {
  return (
    <Container>
      <div className="book-cover">

      </div>

      <div className="book-info">
        <h2>R$19,90</h2>
      </div>
    </Container>
  );
}

export default Item;