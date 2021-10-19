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

export const WedoSection = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-top: 10rem;

  .wedo__content {
    position: relative;
  }

  .services {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    padding-top: 5rem;

    &-item {
      width: 30rem;
      .name {
        font-size: 2.4rem;
        color: ${colors.blue};
        padding: 1.5rem 0;
      }

      .text {
        font-size: 1.7rem;
        color: ${colors.gray};
      }

      .link {
        position: relative;
        color: ${colors.red};
        font-size: 1.5rem;

        p {
          margin: 2rem 0;
        }
      }
    }
  }
`;

export const Heading = styled.div`
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-size: no-repeat;
  background-size: cover;
  position: relative;
  text-align: ${(props) => (props.left ? "left" : "center")};

  .title {
    color: ${colors.red};
    text-transform: uppercase;
    font-size: 2rem;
  }

  .text {
    font-size: 4rem;
    color: ${colors.blue};
    padding: 1.5rem 0;
  }

  .text2 {
    font-size: 1.3rem;
    color: ${colors.gray};
    padding-top: 1.5rem;
  }
`;

export const AboutSection = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-position: 50% 50%;
  background-size: no-repeat;
  background-size: cover;

  .about__content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .about-img {
      padding-right: 10em;
    }
    &--main {
      position: relative;
      width: 30%;
      top: 2.5rem;

      .text {
        p {
          font-size: 1.8rem;
          line-height: 32px;
          color: ${colors.gray};

          span {
            color: ${colors.blue};
            font-weight: 500;
          }
        }
      }
      .author {
        color: ${colors.blue};
        font-size: 1.5rem;
        padding-top: 2rem;

        span {
          color: ${colors.gray};
          font-weight: 500;
        }
      }

      .more {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        button.btn-primary {
          padding: 1.5rem 2.5rem;
        }
      }
    }
  }
`;

export const CompletedSection = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;

  .stats {
    position: relative;
    max-width: 700px;
    width: 100%;
    min-height: 250px;
    background-position: 50% 50%;
    background-size: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    &-item {
      text-align: center;
      .numbers {
        color: ${colors.red};
        font-size: 4rem;
      }
      .name {
        color: ${colors.gray};
        font-size: 2rem;
      }
    }
  }

  .cta {
    position: relative;
    width: 60%;
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    border: 1px solid ${colors.gray};
    border-radius: 5px;

    .text {
      p {
        font-size: 2rem;
        padding: 0.5rem 0;
      }
      span {
        font-size: 1.4rem;
        color: ${colors.gray};
      }
    }

    button.btn-primary {
      padding: 1.3rem 4rem;
      border-radius: 2.5rem;
    }
  }
`;

export const WorkSection = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-top: 10rem;
  background-position: 100% 50%;
  background-size: no-repeat;
  background-size: contain;
  background-repeat: no-repeat;

  .work__content {
    position: relative;
    width: 100%;

    &--top {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 0 15rem 0 25rem;

      .buttons {
        position: relative;
        width: 20rem;

        button {
          padding: 1.4rem 3rem;
          border: 1px solid ${colors.gray};
          border-radius: 5px;
          color: ${colors.blue};
          font-weight: 600;
          font-size: 1.4rem;
        }
      }
    }

    &--list {
      position: relative;
      display: flex;
      justify-content: space-evenly;
      padding-top: 5rem;
      img {
        width: 95%;
      }
    }
  }
`;

export const TestimonialSection = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-position: 50% 50%;
  background-size: no-repeat;
  background-size: cover;
  padding-top: 15rem;

  .about__content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .about-img {
      padding-right: 20em;
    }
    &--main {
      position: relative;
      width: 30%;
      top: 2.5rem;

      .text {
        p {
          font-size: 1.8rem;
          line-height: 32px;
          color: ${colors.gray};

          span {
            color: ${colors.blue};
            font-weight: 500;
          }
        }
      }
      .author {
        display: flex;
        align-items: center;
        color: ${colors.blue};
        font-size: 1.5rem;
        padding-top: 2rem;

        img {
          padding-right: 1rem;
        }
        span {
          color: ${colors.gray};
          font-weight: 500;
        }
      }

      .slide-btns {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 3.5rem;

        button {
          padding-right: 1rem;
        }
      }
    }
  }
`;
