import styled from "styled-components";
import { colors } from "./colors";

export const HeroSection = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-position: 50% 50%;
  background-size: no-repeat;
  background-size: cover;

  &.hero {
    .hero__content {
      position: relative;
      transform: translate(30%, 38%);
      width: 35%;

      .promo {
        width: fit-content;
        border: solid 1px #e9e9e9;
        background: #fbfbff;
        p {
          font-size: 1.5rem;

          span {
            color: ${colors.red};
          }
        }
      }

      .heading {
        h1 {
          font-size: 7rem;
          color: ${colors.blue};
          font-weight: 400;
          padding: 2rem 0;
        }
      }

      .text {
        p {
          font-size: 2rem;
          line-height: 32px;
          color: ${colors.gray};
        }
      }

      .cta {
        display: flex;
        padding: 2.5rem 0;

        .btn-primary {
          padding: 0.8rem 2.5rem;
          border-radius: 2.5rem;
        }

        .btn-video {
          margin-left: 2rem;
          display: flex;
          align-items: center;
          color: ${colors.gray};

          img {
            padding-left: 1rem;
          }
        }
      }
    }
  }
`;
