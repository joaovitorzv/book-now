import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;

  max-width: 1250px;
  margin: 0 auto;
  overflow: hidden;

  @media (min-width: 700px) {
    padding-bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

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


  .items-list { 
    width: 100%;

    @media (min-width: 700px) {
      width: 60%;
    }

    .items-container {
      margin-top: 2px;

      max-height: 80vh;
      overflow-y: scroll;

      ::-webkit-scrollbar {
        display: none;
      }

      h2 {
        position: fixed;
      }
    }
  }
`;
