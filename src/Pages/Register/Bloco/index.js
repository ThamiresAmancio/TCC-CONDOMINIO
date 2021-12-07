import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./bloco.css";
import "../../../Styles/styles.css";

import { api } from "../../../services/api";
import InputHoshi from "../../../components/input";
import { getUser } from "../../../services/security";


function RegisterBlocos() {
  const history = useHistory();

  const admin = getUser(); 

  console.log(admin)
  const [condominios, setCondominios] = useState([]);

  useEffect(() => {
    api.get(`/condominios`).then(({ data }) => {
      setCondominios(data);
      console.log(admin.adminId)
    });
  }, []);

  const [bloco, setBloco] = useState({
    name: "",
    condominio_id :""
  });

  const [isLoading,setIsLoading] = useState(false);

  const [condominioSelId, setCondominioSelId] = useState(undefined);

  
  const handleInput = (e) => {
    setBloco({ ...bloco, [e.target.id]: e.target.value });
  };

  const handleCondominioSelId = (e) => {
    setCondominioSelId(e.target.value)
  }

  const handleSubmit = async () => {

    setIsLoading(true);

    try {
      const { name} = bloco;

      const response = await api.post(`/blocos`, {
        name,
        condominio_id: condominioSelId
      });

      setIsLoading(false);

      history.push("/Dashboard/Admin");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
      setIsLoading(false);
    }
  };

  return (
    <main>
      <div className="card-post">
        <h1>Registrar Blocos</h1>
        <div className="line-post"></div>
        <div className="card-body-post">
          <form id="form" onSubmit={handleSubmit}>
            <div className="fields">
              <label>Nome</label>
              <InputHoshi
                id="name"
                type="text"
                value={bloco.name}
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

export default RegisterBlocos;
