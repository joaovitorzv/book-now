import React, { useState } from 'react';

import { Container, Hamburger, MenuContent } from './styled';
import { Menu } from '@styled-icons/boxicons-regular/Menu';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import { Anchor, HighlightButton } from '../../GlobalStyles';

import { useAuth } from '../../hooks/auth';

const MenuHamburger: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const { user, signOut } = useAuth();
  return (
    <>
      <Hamburger onClick={() => setOpenMenu(true)}>
        <Menu size={30} />
      </Hamburger>

      <Container>
        <MenuContent isOpen={openMenu} >
          <div className="menu-header">
            {user && (
              <h3>Olá, {user.name}</h3>
            )}
            <Hamburger onClick={() => setOpenMenu(false)}>
              <CloseOutline size={30} />
            </Hamburger>
          </div>

          <div className="menu-content">
            <ul>
              <Anchor to="/">
                <li>Inicio</li>
              </Anchor>

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
    </>
  );
}

export default MenuHamburger;