import { Link , useHistory } from 'react-router-dom';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BodyLoginPerfils, LoginLeftSide, LogoTowers } from '../styles';
import './styles';
import { RightSideLogin } from './styles';
import { api } from "../../../services/api";
import { signIn } from "../../../services/security"
import Inputinha from '../../../components/Inputinha';


function LoginPorteiros() {
    const history = useHistory();

    const [message, setMessage] = useState(undefined);

    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/sessionsPorteiros", login);

      signIn(response.data);

      history.push("/Dashboard/Porteiros");
      
    } catch (error) {
      console.error(error);
      toast.error("usuário e/ou senha inválidos")
      setMessage({ title: "Ops...", description: error.response.data.error });
    }
  };

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

    return (
        <BodyLoginPerfils>
            <ToastContainer/>
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
            <RightSideLogin>
                <h1>Faça seu Login</h1>
                <alert message={message} type="error" handleClose={setMessage}/>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label for="email">Email:</label>
                        <Inputinha placeholder=" " id="email" name="email"  type="email" value={login.email} handler={handleInput} required />
                    </div>
                    <div style={{ marginBottom: '10%' }}>
                        <label for="password">Senha:</label>
                        <Inputinha placeholder=" " id="password" name="passwor" type="password" value={login.password} handler={handleInput} required/>
                    </div>
                    <button style={{marginBottom: '2%'}}>continuar</button>

                    <Link to="/" style={{ fontSize: '1.2rem' }}>Voltar para home</Link>
                </form>
            </RightSideLogin>
        </BodyLoginPerfils>
    );
}

export default LoginPorteiros;
