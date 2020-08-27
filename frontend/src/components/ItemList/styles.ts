import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 15px 10px;
  border-bottom: 4px solid var(--secondary-white);

  .book-cover {
    height: 100px;
    width: 80px;
    margin-right: 15px;

    background: url('https://images-na.ssl-images-amazon.com/images/I/61CxJAPauWL._AC_SL1010_.jpg') no-repeat center center;
    background-size: contain;
  }

  .book-info {
    h3 {
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
    }

    p {
      color: #999999;
    }

    .price {
      color: var(--secondary);
      font-size: 1.4em;
      margin-top: 10px;
    }
    
    .underline-btn {
      background-color: transparent;
      border: none;
      
      font-weight: 400;
      color: var(--counter);
      text-decoration: underline;
    }
  }
`;
