import styled from "styled-components";

export const ContentVisitante = styled.section`
    background-color: #FFF;
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
    
    >h1{
        width: 100%;
        text-align: center;
        font-weight: bold;
    }

    >div{
        width: 50%;
        height: 50%;
        background-color: green;
    }

    >form{
        width: 50%;
        height: 50%;
        padding: 0 3%;
    }

    >button{
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
`;