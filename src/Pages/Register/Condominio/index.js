import React, { useEffect, useState } from "react";
import { useHistory} from "react-router";
import "./condominio.css";
import "../../../Styles/styles.css";

import { api } from "../../../services/api";
import { getUser} from "../../../services/security";
import InputHoshi from "../../../components/input";
import { mascaraCep, mascaraCnpj } from "../../../utils";

function REgisterCondominio({handleReload}) {
  
  let [isCadastrandoCondominio, setIsCadastrandoCondominio] = useState(false);

  const history = useHistory();

  const usuario = getUser()

  console.log(usuario);

  const [condominio, setCondominio] = useState({
    name:"",
    bairro: "",
    estado:"",
    cep:"",
    rua:"",
    cidade: "",
    numero: "",
    cnpj: "",

  });

  const [isLoading,setIsLoading] = useState(false);

  const handleInputCondominio = (e) => {
   setCondominio({ ...condominio, [e.target.id]: e.target.value });
 };

 const handleCepCondominio = (e) => {
   let cep = e.target.value
   cep = mascaraCep(cep)
   setCondominio({...condominio,cep:cep})
 }

 const handleCnpj = (e) =>{
   let cnpj = e.target.value
   cnpj = mascaraCnpj(cnpj)
   setCondominio({...condominio,cnpj:cnpj})
   console.log(cnpj);
 }

 useEffect(() => {
   const getEndereco = async (cep) =>{
     const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
     const endereco = await dados.json();
     setCondominio({...condominio, rua: endereco.logradouro, bairro:endereco.bairro, cidade:endereco.localidade, estado:endereco.uf  })
   };
 
   if (condominio.cep.length === 9) {
    getEndereco(condominio.cep);
  }
}, [condominio.cep]);


const handleSubmit = async (e) => {
  e.preventDefault();

  setIsLoading(true);


  try {
    const { name, bairro, estado, cep , rua,cidade, numero,cnpj} = condominio;

    const response = await api.post(`/condominios/${usuario.adminId}`, {

      name,
      bairro,
      estado,
      cep,
      rua,
      cidade,
      numero,
      cnpj
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
        <h1>Registrar Condomínio</h1>
        <div className="line-post"></div>
        <div className="card-body-post">
          <form id="form" onSubmit={handleSubmit} >
            <div className="fields">
              <label>Nome</label>
              <InputHoshi id="name" type="text" value={condominio.name} handler={handleInputCondominio} />
            </div>

            <div className="fields">
              <label>Bairro</label>
              <InputHoshi id="bairro" type="text"   value={condominio.bairro}  handler={handleInputCondominio}  />
  
            </div>

            <div className="fields">
              <label>Estado</label>
              <InputHoshi id="estado" type="text"   value={condominio.estado} handler={handleInputCondominio} />
            </div>


            <div className="fields">
              <label>CEP</label>
              <InputHoshi id="cep" type="text" value={condominio.cep} handler={handleCepCondominio} />
            </div>

            
            <div className="fields">
              <label>Rua</label>
              <InputHoshi id="rua" type="text" value={condominio.rua} handler={handleInputCondominio} />
            </div>

            <div className="fields">
              <label>Cidade</label>
              <InputHoshi id="cidade" type="text" value={condominio.cidade} handler={handleInputCondominio}/>
            </div>

            <div className="fields">
              <label>Número</label>
              <InputHoshi id="numero" type="text" value={condominio.numero} handler={handleInputCondominio}/>
            </div>

            <div className="fields">
              <label>CNPJ</label>
              <InputHoshi id="cnpj" type="text" value={condominio.cnpj} handler={handleCnpj} />
            </div>

            <div className="btn-post">
              <button type="submit">
                  Finalizar Cadastro
                  <span className="material-icons">
                    check_circle_outline
                  </span>
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default REgisterCondominio;
