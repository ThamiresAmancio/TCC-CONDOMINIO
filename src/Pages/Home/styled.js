import styled, { } from 'styled-components';

export const Body = styled.body`
     display: flex;
     flex-direction: column;
     overflow-x: hidden;
     background-color: #FEFEFE;
 `;

export const HeaderHome = styled.header`
     height: 10vh;
     width: 100%;
     background-color: var(--colorPrimary);

     display: flex;
     gap: 2rem;
     align-items: center;
     justify-content: center;

     >h1{
         font-size: 2rem;
         color: white;
         user-select: none;
        text-align: start;
         width: 20%;
     }

     >nav{
         width: 60%;
         display: flex;
         justify-content: space-around;
     }

     >button{
         outline: none;
         background-color: #FFF;
         border-radius: 1vw;
         border: none;
         width: 15%;
         height: 40%;
         color: var(--corTerciaria);
         font-weight: bold;
         font-size: 1rem;
     }
 `;

export const SectionTitle = styled.section`
     height: 60vh;
     width: 100%;
     background-color: #FFF;
 `;

export const SectionServices = styled.section`
     height: 60vh;
     width: 100%;
     background-color: var(--colorPrimary);
 `;

export const SectionNos = styled.section`
     height: 60vh;
     width: 100%;
     background-color: #FFF;
 `;

export const SectionAdmin = styled.section`
     height: 60vh;
     width: 100%;
     background-color: var(--colorPrimary);
 `;

export const SectionContatos = styled.section`
     height: 60vh;
     width: 100%;
     background-color: #FFF;
 `;

export const FooterHome = styled.footer`
     height: 10vh;
     width: 100%;
     background-color: var(--colorPrimary);
     display: flex;
     align-items: center;
     justify-content: center;

     >h1{
        font-size: 1.5rem;
        color: white;
    }
 `;