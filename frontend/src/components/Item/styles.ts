import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95vw;

  @media (min-width: 650px) {
    width: 320px;
  }

  @media (min-width: 800px) {
    min-width: 380px;
  }

  padding: 0 10px;
  margin-top: 10%;

  .book-cover {
    height: 200px;
    width: 300px;
    background: url('https://images-na.ssl-images-amazon.com/images/I/61CxJAPauWL._AC_SL1010_.jpg') no-repeat center center;
    background-size: contain;
  }

  .book-info {
    padding-left: 10px;
    
    .price-container {
      text-align: right;

      h3 {
        font-size: 1.8em;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
      }

      span {
        font-weight: bold;
      }
    }

    .book-description {
      margin: 10px 0;
      max-width: 200px;

      @media (min-width: 630px) {
        width: 200px;
      }

      h3 {
        font-size: 1.2em;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
        margin-bottom: 10px;
      }

      span {
        color: var(--dark-gray);
      }

      p {
        font-size: 14px;

        color: #999999;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
      }

      button {
        width: 100%;
        margin-top: 10px;

        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }
    }
  }
`;
