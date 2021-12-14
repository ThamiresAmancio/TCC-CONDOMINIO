import React, { useEffect, useState } from "react";
import "./sindico.css";
import "../../../Styles/styles.css";

import { api } from "../../../services/api";
import { getUser } from "../../../services/security";
import InputHoshi from "../../../components/input";
import { mascaraCpf } from "../../../utils";
import {
  AlignSelect,
  BtnSubmite,
  Conteudos,
  SeparatorIputs,
} from "../../../components/Dashboard/dashboard";
import Inputinha from "../../../components/Inputinha";

function RegisterSindico() {
  const admin = getUser();

  const [apartamentos, setApartamentos] = useState([]);

  useEffect(() => {
    api.get(`/apartamentos/${admin.adminId}`).then(({ data }) => {
      setApartamentos(data);
      console.log(data);
    });
  }, []);

  console.log(apartamentos);

  const [sindico, setSindico] = useState({
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
    setSindico({ ...sindico, cpf: cpf });
  };

  const [apartamentoId, setApartamentoId] = useState(undefined);

  const handleInput = (e) => {
    setSindico({ ...sindico, [e.target.id]: e.target.value });
  };

  const hadleSelect = (e) => {
    setApartamentoId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, surname, cpf, birth, email, password } = sindico;

      const response = await api.post("/sindicos", {
        name,
        surname,
        cpf,
        birth,
        email,
        password,
        apartamento_id: apartamentoId,
      });
      alert("Síndico: " +name+" "+surname+ ", cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  return (
    <Conteudos>
      <h1>Registrar Síndico</h1>
      <section>
        <form id="form" onSubmit={handleSubmit}>
          <SeparatorIputs>
            <Inputinha
              placeholder=" "
              label="Nome:"
              id="name"
              type="text"
              value={sindico.name}
              handler={handleInput}
            />

            <Inputinha
              placeholder=" "
              label="Sobrenome:"
              id="surname"
              type="text"
              name="surname"
              value={sindico.surname}
              handler={handleInput}
            />

            <Inputinha
              placeholder=" "
              label="CPF:"
              id="cpf"
              type="text"
              name="cpf"
              value={sindico.cpf}
              handler={handleCpf}
              maxLength="14"
            />

            <Inputinha
              placeholder=" "
              label="Nascimento:"
              id="birth"
              type="date"
              name="birth"
              value={sindico.birth}
              handler={handleInput}
            />

            <Inputinha
              placeholder=" "
              label="Email:"
              id="email"
              type="text"
              name="email"
              value={sindico.email}
              handler={handleInput}
            />

            <Inputinha
              placeholder=" "
              label="Senha:"
              id="password"
              type="password"
              name="password"
              value={sindico.password}
              handler={handleInput}
            />
            <AlignSelect className="box-select select-large">
              <label>Escolha um Nº de Apartamento :</label>
              <select
                id={apartamentos.apartamento_id}
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

export default RegisterSindico;