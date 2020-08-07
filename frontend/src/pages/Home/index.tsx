import React from 'react';

import { Container } from './styles';
import { RadiusButton } from '../../GlobalStyles';

import Header from '../../components/Header';
import Item from '../../components/Item';
import Bag from '../../components/Bag';

import { KeyboardArrowRight } from '@styled-icons/material-sharp/KeyboardArrowRight'

const Home: React.FC = () => {
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

            <KeyboardArrowRight size={30} color="#000" />
          </RadiusButton>
        </div>

        <div className="best-sellers">
          <h4>OS MAIS AMADOS</h4>

          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>


        <Bag />
      </Container>
    </>
  )
}

export default Home;