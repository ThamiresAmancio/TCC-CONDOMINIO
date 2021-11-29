import styled from "styled-components";
import ImgLogo from "../../Assets/predio-comercial.png";

export const BodyLoginPerfils = styled.body`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const LoginLeftSide = styled.div`
  width: 50%;
  height: 100%;
  background-color: var(--colorPrimary);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  > h1 {
    color: #fff;
    font-size: 2.5rem;
    margin-bottom: 3%;
  }

  > h2 {
    font-size: 2rem;
    color: #fff;
    font-weight: lighter;

    @media only screen and (max-width: 1500px) {
      font-size: 1.5rem;
    }

    @media only screen and (max-width: 950px) {
      font-size: 1rem;
    }

    @media only screen and (max-width: 1350px) {
      font-size: 1.5rem;
    }
  }

  > .footer-left-side-login {
    margin-top: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 2% 0 4%;
    text-align: center;
    height: auto;
    color: #fff;
    gap: 2%;

    position: absolute;
    bottom: 0;
    margin-bottom: 5%;

    > p {
      font-size: 1.5rem;
      font-weight: lighter;

      @media only screen and (max-width: 1500px) {
        font-size: 1.5rem;
      }

      @media only screen and (max-width: 950px) {
        font-size: 1rem;
      }

      @media only screen and (max-width: 1350px) {
        font-size: 1.2rem;
      }
    }

    > span {
      transform: scale(1.1);
    }
  }
`;

export const LogoTowers = styled.div`
  margin-top: 5%;
  margin-bottom: 4%;
  background-color: #fff;
  border-radius: 100%;
  width: 20vw;
  height: 20vw;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;

  > figure {
    border-radius: 50%;
    width: 80%;
    height: 80%;

    background-image: url(${ImgLogo});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const LoginRightSide = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1%;

  > h1 {
    position: absolute;
    top: 0;

    margin-top: 3%;
    font-weight: 700;
    color: #808080;
    font-size: 2.5rem;
    width: 100%;
    height: auto;
    text-align: center;
  }
`;

export const CardIconePerfil = styled.div`
  width: 70%;
  height: 10%;
  background-color: var(--colorPrimary);
  border-radius: 3.5vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;

  :hover{
    box-shadow: 1px 4px 15px 3px rgba(28,28,28,0.49);
  }

  > span {
    font-size: 4rem;
    width: 20%;
    height: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 1450px) {
      font-size: 4rem;
    }

    @media only screen and (min-width: 950px) {
      font-size: 3rem;
    }

    @media only screen and (max-width: 950px) {
      font-size: 2.5rem;
    }
  }

  > a {
    width: 84%;
    height: 100%;
    outline: none;
    border: none;
    color: #fff;
    font-size: 1.8rem;
    text-align: start;
    padding-left: 1rem;
    display: flex;
    align-items: center;

    :hover {
      color: white;
    }
  }
`;
