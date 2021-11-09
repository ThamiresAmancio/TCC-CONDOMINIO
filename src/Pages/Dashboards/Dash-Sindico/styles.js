import styled from "styled-components";

export const SindicoMain = styled.main`
 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
