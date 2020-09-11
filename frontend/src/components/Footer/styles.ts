import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 100px;
  background-color: var(--dark-gray);

  position: static;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;

  a {
    font-weight: bold;
    color: white;
  }
`;
