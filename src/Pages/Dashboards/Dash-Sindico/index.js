import "../../../";
import Avisos from "../../../components/Avisos";

import {
  ButtonAside,
  ButtonMenu,
  ContentDashboard,
  MenuDashboard,
} from "../../../components/Dashboard/dashboard";
import { SindicoMain } from "./styles";

function DashboardSindico() {
  return (
    <ContentDashboard>
      <MenuDashboard>
        <ButtonMenu className="material-icons" id="home">
          home
        </ButtonMenu>
        <ButtonMenu className="material-icons" id="noti">
          notification_important
        </ButtonMenu>
        <ButtonMenu className="material-icons">event</ButtonMenu>
        <ButtonMenu className="material-icons">question_answer</ButtonMenu>
        <ButtonMenu className="material-icons">voice_chat</ButtonMenu>
        <ButtonMenu className="material-icons">feedback</ButtonMenu>
      </MenuDashboard>
      <SindicoMain>
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
