import React, { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import { Container, Hamburger, MenuContent, Close } from './styled';
import { Anchor, HighlightButton } from '../../GlobalStyles';

const Menu: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const { user, signOut } = useAuth();

  return (
    <Container>
      <Hamburger onClick={() => setOpenMenu(true)} />

      <MenuContent isOpen={openMenu} >
        <div className="menu-header">
          {user && (
            <h3>Olá, {user.name}</h3>
          )}
          <Close onClick={() => setOpenMenu(false)} />
        </div>

        <div className="menu-content">
          <ul>
            {!user && (
              <Anchor to="/login">
                <li>Fazer login</li>
              </Anchor>
            )}

            {user && (
              <Anchor onClick={() => setOpenMenu(false)} to="/orders"><li>Pedidos</li></Anchor>
            )}

            {user ? (
              <HighlightButton onClick={() => signOut()}>
                Sair
              </HighlightButton>
            ) : (
                <Anchor className="signup-link" to="/signup">Criar conta</Anchor>
              )}
          </ul>
        </div>

      </MenuContent>
    </Container >
  );
}

export default Menu;