import styled from 'styled-components';

export const Info = styled.section`
  margin-top: 48px;
  padding-bottom: 72px;

  @media (max-width: 768px) {
    padding-bottom: 48px;
  }

  > div {
    div {
      display: grid;
      grid-template-columns: 150px 200px;
      gap: 5rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }

      & + div {
        margin-top: 32px;
      }

      h3 {
        font-size: 1.125rem;
        text-transform: capitalize;

        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }

      span {
        font-size: 0.875rem;
      }

      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.875rem;
        flex-wrap: wrap;

        li {
          text-transform: capitalize;
        }
      }
    }
  }
`;

export const BaseWrapper = styled.section`
  margin-top: 48px;
  padding-bottom: 72px;

  @media (max-width: 768px) {
    padding-bottom: 48px;
  }

  > div {
    div {
      display: grid;
      grid-template-columns: 150px 200px;
      gap: 5rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }

      & + div {
        margin-top: 24px;
      }

      h3 {
        font-size: 1.125rem;
        text-transform: capitalize;

        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }

      span {
        font-size: 0.875rem;
      }
    }
  }
`;

export const MovesWrapper = styled.section`
  margin-top: 48px;
  padding-bottom: 72px;

  @media (max-width: 768px) {
    padding-bottom: 48px;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 1.5rem;
    padding-bottom: 1rem;

    @media (max-width: 1300px) {
      grid-template-columns: repeat(5, 1fr);
      gap: 2rem;
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    p {
      text-transform: capitalize;
      font-size: 0.875rem;
      font-weight: bold;
    }
  }
`;
