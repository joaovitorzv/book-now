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

    @media (min-width: 650px) {
      padding: 30px;
    }
  }

  .new-users {
    padding: 20px 10px;
    background-color: var(--gray);

    a {
      margin-top: 20px;
    }

    @media (min-width: 650px) {
      padding: 30px;
    }
  }

  .section-title {
    margin-top: 10px;
    text-align: center;

    h4 {
      color: var(--secondary);
      padding: 2%;
    }
  }

  .best-sellers {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 5px;
    
    @media (min-width: 650px) {

      width: 100%;
      display: inline-grid;
      justify-items: center;
    align-items: center;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
    }


    @media (min-width: 1250px) {
      display: inline-grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-rows: auto;

    }
  }
`;
