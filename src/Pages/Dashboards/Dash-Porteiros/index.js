import { useState } from "react";
import "../../../";

import {
  BtnFecharModal,
  ButtonAside,
  ButtonMenu,
  ContentDashboard,
  MenuDashboard,
} from "../../../components/Dashboard/dashboard";

import VisualizarVisitantes from "../../VisualizarVisitantes";
import { signOut } from '../../../services/security';
import { PorteiroMain } from "./style";
import { useHistory } from 'react-router';
import { IconLogount } from "../Dash-Admin/styles";

function DashboardPorteiros() {

  const history = useHistory();

  const [isVisualizar, setVisualizar] = useState(false);

  function logout(){
    const removeUser = signOut()
    history.push('/Login')
    }

  return (
    <ContentDashboard>
      <MenuDashboard>
        <ButtonMenu className="material-icons" id="home">
          home
        </ButtonMenu>
      </MenuDashboard>

      <PorteiroMain>
        {
          isVisualizar ? (
            <>
              <VisualizarVisitantes>

              </VisualizarVisitantes>
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
      </PorteiroMain>

      <header>
        <IconLogount onClick={() => logout()}/>
      </header>
      <aside>
        <ButtonAside onClick={() => {setVisualizar(true)}}>
          <span className="material-icons">liquor</span>
          <span>Visualizar visitantes</span>
        </ButtonAside>
        <ButtonAside>
          <span className="material-icons">notifications_none</span>
          <span>Telefones</span>
        </ButtonAside>
        <ButtonAside>
          <span className="material-icons">person_add</span>
          <span>Histórico</span>
        </ButtonAside>
      </aside>
    </ContentDashboard>
  );
}

export default DashboardPorteiros;