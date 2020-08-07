import React from 'react';

import { Container } from './styles';
import { Input, BlackButton, Anchor } from '../../GlobalStyles';

import Header from '../../components/Header';

import { KeyboardArrowRight } from '@styled-icons/material-sharp/KeyboardArrowRight'

const Login: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>Entre na sua conta</h2>

        <form>

          <Input placeholder="Email" type="email" />
          <Input placeholder="Senha" type="password" />

          <div className="form-actions">
            <BlackButton>Entrar <KeyboardArrowRight size={30} /></BlackButton>
            <Anchor to="/signup">
              <span>Não tenho uma conta</span>
            </Anchor>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Login;