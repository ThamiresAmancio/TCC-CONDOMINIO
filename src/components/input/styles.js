import styled from "styled-components";
import '../../StylesGlobal';

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-top: 15px;

  > input{
    padding-left: 1.5%;
    font-size: 2rem;
    width: 100%;
    height: 50%;
    outline: none;
    border: none;
    border-bottom: solid .2rem var(--corEscura);
    background-color: transparent;

    :focus{
        border-bottom: solid .25rem var(--colorPrimary);
    }
  }

  > label {
    position: absolute;
    left: 10px;
    top: 0px;
    display: flex;
    align-items: center;

    transition: 0.2s ease-in-out;

    color: var(--corEscura);
    cursor: text;

    pointer-events: none;
  }

  > input,
  > label {
    width: 100%;
    height: 30px;
    font-size: 1.5rem;
  }

`;