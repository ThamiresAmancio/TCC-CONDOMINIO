import styled from "styled-components";

export const ContentVisitante = styled.section`
  background-color: #fff;
  padding: 1.875rem 1.5rem;
  border-radius: 0.938rem;
  box-shadow: 0px 0px 1rem #1c1c1ca2;
  color: #1c1c1c;
  width: 90%;
  min-height: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;

  > h1 {
    width: 100%;
    text-align: center;
    font-weight: bold;
  }

  > div {
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    > figure {
        width: 10vw;
        height: 10vw;
        border-radius: 100%;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        img{
          width: 200px;
          height: 200px;
          border-radius: 50%;
        }
    }

    > figure + label {
      padding: 20px 10px;
      width: 200px;
      background-color: #333;
      color: #fff;
      text-transform: uppercase;
      text-align: center;
      display: block;
      margin-top: 10px;
      cursor: pointer;
    }

    > figure + label + input[type="file"] {
      display: none;
    }
  }

  > form {
    width: 50%;
    height: 50%;
    padding: 0 3%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  > button {
    height: 10%;
    width: 100%;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: end;
    color: green;

    background: none;
    border: none;
    outline: none;
  }

  >button:hover{
    cursor: pointer;
  }
`;
