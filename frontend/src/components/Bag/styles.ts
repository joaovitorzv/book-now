import styled from 'styled-components';

export const BagSlide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;

  width: 100vw;

  background-color: var(--secondary);
  color: var(--primary);

  padding: 10px;

  p {
    font-size: .8rem;
  }

  button {
    color: var(--primary);
    font-size: .9rem;
    
    background-color: transparent;
    border: none;
  }

  .showbag {
    text-decoration: underline;
  }
`;
