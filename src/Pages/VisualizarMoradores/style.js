import styled from "styled-components";


export const Header = styled.header `
 
    width: 90%;
    height: 10%;
    background-color: var(--colorPrimary);
    display: flex;
    align-items: center;
    flex-direction:row;
    justify-content: space-between;

    >p{
        color: white;
        float: left;
       
    }

`

export const ContainerVisualizar = styled.div`

    background-color: #fff;
    padding: 1.875rem 1.5rem;
    box-shadow: 0px 0px 1rem #1c1c1ca2;
    color: #1c1c1c;
    width: 90%;
    min-height: 60%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    margin-top: -2%;

    >div{
        width: 90%;
        height: 50px;
        border-bottom: 1px solid black;
        display: flex;
        justify-content: space-between;
    }
  
`