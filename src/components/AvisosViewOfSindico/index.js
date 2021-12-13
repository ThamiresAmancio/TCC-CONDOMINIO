import { ContentAvisoViewOfSindico, HeaderAvisoSindico } from "./styles";
import "../../Styles/styles.css";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { getUser } from "../../services/securitySindico";

function AvisosVisaoDoSindico({ title, link, informacoes, urgencia }) {

  const [avisos, setAvisos] = useState([]);

  function deleteAviso(id) {
    api.delete(`/avisos/:${id}`);
  }

  const sindico= getUser()

  const [avisosVIew, setAvisosView] = useState([]);

  useEffect(() => {
    api.get(`/buscar_avisos/${sindico.condominio.id}`).then(({ data }) => {
      setAvisosView(data);
    });
  }, []);

  console.log("/////////");
  console.log(avisosVIew);
  console.log("/////////");

  return (
    <>
      <ContentAvisoViewOfSindico>
        <HeaderAvisoSindico>
          <h1>{title}</h1>
        </HeaderAvisoSindico>
        <div>
          <span>{informacoes}</span>
          <span>
            <a rel="noopener noreferrer" target="_blank" href={link}>
              {link}
            </a>
          </span>
          <span>{urgencia}</span>
        </div>
        <div>
          <button
            onClick={() => {
              deleteAviso(avisos.id);
            }}
            className="material-icons"
          >
            delete
          </button>
          <button className="material-icons">edit</button>
        </div>
      </ContentAvisoViewOfSindico>
    </>
  );
}

export default AvisosVisaoDoSindico;
