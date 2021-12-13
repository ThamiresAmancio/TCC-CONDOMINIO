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
import Agendamento from "../../Agendamento";
import Votacao from "../../Votacao";

function DashboardMorador() {

  const history = useHistory();

  const [isChat, setChat] = useState(false);

  const [avisos, setAvisos] = useState([]);

  const [agendamento, setAgendamento] = useState(false);

  const [isVotacao, setIsVotacao] = useState(false);

  const morador = getUser();

  useEffect(() => {
    api.get(`/buscar_avisos/${morador.condominio.id}`).then(({ data }) => {
      setAvisos(data);
    });
  }, []);

  console.log(avisos)

  const [isCadastrandoVisitante, setCadastrandoVisitante] = useState(false);

  const [isVendoAviso, setIsVendoAviso] = useState(false);

  const [isPagandoMensalidade, setIsPagandoMensalidade] = useState(false);

  function logout() {
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
        <ButtonMenu className="material-icons" title="Agendamento"
          onClick={() => {
            setAgendamento(true);
          }}>
          event
        </ButtonMenu>
        <ButtonMenu className="material-icons" title="Chat" onClick={() => {
          setChat(true);
        }}
        >question_answer</ButtonMenu>
        <ButtonMenu className="material-icons" title="Denúncias">feedback</ButtonMenu>
      </MenuDashboard>
      <MoradorMain>

        {agendamento ? (
          <>
            <Agendamento />
            <BtnFecharModal
              onClick={() => {
                setAgendamento(false);
              }}
            >
              X
            </BtnFecharModal>
          </>
        ) : (<div hidden></div>)}

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

        {isVotacao ? (
          <>
            <Votacao 
            mensagem="Olá devemos eleger um novo sidico para o condomínio?"/>

            <BtnFecharModal
              onClick={() => {
                setIsVotacao(false);
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
          <div>
            <h1>{morador.name}</h1>
            <h3>{morador.email}</h3>
          </div>
          <button className="material-icons" onClick={() => logout()}>logout</button>
        </div>
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
        <ButtonAside onClick={() => {
          setIsVotacao(true);
        }}>
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
    </ContentDashboard >
  );
}

export default DashboardMorador;
