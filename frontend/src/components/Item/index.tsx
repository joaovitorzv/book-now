import React from 'react';

import { Container } from './styles';
import { BlackButton, BookCover } from '../../GlobalStyles';

import { BagPlus } from '@styled-icons/bootstrap/BagPlus';
import { RemoveCircle } from '@styled-icons/ionicons-outline/RemoveCircle';

import { convertToLocaleStrig } from '../../utils/bagUtils';

import Book from '../../types/Book';

const Item: React.FC<{
  book: Book,
  onAddToBag: Function;
  onRemove: Function;
  hasInTheBag: boolean;
}> = ({ book, onAddToBag, onRemove, hasInTheBag }) => {
  return (
    <Container>
      <BookCover bookCoverUrl={book.bookCoverUrl}></BookCover>

      <div className="book-info">
        <div className="price-container">
          <h3>{convertToLocaleStrig(String(book.price))}</h3>
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