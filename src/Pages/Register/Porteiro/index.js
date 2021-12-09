import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./porteiros.css";
import "../../../Styles/styles.css";
import { api } from "../../../services/api";
import InputHoshi from "../../../components/input";
import { mascaraCel } from "../../../utils";
import { getUser } from "../../../services/security";


function RegisterPorteiros() {
  const history = useHistory();

  const admin = getUser();
  const [condominios, setCondominios] = useState([]);

  useEffect(() => {
    api.get(`/condominios`).then(({ data }) => {
      setCondominios(data);
    });
  }, []);

  console.log(condominios[0])

  const [porteiros, setPorteiros] = useState({
    name: "",
    telephone: "",
    email: "",
    password: "",
    condominio_id: ""
  });


  const handleCell = (e) =>{
    let cell = e.target.value;
    cell = mascaraCel(cell);
    setPorteiros({ ...porteiros, telephone: cell });
}
  

  const [isLoading, setIsLoading] = useState(false);

  const [condominioSelId, setCondominioSelId] = useState(undefined);

  
  const handleInput = (e) => {
    setPorteiros({ ...porteiros, [e.target.id]: e.target.value });
  };

  const handleCondominioSelId = (e) => {
    setCondominioSelId(e.target.value)
  }

  const handleSubmit = async (e) => {

    e.preventDefault();
    
    setIsLoading(true);

    try {
      const { name, telephone, email, password , condominio_id } = porteiros;

      const response = await api.post(`/porteiros/`, {
        name,
        telephone,
        email,
        password,
        condominio_id: condominioSelId
      });
      
      alert('Porteiro Cadastrado');
     
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
          <form id="form" onSubmit={handleSubmit}>
            <div className="fields">
              <label>Nome</label>
              <InputHoshi
                id="name"
                type="text"
                value={porteiros.name}
                handler={handleInput}
              />
            </div>

            <div className="fields">
              <label>Telefone</label>
              <InputHoshi
                id="telephone"
                type="text"
                value={porteiros.telephone}
                handler={handleCell}
              />
            </div>

            <div className="fields">
              <label>Email</label>
              <InputHoshi
                id="email"
                type="text"
                value={porteiros.email}
                handler={handleInput}
              />
            </div>

            <div className="fields">
              <label>Senha</label>
              <InputHoshi
                id="password"
                type="password"
                value={porteiros.password}
                handler={handleInput}
              />
            </div>
            <label>
              Escolha um Condomínio :
              <select id={condominios.condominio_id} value={condominioSelId} onChange={handleCondominioSelId}> 
                <option value="">Selecione</option>
                {condominios.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>
            <div className="btn-post">
              <button type="submit">
                Finalizar Cadastro
                <span className="material-icons">check_circle_outline</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default RegisterPorteiros;
