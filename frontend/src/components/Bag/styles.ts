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
  padding: 10px;
  background-color: var(--secondary);
  color: var(--primary);

  p {
    font-size: .8rem;
  }

  a {
    color: var(--primary);
    font-weight: bold;
    
    background-color: transparent;
    border: none;
  }

  .showbag {
    text-decoration: underline;
    margin-right: 5px;
    font-size: 14px;
    background-color: transparent;
    border: none;
    color: var(--primary)
  }

  @media (min-width: 650px) {
    padding: 20px 30px; 
  }
`;
