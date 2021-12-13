import styled from "styled-components";
import {FaRegTrashAlt} from 'react-icons/fa'
import {FaPencilAlt} from 'react-icons/fa'

export const Header = styled.header `
 
    width: 90%;
    min-height: 5rem;
    background-color: var(--colorPrimary);
    display: flex;
    align-items: center;
    flex-direction:row;
    justify-content: space-between;
    padding: 0 5%;
    margin: 1rem 0 1rem 0;

    >div{
       min-width: 30px ;
        height: 25px;
        >p{
            color: white;
            font-size: 1.4em;
        }
    }
`

export const ContainerVisualizar = styled.div`
    background-color: #fff;
    padding: 1.875rem 1.5rem;
    box-shadow: 0px 0px 1rem #1c1c1ca2;
    color: #1c1c1c;
    width: 90%;
    min-height: 75%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    gap: 5%;
    margin-top: -1%;
    overflow-y: scroll;
 
    ::-webkit-scrollbar {
        width: 10px;
        background: #fff; 
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #fff; 
    }
 
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: green; 
        border-radius: 50px;
    }
`
export const List = styled.div`
    width: 100%;
    height: 100px;

    border: solid 0.12rem gray;

    // border-top: 2px solid black;
    // border-bottom: 2px solid black;
    // border-left: 2px solid black;

    display: flex;
    justify-content: space-between;

    >div:last-of-type{
        border-right: none;
    }

    >div{
        width: 20%;
        height: 96px;
        border-right: 0.12rem solid gray;
        display: flex;
        align-items: center;
        justify-content: center;

        >img{
            width:90px;
            height: 90px;
            border-radius:50%;
        }
    }
`

export const Text = styled.p`
   font-family: sans-serif;
   font-size: .8em;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.9;
`

export const IconRemove = styled(FaRegTrashAlt)`
    font-size: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    cursor: pointer;
`
export const IconEdit = styled(FaPencilAlt)`
    font-size: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
    float: right;
    margin-top: -20px;
    cursor: pointer;
`