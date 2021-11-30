import React, { useState } from "react";
import { useHistory } from "react-router";
import "./admin.css";
import "../../../Styles/styles.css";
import { api } from "../../../services/api";
import { signIn } from "../../../services/security";
import InputHoshi from "../../../components/input";
import { Link } from "react-router-dom";
import { mascaraCpf } from "../../../utils";


function RegisterAdmin() {
  
  const history = useHistory();


  const [admin, setAdmin] = useState({
    name:"",
    surname: "",
    cpf:"",
    birth:"",
    email:"",
    password: "",
  });


  const handleCpfAdmin = (e) =>{
    let cpf = e.target.value;
    cpf = mascaraCpf(cpf);
    setAdmin({ ...admin, cpf: cpf });
}


  //eslint-disable-next-line
  const [isLoading,setIsLoading] = useState(false);
  //o comentário assima tem um propósito, *faz com que o código nãe reclame

  const handleInput = (e) => {
   setAdmin({ ...admin, [e.target.id]: e.target.value });
 };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

  try {
    const { name, surname, cpf, birth , email,password} = admin;

    const response = await api.post("/admins", {
      name,
      surname,
      cpf,
      birth,
      email,
      password,
    });


       signIn(response.data);
  
        setIsLoading(false);
  
        history.push("/Login");
      } catch (error) {
        console.error(error);
        alert(error.response.data.error);
        setIsLoading(false);
      }
    };

  return (
    <main>
      <div className="card-post">
        <h1>Registrar admin</h1>
        <div className="line-post"></div>
        <div className="card-body-post">
          <form id="form" onSubmit={handleSubmit} >
            <div className="fields">
              <label>Nome</label>
              <InputHoshi id="name" type="text" value={admin.name} handler={handleInput} />
            </div>

            <div className="fields">
              <label>Sobrenome</label>
              <InputHoshi id="surname" type="text"  name="surname" value={admin.surname}  handler={handleInput} />
  
            </div>

            <div className="fields">
              <label>cpf</label>
              <InputHoshi id="cpf" type="text" name="cpf" value={admin.cpf} handler={handleCpfAdmin} maxLength='14'/> 
            </div>


            <div className="fields">
              <label>Nascimento</label>
              <InputHoshi id="birth" type="date" name="birth"  value={admin.birth} handler={handleInput} />
            </div>

            
            <div className="fields">
              <label>Email</label>
              <InputHoshi id="email" type="text" name="email"value={admin.email} handler={handleInput} />
            </div>

            <div className="fields">
              <label>Senha</label>
              <InputHoshi id="password" type="password" name="password" value={admin.password} handler={handleInput}/>
            </div>

            <div className="btn-post">
              <button type="submit">
                  Finalizar Cadastro
                  <span className="material-icons">
                    check_circle_outline
                  </span>
              </button>
              <Link to="/Login/Admin" >Já possui uma conta?</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default RegisterAdmin;
