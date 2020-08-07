import React from 'react';

import { Container } from './styles';

import { BlackButton } from '../../GlobalStyles';

import { BagPlus } from '@styled-icons/bootstrap/BagPlus';

const Item: React.FC = () => {
  return (
    <Container>
      <div className="book-cover">

      </div>

      <div className="book-info">
        <div className="price-container">
          <h3>R$19,90</h3>
          <span>+ Frete R$ 14,75</span>
        </div>

        <div className="book-description">
          <h3>Harry potter and the sorcerers stone</h3>
          <span><strong>Autor:</strong>JK Rolling</span>

          <div className="book-tags">
            <p>Atemporal • Drama • Divertido • Conteúdo relevante</p>
          </div>

          <BlackButton>
            Adicionar a sacola
            <BagPlus size={20} />
          </BlackButton>
        </div>
      </div>
    </Container>
  );
}

export default Item;