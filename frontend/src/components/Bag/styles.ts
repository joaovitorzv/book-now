import styled from 'styled-components';

export type Props = {
  isOpenBag: boolean;
}

export const BagSlide = styled.div`
  display:  ${(props: Props) => props.isOpenBag ? 'flex' : 'none'};
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
    margin-right: 5px;
  }

  @media (min-width: 650px) {
    padding: 20px 30px; 
  }
`;
