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
    padding-top: 60px;
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
  height: 509px;

  > div {
    max-width: 90%;
    margin: 0 auto;

    > ul {
      display: flex;
      justify-content: space-between;
      padding-top: 72px;
      padding-bottom: 32px;
      border-bottom: 2px solid #c4c4c4;
      font-size: 1.5rem;
    }

    > div {
      width: 300px;
      height: 300px;
      position: absolute;
      top: -150px;
      right: 500px;
    }
  }
`;

export const Info = styled.section`
  margin-top: 84px;

  > div {
    div {
      display: grid;
      grid-template-columns: 150px 200px;
      gap: 8px;

      & + div {
        margin-top: 32px;
      }

      h3 {
        font-size: 1.125rem;
      }

      span {
        font-size: 0.875rem;
      }

      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.875rem;

        li {
          text-transform: capitalize;
        }
      }
    }
  }
`;