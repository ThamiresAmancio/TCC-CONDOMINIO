import { useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  ContainerVisualizar,
  Header,
  IconEdit,
  IconRemove,
  List,
  Text,
} from "./style";

function VisualizarSindicos() {
  const [sindicos, setSindicos] = useState([]);

  useEffect(() => {
    api.get(`/sindicos/`).then(({ data }) => {
      setSindicos(data);
    });
  }, []);

  function delet(id) {
    api.delete(`/sindicos/${id}`);
    setSindicos(sindicos.filter((item) => item.sindicoId !== id));
  }

  return (
    <>
      <Header>
        <p>Nome:</p>
        <p>Sobrenome:</p>
        <p>Email:</p>
        <p>Apartamento:</p>
        <p>Ações:</p>
      </Header>

      <ContainerVisualizar>
        {sindicos.map((item) => {
          return (
            <>
              <List>
                <div>
                  <Text>{item.name}</Text>
                </div>
                <div>
                  <Text>{item.surname}</Text>
                </div>
                <div>
                  <Text>{item.email}</Text>
                </div>
                <div>
                  <Text> Nº {item.Apartamento.numero}</Text>
                </div>
                <div>
                  <IconRemove onClick={() => delet(item.id)} />
                  <IconEdit />
                </div>
              </List>
            </>
          );
        })}
      </ContainerVisualizar>
    </>
  );
}

export default VisualizarSindicos;