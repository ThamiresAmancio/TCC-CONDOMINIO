import { useRef, useState } from "react";

import InputTayler from "../../../components/InputTayler";
import { api } from "../../../services/api";
import { getUser } from "../../../services/securitySecurity";
import { mascaraCpf, mascaraRg } from "../../../utils";
import { ContentVisitante } from "./styles";

function RegisterVisitante() {
  const imgRef = useRef();
  const [image, setImage] = useState(null);
  const handleFile = async (e) => {
    setImage(e.target.files[0]);
    imgRef.current.src = URL.createObjectURL(e.target.files[0]);
  };

  const sindicoId = getUser();
  console.log(sindicoId)

  const [visitante, setVisitantes] = useState({
    name: "",
    rg: "",
    cpf: "",
  });
  
  console.log(visitante);
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    setVisitantes({ ...visitante, [e.target.id]: e.target.value });
  };

  const handleCpf = (e) => {
    let cpf = e.target.value;
    cpf = mascaraCpf(cpf);
    setVisitantes({ ...visitante, cpf: cpf });
  };

  const handleRg = (e) => {
    let rg = e.target.value;
    rg = mascaraRg(rg);
    setVisitantes({ ...visitante, rg: rg });
  };

   const teste = 1

  const addVisit = async () => {
    const data = new FormData();

    data.append("name", visitante.name);
    data.append("rg", visitante.rg);
    data.append("cpf", visitante.cpf);
    data.append("image", image);
    data.append("sindico_id", sindicoId)



    try {
      const response = await api.post(`/visitantes/sindico/${sindicoId}`, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContentVisitante>
      <h1>Registrar um visitante</h1>
      <div>
        {
          <figure>
            <img ref={imgRef} />
          </figure>
        }
        <label for="imageUpload">Escolher Imagem</label>
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={handleFile}
        />
      </div>
      <form onSubmit={addVisit}>
        <InputTayler
          id="name"
          label="Nome"
          value={visitante.name}
          handler={handleInput}
        />
        <InputTayler
          id="rg"
          label="Rg"
          value={visitante.rg}
          handler={handleRg}
        />
        <InputTayler
          id="cpf"
          label="CPF"
          value={visitante.cpf}
          handler={handleCpf}
        />
      </form>
      <button onClick={addVisit}>
        <span className="material-icons">check_circle_outline</span>
        Finalizar Cadastro
      </button>
    </ContentVisitante>
  );
}

export default RegisterVisitante;
