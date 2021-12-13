import { useState } from "react";
import Inputinha from "../../components/Inputinha";
import { api } from "../../services/api";
import { getUser } from "../../services/securityMorador";
import { ContentAgendamento } from "./styles";

function Agendamento() {

  const user = getUser();

  const [agendamento, setAgendamento] = useState({
    nome: user.name,
    data: "",
    horainicio: "",
    horatermino: "",
  });

  const handleInput = (e) => {
    setAgendamento({ ...agendamento, [e.target.id]: e.target.value });
  };

  // const [inicioSelId, setInicioSelId] = useState(undefined);

  // const handleInicio = (e) => {
  //   setInicioSelId(e.target.value)
  // }

  // const [terminoSelId, setTerminoSelId] = useState(undefined);

  // const handleTerminio = (e) => {
  //   setTerminoSelId(e.target.value)
  // }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { nome, data, horainicio, horatermino } = agendamento;
      await api.post(`/agendamentos/${user.condominio.id}`, {
        nome,
        data,
        horainicio,
        horatermino,

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
         <Inputinha
            id="horainicio"
            label="Hora de inicio:"
            placeholder=" "
            type="text"
            value={agendamento.horainicio}
            handler={handleInput}   
          />
         <Inputinha
            id="horatermino"
            label="Hora de terminio:"
            placeholder=" "
            type="text"
            value={agendamento.horatermino}
            handler={handleInput}   
          />
        {/* <div id="boxHorario">
         
          <datalist id="horaInicio" value={inicioSelId} onChange={handleInicio}>
            <option value="08:30" />
            <option value="10:00" />
            <option value="11:30" />
            <option value="12:00" />
          </datalist>

          <datalist id="horaTermino" value={terminoSelId} onChange={handleTerminio}>
            <option value="14:00" />
            <option value="16:00" />
            <option value="18:30" />
            <option value="19:30" />
            <option value="21:00" />
          </datalist>
        </div> */}
        <button type="submit">AGENDAR</button>
        <button type="reset">CANCELAR</button>
      </form>
    </ContentAgendamento>
  );
}

export default Agendamento;
