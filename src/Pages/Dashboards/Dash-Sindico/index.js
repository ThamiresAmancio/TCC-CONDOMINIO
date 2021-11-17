import { useState } from "react";
import { useHistory } from "react-router";
import "../../../";
import Avisos from "../../../components/Avisos";

import {
  BtnCloseModal,
  BtnFecharModal,
  ButtonAside,
  ButtonMenu,
  ContentDashboard,
  MenuDashboard,
} from "../../../components/Dashboard/dashboard";
import Room from "../../Chat/chat";
import PagamentoBeta from "../../Pagamento-beta";
import CriandoAviso from "../../Register/Aviso";
import RegisterVisitante from "../../Register/Visitante";
import VisualizarMoradores from "../../VisualizarMoradores";
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

  const [isVisualizar, setVisualizar] = useState(false);
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
            <BtnFecharModal
              onClick={() => {
                setCreateAviso(false);
              }}
            >
              X
            </BtnFecharModal>
          </>
        ) : (
          <div hidden></div>
        )}

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
            <BtnFecharModal
              onClick={() => {
                setAviso(false);
              }}
            >
              X
            </BtnFecharModal>
          </>
        ) : (
          <div hidden></div>
        )}

        {isChat ? (
          <>
            <Room></Room>
            <BtnFecharModal
              onClick={() => {
                setChat(false);
              }}
            >
              X
            </BtnFecharModal>
          </>
        ) : (
          <div hidden></div>
        )}
        {isPagamento ? (
          <>
            <PagamentoBeta />
            <BtnFecharModal
              onClick={() => {
                setPagamento(false);
              }}
            >
              X
            </BtnFecharModal>
          </>
        ) : (
          <div hidden></div>
        )}

        {
          isVisualizar ? (
            <>
              <VisualizarMoradores>

              </VisualizarMoradores>
              <BtnFecharModal
              onClick={() => {
                setVisualizar(false);
              }}
            >
              X
            </BtnFecharModal>
            </>
          ): (
            <div hidden></div>
          )}
      </SindicoMain>

      <header></header>
      <aside>
        <ButtonAside onClick={() => {setVisualizar(true)}}>
          <span className="material-icons">liquor</span>
          <span>Visualizar moradores</span>
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
            setPagamento(true);
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
