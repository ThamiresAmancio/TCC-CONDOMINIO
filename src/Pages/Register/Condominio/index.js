import React, { useEffect, useState } from "react";
// import "./condominio.css";
import "../../../Styles/styles.css";

import { api } from "../../../services/api";
import { getUser } from "../../../services/security";
import { mascaraCep, mascaraCnpj } from "../../../utils";
import {
  BtnSubmite,
  Conteudos,
  SeparatorIputs,
} from "../../../components/Dashboard/dashboard";
import Inputinha from "../../../components/Inputinha";

function REgisterCondominio({ handleReload }) {
  let [isCadastrandoCondominio, setIsCadastrandoCondominio] = useState(false);

  const usuario = getUser();

  console.log(usuario);

  const [condominio, setCondominio] = useState({
    name: "",
    bairro: "",
    estado: "",
    cep: "",
    rua: "",
    cidade: "",
    numero: "",
    cnpj: "",
  });

  const handleInputCondominio = (e) => {
    setCondominio({ ...condominio, [e.target.id]: e.target.value });
  };

  const handleCepCondominio = (e) => {
    let cep = e.target.value;
    cep = mascaraCep(cep);
    setCondominio({ ...condominio, cep: cep });
  };

  const handleCnpj = (e) => {
    let cnpj = e.target.value;
    cnpj = mascaraCnpj(cnpj);
    setCondominio({ ...condominio, cnpj: cnpj });
    console.log(cnpj);
  };

  useEffect(() => {
    const getEndereco = async (cep) => {
      const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const endereco = await dados.json();
      setCondominio({
        ...condominio,
        rua: endereco.logradouro,
        bairro: endereco.bairro,
        cidade: endereco.localidade,
        estado: endereco.uf,
      });
    };

    if (condominio.cep.length === 9) {
      getEndereco(condominio.cep);
    }
  }, [condominio.cep]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name, bairro, estado, cep, rua, cidade, numero, cnpj } =
        condominio;

      const response = await api.post(`/condominio/${usuario.adminId}`, {
        name,
        bairro,
        estado,
        cep,
        rua,
        cidade,
        numero,
        cnpj,
      });

      alert("Condomínio: " +name+ " cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  return (
    <Conteudos>
      <h1>Registrar Condomínio</h1>
      <section>
        <form id="form" onSubmit={handleSubmit}>
          <SeparatorIputs>
            <Inputinha
              id="name"
              type="text"
              value={condominio.name}
              handler={handleInputCondominio}
              label="Nome:"
              placeholder=" "
            />

            <Inputinha
              label="Bairro:"
              placeholder=" "
              id="bairro"
              type="text"
              value={condominio.bairro}
              handler={handleInputCondominio}
            />

            <Inputinha
              label="Estado:"
              placeholder=" "
              id="estado"
              type="text"
              value={condominio.estado}
              handler={handleInputCondominio}
            />

            <Inputinha
              label="CEP:"
              placeholder=" "
              id="cep"
              type="text"
              value={condominio.cep}
              handler={handleCepCondominio}
            />

            <Inputinha
              label="Rua:"
              placeholder=" "
              id="rua"
              type="text"
              value={condominio.rua}
              handler={handleInputCondominio}
            />

            <Inputinha
              label="Cidade:"
              placeholder=" "
              id="cidade"
              type="text"
              value={condominio.cidade}
              handler={handleInputCondominio}
            />

            <Inputinha
              label="Número:"
              placeholder=" "
              id="numero"
              type="text"
              value={condominio.numero}
              handler={handleInputCondominio}
            />

            <Inputinha
              label="CNPJ:"
              placeholder=" "
              id="cnpj"
              type="text"
              value={condominio.cnpj}
              handler={handleCnpj}
            />
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

export default REgisterCondominio;