import React, { useEffect, useState } from "react";
import "./bloco.css";
// import "../../../Styles/styles.css";

import { api } from "../../../services/api";
import { getUser } from "../../../services/security";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AlignSelect,
  BtnSubmite,
  Conteudos,
  SeparatorIputs,
} from "../../../components/Dashboard/dashboard";
import Inputinha from "../../../components/Inputinha";

function RegisterBlocos() {
  const admin = getUser();

  console.log(admin);
  const [condominios, setCondominios] = useState([]);

  useEffect(() => {
    api.get(`/condominios`).then(({ data }) => {
      setCondominios(data);
      console.log(admin.adminId);
    });
  }, []);

  const [bloco, setBloco] = useState({
    name: "",
    condominio_id: "",
  });

  const [condominioSelId, setCondominioSelId] = useState(undefined);

  const handleInput = (e) => {
    setBloco({ ...bloco, [e.target.id]: e.target.value });
  };

  const handleCondominioSelId = (e) => {
    setCondominioSelId(e.target.value);
  };

  console.log(bloco);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name } = bloco;

      const response = await api.post(`/blocos`, {
        name,
        condominio_id: condominioSelId,
      });

      alert("Bloco: " +name+ " cadastrado com com sucesso!");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  return (
    <>
      <ToastContainer />
      <Conteudos>
        <h1>Registrar Blocos</h1>
        <section>
          <form id="form" onSubmit={handleSubmit}>
            <SeparatorIputs>
              <Inputinha
                id="name"
                type="text"
                value={bloco.name}
                handler={handleInput}
                placeholder=" "
                label="Nome"
              />
              <AlignSelect className="box-select select-large">
                <label>Escolha um Condomínio :</label>
                <select
                  id="condominioId"
                  value={condominioSelId}
                  onChange={handleCondominioSelId}
                >
                  <option value="">Selecione</option>
                  {condominios.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </AlignSelect>
            </SeparatorIputs>
          </form>
        </section>
        <BtnSubmite onClick={handleSubmit}>
          Finalizar Cadastro
          <span>check_circle_outline</span>
        </BtnSubmite>
      </Conteudos>
    </>
  );
}

export default RegisterBlocos;