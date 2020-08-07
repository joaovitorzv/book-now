import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  padding-bottom: 100px;

  h2 {
    font-size: 1.5em;
  }

  span {
    color: var(--counter);
    padding: 5px 10px;
    background-color: var(--secondary-white);
    font-size: 18px;
    font-weight: bold;
  }

  .checkout {
    position: fixed;
    bottom: 0;

    width: 95%;
    
    button {
      font-size: 18px;
      padding: 8%;
      margin-bottom: 10px;

      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
