import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 15%;

  .delivery-bonus {
    padding: 20px 10px;
    background-color: var(--dark-gray);

    span {
      font-family: 'Montserrat', sans-serif;
      font-weight: bold;
    }

    h2 {
      font-size: 34px;
      color: var(--primary);
    }
  }

  .new-users {
    padding: 20px 10px;
    background-color: var(--gray);

    a {
      margin-top: 20px;
    }
  }

  .best-sellers {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 5px;
    
    h4 {
      color: var(--secondary);
      padding: 2%;
    }
  }
`;
