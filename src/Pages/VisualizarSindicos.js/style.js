import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

export const Header = styled.header`
  width: 90%;
  min-height: 4.5rem;
  background-color: var(--colorPrimary);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 2%;
  > p {
    color: white;
    font-size: 1.4em;
  }
`;

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
  margin-top: -1%;
  gap: 2%;

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
`;

export const List = styled.div`
  width: 100%;
  height: 50px;
  border: 0.12rem solid gray;
  display: flex;
  justify-content: space-between;

  > div:last-of-type{
    border-right: none;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 48px;
    border-right: 2px solid gray;
  }

  > div:last-child {
    justify-content: center;
    gap: 10%;
  }
`;

export const Text = styled.p`
  font-family: sans-serif;
  font-size: 0.8em;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.9;
`;

export const IconRemove = styled(FaRegTrashAlt)`
  font-size: 19px;
  cursor: pointer;
`;
export const IconEdit = styled(FaPencilAlt)`
  font-size: 19px;
  cursor: pointer;
`;
