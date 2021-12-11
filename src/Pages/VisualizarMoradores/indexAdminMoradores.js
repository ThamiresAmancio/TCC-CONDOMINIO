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

import { getUser} from "../../services/security";


function VisualizarMoradoresAdmin() {
  const [moradores, setMoradores] = useState([]);

  const admin = getUser()
  useEffect(() => {
    api.get(`/buscar_moradores_admin/${admin.adminId}`).then(({ data }) => {
      setMoradores(data);
    });
  }, []);

  function delet(id) {
    api.delete(`/moradores/${id}`);
    setMoradores(moradores.filter((item) => item.moradorId !== id));
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
        {moradores.map((item) => {
          console.log(item);

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
                  {console.log(item)}
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

export default VisualizarMoradoresAdmin;
