import styled from "styled-components";

export const ContentAgendamento = styled.section`
  min-width: 37.5rem;
  width: 85%;
  min-height: 31.25rem;
  height: 70%;
  border-radius: 2rem;
  box-shadow: 5px 5px 15px 5px rgba(28, 28, 28, 0.32);
  padding: 2% 4%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1%;

  > header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-bottom: 0.3rem solid #1c1c1c;
    margin-bottom: 1rem;

    > h1 {
      color: #1c1c1c;
      position: unset;
      font-weight: normal;
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 3%;

    > span {
      > input {
        margin-bottom: 0.5rem;
      }

      > input + label {
        > span {
          padding: 0;
        }
      }
    }

    > span:first-of-type {
      width: 80%;
    }

    > span:last-of-type {
      width: 30%;
    }
  }

  form > div:first-of-type {
    width: 65%;
    margin-bottom: 1rem;
  }

  form > div:first-of-type + div {
    width: 30%;
    margin-bottom: 1rem;
  }

  form > #boxHorario {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    gap: 10%;
    align-items: flex-start;

    > span:first-child {
      width: 35%;
      height: auto;
    }

    > span:last-of-type {
      width: 35%;
      height: auto;
    }
  }

  form > button {
    margin-left: auto;
    margin-right: auto;
    height: 4rem;
    border-radius: 1.25rem;
    color: #fff;

    border: none;
    outline: none;
    min-width: 12.5rem;
    width: 50%;
    cursor: pointer;

    position: relative;
    top: 10%;

    @media only screen and (min-height: 900px) {
      top: 20%;
    }
  }

  form > button:first-of-type {
    background-color: var(--colorPrimary);

    :hover {
      border: solid 0.2rem #fff;
      box-shadow: 5px 5px 15px 5px rgba(28, 28, 28, 0.32);
    }
  }

  form > button:last-of-type {
    background-color: transparent;
    color: #1c1c1c;
    border: solid 0.06rem #1c1c1c;

    :hover {
      box-shadow: 5px 5px 15px 5px rgba(28, 28, 28, 0.32);
    }
  }
`;
