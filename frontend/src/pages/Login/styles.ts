import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 10px;

  h2 {
    margin: 20px 0 10px 0;
  }

  input {
    width: 100%;
    padding: 5%;

    &:not(:first-child) {
      margin-top: 20px;
    }
  }

  .form-actions {
    width: 93%;
    display: flex;
    flex-direction: column;

    position: fixed;
    bottom: 30px;

    text-align: right;

    button {
      font-size: 18px;
      padding: 8%;
      margin-bottom: 10px;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    span {
      color: var(--secondary);
      font-size: 16px;
    }

    @media (min-width: 450px) {
      button {
        padding: 20px;
        width: 350px;
      }
    }
  }

  @media (min-width: 450px) {

    .inputs {
      display: flex;
      flex-direction: column;
      align-items: center;

    }

    .form-actions {
      align-items: center;
      width: 100%;
    }

    input {
      width: 450px;
      padding: 15px;
      font-size: 16px;
    }
  }
`;
