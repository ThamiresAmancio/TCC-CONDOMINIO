import React, { useEffect, useState } from "react";
import "../../../Styles/styles.css";
import { api } from "../../../services/api";
import { mascaraCel } from "../../../utils";
import {
  AlignSelect,
  BtnSubmite,
  Conteudos,
  SeparatorIputs,
} from "../../../components/Dashboard/dashboard";
import Inputinha from "../../../components/Inputinha";

function RegisterPorteiros() {
  const [condominios, setCondominios] = useState([]);

  useEffect(() => {
    api.get(`/condominios`).then(({ data }) => {
      setCondominios(data);
    });
  }, []);

  console.log(condominios[0]);

  const [porteiros, setPorteiros] = useState({
    name: "",
    telephone: "",
    email: "",
    password: "",
    condominio_id: "",
  });

  const handleCell = (e) => {
    let cell = e.target.value;
    cell = mascaraCel(cell);
    setPorteiros({ ...porteiros, telephone: cell });
  };

  const [condominioSelId, setCondominioSelId] = useState(undefined);

  const handleInput = (e) => {
    setPorteiros({ ...porteiros, [e.target.id]: e.target.value });
  };

  const handleCondominioSelId = (e) => {
    setCondominioSelId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name, telephone, email, password, condominio_id } = porteiros;

      const response = await api.post(`/porteiros/`, {
        name,
        telephone,
        email,
        password,
        condominio_id: condominioSelId,
      });

      alert("Porteiro: "+name+", cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  return (
    <Conteudos>
      <h1>Registrar Porteiro</h1>
      <section>
        <form id="form" onSubmit={handleSubmit}>
          <SeparatorIputs>
            <Inputinha
              label="Nome:"
              placeholder=" "
              id="name"
              type="text"
              value={porteiros.name}
              handler={handleInput}
            />

            <Inputinha
              label="Telefone:"
              placeholder=" "
              id="telephone"
              type="text"
              value={porteiros.telephone}
              handler={handleCell}
            />

            <Inputinha
              label="Email:"
              placeholder=" "
              id="email"
              type="text"
              value={porteiros.email}
              handler={handleInput}
            />

            <Inputinha
              label="Senha:"
              placeholder=" "
              id="password"
              type="password"
              value={porteiros.password}
              handler={handleInput}
            />

            <AlignSelect className="box-select select-large">
              <label>Escolha um Condomínio :</label>
              <select
                id={condominios.condominio_id}
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

          {/* <div className="fields">
            <label>Nome</label>
            <InputHoshi
              id="name"
              type="text"
              value={porteiros.name}
              handler={handleInput}
            />
          </div> */}

          {/* <div className="fields">
            <label>Telefone</label>
            <InputHoshi
              id="telephone"
              type="text"
              value={porteiros.telephone}
              handler={handleCell}
            />
          </div> */}

          {/* <div className="fields">
            <label>Email</label>
            <InputHoshi
              id="email"
              type="text"
              value={porteiros.email}
              handler={handleInput}
            />
          </div> */}

          {/* <div className="fields">
            <label>Senha</label>
            <InputHoshi
              id="password"
              type="password"
              value={porteiros.password}
              handler={handleInput}
            />
          </div> */}
          {/* <label>
            Escolha um Condomínio :
            <select
              id={condominios.condominio_id}
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
          </label> */}
        </form>
      </section>
      <BtnSubmite type="submit" onClick={handleSubmit}>
        Finalizar Cadastro
        <span>check_circle_outline</span>
      </BtnSubmite>
    </Conteudos>
  );
}

export default RegisterPorteiros;
