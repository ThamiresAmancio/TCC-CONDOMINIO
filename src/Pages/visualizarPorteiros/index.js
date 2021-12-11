import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContainerVisualizar, Header, IconEdit, IconRemove, List , Text } from "./style";
import { getUser} from "../../services/security";


function VisualizarPorteiros() {

    const [porteiros, setPorteiros] = useState([])
    
    const admin = getUser()
    useEffect(()=>{
        api.get(`/buscar_porteiros/${admin.adminId}`).then(({data}) =>{
            setPorteiros(data)
        });
    },[]);

    function delet(id) {
        api.delete(`/porteiros/${id}`)
        setPorteiros(porteiros.filter(item => item.porteiroId !== id));
    }


    return(
        <>
            <Header>
                <p>Nome:</p>
                <p>Telefone:</p>
                <p>Email:</p>
                <p>Ações:</p>
            </Header>
            <ContainerVisualizar>
            {
                   porteiros.map((item) =>{

                   return <>
                        <List>
                            <div>
                                <Text>{item.name}</Text>
                            </div>
                            <div>
                            <Text>{item.telephone}</Text>
                            </div>
                            <div>
                            <Text>{item.email}</Text>
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

export default VisualizarPorteiros;