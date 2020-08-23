import React from 'react';

import { Container } from './styles';
import { BlackButton } from '../../GlobalStyles';

import { BagPlus } from '@styled-icons/bootstrap/BagPlus';
import { RemoveCircle } from '@styled-icons/ionicons-outline/RemoveCircle';

import Book from '../../types/Book';

const Item: React.FC<{
  book: Book,
  onAddToBag: Function;
  onRemove: Function;
  hasInTheBag: boolean;
}> = ({ book, onAddToBag, onRemove, hasInTheBag }) => {
  return (
    <Container>
      <div className="book-cover"></div>

      <div className="book-info">
        <div className="price-container">
          <h3>{book.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', })}</h3>
          <span>
            + Envio
          </span>
        </div>

        <div className="book-description">
          <h3>{book.title}</h3>
          <span><strong>Autor:</strong>{book.author}</span>

          <div className="book-tags">
            <p>{book.category}</p>
          </div>
          {hasInTheBag
            ? (
              <BlackButton onClick={() => onRemove(book.id)} invertedAction>
                Remover da sacola
                <RemoveCircle size={20} />
              </BlackButton>
            )
            : (
              <BlackButton onClick={() => onAddToBag(book)}>
                Adicionar a sacola
                <BagPlus size={20} />
              </BlackButton>
            )
          }

        </div>
      </div>
    </Container>
  );
}

export default Item;