import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "../../../";
import AvisosVisaoDoSindico from "../../../components/AvisosViewOfSindico";

import {
  BtnFecharModal,
  ButtonAside,
  ButtonMenu,
  ContentDashboard,
  HeaderDashboard,
  MenuDashboard,
} from "../../../components/Dashboard/dashboard";
import { api } from "../../../services/api";
import Room from "../../Chat/chat";
import PagamentoBeta from "../../Pagamento-beta";
import CriandoAviso from "../../Register/Aviso";
import RegisterVisitante from "../../Register/Visitante";
import VisualizarMoradores from "../../VisualizarMoradores";
import { IconLogount, SindicoMain } from "./styles";
import { getUser, signOut } from "../../../services/securitySindico";
import { ContentAvisoViewOfSindico, HeaderAvisoSindico } from "../../../components/AvisosViewOfSindico/styles";
import Agendamento from "../../Agendamento";

function DashboardSindico() {

  const sindico = getUser();
  console.log(sindico);

  const history = useHistory();
  const [avisos, setAvisos] = useState([]);

  useEffect(() => {
    api.get("/avisos").then(({ data }) => {
      setAvisos(data);
    });
  }, []);

  function deleteAviso(id) {
    api.delete(`/avisos/${id}`);

    setAvisos(avisos.filter(avisos => avisos.id !== id))

  }
  
  function logout() {
    const removeUser = signOut();
    history.push("/Login");
  }

  console.log("/////////");
  console.log(avisos);

  const [isChat, setChat] = useState(false);
  //ja este aviso é como ele vai ser setado
  const [isCreateAviso, setCreateAviso] = useState(false);

  const [isAgendamento, setIsAgendamento] = useState(false);

  const [isVendoAviso, setIsVendoAviso] = useState(false);

  const [isCadastrandoVisitante, setCadastrandoVisitante] = useState(false);
  
  const [isPagamento, setPagamento] = useState(false);

  const [isVisualizar, setVisualizar] = useState(false);
  return (
    <ContentDashboard>
      <MenuDashboard>
        <ButtonMenu className="material-icons" id="home" title="Home">
          home
        </ButtonMenu>
        <ButtonMenu
          title="Avisos"
          className="material-icons"
          id="noti"
          onClick={() => {
            setCreateAviso(true);
            setIsVendoAviso(true);
          }}
        >
          notification_important
        </ButtonMenu>
        <ButtonMenu
        onClick={()=> {
          setIsAgendamento(true);
        }}
        className="material-icons" title="Agendamento">event</ButtonMenu>
        <ButtonMenu
          title="Chat"
          className="material-icons"
          onClick={() => {
            setChat(true);
          }}
        >
          question_answer
        </ButtonMenu>
        <ButtonMenu className="material-icons" title="Denúncias">feedback</ButtonMenu>
      </MenuDashboard>

      <SindicoMain>
        {isCreateAviso ? (
          <>
            <CriandoAviso />
            <BtnFecharModal
              onClick={() => {
                setCreateAviso(false);
                setIsVendoAviso(false);
              }}
            >
              X
            </BtnFecharModal>
          </>
        ) : (
          <div hidden></div>
        )}

        {isAgendamento?(
          <>
            <Agendamento/>
            <BtnFecharModal
              onClick={() => {
                setIsAgendamento(false)
              }}
            >
              X
            </BtnFecharModal>
          </>
        ):(
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
        {isVendoAviso ? (
          <>
            {avisos?.map((avisos) => (
              
              <>
                {/* <AvisosVisaoDoSindico
                  title={avisos.titulo}
                  link={avisos.link}
                  informacoes={avisos.mensagem}
                  urgencia={avisos.status}
                /> */}

                <ContentAvisoViewOfSindico>
                  <HeaderAvisoSindico>
                    <h1>{avisos.titulo}</h1>
                  </HeaderAvisoSindico>
                  <div>
                    <span>{avisos.mensagem}</span>
                    <span>
                      <a target="_blank" href={avisos.link}>
                        {avisos.link}
                      </a>
                    </span>
                    <span>{avisos.status}</span>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        deleteAviso(avisos.id);
                      }}
                      className="material-icons"
                    >
                      delete
                    </button>
                    <button className="material-icons">edit</button>
                  </div>
                </ContentAvisoViewOfSindico>
              </>
            ))}
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

        {isVisualizar ? (
          <>
            <VisualizarMoradores></VisualizarMoradores>
            <BtnFecharModal
              onClick={() => {
                setVisualizar(false);
              }}
            >
              X
            </BtnFecharModal>
          </>
        ) : (
          <div hidden></div>
        )}
      </SindicoMain>

      <HeaderDashboard>
        <div>
          <figure className="material-icons">
              account_circle
          </figure>
          <div>
              <h1>{sindico.name}</h1>
              <h3>{sindico.email}</h3>
          </div>
        </div>
        <IconLogount onClick={() => logout()}/>
      </HeaderDashboard>
      <aside>
        <ButtonAside
          onClick={() => {
            setVisualizar(true);
          }}
        >
          <span className="material-icons">person_pin</span>
          <span>Visualizar moradores</span>
        </ButtonAside>
        <ButtonAside>
          <span className="material-icons">how_to_vote</span>
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
