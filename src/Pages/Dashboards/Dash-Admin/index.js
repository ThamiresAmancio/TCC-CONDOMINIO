import { ButtonActionDashboard, ContainerDashboard, NavButtonIcon, NavDashboard } from './styles';
import '../../../Styles/icons.css';
import '../../../StylesGlobal';
import { StyleGlobals } from '../../../StylesGlobal';
import  $  from  "jquery" ;
import InputHoshi from '../../../components/input';

function AdminDashboard(){

    $( "body" ).on( "click", "#home", function() {
        $("main").empty().append(`
        <form id="formSindico" style={{backgroundColor: 'green'}}>
        <input placeholder="teste" />
    </form> `);  
    });


    $( "body" ).on( "click", "#noti", function() {
        $("#formSindico").show();
    });

    return(
        <ContainerDashboard>
            <StyleGlobals/>
            {/* menu lateral */}
            <NavDashboard>
                <NavButtonIcon className="material-icons" id="home">
                    home
                </NavButtonIcon>
                <NavButtonIcon className="material-icons" id="noti">
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
            <main id="main">
                

                <form id="formSindico" style={{backgroundColor: 'green'}} hidden>
                    <InputHoshi id="input" label="Nome Terciario" value="Carine" />
                    <InputHoshi id="" label="Nome" value="Brayan" />
                </form> 
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