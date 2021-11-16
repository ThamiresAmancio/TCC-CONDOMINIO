import { useState } from "react";
import { useHistory } from "react-router";
import "../../../";
import Avisos from "../../../components/Avisos";

import {
  BtnCloseModal,
  ButtonAside,
  ButtonMenu,
  ContentDashboard,
  MenuDashboard,
} from "../../../components/Dashboard/dashboard";
import Room from "../../Chat/chat";
import PagamentoBeta from "../../Pagamento-beta";
import CriandoAviso from "../../Register/Aviso";
import RegisterVisitante from "../../Register/Visitante";
import { SindicoMain } from "./styles";

function DashboardSindico() {
  const history = useHistory();

  const [isChat, setChat] = useState(false);
  //esse aviso abaixo é só um exemplo de como vai ficar no metodo get
  const [isAvisos, setAviso] = useState(false);
  //ja este aviso é como ele vai ser setado
  const [isCreateAviso, setCreateAviso] = useState(false);
  const [isCadastrandoVisitante, setCadastrandoVisitante] = useState(false);
  const [isPagamento, setPagamento] = useState(false);

  return (
    <ContentDashboard>
      <MenuDashboard>
        <ButtonMenu className="material-icons" id="home">
          home
        </ButtonMenu>
        <ButtonMenu
          className="material-icons"
          id="noti"
          onClick={() => {
            setCreateAviso(true);
          }}
        >
          notification_important
        </ButtonMenu>
        <ButtonMenu className="material-icons">event</ButtonMenu>
        <ButtonMenu
          className="material-icons"
          onClick={() => {
            setChat(true);
          }}
        >
          question_answer
        </ButtonMenu>
        <ButtonMenu className="material-icons">voice_chat</ButtonMenu>
        <ButtonMenu className="material-icons">feedback</ButtonMenu>
      </MenuDashboard>

      <SindicoMain>
        {isCreateAviso ? (
          <>
            <CriandoAviso />
            <button
              className="btn-close-modal"
              onClick={() => {
                setCreateAviso(false);
              }}
            >
              fechar cadastro
            </button>
          </>
        ) : (
          <div hidden></div>
        )}

        {isCadastrandoVisitante ? (
          <>
            <RegisterVisitante />
            <button
              className="btn-close-modal"
              onClick={() => {
                setCadastrandoVisitante(false);
              }}
            >
              fechar cadastro
            </button>
          </>
        ) : (
          <div hidden></div>
        )}

        {isAvisos ? (
          <>
            <Avisos
              title="Reuniões"
              link="https://meet.google.com/?pli=1"
              informacoes="As reuniões irão ocorrer hoje as 18:00 de forma remota."
              urgencia="urgente"
            />
            <Avisos
              title="Reuniões"
              link="https://meet.google.com/?pli=1"
              informacoes="As reuniões irão ocorrer hoje as 18:00 de forma remota."
              urgencia="urgente"
            />

            <button
              className="btn-close-modal"
              onClick={() => {
                setAviso(false);
              }}
            >
              fechar cadastro
            </button>
          </>
        ) : (
          <div hidden></div>
        )}

        {isChat ? (
          <>
            <Room></Room>
            <button
              className="btn-close-modal"
              onClick={() => {
                setChat(false);
              }}
            >
              fechar cadastro
            </button>
          </>
        ) : (
          <div hidden></div>
        )}
        {isPagamento ? (
          <>
            <PagamentoBeta />
            <button
              className="btn-close-modal"
              onClick={() => {
                setChat(false);
              }}
            >
              fechar cadastro
            </button>
          </>
        ) : (
          <div hidden></div>
        )}
      </SindicoMain>

      <header></header>
      <aside>
        <ButtonAside>
          <span className="material-icons">liquor</span>
          <span>Cadastrar área de festas</span>
        </ButtonAside>
        <ButtonAside>
          <span className="material-icons">notifications_none</span>
          <span>Votação online</span>
        </ButtonAside>
        <ButtonAside
          onClick={() => {
            setCadastrandoVisitante(true);
          }}
        >
          <span className="material-icons">person_add</span>
          <span>Adicionar visitantes</span>
        </ButtonAside>
        <ButtonAside
          onClick={() => {
            setPagamento(true)
          }}
        >
          <span className="material-icons">attach_money</span>
          <span>Pagar Mensalidade</span>
        </ButtonAside>
      </aside>
    </ContentDashboard>
  );
}

export default DashboardSindico;
