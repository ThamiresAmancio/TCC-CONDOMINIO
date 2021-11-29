import { useState } from "react";
import "../../../";

import {
  BtnFecharModal,
  ButtonAside,
  ButtonMenu,
  ContentDashboard,
  HeaderDashboard,
  MenuDashboard,
} from "../../../components/Dashboard/dashboard";

import VisualizarVisitantes from "../../VisualizarVisitantes";
import { signOut } from '../../../services/security';
import { PorteiroMain } from "./style";
import { useHistory } from 'react-router';
import { IconLogount } from "../Dash-Admin/styles";
import { getUser } from "../../../services/securityMorador";

function DashboardPorteiros() {

  const userPorteiro = getUser();
  console.log(userPorteiro);

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

      <HeaderDashboard>
        <div>
          <figure className="material-icons">
              account_circle
          </figure>
          <div>
              <h1>Portaria</h1>
              <h3>porteiro@email.com</h3>
          </div>
        </div>
        <IconLogount onClick={() => logout()}/>
      </HeaderDashboard>
      <aside>
        <ButtonAside onClick={() => {setVisualizar(true)}}>
          <span className="material-icons">supervised_user_circle</span>
          <span>Visualizar visitantes</span>
        </ButtonAside>
        <ButtonAside>
          <span className="material-icons">call_end</span>
          <span>Telefones</span>
        </ButtonAside>
        <ButtonAside>
          <span className="material-icons">history</span>
          <span>Histórico</span>
        </ButtonAside>
      </aside>
    </ContentDashboard>
  );
}

export default DashboardPorteiros;