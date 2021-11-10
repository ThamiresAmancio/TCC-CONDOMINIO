import { ContentFormAviso, HeaderAviso } from "./stylesAvisos";
import "../../Styles/styles.css";

function AvisosForm(idTitle, idDesc, idLink, idUrgencia) {
  return (
    <>
      <ContentFormAviso>
        <HeaderAviso>
          <input
            id={idTitle}
            list="titleReuniões"
            placeholder="Titulo do Aviso"
            required
          />
          <datalist id="titleReuniões">
            <option value="Reunião" />
            <option value="Mudanças" />
            <option value="Novas Regras" />
            <option value="Horario de funcionamento" />
          </datalist>
        </HeaderAviso>
        <div>
          <input id={idDesc} placeholder="Descrição do Aviso" required />
          <input id={idLink} placeholder="Link (opcional)" />
          <input
            id={idUrgencia}
            placeholder="Selecione a urgência"
            list="urgencias"
            required
          />
          <datalist id="urgencias">
            <option value="Gravidade" />
            <option value="Urgência" />
            <option value="Tendência" />
          </datalist>
        </div>
        <button type="submit">
          <span class="material-icons">task_alt</span>
          Salvar
        </button>
      </ContentFormAviso>
    </>
  );
}

export default AvisosForm;
