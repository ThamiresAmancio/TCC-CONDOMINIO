import { Link } from 'react-router-dom';
import { RightSideLoginAdmin } from '../LoginAdmin/styles';
import { BodyLoginPerfils, LoginLeftSide, LogoTowers } from '../styles';
function LoginUser() {
    return (
        <BodyLoginPerfils>
            <LoginLeftSide>
                <LogoTowers>
                    <figure>

                    </figure>
                </LogoTowers>
                <h1 style={{ marginBottom: '1%' }}>Towers Admin</h1>
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
            <RightSideLoginAdmin>
                <h1>Faça seu Login</h1>
                <form>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label for="emailAdmin">Email:</label>
                        <input id="emailAdmin" name="emailAdmin" type="email" />
                    </div>
                    <div style={{ marginBottom: '10%' }}>
                        <label for="passwordAdmin">Senha:</label>
                        <input id="passwordAdmin" name="passwordAdmin" type="password" />
                    </div>
                    <button style={{marginBottom: '2%'}}>continuar</button>
                    <Link to="/" style={{ fontSize: '1.2rem'}}>Voltar para home</Link>
                </form>
            </RightSideLoginAdmin>
        </BodyLoginPerfils>
    );
}

export default LoginUser;