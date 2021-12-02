import InputTayler from "../../components/InputTayler";
import { ContentAgendamento } from "./styles";

function Agendamento() {

    return (
        <ContentAgendamento>
            <header>
                <h1>A G E N D A M E N T O</h1>
            </header>
            <form>
                <InputTayler placeholder="Nome:" />
                <InputTayler placeholder="Data:" type="date" />
                <div id="boxHorario">
                    <label>Horário de inicio:</label>
                    <select>
                        <option>09:30</option>
                        <option>10:30</option>
                        <option>09:00</option>
                        <option>11:30</option>
                    </select>

                    <label>Horário de término:</label>
                    <select>
                        <option>14:00</option>
                        <option>16:00</option>
                        <option>18:00</option>
                        <option>20:00</option>
                        <option>22:00</option>
                    </select>
                </div>
                <button type="submit">
                    AGENDAR
                </button>
                <button type="button">
                    CANCELAR
                </button>
            </form>
        </ContentAgendamento>
    );
}

export default Agendamento;