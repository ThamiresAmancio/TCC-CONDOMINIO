import { useState } from "react";
import "../../../";
import Avisos from "../../../components/Avisos";

import {
  ButtonAside,
  ButtonMenu,
  ContentDashboard,
  MenuDashboard,
} from "../../../components/Dashboard/dashboard";
import Room from "../../Chat/chat";
import { SindicoMain } from "./styles";

function DashboardSindico() {

  const [isChat, setChat] = useState(false)
  const [isAvisos, setAviso] = useState(false)
  
  return (
    <ContentDashboard>
      <MenuDashboard>
        <ButtonMenu className="material-icons" id="home">
          home
        </ButtonMenu>
        <ButtonMenu className="material-icons" id="noti" onClick={() => {setAviso(true)}}>
          notification_important
        </ButtonMenu>
        <ButtonMenu className="material-icons">event</ButtonMenu>
        <ButtonMenu className="material-icons" onClick={() => {setChat(true)}}>question_answer</ButtonMenu>
        <ButtonMenu className="material-icons">voice_chat</ButtonMenu>
        <ButtonMenu className="material-icons">feedback</ButtonMenu>
      </MenuDashboard>
      
       <SindicoMain>
         {
           isAvisos ? (
             <>
              <Avisos
                title="Reuniões"
                link="https://meet.google.com/?pli=1"
                informacoes="As reuniões irão ocorrer hoje as 18:00 de forma remota."
                urgencia="urgente"/>
              <Avisos
                title="Reuniões"
                link="https://meet.google.com/?pli=1"
                informacoes="As reuniões irão ocorrer hoje as 18:00 de forma remota."
                urgencia="urgente"/>
                 <button className="btn-close-modal" onClick={() => { setAviso(false) }}>
                  fechar cadastro
                 </button>
             </>
           ):(<div hidden></div>)
         }
         
      {
        isChat ? (
          <>
             <Room>

            </Room>
            <button className="btn-close-modal" onClick={() => { setChat(false) }}>
              fechar cadastro
            </button>
          </>
        ):(<div hidden></div>)
      }
        
      </SindicoMain> 
      
      <header>

      </header>
      <aside>
        <ButtonAside>
          <span className="material-icons">person_add</span>
          <span>Cadastrar visitantes</span>
        </ButtonAside>
        <ButtonAside>
          <span className="material-icons">accessibility</span>
          <span>Votação online</span>
        </ButtonAside>
        <ButtonAside>
          <span className="material-icons">attach_money</span>
          <span>Pagamento Condomínal</span>
        </ButtonAside>
      </aside>
    </ContentDashboard>
  );
}

export default DashboardSindico;
