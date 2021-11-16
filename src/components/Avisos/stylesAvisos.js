import styled from "styled-components";


export const ContentAviso = styled.div`
  width: 80%;
  height: 45%;
  background-color: #fff;
  box-shadow: 0px 0px 0.5rem #1c1c1c79;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  > h1 {
    position: unset;
  }

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  > div > span:first-of-type {
    padding: 0 2%;
    margin-bottom: 3%;
    font-size: 1.5rem;

    @media (min-width: 1480px) {
      font-size: 2rem;
    }
    @media (max-width: 1400px) {
      font-size: 1.5rem;
    }
    @media (max-width: 1350px) {
      font-size: 1.3rem;
    }
    @media (max-width: 1200px) {
      font-size: 1.2rem;
    }
  }

  > div > span:first-of-type + span {
    margin-top: -2%;
    padding: 0 4%;
    justify-self: center;
    > a {
      font-size: 1.5rem;
      color: pointer;
      :hover {
        text-decoration: underline red 20%;
        text-underline-position: under;
      }
    }
    @media (min-width: 1480px) {
      font-size: 2rem;
      > a {
        font-size: 1.5rem;
      }
    }
    @media (max-width: 1400px) {
      font-size: 1.5rem;
      > a {
        font-size: 1.5rem;
      }
    }
    @media (max-width: 1350px) {
      font-size: 1.3rem;
      > a {
        font-size: 1.4rem;
      }
    }
    @media (max-width: 1200px) {
      font-size: 1.2rem;
      > a {
        font-size: 1.3rem;
      }
    }
  }

  > div > span:last-of-type {
    text-transform: uppercase;
    color: red;
    position: relative;
    right: 40%;
    font-weight: bold;
  }
`;

export const HeaderAviso = styled.header`
  width: 100%;
  height: 15%;
  background-color: var(--colorPrimary);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2%;

  > h1 {
    position: unset;
  }
`;
