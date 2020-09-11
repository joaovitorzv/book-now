import styled from 'styled-components';



export const Container = styled.div``;

type Props = {
  isOpen: boolean;
}

export const Hamburger = styled.button`
  width: 40px;
  height: 40px;

  background-color: transparent;
  border: none;
`;

export const MenuContent = styled.div`
  z-index: 5;

  width: 100vw;
  height: 100vh;
  position: fixed;
  display: ${(props: Props) => (props.isOpen ? "block" : "none")};
  padding: 5%;
  left: 0;
  top: 0;

  background-color: var(--primary);

  .menu-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-weight: 400;
      font-size: 24px;
    }
  }

  .menu-content {
    ul {
      text-align: left;
      margin-top: 10%;
    }

    li {
      font-weight: bold;
      font-size: 1.5em;

      margin-bottom: 3%;
    }

    .signup-link {
      font-size: 2em;
      font-weight: bold;
      color: var(--secondary);
    }

    button {
      font-size: 2em;
      font-weight: bold;
    }
  }
`;

