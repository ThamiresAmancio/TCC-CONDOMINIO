import styled, { } from 'styled-components';
import '../../../StylesGlobal';

export const BodyLgAdmin = styled.body`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #fefefe;
`;

export const RightSideLoginAdmin = styled.section`
    width: 50%;
    height: 100%;
    background-color: #FEFEFE;
    display: flex;
    flex-direction: column;  
    align-items: center;
    justify-content: center;
    gap: 2%;

    >h1{
        position: absolute;
        top: 0;

        margin-top: 3%;
        font-weight: 700;
        color: var(--corEscura);
        font-size: 2.5rem;
        width: 100%;
        height: auto;
        text-align: center;
    }

    >form{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90%;
        justify-content: center;
        align-items: center;

        >div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        
        width: 80%;
        height: auto;

        >label{
            font-size: 2rem;
            color: var(--corEscura);
            padding-left: 1.5%;
            font-weight: 600;
        }

        >span>input{
            font-size: 1.5rem;
        }

        >input{
            padding-left: 1.5%;
            font-size: 2rem;
            width: 100%;
            height: 50%;
            outline: none;
            border: none;
            border-bottom: solid .2rem var(--corEscura);
            background-color: transparent;
            :focus{
                border-bottom: solid .5rem var(--colorPrimary);
            }
        }

    }
    
    >button{
        width: 40%;
        height: 8%;
        background-color: transparent;
        border: .2rem solid var(--corEscura);
        text-transform: uppercase;
        border-radius: 5vw;
        cursor: pointer;

        :hover{
            background-color: var(--colorPrimary);
            color: #FFF;
            border: .2rem solid #FFF;
            box-shadow: 0px 0px .55rem var(--corEscura);
        }
    }
    }
  
`;