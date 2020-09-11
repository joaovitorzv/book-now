import React from 'react';

import { Container, MenuButton } from './styles';
import { Anchor } from '../../GlobalStyles';

import MenuHamburger from '../MenuHamburger';

const Header: React.FC = () => {

  return (
    <Container>
      <Anchor to="/">
        <h1>BOOKnow</h1>
      </Anchor>
      <MenuButton>
        <MenuHamburger />
      </MenuButton>
    </Container>
  );
}

export default Header;
