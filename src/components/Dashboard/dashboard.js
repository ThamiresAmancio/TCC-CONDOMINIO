import styled from "styled-components";
import "../../StylesGlobal";

export const BtnFecharModal = styled.button`
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 25px;
  color: #fff;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 2%;
  right: 2%;

  :hover {
    border: solid 2px #fff;
    box-shadow: 0px 0px 1.5rem #1c1c1c6e;
  }
`;

export const HeaderDashboard = styled.header`
  border-bottom: solid 0.12rem #dedede;

  > div {
    width: 100%;
    height: 100%;
    padding: 0 2% 0 10%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      > h1 {
        font-weight: bold;
      }

      > h3 {
        font-weight: lighter;
      }
    }

    > div + button {
      background: transparent;
      border: none;
      outline: none;
      color: #1c1c1c;
      cursor: pointer;
    }
  }
`;

export const ContentDashboard = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--corBackgroundLight);
  display: grid;
  grid-template-columns: 1fr 10fr 4fr;
  grid-template-areas:
    "menu main header"
    "menu main aside"
    "menu main aside";

  > nav {
    width: 8vw;
    height: 100vh;
    grid-area: menu;
    background-color: var(--colorPrimary);
  }

  > main {
    width: 67vw;
    height: 100vh;
    grid-area: main;
    background-color: var(--corBackgroundLight);
  }

  > header {
    width: 25vw;
    height: 15vh;
    grid-area: header;
    border-left: solid 0.063rem rgba(116, 116, 116, 0.342);
  }

  > aside {
    width: 25vw;
    height: 85vh;
    grid-area: aside;
    border-left: solid 0.063rem rgba(116, 116, 116, 0.342);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;
  }
`;

export const MainDashboard = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2%;
  overflow-y: scroll;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuDashboard = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const ButtonMenu = styled.button`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 2.25rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: #fff;
  font-size: 3rem;

  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const ButtonAside = styled.button`
  width: 80%;
  height: 9%;
  border-radius: 1rem;
  background-color: var(--colorPrimary);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3%;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: initial;

  :hover {
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.21);
  }

  > span:first-child {
    transform: scale(1.5);
    margin-left: 5%;
    margin-right: 3%;
  }

  > span {
    color: #fff;
    font-size: 1.3rem;

    @media screen and (max-width: 750px) {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 860px) {
      font-size: 1rem;
    }

    @media screen and (min-width: 1450px) {
      font-size: 1.5rem;
    }
  }
`;

export const BtnCloseModal = styled.button`
  position: relative;
  z-index: 3;
  width: 10%;
  height: 5%;
  border: none;
  outline: none;
  border-radius: 0.5rem;

  color: #fff;
  background-color: red;
  cursor: pointer;
`;

/* Estilização dos conteudos que vão ficar na main das dashbords */
export const Conteudos = styled.div`
  background-color: #fff;
  padding: 1.875rem 4.375rem;
  border-radius: 0.938rem;
  box-shadow: 0px 0px 1rem #1c1c1ca2;
  color: #1c1c1c;
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  > h1 {
    font-weight: 800;
    text-align: center;
    color: #1c1c1c;
    font-size: 3rem;
    margin-bottom: 5px;
    border-bottom: solid 0.15rem gray;
    width: 100%;
    padding: 2% 0;

    @media only screen and (min-width: 1500px) {
      border-bottom: solid 0.25rem gray;
    }
  }

  > section {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 5%;

    > span {
      width: 47%;
      margin-bottom: 1rem;
    }

    > form {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: ceter;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 5%;
    }
  }

  > section + div {
    width: 100%;
    min-height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: ceter;
    align-items: center;

    > button {
      font-weight: 800;
      font-size: 1.3rem;
      color: var(--colorPrimary);
      background-color: transparent;
      border: 0;
      border-radius: 10px;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const SeparatorIputs = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5%;
  flex-wrap: wrap;

  > span {
    width: 46%;
  }

  > .box-select {
    width: 40%;
    margin-top: 1rem;
  }

  > .select-large{
    margin-top: 1rem;
    width: 80%;
  }

`;

export const AlignSelect = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const BtnSubmite = styled.button`
  font-weight: 800;
  font-size: 1.3rem;

  padding: 5px 50px;
  color: var(--colorPrimary);
  background-color: transparent;

  border: 0;
  border-radius: 10px;

  cursor: pointer;

  margin: 3rem 0 1rem 0;
  width: 60%;
  min-height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    font-family: "Material Icons" !important;
    font-size: 1.5rem;
  }
`;
