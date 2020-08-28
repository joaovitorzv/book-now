import React, { useContext } from 'react';

import { Container } from './styles';
import { RadiusButton } from '../../GlobalStyles';

import Header from '../../components/Header';
import Item from '../../components/Item';
import Bag from '../../components/Bag';

import BagContextManager from '../../components/Bag/context/BagContextManager';
import BagContext from '../../components/Bag/context/BagContext';

import { KeyboardArrowRight } from '@styled-icons/material-sharp/KeyboardArrowRight'

const Home: React.FC = () => {
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
    },
    {
      id: 'e',
      title: "Harry potter and the sorcerers stone",
      author: "JK Rolling",
      price: 19.90,
      bookCoverUrl: 'https://images-na.ssl-images-amazon.com/images/I/61CxJAPauWL._AC_SL1010_.jpg',
      category: 'Atemporal • Drama • Divertido • Conteúdo relevante',
    },
    {
      id: 'f',
      title: "Harry potter and the sorcerers stone",
      author: "JK Rolling",
      price: 19.90,
      bookCoverUrl: 'https://images-na.ssl-images-amazon.com/images/I/61CxJAPauWL._AC_SL1010_.jpg',
      category: 'Atemporal • Drama • Divertido • Conteúdo relevante',
    },
    {
      id: 'g',
      title: "Harry potter and the sorcerers stone at the job",
      author: "JK Rolling",
      price: 19.90,
      bookCoverUrl: 'https://images-na.ssl-images-amazon.com/images/I/61CxJAPauWL._AC_SL1010_.jpg',
      category: 'Atemporal • Drama • Divertido • Conteúdo relevante',
    },
  ]
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
          <h4>OS MAIS AMADOS</h4>
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
    </>
  )
}

export default Home;