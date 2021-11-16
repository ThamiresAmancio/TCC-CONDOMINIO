import styled from 'styled-components';
import ImgLogo from '../../Assets/predio-comercial.png';

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

    >h1{
        color: #FFF;
        font-size: 2.5rem;
        margin-bottom: 3%;
    }

    >h2{
        font-size: 2rem;
        color: #FFF;
        font-weight: lighter;
    }

    >.footer-left-side-login{
        margin-top: 30%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 70%;
        height: auto;
        color: #FFF;
        gap: 2%;

        >p{
            font-size: 1.5rem;
            font-weight: lighter;
        }

        >span{
            transform: scale(1.1);
        }
    }
`;


export const LogoTowers = styled.div`
    margin-top: 5%;
    margin-bottom: 4%;

    background-color: #FFF;
    border-radius: 150px;
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    >figure{
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
    background-color: #FEFEFE;
    display: flex;
    flex-direction: column;  
    align-items: center;
    justify-content: center;
    gap: 1%;

    >h1{
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

    >span{
        font-size: 4rem;
        width: 20%;
        height: 100%;
        color: #FFF;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    >a{
        width: 80%;
        height: 50%;
        outline: none;
        border: none;
        color: #FFF;
        font-size: 1.8rem;
        text-align: start;
        padding-left: 1rem;

        :hover{
            color: white;
        }
    }
`;