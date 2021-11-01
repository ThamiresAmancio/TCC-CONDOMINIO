import { ButtonActionDashboard, ContainerDashboard, NavButtonIcon, NavDashboard } from './styles';
import '../../../Styles/icons.css';
import '../../../StylesGlobal';
import { StyleGlobals } from '../../../StylesGlobal';
import  $  from  "jquery" ;
import InputHoshi from '../../../components/input';
import { useHistory } from 'react-router';

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

    const history = useHistory();

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
            <ButtonActionDashboard onClick={()=> history.push("/Register/Condominio")}>
                  <span className="material-icons">apartment</span>
                  <span>Cadastrar Condomínio</span>
              </ButtonActionDashboard>
              <ButtonActionDashboard onClick={()=> history.push("/Register/Blocos")}>
                  <span className="material-icons">business</span>
                  <span>Cadastrar Blocos</span>
              </ButtonActionDashboard>
              <ButtonActionDashboard onClick={()=> history.push("/Register/Apartamentos")}>
                  <span className="material-icons">business</span>
                  <span>Cadastrar Apartamentos</span>
              </ButtonActionDashboard>
              <ButtonActionDashboard onClick={()=> history.push("/Register/Moradores")} >
                  <span className="material-icons">person_add</span>
                  <span>Cadastrar Moradores</span>
              </ButtonActionDashboard>
              <ButtonActionDashboard onClick={()=> history.push("/Register/Sindicos")} >
                  <span className="material-icons">person_add</span>
                  <span>Cadastrar Síndicos</span>
              </ButtonActionDashboard>
              <ButtonActionDashboard onClick={()=> history.push("/Register/Porteiros")}>
                  <span className="material-icons">person_add</span>
                  <span>Cadastrar Porteiros</span>
              </ButtonActionDashboard>
            </aside>
        </ContainerDashboard>
    );
}

export default AdminDashboard;