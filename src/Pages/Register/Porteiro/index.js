import React, { useState } from "react";
import { useHistory} from "react-router";
import "./porteiros.css";
import "../../../Styles/styles.css";

import { api } from "../../../services/api";
import { getUser} from "../../../services/security";
import InputHoshi from "../../../components/input";


function RegisterPorteiros() {
  
  const history = useHistory();

  const condominio = getUser()

  const [porteiros, setPorteiros] = useState({
    name:"",
    telephone: "",
    email:"",
    password:"",
  });

  const [isLoading,setIsLoading] = useState(false);

  const handleInput = (e) => {
   setPorteiros({ ...porteiros, [e.target.id]: e.target.value });
 };

const handleSubmit = async (e) => {
  e.preventDefault();

  setIsLoading(true);

  try {
    const { name, telephone, email, password } = porteiros;

    const response = await api.post(`/porteiros/${condominio.condominioId}`,{

      name,
      telephone,
      email,
      password,
    });


        setIsLoading(false);

        history.push("/");
      } catch (error) {
        console.error(error);
        alert(error.response.data.error);
        setIsLoading(false);
      }
    };

  return (
    <main>
      <div className="card-post">
        <h1>Registrar Porteiros</h1>
        <div className="line-post"></div>
        <div className="card-body-post">
          <form id="form" onSubmit={handleSubmit} >
            <div className="fields">
              <label>Nome</label>
              <InputHoshi id="name" type="text" value={porteiros.name} handler={handleInput} />
            </div>

            <div className="fields">
              <label>Telefone</label>
              <InputHoshi id="telephone" type="text"   value={porteiros.telephone}  handler={handleInput} />
  
            </div>

            <div className="fields">
              <label>Email</label>
              <InputHoshi id="email" type="text" value={porteiros.email} handler={handleInput} />
            </div>


            <div className="fields">
              <label>Senha</label>
              <InputHoshi id="password" type="password" value={porteiros.password} handler={handleInput} />
            </div>
            <div className="btn-post">
              <button type="submit">
                  Finalizar Cadastro
                  <span className="material-icons">
                    check_circle_outline
                  </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default RegisterPorteiros;
