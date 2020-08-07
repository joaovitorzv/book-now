import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  flex-shrink: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--secondary-white);

  padding: 10px;

  h1 {
    color: var(--secondary);
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;


`;