import styled from "styled-components";
import {RiLoginBoxLine} from 'react-icons/ri'
export const MoradorMain = styled.main`
 
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


export const IconLogount = styled(RiLoginBoxLine)`
    font-size: 30px;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
    float: right;
    margin-top: -20px;
    cursor: pointer;
`