import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./morador.css";
import "../../../Styles/styles.css";

import { api } from "../../../services/api";
import { signIn } from "../../../services/security";
import InputHoshi from "../../../components/input";
import { Link } from "react-router-dom";

import { mascaraCpf } from "../../../utils";
function RegisterMoradores() {
  
  const history = useHistory();

  const [apartamentos, setApartamentos] = useState([]);

  useEffect(() => {
    api.get("/apartamentos").then(({ data }) => {
      setApartamentos(data);
    });
  }, []);

  console.log(apartamentos)

  const [morador, setMorador] = useState({
    name:"",
    surname: "",
    cpf:"",
    birth:"",
    email:"",
    password: "",
    apartamento_id :""
  });

  const handleCpf = (e) =>{
    let cpf = e.target.value;
    cpf = mascaraCpf(cpf);
    setMorador({ ...morador, cpf: cpf });
}


  const [isLoading,setIsLoading] = useState(false);

  const [apartamentoId, setApartamentoId] = useState(undefined)


  const handleInput = (e) => {
   setMorador({ ...morador, [e.target.id]: e.target.value });
 };

 const hadleSelect = (e) => {
   setApartamentoId(e.target.value)
 }

const handleSubmit = async (e) => {
  e.preventDefault();

  setIsLoading(true);


  try {
    const { name, surname, cpf, birth , email,password} = morador;

    const response = await api.post("/moradores", {
      name,
      surname,
      cpf,
      birth,
      email,
      password,
      apartamento_id : apartamentoId
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
        <h1>Registrar Morador</h1>
        <div className="line-post"></div>
        <div className="card-body-post">
          <form id="form" onSubmit={handleSubmit} >
            <div className="fields">
              <label>Nome</label>
              <InputHoshi id="name" type="text" value={morador.name} handler={handleInput} />
            </div>

            <div className="fields">
              <label>Sobrenome</label>
              <InputHoshi id="surname" type="text"  name="surname" value={morador.surname}  handler={handleInput} />
  
            </div>

            <div className="fields">
              <label>cpf</label>
              <InputHoshi id="cpf" type="text" name="cpf" value={morador.cpf} handler={handleCpf} maxLength='14'/> 
            </div>


            <div className="fields">
              <label>Nascimento</label>
              <InputHoshi id="birth" type="date" name="birth"  value={morador.birth} handler={handleInput} />
            </div>

            
            <div className="fields">
              <label>Email</label>
              <InputHoshi id="email" type="text" name="email"value={morador.email} handler={handleInput} />
            </div>

            <div className="fields">
              <label>Senha</label>
              <InputHoshi id="password" type="password" name="password" value={morador.password} handler={handleInput}/>
            </div>
            <label>
              Escolha um Nº de Apartamento :
              <select id={apartamentos.apartamento_id} value={apartamentoId} onChange={hadleSelect}> 
                <option value="">Selecione</option>
                {apartamentos.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.numero}
                  </option>
                ))}
              </select>
            </label>
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

export default RegisterMoradores;
