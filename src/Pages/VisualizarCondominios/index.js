import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContainerVisualizar, Header, IconEdit, IconRemove, List , Text } from "./style";



function VisualizarCondominios() {

    const [condominios, setCondominios] = useState([])
    
    useEffect(()=>{
        api.get(`/condominios`).then(({data}) =>{
            setCondominios(data)
        });
    },[]);

    function delet(id) {
        api.delete(`/condominios/${id}`)
        setCondominios(condominios.filter(item => item.condominioId !== id));
    }

    return(
        <>
            <Header>
                <p>Nome:</p>
                <p>Sobrenome:</p>
                <p>Email:</p>
                <p>Apartamento:</p>
                <p>Ações:</p>
            </Header>
            <ContainerVisualizar>
            {
                    condominios.map((item) =>{

                    return <>
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
                            <Text></Text>
                            </div>
                            <div>
                               <IconRemove onClick={() => delet(item.id)} />
                               <IconEdit />
                            </div>
                    </List>
                        </>
                    })
                }
            </ContainerVisualizar>
        </>
    )
}

export default VisualizarCondominios;