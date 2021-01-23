import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { TypeColors } from './Home';

interface SectionColor {
  pokemonType: keyof typeof TypeColors;
}

export const Section = styled(motion.section)<SectionColor>`
  height: 100vh;
  ${props =>
    props.pokemonType &&
    css`
      background-color: ${TypeColors[props.pokemonType]};
    `};

  > div {
    max-width: 90%;
    margin: 0 auto;
    color: #fff;

    > section {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 1200px) {
        img {
          width: 250px;
        }
      }

      @media (max-width: 768px) {
        padding: 40px 0;
        img {
          max-width: 90px;
        }
        span {
          display: none;
        }
        svg {
          width: 40px;
        }
      }
    }

    h1 {
      text-transform: capitalize;
      font-size: 3rem;

      @media (max-width: 900px) {
        font-size: 2rem;
      }
    }

    > div {
      max-width: 400px;
      flex-direction: column;
    }
  }
`;

export const Type = styled.div`
  display: flex;

  > div {
    background: rgba(0, 0, 0, 0.5);
    margin: 0;
    color: #fff;
    border-radius: 50px;
    display: flex;
    padding: 8px 12px;
    margin-top: 24px;

    & + div {
      margin-left: 24px;
    }

    h2 {
      font-weight: normal;
      font-size: 0.75rem;
      text-transform: capitalize;
    }
  }
`;

export const About = styled.section`
  position: relative;
  background-color: #fff;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  height: calc(100vh - 400px);

  @media (max-width: 1200px) {
    height: calc(100vh - 250px);
  }
  @media (max-width: 768px) {
    height: calc(100vh - 172px);
  }

  > div {
    max-width: 90%;
    margin: 0 auto;

    > ul {
      display: flex;
      justify-content: space-between;
      padding-top: 72px;
      padding-bottom: 32px;
      border-bottom: 2px solid #c4c4c4;

      button {
        font-size: 1.5rem;
        background: none;
        border: none;

        @media (max-width: 1200px) {
          font-size: 1.125rem;
        }

        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }

    > figure {
      position: absolute;
      top: -27%;
      right: 25%;

      @media (max-width: 1200px) {
        img {
          width: 150px;
        }
      }

      @media (max-width: 768px) {
        img {
          width: 100px;
        }
      }
    }

    @media (max-width: 1200px) {
      > figure {
        top: -30%;
        right: 10%;
      }
    }

    @media (max-width: 768px) {
      > figure {
        top: -23%;
        right: 9%;
      }
    }
  }
`;
