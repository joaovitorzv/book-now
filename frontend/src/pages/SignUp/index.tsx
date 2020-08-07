import React from 'react';

import { Container } from './styles';
import { Input, BlackButton, Anchor } from '../../GlobalStyles';

import Header from '../../components/Header';

import { KeyboardArrowRight } from '@styled-icons/material-sharp/KeyboardArrowRight'

const SignUp: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>Entre na sua conta</h2>

        <form>
          <Input placeholder="Nome completo" type="text" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Senha" type="password" />

          <div className="form-actions">
            <BlackButton>Criar <KeyboardArrowRight size={30} /></BlackButton>
            <Anchor to="/login">
              <span>Já tenho uma conta</span>
            </Anchor>
          </div>
        </form>
      </Container>
    </>
  );
}

export default SignUp;