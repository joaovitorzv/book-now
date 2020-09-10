import React from 'react';

import { Container } from './styles';
import { BookCover } from '../../GlobalStyles';

import Book from '../../types/Book';

const ItemList: React.FC<{
  book: Book;
  onRemove?: Function;
}> = ({ book, onRemove }) => {
  return (
    <Container>
      <BookCover bookCoverUrl={book.bookCoverUrl} />

      <div className="book-info">
        <h3>{book.title}</h3>
        <p><strong>Autor: </strong>{book.author}</p>
        <h3 className="price">
          {book.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', })}
        </h3>

        {onRemove && <button className="underline-btn" onClick={() => onRemove(book.id)}>remover</button>}
      </div>
    </Container>
  )
}

export default ItemList;