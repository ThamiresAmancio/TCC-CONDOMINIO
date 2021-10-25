import { ButtonActionDashboard, ContainerDashboard, NavButtonIcon, NavDashboard } from './styles';
import '../../../Styles/icons.css';
import '../../../StylesGlobal';
import { StyleGlobals } from '../../../StylesGlobal';

function AdminDashboard(){
    return(
        <ContainerDashboard>
            <StyleGlobals/>
            {/* menu lateral */}
            <NavDashboard>
                <NavButtonIcon className="material-icons">
                    home
                </NavButtonIcon>
                <NavButtonIcon className="material-icons">
                    notification_important
                </NavButtonIcon>
                <NavButtonIcon className="material-icons">
                    event
                </NavButtonIcon>
                <NavButtonIcon className="material-icons">
                    question_answer
                </NavButtonIcon>
                <NavButtonIcon className="material-icons">
                    voice_chat
                </NavButtonIcon>
                <NavButtonIcon className="material-icons">
                    feedback
                </NavButtonIcon>
            </NavDashboard>
            <main>
                main
            </main>
            <header>
            </header>
            <aside>
              <ButtonActionDashboard>
                  <span className="material-icons">person_add</span>
                  <span>Cadastrar Morador</span>
              </ButtonActionDashboard>
              <ButtonActionDashboard>
                  <span className="material-icons">person_add</span>
                  <span>Cadastrar Porteiro</span>
              </ButtonActionDashboard>
              <ButtonActionDashboard>
                  <span className="material-icons">person_add</span>
                  <span>Cadastrar Síndico</span>
              </ButtonActionDashboard>
              <ButtonActionDashboard>
                  <span className="material-icons">apartment</span>
                  <span>Cadastrar Condomínio</span>
              </ButtonActionDashboard>
            </aside>
        </ContainerDashboard>
    );
}

export default AdminDashboard;