import { useState } from "react";
import {
  BtnFecharModal,
  ButtonAside,
  ButtonMenu,
  ContentDashboard,
  MenuDashboard,
} from "../../../components/Dashboard/dashboard";
import RegisterVisitante from "../../Register/Visitante";
import { MoradorMain } from "./styles";

function DashboardMorador() {
  const [isCadastrandoVisitante, setCadastrandoVisitante] = useState(false);

  return (
    <ContentDashboard>
      <MenuDashboard>
        <ButtonMenu className="material-icons" id="home">
          home
        </ButtonMenu>
        <ButtonMenu className="material-icons">notification_important</ButtonMenu>
        <ButtonMenu className="material-icons">event</ButtonMenu>
        <ButtonMenu className="material-icons">question_answer</ButtonMenu>
        <ButtonMenu className="material-icons">voice_chat</ButtonMenu>
        <ButtonMenu className="material-icons">feedback</ButtonMenu>
      </MenuDashboard>
      <MoradorMain>
        {isCadastrandoVisitante ? (
          <>
            <RegisterVisitante />
            <BtnFecharModal
              onClick={() => {
                setCadastrandoVisitante(false);
              }}
            >
              X
            </BtnFecharModal>
          </>
        ) : (
          <div hidden></div>
        )}
      </MoradorMain>
      <header></header>
      <aside>
        <ButtonAside
          onClick={() => {
            setCadastrandoVisitante(true);
          }}
        >
          <span className="material-icons">person_add</span>
          <span>Adicionar visitantes</span>
        </ButtonAside>
        <ButtonAside>
          <span className="material-icons">accessibility</span>
          <span>Votação online</span>
        </ButtonAside>
        <ButtonAside>
          <span className="material-icons">attach_money</span>
          <span>Pagar Mensalidade</span>
        </ButtonAside>
      </aside>
    </ContentDashboard>
  );
}

export default DashboardMorador;
