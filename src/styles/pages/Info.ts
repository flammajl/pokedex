import styled from 'styled-components';

export const Info = styled.section`
  margin-top: 48px;

  > div {
    div {
      display: grid;
      grid-template-columns: 150px 200px;
      gap: 5rem;

      & + div {
        margin-top: 32px;
      }

      h3 {
        font-size: 1.125rem;
        text-transform: capitalize;
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

export const BaseWrapper = styled.section`
  margin-top: 48px;

  > div {
    div {
      display: grid;
      grid-template-columns: 150px 200px;
      gap: 5rem;

      & + div {
        margin-top: 24px;
      }

      h3 {
        font-size: 1.125rem;
        text-transform: capitalize;
      }

      span {
        font-size: 0.875rem;
      }
    }
  }
`;

export const MovesWrapper = styled.section`
  margin-top: 48px;

  > div {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 1rem;
    padding-bottom: 1rem;

    p {
      text-transform: capitalize;
      font-size: 0.875rem;
      font-weight: bold;
    }
  }
`;
