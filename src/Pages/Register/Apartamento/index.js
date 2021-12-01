import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./apto.css";
import "../../../Styles/styles.css";
import { api } from "../../../services/api";
import InputHoshi from "../../../components/input";
import { getUser } from "../../../services/security";
function RegisterApto() {
  const admin = getUser();
  const [blocos, setBlocos] = useState([]);
  useEffect(() => {
    try {
      api.get(`/blocos/${admin.adminId}`).then(({ data }) => {
        setBlocos(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const history = useHistory();
  console.log(blocos)
  
  
  const [apartamentos, setApartamentos] = useState({
    numero: "",
    bloco_id: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [blocoId, setBlocoId] = useState(undefined);
  const handleInput = (e) => {
    setApartamentos({ ...apartamentos, [e.target.id]: e.target.value });
  };
  const handleBlocoSelId = (e) => {
    setBlocoId(e.target.value);
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const {numero} = apartamentos;
      const response = await api.post(`/apartamentos`, {
        numero,
        bloco_id: blocoId,
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
        <h1>Registrar Apartamentos</h1>
        <div className="line-post"></div>
        <div className="card-body-post">
          <form id="form" onSubmit={handleSubmit}>
            <div className="fields">
              <label>Nº Apto</label>
              <InputHoshi
                id="numero"
                type="text"
                value={apartamentos.numero}
                handler={handleInput}
              />
            </div>
            <div className="fields">
              <label>
                Escolha um Bloco :
                <select
                  id={blocos.condominio_id}
                  value={blocoId}
                  onChange={handleBlocoSelId}
                >
                  <option value="">Selecione</option>
                  {blocos.length != 0 ? (
                    blocos.map((resposta) => (
                      <option id={resposta.id}>{resposta.name}</option>
                    ))
                  ) : (
                    <option>teste</option>
                  )}
                </select>
              </label>
            </div>
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
export default RegisterApto;