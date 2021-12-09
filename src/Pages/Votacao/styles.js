import styled from "styled-components";

export const ContentVotacao = styled.form`
    min-width: 50vw;
    width: 90%;
    min-height: 75%;
    height: auto;
    border-radius: 1.5rem;
    padding: 2% 2%;
    box-shadow: 0px 0px 15px 1px rgba(28,28,28,0.59);

    >div:first-of-type{
        min-height: 4.3rem;
        height: 15%;
        width: 100%;
        border-bottom: solid .4rem #1c1c1c;
        display: flex;
        justify-content: center;
        align-items: center;

        >h1{
            font-weight: bold;
            font-size: 1.7rem;
        }
    }
    >div:nth-child(2){
        min-height: 4.3rem;
        height: 35%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 2% 0;

        >p{
            width: 100%;
            height: 100%;
            padding: 0 4%;
            font-size: 1.5rem;
            text-align: center;
        }
    }

    .input-option356 {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .input-option356:after {
        content: "";
        clear: both;
    }

    .radio {
        border: 1px solid #ccc;
        box-sizing: border-box;
        float: left;
        height: 70px;
        position: relative;
        width: 120px;
    }

    .radio + .radio {
        margin-left: 25px;
    }

    .radio label {
        background: #fff no-repeat center center;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        white-space: nowrap;
    }

    .radio label span {
        z-index: 1;
    }
    .radio label input[type=radio] {
        all: unset;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .radio label input[type=radio]:checked {
        background-color: var(--colorPrimary);
    }
    .radio label input[type=radio]:checked + span{
        color: #ffffff;
    }

    >div:nth-child(3){
        min-height: 4.3rem;
        height: 25%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    >div:nth-child(4){
        min-height: 4.3rem;
        height: 25%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        >button{
            border: solid 0.15rem #1c1c1c;
            outline: none;
            height: 4rem;
            width: 18rem;
            border-radius: 2rem;
            background-color: var(--colorPrimary);
            color: #fff;
            text-transform: uppercase;
            cursor: pointer;

            :hover{
                border: solid 0.2rem #fff;
                box-shadow: 5px 5px 15px 5px rgba(28,28,28,0.41);
            }
        }
    }

`;