import styled from "styled-components";
import { colors } from "../../styles/colors";

export const NavContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const NavItems = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .logo {
    padding-right: 4rem;
  }

  .menu {
    display: none;
  }

  ul {
    display: flex;
    list-style-type: none;

    li {
      padding: 0 3rem;

      a {
        font-size: 2rem;

        &:hover {
          color: ${colors.red};
        }
      }
    }
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    padding: 0 2rem;

    .logo {
      img {
        width: 50%;
      }
    }
    .menu {
      display: block;
    }

    ul {
      position: absolute;
      display: block;
      width: 100%;
      transform: translateY(${(props) => (props.active ? "10rem" : "-20rem")});
      transition: all 0.3s ease;
      z-index: 9999;
      background-color: #fff;

      li {
        padding: 1rem 0rem;

        a {
          font-size: 1.5rem;
        }
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
    margin: 1rem 0;
  }

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    transform: translateX(0rem);
    flex-wrap: wrap;
    padding: 2rem;
  }
`;
