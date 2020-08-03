import React from 'react';

import { Container, MenuButton } from './styles';

import Menu from '../Menu';

export const Header: React.FC = () => {

  return (
    <Container>
      <h1>BOOKnow</h1>
      <MenuButton>
        <Menu />
      </MenuButton>
    </Container>
  );
}
