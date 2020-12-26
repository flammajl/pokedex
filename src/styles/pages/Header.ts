import styled from 'styled-components';

export const Container = styled.header`
  background: #fb6c6c;

  div {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    text-align: center;
    height: 100px;

    div {
      width: 64px;
    }

    h1 {
      flex: 1;
      font-size: 3rem;
      font-weight: bold;
      color: #fff;

      @media (max-width: 1035px) {
        font-size: 2rem;
      }
    }
  }
`;
