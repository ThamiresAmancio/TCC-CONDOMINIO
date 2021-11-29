import { useEffect, useState } from "react";
import Avisos from "../../../components/Avisos";
import {
  BtnFecharModal,
  ButtonAside,
  ButtonMenu,
  ContentDashboard,
  HeaderDashboard,
  MenuDashboard,
} from "../../../components/Dashboard/dashboard";
import { api } from "../../../services/api";
import PagamentoBeta from "../../Pagamento-beta";
import RegisterVisitanteMorador from "../../Register/Visitante/registerVisitantes";
import { MoradorMain } from "./styles";
import Room from "../../Chat/chat";
import { IconLogount } from "../Dash-Morador/styles";
import { getUser, signOut } from "../../../services/securityMorador";
import { useHistory } from "react-router";

function DashboardMorador() {

  const history = useHistory();
  const [isChat, setChat] = useState(false);
  const [avisos, setAvisos] = useState([]);
  const morador = getUser();
  console.log(morador);

  useEffect(() => {
    api.get("/avisos").then(({ data }) => {
      setAvisos(data);
    });
  }, []);

  const [isCadastrandoVisitante, setCadastrandoVisitante] = useState(false);

  const [isVendoAviso, setIsVendoAviso] = useState(false);

  const [isPagandoMensalidade, setIsPagandoMensalidade] = useState(false);

  function logout(){
    const removeUser = signOut()
    history.push('/Login')
  }

  return (
    <ContentDashboard>
      <MenuDashboard>
        <ButtonMenu className="material-icons" id="home" >
          home
        </ButtonMenu>
        <ButtonMenu
          title="avisos"
          className="material-icons"
          onClick={() => {
            setIsVendoAviso(true);
          }}
        >
          notification_important
        </ButtonMenu>
        <ButtonMenu className="material-icons" title="Agendamento">event</ButtonMenu>
        <ButtonMenu className="material-icons" title="Chat" onClick={() => {
            setChat(true);
          }}
        >question_answer</ButtonMenu>
        <ButtonMenu className="material-icons" title="Denúncias">feedback</ButtonMenu>
      </MenuDashboard>
      <MoradorMain>
        {isPagandoMensalidade ? (
          <>
            <BtnFecharModal
              onClick={() => {
                setIsPagandoMensalidade(false);
              }}
            >
              X
            </BtnFecharModal>
            <PagamentoBeta />
          </>
        ) : (
          <div hidden></div>
        )}

        {isVendoAviso ? (
          <>
            <BtnFecharModal
              onClick={() => {
                setIsVendoAviso(false);
              }}
            >
              X
            </BtnFecharModal>
            {avisos?.map((avisos) => (
              <Avisos
                title={avisos.titulo}
                link={avisos.link}
                informacoes={avisos.mensagem}
                urgencia={avisos.status}
              />
            ))}
          </>
        ) : (
          <div hidden></div>
        )}

        {isCadastrandoVisitante ? (
          <>
            <RegisterVisitanteMorador />
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
      </MoradorMain>
      <HeaderDashboard>
        <div>
          <figure className="material-icons">
              account_circle
          </figure>
          <div>
              <h1>{morador.name}</h1>
              <h3>{morador.email}</h3>
          </div>
        </div>
        <IconLogount onClick={() => logout()}/>
      </HeaderDashboard>
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
          <span className="material-icons">how_to_vote</span>
          <span>Votação online</span>
        </ButtonAside>
        <ButtonAside
          onClick={() => {
            setIsPagandoMensalidade(true);
          }}
        >
          <span className="material-icons">attach_money</span>
          <span>Pagar Mensalidade</span>
        </ButtonAside>
      </aside>
    </ContentDashboard>
  );
}

export default DashboardMorador;
