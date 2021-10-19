import styled from "styled-components";
import { colors } from "../../styles/colors";

export const NavContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavItems = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .logo {
    padding-right: 4rem;
  }

  ul {
    display: flex;
    list-style-type: none;

    li {
      padding: 0 3rem;

      a {
        font-size: 2rem;
      }
    }
  }
`;

export const NavContact = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 2rem;
  transform: translateX(-20rem);

  p {
    color: ${colors.gray};
    span {
      color: ${colors.red};
    }
  }

  select {
    margin: 0 2rem;
  }

  button {
    color: ${colors.red};
    border: 2px solid #fafafa;
    border-radius: 5px;
    padding: 1rem 2rem;
  }
`;
