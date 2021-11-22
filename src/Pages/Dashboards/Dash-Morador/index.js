import { useEffect, useState } from "react";
import Avisos from "../../../components/Avisos";
import {
  BtnFecharModal,
  ButtonAside,
  ButtonMenu,
  ContentDashboard,
  MenuDashboard,
} from "../../../components/Dashboard/dashboard";
import { api } from "../../../services/api";
import RegisterVisitante from "../../Register/Visitante";
import { MoradorMain } from "./styles";

function DashboardMorador() {
  const [avisos, setAvisos] = useState([]);

  useEffect(() => {
    api.get("/avisos").then(({ data }) => {
      setAvisos(data);
    });
  }, []);

  console.log(avisos);

  const [isCadastrandoVisitante, setCadastrandoVisitante] = useState(false);

  const [isVendoAviso, setIsVendoAviso] = useState(false);

  return (
    <ContentDashboard>
      <MenuDashboard>
        <ButtonMenu className="material-icons" id="home">
          home
        </ButtonMenu>
        <ButtonMenu
          className="material-icons"
          onClick={() => {
            setIsVendoAviso(true);
          }}
        >
          notification_important
        </ButtonMenu>
        <ButtonMenu className="material-icons">event</ButtonMenu>
        <ButtonMenu className="material-icons">question_answer</ButtonMenu>
        <ButtonMenu className="material-icons">feedback</ButtonMenu>
      </MenuDashboard>
      <MoradorMain>
        {isVendoAviso ? (
          <>
            <BtnFecharModal
              onClick={()=>{
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
