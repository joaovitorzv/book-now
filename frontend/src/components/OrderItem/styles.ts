import styled from 'styled-components';


type Props = {
  isShown: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const Order = styled.div`
  padding: 20px;
  border: 1px solid var(--secondary-white);

  &:hover {
    border: 1px solid var(--counter);
    transition-duration: 200ms;
  }

  h3 {
    color: var(--secondary);
  }

  p {
    font-weight: bold;
    color: var(--gray)
  }

  label {
    color: var(--counter);
    font-size: 14px;
  }

  .between-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .customer-details {
    padding: 10px 0 30px 0;
    width: 100%;
    margin-bottom: 10px;
    border-bottom: 4px solid var(--secondary-white);
  }

`;

export const ShowItems = styled.button`
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;
  color: var(--counter)
`;

export const OrderItems = styled.div`
  margin-top: 10px;    
  display: ${(props: Props) => props.isShown ? 'flex' : 'none'};
`;