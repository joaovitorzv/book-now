import React from 'react';

import { Container, MenuButton } from './styles';
import { Anchor } from '../../GlobalStyles';

import Menu from '../Menu';

const Header: React.FC = () => {

  return (
    <Container>
      <Anchor to="/">
        <h1>BOOKnow</h1>
      </Anchor>
      <MenuButton>
        <Menu />
      </MenuButton>
    </Container>
  );
}

export default Header;
