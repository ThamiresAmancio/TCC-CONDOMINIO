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
import {
  ContentAvisoViewOfSindico,
  HeaderAvisoSindico,
} from "../../../components/AvisosViewOfSindico/styles";
import Agendamento from "../../Agendamento";
import Votacao from "../../Votacao";
import { ContentFormAviso } from "../../Register/Aviso/styles";
import InputTayler from "../../../components/InputTayler";

function DashboardSindico() {
  const sindico = getUser();
  console.log(sindico);

  const history = useHistory();
  const [avisos, setAvisos] = useState([]);

  useEffect(() => {
    api.get(`/buscar_avisos/${sindico.condominio.id}`).then(({ data }) => {
      setAvisos(data);
    });
  }, [avisos]);

  function deleteAviso(id) {
    api.delete(`/avisos/${id}`);
    setAvisos(avisos.filter((avisos) => avisos.id !== id));
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

  const [IsCriandoVotacao, setIsCriandoVotacao] = useState(false);

  /* criando aviso-formulario */
  const [condominiosForm, setCondominiosForm] = useState([]);
  console.log(condominiosForm);

  useEffect(() => {
    api.get("/condominios").then(({ data }) => {
      setCondominiosForm(data);
    });
  }, []);

  const [avisoForm, setAvisoForm] = useState({
    titulo: "",
    mensagem: "",
    link: "",
    status: "",
    data: new Date(),
    condominio_id: "",
  });

  const [condominioFormSelectId, setCondominioFormSelectId] = useState(undefined);

  const handleCondominioFormSelectlId = (e) => {
    setCondominioFormSelectId(e.target.value);
  };

  const handleInput = (e) => {
    setAvisoForm({ ...avisoForm, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { titulo, mensagem, link, status, data, condominio_id } = avisoForm;
      const response = await api.post(`/avisos`, {
        titulo,
        mensagem,
        link,
        status,
        data,
        condominio_id: condominioFormSelectId,
      });
      alert("Aviso criado com sucesso");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

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
          onClick={() => {
            setIsAgendamento(true);
          }}
          className="material-icons"
          title="Agendamento"
        >
          event
        </ButtonMenu>
        <ButtonMenu
          title="Chat"
          className="material-icons"
          onClick={() => {
            setChat(true);
          }}
        >
          question_answer
        </ButtonMenu>
      </MenuDashboard>

      <SindicoMain>
        {/* Criando aviso - formulário */}
        {isCreateAviso ? (
          <>
            <ContentFormAviso onSubmit={handleSubmit}>
              <header>
                <InputTayler
                  id="titulo"
                  placeholder="Selecione o título"
                  list="TitulosAvisos"
                  value={avisoForm.titulo}
                  handler={handleInput}
                />
                <datalist id="TitulosAvisos">
                  <option value="Reunião" />
                  <option value="Horários" />
                  <option value="Reforma" />
                </datalist>
              </header>
              <main>
                <InputTayler
                  id="mensagem"
                  value={avisoForm.mensagem}
                  placeholder="Descrição do aviso"
                  handler={handleInput}
                />

                <InputTayler
                  id="link"
                  value={avisoForm.link}
                  placeholder="Link (Opcional)"
                  handler={handleInput}
                />

                <InputTayler
                  id="status"
                  value={avisoForm.status}
                  handler={handleInput}
                  placeholder="Status:"
                  list="urgenciaAvisos"
                />

                <datalist id="urgenciaAvisos">
                  <option value="Gravidade" />
                  <option value="Urgência" />
                  <option value="Tendência" />
                </datalist>
                <label>
                  Escolha um Condomínio :
                  <select
                    id={condominiosForm.condominio_id}
                    value={condominioFormSelectId}
                    onChange={handleCondominioFormSelectlId}
                  >
                    <option value="">Selecione</option>
                    {condominiosForm.map((condoItem) => (
                      <option key={condoItem.id} value={condoItem.id}>
                        {condoItem.name}
                      </option>
                    ))}
                  </select>
                </label>
              </main>
              <button type="submit">
                <span class="material-icons">task_alt</span>
                Salvar Aviso
              </button>
            </ContentFormAviso>
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

        {isVendoAviso ? (
          <>
            {avisos?.map((avisos) => (
              <>
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

        {IsCriandoVotacao ? (
          <>
            <Votacao mensagem="Devemos Eleger um síndico?" />
            <BtnFecharModal
              onClick={() => {
                setIsCriandoVotacao(false);
              }}
            >
              X
            </BtnFecharModal>
          </>
        ) : (
          <div hidden></div>
        )}

        {isAgendamento ? (
          <>
            <Agendamento />
            <BtnFecharModal
              onClick={() => {
                setIsAgendamento(false);
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
       
      </SindicoMain>

      <HeaderDashboard>
        <div>
          <div>
            <h1>{sindico.name}</h1>
            <h3>{sindico.email}</h3>
          </div>
          <button className="material-icons" onClick={() => logout()}>
            logout
          </button>
        </div>
        {/* <IconLogount onClick={() => logout()} /> */}
      </HeaderDashboard>
      <aside>

        <ButtonAside
          onClick={() => {
            setIsCriandoVotacao(true);
          }}
        >
          <span className="material-icons">how_to_vote</span>
          <span>Criar votação</span>
        </ButtonAside>
        <ButtonAside
          onClick={() => {
            setCadastrandoVisitante(true);
          }}
        >
          <span className="material-icons">person_add</span>
          <span>Adicionar visitantes</span>
        </ButtonAside>
      </aside>
    </ContentDashboard>
  );
}

export default DashboardSindico;
