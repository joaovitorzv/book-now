import React, { useContext, useState, useEffect } from 'react';

import { Container } from './styles';
import { RadiusButton } from '../../GlobalStyles';

import Header from '../../components/Header';
import Item from '../../components/Item';
import Bag from '../../components/Bag';
import Footer from '../../components/Footer';

import BagContextManager from '../../components/Bag/context/BagContextManager';
import BagContext from '../../components/Bag/context/BagContext';
import { KeyboardArrowRight } from '@styled-icons/material-sharp/KeyboardArrowRight'

import Book from '../../types/Book';
import api from '../../apis/api';

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    api.get('/books')
      .then(response => {
        setBooks(response.data);
      });
  }, [])

  const { addItem, removeItem, hasInTheBag } = useContext<BagContextManager>(BagContext);

  return (
    <>
      <Header />
      <Container>
        <div className="delivery-bonus">
          <span>Compras acima de R$70,00 reais</span>
          <h2>Frete grátis</h2>
        </div>

        <div className="new-users">
          <h4>RECEBA SEUS LIVROS COM QUALIDADE</h4>

          <RadiusButton to="/login">
            Cria sua conta agora
            <div>
              <KeyboardArrowRight size={30} color="#000" />
            </div>
          </RadiusButton>
        </div>

        <div className="section-title">
          <h4>LIVROS DISPONÍVEIS</h4>
        </div>

        <div className="best-sellers">
          {books.map(book => (
            <Item
              key={book.id}
              book={book}
              onAddToBag={addItem}
              onRemove={removeItem}
              hasInTheBag={hasInTheBag(book)}
            />
          ))}
        </div>
        <Bag />
      </Container>

      <Footer />
    </>
  )
}

export default Home;