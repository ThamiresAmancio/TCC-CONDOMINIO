import { Link } from "react-router-dom";
import '../../Styles/grid.css';
import '../../Styles/styles.css';
import { BodyLoginPerfils, CardIconePerfil, LoginLeftSide, LoginRightSide, LogoTowers } from "./styles";

function Login(){
    return(
        <BodyLoginPerfils>
            <LoginLeftSide>
                <LogoTowers>
                    <figure>

                    </figure>
                </LogoTowers>
                <h1 style={{marginBottom: '1%'}}>Towers Admin</h1>
                <h2>O seu administrador de condomínio!</h2>

                <div className="footer-left-side-login">
                    <span className="material-icons">
                        language
                    </span>
                    <p>
                        Deixe seu condomínio mais otimizado e automatizado
                    </p>
                </div>
            </LoginLeftSide>
            <LoginRightSide>
                <h1>Towers Admin</h1>
                
                <CardIconePerfil>
                    <span className="material-icons">
                        apartment
                    </span>
                    <Link to="/Login/Morador">
                        Morador
                    </Link>
                </CardIconePerfil>
                <CardIconePerfil>
                    <span className="material-icons">
                        person
                    </span>
                    <Link to="/Login/Sindico">
                        Sindico
                    </Link>
                </CardIconePerfil>
                <CardIconePerfil>
                    <span className="material-icons">
                        contact_phone
                    </span>
                    <Link to="/Login/Portaria">
                        Portaria
                    </Link>
                </CardIconePerfil>
                <CardIconePerfil>
                    <span className="material-icons">
                        settings
                    </span>
                    <Link to="/Login/Admin">
                        Administrador
                    </Link>
                </CardIconePerfil>
            </LoginRightSide>
        </BodyLoginPerfils>
    );
}

export default Login;