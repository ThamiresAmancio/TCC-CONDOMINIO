import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { api } from "../../../services/api";
import { getUser } from "../../../services/securitySindico";
import { mascaraCpf, mascaraRg } from "../../../utils";
import { ContentVisitante } from "./styles";
import 'react-toastify/dist/ReactToastify.css';
import Inputinha from '../../../components/Inputinha';


function RegisterVisitante() {

  const imgRef = useRef();

  const [image, setImage] = useState(null);
  const handleFile = async (e) => {
    setImage(e.target.files[0]);
    imgRef.current.src = URL.createObjectURL(e.target.files[0]);
  };


  const sindico = getUser();
  console.log(sindico)

  const [visitante, setVisitantes] = useState({
    name: "",
    rg: "",
    data:  new Date(Date.now()).getDate() +
    "/" +
    new Date(Date.now()).getMonth() + "/" + new Date(Date.now()).getFullYear()

  });
  
  console.log(visitante)


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

  

  const addVisit = async () => {
    const data = new FormData();

    data.append("name", visitante.name);
    data.append("rg", visitante.rg);
    data.append("data", visitante.data);
    data.append("image", image);
    data.append("sindico_id", sindico)

    try {

      const response = await api.post(`/visitantes/sindico/${sindico.sindicoId}`, data);
      alert("Visitante Cadastrado com sucesso");
      
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <ToastContainer/>    
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
        <Inputinha
          placeholder=" "
          id="name"
          label="Nome"
          value={visitante.name}
          handler={handleInput}
        />
        <Inputinha
          placeholder=" "
          id="rg"
          label="Rg"
          value={visitante.rg}
          handler={handleRg}
        />
        <Inputinha
          placeholder=" "
          id="data"
          label="Data"
          value={visitante.data}
          handler={handleCpf}
        />
      </form>
      <button onClick={addVisit}>
        <span className="material-icons">check_circle_outline</span>
        Finalizar Cadastro
      </button>
    </ContentVisitante>
    </>
  );
}

export default RegisterVisitante;
