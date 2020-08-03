import styled, { createGlobalStyle } from 'styled-components';

import { Link } from 'react-router-dom';

type Props = {
  logged?: boolean;
}

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
  
  color: ${(props: Props) => (props.logged ? 'var(--red)' : 'var(--secondary)')};
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;

  text-decoration: none;
  list-style: none;
`;

export const RadiusButton = styled.button`
  width: 150px;
  color: var(--gray);
  background-color: var(--primary);
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 10px;
  border: none;
  border-radius: 5px;

  cursor: pointer;

  svg {
    margin-right: 10px;
  }

  &:hover {
    svg {
      margin-right: 0;
      transition-duration: 300ms;
    }
  }

  @media (max-width: 350px) {
    width: 100%;
  }
`;