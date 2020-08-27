import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 98%;
  
  button {
    font-size: 18px;
    padding: 8%;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      background-color: var(--secondary);
      transition-duration: 150ms;
    }
  }

  @media (min-width: 450px) {
    position: relative;
    width: inherit;
    height: 85vh;

    button {
      padding: 20px;
      width: 350px;
    }
  }
}

.customer-details {
  padding: 10px 0 30px 0;
  width: 100%;
  border-bottom: 3px solid var(--secondary-white);

  h3 {
    color: var(--secondary);
  }

  label {
    color: var(--counter);
    font-size: 14px;
  }

  p {
    font-weight: bold;
    color: var(--gray)
  }
  
}

.checkout-details {
  margin-bottom: 20px;
  width: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .detail {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px;

    p {
      color: var(--counter);
    }

    span {
      background-color: transparent;
      font-weight: 600px;
    }
  }

  .total {
    margin-top: 5px;
    border-top: 3px solid var(--secondary-white);
    h3 {
      color: var(--secondary);
    }

    span {
      color: var(--secondary);
    }
  }
`;
