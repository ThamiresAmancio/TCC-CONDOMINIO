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

  /* select horario de inicio */
  const [selectHrInicio, setSelectHrInicio] = useState(undefined);
  const handleSelectHrInicio = (e) => {
    setAgendamento({ ...agendamento, [e.target.id]: e.target.value });
  };

  /* select horario de termino */
  const [selectHrTermino, setSelectHrTermino] = useState(undefined);
  const handleSelectHrTermino = (e) => {
    setAgendamento({ ...agendamento, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { nome, data, horainicio, horatermino, condominio_id } = agendamento;

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
          <label>Horário de inicio:</label>
          <select onChange={handleSelectHrInicio} id="selectHrInicio">
            <option id="hora1" value={selectHrTermino}>09:30</option>
            <option id="hora2" value={selectHrTermino}>10:30</option>
            <option id="hora3" value={selectHrTermino}>09:00</option>
            <option id="hora4" value={selectHrTermino}>11:30</option>
          </select>

          <label>Horário de término:</label>
          <select onChange={handleSelectHrTermino} id="selectHrTermino">
            <option id="horatermino1" value={selectHrTermino}>14:00</option>
            <option id="horatermino2" value={selectHrTermino}>16:00</option>
            <option id="horatermino3" value={selectHrTermino}>18:00</option>
            <option id="horatermino4" value={selectHrTermino}>20:00</option>
            <option id="horatermino5" value={selectHrTermino}>22:00</option>
          </select>
        </div>
        <button type="submit">AGENDAR</button>
        <button type="reset">CANCELAR</button>
      </form>
    </ContentAgendamento>
  );
}

export default Agendamento;
