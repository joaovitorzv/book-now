import React from 'react';

import { Container, Gif } from './styles';
import { Anchor } from '../../GlobalStyles';

import Header from '../../components/Header';

const NotFound: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Gif src="https://64.media.tumblr.com/tumblr_lz2ufhclZj1r4mh0bo1_r1_400.gifv" alt="NotFound gif" />

        <Anchor to="/">Pagina não encontrada, Voltar para pagina inicial</Anchor>
      </Container>
    </>
  );
}

export default NotFound;