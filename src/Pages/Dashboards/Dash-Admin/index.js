import { ButtonActionDashboard, ContainerDashboard, NavButtonIcon, NavDashboard } from './styles';
import '../../../Styles/icons.css';
import '../../../StylesGlobal';
import { StyleGlobals } from '../../../StylesGlobal';
import { useHistory } from 'react-router';
import { useState } from 'react';
import './dashboard.css';
import REgisterCondominio from '../../Register/Condominio';
import RegisterMoradores from '../../Register/Morador';
import RegisterBlocos from '../../Register/Bloco';
import RegisterApto from '../../Register/Apartamento';
import RegisterSindico from '../../Register/Sindico';
import RegisterPorteiros from '../../Register/Porteiro';


function AdminDashboard() {
    const history = useHistory();

    /* Cadastrando um condomínio */
    let [isCadastrandoCondominio, setIsCadastrandoCondominio] = useState(false);

    /* Cadastrando Bloco */
    let [isCadastrandoBlocos, setCadastrandoBlocos] = useState(false);

    /* Cadastrando Apartamento */
    let [isCadastrandoApartamento, setCadastrandoApartamento] = useState(false);

    /* Cadastrando moradores */
    let [isCadastrandoMorador, setCadastrandoMorador] = useState(false);

    /* Cadastrando síndico */
    let [isCadastrandoSindico, setCadastrandoSindico] = useState(false);

    /* Cadastrando Porteiros */
    let [isCadastrandoPorteiros, setCadastrandoPorteiros] = useState(false);

    return (
        <ContainerDashboard>
            <StyleGlobals />
            {/* menu lateral */}
            <NavDashboard>
                <NavButtonIcon className="material-icons" id="home" >
                    home
                </NavButtonIcon>
                <NavButtonIcon className="material-icons" id="noti" >
                    notification_important
                </NavButtonIcon>
                <NavButtonIcon className="material-icons" >
                    event
                </NavButtonIcon>
                <NavButtonIcon className="material-icons" >
                    question_answer
                </NavButtonIcon>
                <NavButtonIcon className="material-icons" >
                    voice_chat
                </NavButtonIcon>
                <NavButtonIcon className="material-icons" >
                    feedback
                </NavButtonIcon>
            </NavDashboard>
            <main id="main">
                {isCadastrandoCondominio ? (
                    <>
                        <REgisterCondominio>

                        </REgisterCondominio>
                        <button className="btn-close-modal" onClick={() => { setIsCadastrandoCondominio(false) }}>
                            fechar cadastro
                        </button>
                        
                    </>
                ) : (<div hidden></div>)}

                {isCadastrandoBlocos ? (
                    <>
                        <RegisterBlocos>

                        </RegisterBlocos>
                        <button className="btn-close-modal" onClick={() => { setCadastrandoBlocos(false) }}>
                            fechar cadastro
                        </button>
                    </>
                ) : (<div hidden></div>)}

                {isCadastrandoApartamento ? (
                    <>
                        <RegisterApto>

                        </RegisterApto>
                        <button className="btn-close-modal" onClick={() => { setCadastrandoApartamento(false) }}>
                            fechar cadastro
                        </button>
                    </>
                ) : (<div hidden></div>)}

                {isCadastrandoMorador ? (
                    <>
                        <RegisterMoradores>

                        </RegisterMoradores>
                        <button className="btn-close-modal" onClick={() => { setCadastrandoMorador(false) }}>
                            fechar cadastro
                        </button>
                    </>
                ) : (<div hidden></div>)}

                {isCadastrandoSindico ? (
                    <>
                        <RegisterSindico>
                        </RegisterSindico>
                        <button className="btn-close-modal" onClick={() => { setCadastrandoSindico(false) }}>
                            fechar cadastro
                        </button>
                    </>
                ):(<div hidden></div>)}

                {isCadastrandoPorteiros? (
                    <>
                        <RegisterPorteiros>
                        </RegisterPorteiros>
                        <button className="btn-close-modal" onClick={() => { setCadastrandoPorteiros(false) }}>
                            fechar cadastro
                        </button>
                    </>
                ):(<div hidden></div>)}

            </main>
            <header>
            </header>
            <aside>
                <ButtonActionDashboard onClick={() => { setIsCadastrandoCondominio(true); }}>
                    <span className="material-icons">apartment</span>
                    <span>Cadastrar Condomínio</span>
                </ButtonActionDashboard>
                <ButtonActionDashboard onClick={() => { setCadastrandoBlocos(true) }}>
                    <span className="material-icons">business</span>
                    <span>Cadastrar Blocos</span>
                </ButtonActionDashboard>
                <ButtonActionDashboard onClick={() => { setCadastrandoApartamento(true) }}>
                    <span className="material-icons">business</span>
                    <span>Cadastrar Apartamentos</span>
                </ButtonActionDashboard>
                <ButtonActionDashboard onClick={() => { setCadastrandoMorador(true) }} >
                    <span className="material-icons">person_add</span>
                    <span>Cadastrar Moradores</span>
                </ButtonActionDashboard>
                <ButtonActionDashboard onClick={() => { setCadastrandoSindico(true) }} >
                    <span className="material-icons">person_add</span>
                    <span>Cadastrar Síndicos</span>
                </ButtonActionDashboard>
                <ButtonActionDashboard onClick={()=> {setCadastrandoPorteiros(true) }}>
                    <span className="material-icons">person_add</span>
                    <span>Cadastrar Porteiros</span>
                </ButtonActionDashboard>
            </aside>
        </ContainerDashboard>
    );
}

export default AdminDashboard;