import React, { useEffect, useState } from "react";
// import "./morador.css";
import "../../../Styles/styles.css";

import { api } from "../../../services/api";
import { getUser } from "../../../services/security";

import { mascaraCpf } from "../../../utils";
import {
  AlignSelect,
  BtnSubmite,
  Conteudos,
  SeparatorIputs,
} from "../../../components/Dashboard/dashboard";
import Inputinha from "../../../components/Inputinha";
function RegisterMoradores() {
  const admin = getUser();

  const [apartamentos, setApartamentos] = useState([]);

  useEffect(() => {
    api.get(`/apartamentos/${admin.adminId}`).then(({ data }) => {
      setApartamentos(data);
    });
  }, []);

  console.log(apartamentos);

  const [morador, setMorador] = useState({
    name: "",
    surname: "",
    cpf: "",
    birth: "",
    email: "",
    password: "",
    apartamento_id: "",
  });

  const handleCpf = (e) => {
    let cpf = e.target.value;
    cpf = mascaraCpf(cpf);
    setMorador({ ...morador, cpf: cpf });
  };

  const [apartamentoId, setApartamentoId] = useState(undefined);

  const handleInput = (e) => {
    setMorador({ ...morador, [e.target.id]: e.target.value });
  };

  const hadleSelect = (e) => {
    setApartamentoId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name, surname, cpf, birth, email, password } = morador;

      const response = await api.post("/moradores", {
        name,
        surname,
        cpf,
        birth,
        email,
        password,
        apartamento_id: apartamentoId,
      });

      alert("Morador: " +name+" "+ +surname+", cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  return (
    <Conteudos>
      <h1>Registrar Morador</h1>
      <section>
        <form id="form" onSubmit={handleSubmit}>
          <SeparatorIputs>
            <Inputinha
              label="Nome:"
              placeholder=" "
              id="name"
              type="text"
              value={morador.name}
              handler={handleInput}
            />

            <Inputinha
              label="Sobrenome:"
              placeholder=" "
              id="surname"
              type="text"
              name="surname"
              value={morador.surname}
              handler={handleInput}
            />

            <Inputinha
              label="CPF:"
              placeholder=" "
              id="cpf"
              type="text"
              name="cpf"
              value={morador.cpf}
              handler={handleCpf}
              maxLength="14"
            />

            <Inputinha
              label="Nascimento:"
              placeholder=" "
              id="birth"
              type="date"
              name="birth"
              value={morador.birth}
              handler={handleInput}
            />

            <Inputinha
              label="Email:"
              placeholder=" "
              id="email"
              type="text"
              name="email"
              value={morador.email}
              handler={handleInput}
            />

            <Inputinha
              label="Senha:"
              placeholder=" "
              id="password"
              type="password"
              name="password"
              value={morador.password}
              handler={handleInput}
            />

            <AlignSelect className="box-select select-large">
              <label>Escolha um Condomínio :</label>
              <select
                id="apartamentoId"
                value={apartamentoId}
                onChange={hadleSelect}
              >
                <option value="">Selecione</option>
                {apartamentos.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.numero}
                  </option>
                ))}
              </select>
            </AlignSelect>
          </SeparatorIputs>
        </form>
      </section>
      <BtnSubmite type="submit" onClick={handleSubmit}>
        Finalizar Cadastro
        <span>check_circle_outline</span>
      </BtnSubmite>
    </Conteudos>
  );
}

export default RegisterMoradores;