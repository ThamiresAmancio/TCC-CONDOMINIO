import { NavButtonIcon, NavDashboard } from './styles';
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
import {BtnFecharModal, ButtonAside, ContentDashboard, MainDashboard } from '../../../components/Dashboard/dashboard';
import { signOut } from '../../../services/security';
import { IconLogount } from "../Dash-Admin/styles";
import VisualizarMoradores from "../../VisualizarMoradores";

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

    const [isVisualizar, setVisualizar] = useState(false);
    
    function logout(){
    const removeUser = signOut()
    history.push('/Login')
    }

    return (
        <ContentDashboard>
            <StyleGlobals />
            {/* menu lateral */}
            <NavDashboard>
                <NavButtonIcon className="material-icons" id="home" >
                    home
                </NavButtonIcon>
                <NavButtonIcon className="material-icons" >
                    event
                </NavButtonIcon>
                <NavButtonIcon className="material-icons" onClick={() => {
                    setVisualizar(true);
                }}>
                    person_search
                </NavButtonIcon>
            </NavDashboard>
            <MainDashboard id="main">
                {isCadastrandoCondominio ? (
                    <>
                        <REgisterCondominio>

                        </REgisterCondominio>
                        <BtnFecharModal onClick={() => { setIsCadastrandoCondominio(false) }}>
                            X
                        </BtnFecharModal>
                        
                    </>
                ) : (<div hidden></div>)}

                {isCadastrandoBlocos ? (
                    <>
                        <RegisterBlocos>

                        </RegisterBlocos>
                        <BtnFecharModal onClick={() => { setCadastrandoBlocos(false) }}>
                            X
                        </BtnFecharModal>
                    </>
                ) : (<div hidden></div>)}

                {isCadastrandoApartamento ? (
                    <>
                        <RegisterApto>

                        </RegisterApto>
                        <BtnFecharModal onClick={() => { setCadastrandoApartamento(false) }}>
                            X
                        </BtnFecharModal>
                    </>
                ) : (<div hidden></div>)}

                {isCadastrandoMorador ? (
                    <>
                        <RegisterMoradores>

                        </RegisterMoradores>
                        <BtnFecharModal onClick={() => { setCadastrandoMorador(false) }}>
                            X
                        </BtnFecharModal>
                    </>
                ) : (<div hidden></div>)}

                {isCadastrandoSindico ? (
                    <>
                        <RegisterSindico>
                        </RegisterSindico>
                        <BtnFecharModal onClick={() => { setCadastrandoSindico(false) }}>
                            X
                        </BtnFecharModal>
                    </>
                ):(<div hidden></div>)}

                {isCadastrandoPorteiros? (
                    <>
                        <RegisterPorteiros>
                        </RegisterPorteiros>
                        <BtnFecharModal onClick={() => { setCadastrandoPorteiros(false) }}>
                            X
                        </BtnFecharModal>
                    </>
                ):(<div hidden></div>)}

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

            </MainDashboard>
            <header>
                <IconLogount onClick={() => logout()}/>
            </header>
            <aside>
                <ButtonAside onClick={() => { setIsCadastrandoCondominio(true); }}>
                    <span className="material-icons">apartment</span>
                    <span>Cadastrar Condomínio</span>
                </ButtonAside>
                <ButtonAside onClick={() => { setCadastrandoBlocos(true) }}>
                    <span className="material-icons">business</span>
                    <span>Cadastrar Blocos</span>
                </ButtonAside>
                <ButtonAside onClick={() => { setCadastrandoApartamento(true) }}>
                    <span className="material-icons">business</span>
                    <span>Cadastrar Apartamentos</span>
                </ButtonAside>
                <ButtonAside onClick={() => { setCadastrandoMorador(true) }} >
                    <span className="material-icons">person_add</span>
                    <span>Cadastrar Moradores</span>
                </ButtonAside>
                <ButtonAside onClick={() => { setCadastrandoSindico(true) }} >
                    <span className="material-icons">person_add</span>
                    <span>Cadastrar Síndicos</span>
                </ButtonAside>
                <ButtonAside onClick={()=> {setCadastrandoPorteiros(true) }}>
                    <span className="material-icons">person_add</span>
                    <span>Cadastrar Porteiros</span>
                </ButtonAside>
            </aside>
        </ContentDashboard>
    );
}

export default AdminDashboard;