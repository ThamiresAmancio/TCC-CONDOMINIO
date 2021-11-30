import styled from "styled-components";

export const ContentAgendamento = styled.section`
    min-width: 37.5rem;
    width: 85%;
    min-height: 31.25rem;
    height: 70%;
    border-radius: 3rem;
    box-shadow: 5px 5px 15px 5px rgba(28,28,28,0.32);
    padding: 2% 4%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1%;

    >header{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-bottom: 0.07rem solid #1c1c1c;
        margin-bottom: 1rem;

        >h1{
            color: #1c1c1c;
            position: unset;
            font-weight: normal;
        }
    }

    >div:first-of-type{
        width: 65%;
        margin-bottom: 1rem;
    }

    >div:first-of-type+div{
        width: 40%;
        margin-bottom: 1rem;
    }

    >#boxHorario{
        >label{
            font-weight: bold;
        }

        >select:first-of-type{
            margin-right: 3rem;
        }
    }

    >button:first-of-type{
        background-color: var(--colorPrimary);
        
        :hover{
            border: solid 0.20rem #fff;
            box-shadow: 5px 5px 15px 5px rgba(28,28,28,0.32);
        }
    }

    >button:last-of-type{
        background-color: transparent;
        color: #1c1c1c;
        border: solid 0.06rem #1c1c1c;

        :hover{
            box-shadow: 5px 5px 15px 5px rgba(28,28,28,0.32);
        }
    }

    >button{
        margin-left: auto;
        margin-right: auto;
        height: 3rem;
        border-radius: 1.25rem;
        color: #fff;

        border: none;
        outline: none;
        min-width: 12.5rem;
        width: 50%;
        cursor: pointer;

        position: relative;
        top: 20%;
    }
`;