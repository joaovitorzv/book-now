import React, { useState } from 'react';

import { Container, Hamburger, MenuContent, Close } from './styled';
import { Anchor, HighlightButton } from '../../GlobalStyles';

const Menu: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const isAuth = true;

  return (
    <Container>
      <Hamburger onClick={() => setOpenMenu(true)} />

      <MenuContent isOpen={openMenu} >
        <div className="menu-header">
          <h3>João vitor</h3>
          <Close onClick={() => setOpenMenu(false)} />
        </div>

        <div className="menu-content">
          <ul>
            <Anchor to={isAuth ? "/account" : "/login"}>
              <li>{isAuth ? "Conta" : "Fazer login"}</li>
            </Anchor>
            {isAuth && (
              <Anchor to="/"><li>Pedidos</li></Anchor>
            )}
            <HighlightButton onClick={() => console.log('ckick')} logged={isAuth}>
              <li>{isAuth ? "Sair" : "Criar conta"}</li>
            </HighlightButton>
          </ul>
        </div>

      </MenuContent>
    </Container>
  );
}

export default Menu;