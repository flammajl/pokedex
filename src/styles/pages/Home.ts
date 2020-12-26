import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export enum TypeColors {
  grass = '#78C850',
  fire = '#F08030',
  water = '#6890F0',
  bug = '#A8B820',
  flying = '#A890F0',
  normal = '#A8A878',
  poison = '#A040A0',
  electric = '#F8D030',
  ground = '#E0C068',
  fairy = '#EE99AC',
  fighting = '#C03028',
  psychic = '#F85888',
  rock = '#B8A038',
  steel = '#B8B8D0',
  ghost = '#705898',
  ice = '#98D8D8',
  dragon = '#7038F8',
  dark = '#705848',
}

interface CardProps {
  type: keyof typeof TypeColors;
}

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;

  label {
    font-size: 2.25rem;
    font-weight: bold;

    @media (max-width: 1035px) {
      font-size: 1.5rem;
    }
  }

  input {
    margin-top: 24px;
    width: 500px;
    padding: 20px;
    border-radius: 20px;
    border: 1px solid #000;
    outline: none;

    @media (max-width: 1035px) {
      width: 400px;
    }

    &::placeholder {
      font-size: 1.125rem;
      color: #ddd;
    }

    &:focus {
      border-color: #fb6c6c;
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-bottom: 60px;

  @media (max-width: 1685px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1035px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Card = styled(motion.div)<CardProps>`
  width: 300px;
  height: 200px;
  margin-top: 72px;
  border-radius: 20px;
  position: relative;
  ${props =>
    props.type &&
    css`
      background: ${TypeColors[props.type]};
    `}

  @media (max-width: 768px) {
    width: 200px;
    height: 150px;
  }

  span {
    position: absolute;
    color: rgba(0, 0, 0, 0.5);
    top: 20px;
    right: 20px;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }

  > div {
    max-width: 90%;
    margin: 0 auto;
    padding-top: 36px;
    padding-left: 24px;

    @media (max-width: 768px) {
      padding-top: 16px;
      padding-left: 8px;
    }

    h1 {
      font-size: 1.125rem;
      color: #fff;
      font-weight: normal;
      text-transform: capitalize;

      @media (max-width: 768px) {
        font-size: 0.875rem;
      }
    }
  }
`;

export const TypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Type = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    background: rgba(0, 0, 0, 0.5);
    margin: 0;
    color: #fff;
    border-radius: 50px;
    display: flex;
    padding: 8px 12px;
    margin-top: 24px;

    @media (max-width: 768px) {
      margin-top: 1rem;
    }

    h2 {
      font-weight: normal;
      font-size: 0.75rem;
      text-transform: capitalize;
    }
  }
`;

export const AvatarContainer = styled.div`
  background: url('/images/pokeball-bg.png') center center no-repeat;
  background-size: cover;
  width: 150px;
  height: 150px;
  position: relative;
  top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    top: 5px;
    right: -5px;
  }

  img {
    width: 64px;
  }
`;
