import styled from "styled-components";

export const ContentFormAviso = styled.form`
  width: 80%;
  height: 50%;
  background-color: #fff;
  box-shadow: 0px 0px 0.5rem #1c1c1c79;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  > header {
    width: 100%;
    background-color: var(--colorPrimary);
    height: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    > div {
        width: 40%;
      > input {
        background-color: transparent;
        color: #fff;

        ::-webkit-input-placeholder {
          color: #fff;
        }
      }
    }
  }

  >main{
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 10%;

    >div{
        width: 90%;
    }

    >div:last-of-type{
        width: 20%;
        align-self: flex-start;
        margin-left: 5%;
    }
  }

  >button{
      background: none;
      outline: none;
      border: none;
      color: var(--colorPrimary);
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 0 .5rem 1rem 0;
  }
`;
