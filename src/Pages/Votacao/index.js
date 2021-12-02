import InputTayler from "../../components/InputTayler";
import { ContentVotacao } from "./styles";

function Votacao({ mensagem }) {
    return (
        <ContentVotacao>
            <div>
                <h1>Vote Agora!</h1>
            </div>
            <div>
                <p>
                    {mensagem}
                </p>
            </div>
            <div id="input-option356">
                <div class="radio">
                    <label>
                        <input type="radio" name="votacao" value="Sim" />
                        <span>Sim</span>
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="votacao" value="Não" />
                        <span>Não</span>
                    </label>
                </div>
            </div>
            <div>
                <button>
                    VOTAR
                </button>
            </div>
        </ContentVotacao>
    );
}

export default Votacao;