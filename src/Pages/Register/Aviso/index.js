import { useState } from "react";
import InputTayler from "../../../components/InputTayler";
import { ContentFormAviso } from "./styles";

function CriandoAviso() {
  const [aviso, setAviso] = useState({
    title: "",
    description: "",
    link: "",
    urgencia: "",
  });

  const handleInput = (e) => {
    setAviso({ ...aviso, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    try {
      const { titulo, description, link, urgencia } = aviso;

      const response = console.log(
        "dados" +
          {
            titulo,
            description,
            link,
            urgencia,
          }
      );
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  return (
    <ContentFormAviso onSubmit={handleSubmit}>
      <header>
        <InputTayler
          placeholder="Selecione o título"
          list="TitulosAvisos"
          handler={handleInput}
          required
        />
        <datalist id="TitulosAvisos">
          <option value="Reunião" />
          <option value="Horários" />
          <option value="Reforma" />
        </datalist>
      </header>
      <main>
        <InputTayler
          placeholder="Descrição do aviso"
          required
          handler={handleInput}
        />

        <InputTayler placeholder="Link (Opcional)" handler={handleInput} />

        <InputTayler
          placeholder="Selecione"
          list="urgenciaAvisos"
          handler={handleInput}
        />
        <datalist id="urgenciaAvisos">
          <option value="Gravidade" />
          <option value="Urgência" />
          <option value="Tendência" />
        </datalist>
      </main>
      <button type="submit">
        <span class="material-icons">task_alt</span>
        Salvar Aviso
      </button>
    </ContentFormAviso>
  );
}

export default CriandoAviso;
