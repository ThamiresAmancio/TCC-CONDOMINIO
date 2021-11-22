import { ContentAvisoViewOfSindico, HeaderAvisoSindico } from "./styles";
import "../../Styles/styles.css";
import { api } from "../../services/api";
import { useState } from "react";

function AvisosVisaoDoSindico({ title, link, informacoes, urgencia }) {
  const [avisos, setAvisos] = useState([]);
  function deleteAviso(_id) {
    api.delete(`/avisos/${_id}`);
  }

  return (
    <>
      <ContentAvisoViewOfSindico>
        <HeaderAvisoSindico>
          <h1>{title}</h1>
        </HeaderAvisoSindico>
        <div>
          <span>{informacoes}</span>
          <span>
            <a target="_blank" href={link}>
              Link: {link}
            </a>
          </span>
          <span>{urgencia}</span>
        </div>
        <div>
          <button onClick={() => deleteAviso(avisos.id)} className="material-icons">
            delete
          </button>
          <button className="material-icons">edit</button>
        </div>
      </ContentAvisoViewOfSindico>
    </>
  );
}

export default AvisosVisaoDoSindico;
