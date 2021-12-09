import { data } from "jquery";
import { useEffect, useState } from "react";
import InputTayler from "../../../components/InputTayler";
import { api } from "../../../services/api";
import { ContentFormAviso } from "./styles";

function CriandoAviso() {

  const [condominios, setCondominios] = useState([]);

  useEffect(() => {
    api.get("/condominios").then(({ data }) => {
      setCondominios(data);
    });
   
  }, []);

  const [aviso, setAviso] = useState({
    titulo: "",
    mensagem: "",
    link: "",
    status: "Importante",
    data: new Date(),
    condominio_id: "",
  });

  const [condominioSelectId, setCondominioSelectId] = useState(undefined);

  const handleCondominioSelectlId = (e) => {
    setCondominioSelectId(e.target.value);
  };

  const handleInput = (e) => {
    setAviso({ ...aviso, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {

    try {
      const { titulo, mensagem, link, status, data, condominio_id } = aviso;
      const response = await api.post(`/avisos`, {
        titulo,
        mensagem,
        link,
        status,
        data,
        condominio_id: condominioSelectId,
      });
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  return (
    <ContentFormAviso onSubmit={handleSubmit}>
      <header>
        <InputTayler
          id="titulo"
          placeholder="Selecione o título"
          list="TitulosAvisos"
          value={aviso.titulo}
          handler={handleInput}
          
        />
        <datalist id="TitulosAvisos">
          <option value="Reunião" />
          <option value="Horários" />
          <option value="Reforma" />
        </datalist>
      </header>
      <main>
        <InputTayler
          id="mensagem"
          value={aviso.mensagem}
          placeholder="Descrição do aviso"
          handler={handleInput}
        />

        <InputTayler
          id="link"
          value={aviso.link}
          placeholder="Link (Opcional)"
          handler={handleInput}
        />

        <InputTayler
          id="urgencia"
          value={aviso.status}
          handler={handleInput}
          placeholder="Status:"
          list="urgenciaAvisos"
        />

        <datalist id="urgenciaAvisos">
          <option value="Gravidade" />
          <option value="Urgência" />
          <option value="Tendência" />
        </datalist>
        <label>
          Escolha um Condomínio :
          <select
            id={condominios.condominio_id}
            value={condominioSelectId}
            onChange={handleCondominioSelectlId}
          >
            <option value="">Selecione</option>
            {condominios.map((condoItem) => (
              <option key={condoItem.id} value={condoItem.id}>
                {condoItem.name}
              </option>
            ))}
          </select>
        </label>
      </main>
      <button type="submit">
        <span class="material-icons">task_alt</span>
        Salvar Aviso
      </button>
    </ContentFormAviso>
  );
}

export default CriandoAviso;
