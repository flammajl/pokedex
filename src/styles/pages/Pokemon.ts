import styled, { css } from 'styled-components';
import { TypeColors } from './Home';

interface SectionColor {
  pokemonType: keyof typeof TypeColors;
}

export const Section = styled.section<SectionColor>`
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
    }

    h1 {
      text-transform: capitalize;
      font-size: 3rem;
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
      }
    }

    > div {
      width: 300px;
      height: 300px;
      position: absolute;
      top: -27%;
      right: 25%;
    }
  }
`;
