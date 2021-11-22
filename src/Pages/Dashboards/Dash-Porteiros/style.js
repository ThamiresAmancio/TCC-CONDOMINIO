import styled from "styled-components";

export const PorteiroMain = styled.main`
 
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