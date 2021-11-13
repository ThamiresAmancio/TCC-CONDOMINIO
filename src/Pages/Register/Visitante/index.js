import { useState } from "react";
import InputTayler from "../../../components/InputTayler";
import { api } from "../../../services/api";
import { mascaraCpf } from "../../../utils";
import { ContentVisitante } from "./styles";

function RegisterVisitante() {
  const [visitante, setVisitante] = useState({
    foto: "",
    name: "",
    rg: "",
    cpf: "",
  });

  const handleCpf = (e) => {
    let cpf = e.target.value;
    cpf = mascaraCpf(cpf);
    setVisitante({ ...visitante, cpf: cpf });
  };

  const handleInput = (e) => {
    setVisitante({ ...visitante, [e.target.id]: e.target.value });
  };


  const handleSubmit = async (e) => {
    // e.preventDefault();

    try {
      const { name, rg, cpf, foto } = visitante;

      const response = console.log("dados" + {
        name,
        rg,
        cpf,
        foto,
      });
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  return (
    <ContentVisitante>
      <h1>Registrar um visitante</h1>
      <div>
          <figure>
            
          </figure>
          <label for="imageUpload">Escolher Imagem</label>
          <input id="imageUpload" type="file" accept="image/*" value={visitante.foto} onChange={handleInput}/>   
      </div>
      <form onSubmit={handleSubmit}>
        <InputTayler id="name" label="Nome" value={visitante.name} handler={handleInput}/>
        <InputTayler id="rg" label="Rg" value={visitante.rg} handler={handleInput}/>
        <InputTayler id="cpf" label="CPF" value={visitante.cpf} handler={handleCpf}/>
      </form>
      <button type="submit">
        <span className="material-icons">check_circle_outline</span>
        Finalizar Cadastro
      </button>
    </ContentVisitante>
  );
}

export default RegisterVisitante;
