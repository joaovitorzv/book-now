import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 5%;

  h2 {
    color: var(--details-yellow);
    font-size: 1.4em;
  }

  a {
    text-decoration: underline;
  }
`;

export const Gif = styled.img`
  max-height: 60vh;
`;