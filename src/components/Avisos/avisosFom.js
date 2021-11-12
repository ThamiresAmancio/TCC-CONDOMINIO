import { ContentFormAviso, HeaderAviso } from "./stylesAvisos";
import "../../Styles/styles.css";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";

function AvisosForm(idTitle, idDesc, idLink, idUrgencia) {

  const { register, handleSubmit } = useForm();

  const addAviso = data => api.post("/avisos", data)
    .then(() => {
        console.log("Deu tudo certo")
    })
    .catch(() => {
        console.log("DEU ERRADO");
        console.log(data);
        document.querySelector("#idTitle").value='';
        console.log(data);
    })

  return (
    <>
      <ContentFormAviso onSubmit={handleSubmit(addAviso)}>
        <HeaderAviso>
          <input
            id={idTitle}
            list="titleReuniões"
            placeholder="Titulo do Aviso"
            required
            name="title"
            {...register("title")}
          />

          <datalist id="titleReuniões">
            <option value="Reunião" />
            <option value="Mudanças" />
            <option value="Novas Regras" />
            <option value="Horario de funcionamento" />
          </datalist>
        </HeaderAviso>
        <div>
          <input id={idDesc} name="descricaoAviso" {...register("descricaoAviso")} placeholder="Descrição do Aviso" required />
          <input id={idLink} placeholder="Link (opcional)" name="linkAviso" {...register("linkAviso")} />
          <input
            id={idUrgencia}
            name="urgencia"
            {...register("urgencia")}
            placeholder="Selecione"
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
