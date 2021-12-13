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

  console.log(apartamentos)

  const [blocoSelId, setBlocoSelId] = useState(undefined);

  const handleInput = (e) => {
    setApartamentos({ ...apartamentos, [e.target.id]: e.target.value });
  };

  /* select */
  const handleBlocoSelId = (e) => {
    setBlocoSelId(e.target.value);
  };

  const handleSubmit = async (e) => {

    try {
      const {numero} = apartamentos;
      const response = await api.post(`/apartamentos`, {
        numero,
        bloco_id: blocoSelId,
      });
      console.log(response)

      alert('Apartamento Cadastrado');
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
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
                  id='blocoId'
                  value={blocoSelId}
                  onChange={handleBlocoSelId}
                >
                  <option value="">Selecione</option>
                  {blocos.map((b)=>
                    (
                      <option key={b.id} value={b.id}>
                      {b.name}
                    </option>
                    )
                  )}
                </select>
              </label>
            </div>
          </form>
      </div>
      <div className="btn-post" onClick={() =>{ handleSubmit()}}>
              <button>
                Finalizar Cadastro
                <span className="material-icons">check_circle_outline</span>
              </button>
            </div>
        </div>
    </main>
  );
}
export default RegisterApto;