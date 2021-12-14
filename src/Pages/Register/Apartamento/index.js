import React, { useEffect, useState } from "react";
import "./apto.css";
import { api } from "../../../services/api";
import { getUser } from "../../../services/security";
import {
  AlignSelect,
  BtnSubmite,
  Conteudos,
  SeparatorIputs,
} from "../../../components/Dashboard/dashboard";
import Inputinha from "../../../components/Inputinha";
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

  console.log(blocos);

  const [apartamentos, setApartamentos] = useState({
    numero: "",
    bloco_id: "",
  });

  console.log(apartamentos);

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
      const { numero } = apartamentos;
      const response = await api.post(`/apartamentos`, {
        numero,
        bloco_id: blocoSelId,
      });
      console.log(response);

      alert("Apartamento: " +numero+ ", cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  return (
    <Conteudos>
      <h1>Registrar Apartamentos</h1>
      <section>
        <form id="form" onSubmit={handleSubmit}>
          <SeparatorIputs>
            <Inputinha
              id="numero"
              type="text"
              value={apartamentos.numero}
              handler={handleInput}
              placeholder=" "
              label="Nº Apto"
            />
            <AlignSelect className="box-select">
              <label>Escolha um Bloco :</label>
              <select
                id="blocoId"
                value={blocoSelId}
                onChange={handleBlocoSelId}
              >
                <option value="">Selecione</option>
                {blocos.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
            </AlignSelect>
          </SeparatorIputs>
        </form>
      </section>
      <BtnSubmite
        onClick={() => {
          handleSubmit();
        }}
      >
        Finalizar Cadastro
        <span>check_circle_outline</span>
      </BtnSubmite>
    </Conteudos>
  );
}

export default RegisterApto;