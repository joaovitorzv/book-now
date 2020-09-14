import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <p>Feito com <span role="img" aria-label="heart">❤️</span> por <a href="http://www.github.com/joaovitorzv" target="_blank" rel="noopener noreferrer">João vitor veras</a></p>
      <div>
        <p>Esse site faz parte de um  <a href="https://joaovitorzv.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Portfolio</a>, todas informações deste site são ficticias.</p>
      </div>
    </Container>
  );
}

export default Footer;