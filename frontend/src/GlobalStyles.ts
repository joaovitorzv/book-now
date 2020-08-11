import styled, { createGlobalStyle } from 'styled-components';

import { Link } from 'react-router-dom';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--primary);
    color: #000;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
  }

  input, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    color: #000;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: var(--dark-gray);
  }

  h4 {
    font-family: 'Ropa sans', sans-serif;
    color: var(--primary);
    font-size: 2em;
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #FFB800;
  }

  :root {
    --primary: #FFF;
    --secondary-white: #F8F8F8;
    --secondary: #00B047;
    --details-yellow: #FFB800;
    --gray: #3C3C3C;
    --dark-gray: #282828;
    --counter: #878787;
    --red: #C60000;
  }
`;

export const Anchor = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: var(--dark-gray);
  font-weight: 400;

  text-decoration: none;
  list-style: none;
`;

export const HighlightButton = styled.button`
  background: none;
  border: none;
  
  color: var(--red);
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;

  text-decoration: none;
  list-style: none;
`;

export const RadiusButton = styled(Link)`
  width: 240px;
  color: var(--gray);
  background-color: var(--primary);
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 10px;
  border: none;
  border-radius: 5px;

  cursor: pointer;
  text-decoration: none;


  div {
    width: 40px;
  }

  &:hover {
    svg {
      margin-left: 10px;
      transition-duration: 300ms;
    }
  }

  @media (max-width: 650px) {
    width: 100%;
  }

`;

export const BlackButton = styled.button`
  background-color: var(--dark-gray);
  color: white;

  padding: 15px;
  border: none;
  font-size: 11px;
`;

export const Input = styled.input`
  border: 2px solid #000;
  background-color: var(--secondary-white);
  
  padding: 10px;
  color: var(--secondary);
  font-size: 14px;
`;