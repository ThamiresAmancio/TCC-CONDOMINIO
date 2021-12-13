import { useState } from "react";
import Inputinha from "../../components/Inputinha";
import { api } from "../../services/api";
import { getUser } from "../../services/security";
import { ContentAgendamento } from "./styles";

function Agendamento() {
  const [agendamento, setAgendamento] = useState({
    nome: "",
    data: "",
    horainicio: "",
    horatermino: "",
    condominio_id: "",
  });

  const handleInput = (e) => {
    setAgendamento({ ...agendamento, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { nome, data, horainicio, horatermino, condominio_id } =
        agendamento;
      const response = await api.post("/agendamentos", {
        nome,
        data,
        horainicio,
        horatermino,
        condominio_id: 1,
      });

      alert("Deu certo :P");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  console.log("**************");
  const moradorTeste = getUser();
  console.log(moradorTeste);

  return (
    <ContentAgendamento>
      <header>
        <h1>A G E N D A M E N T O</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <Inputinha
          id="nome"
          placeholder=" "
          label="Nome:"
          value={agendamento.nome}
          handler={handleInput}
        />

        <Inputinha
          id="data"
          label="Data:"
          placeholder=" "
          type="date"
          value={agendamento.data}
          handler={handleInput}
        />
        <div id="boxHorario">
          <Inputinha
            id="horainicio"
            label="Hora de inicio:"
            value={agendamento.horainicio}
            handler={handleInput}
            placeholder=" "
            list="horaInicio"
          />
          <datalist id="horaInicio">
            <option value="08:30" />
            <option value="10:00" />
            <option value="11:30" />
            <option value="12:00" />
          </datalist>

          <Inputinha
            id="horatermino"
            label="Hora de término:"
            value={agendamento.horatermino}
            handler={handleInput}
            placeholder=" "
            list="horaTermino"
          />
          <datalist id="horaTermino">
            <option value="14:00" />
            <option value="16:00" />
            <option value="18:30" />
            <option value="19:30" />
            <option value="21:00" />
          </datalist>
        </div>
        <button type="submit">AGENDAR</button>
        <button type="reset">CANCELAR</button>
      </form>
    </ContentAgendamento>
  );
}

export default Agendamento;
