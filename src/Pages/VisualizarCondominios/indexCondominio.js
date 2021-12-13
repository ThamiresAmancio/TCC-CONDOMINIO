
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContainerVisualizar, Header, IconEdit, IconRemove, List , Text } from "./style";

function VisualizarCondominios(){

    const [condominios, setCondominios] = useState([])

    // const admin = getUser()
    
    useEffect(()=>{
        api.get(`/condominios`).then(({data}) =>{
            setCondominios(data)
        });
    },[]);

    function delet(id) {
        api.delete(`/condominios/${id}`)
        setCondominios(condominios.filter(item => item.condominioId !== id));
    }

    // function delet(id) {
    //     api.delete(`/condominios/:${id}`);
    //   }

    return(

        <>
            <Header>
                <p>Nome:</p>
                <p>Bairro:</p>
                <p>Estado:</p>
                <p>CEP:</p>
                <p>Rua:</p>
                <p>Cidade:</p>
                <p>Numero:</p>
                <p>CNPJ:</p>
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
                            <Text>{item.bairro}</Text>
                            </div>
                            <div>
                            <Text>{item.estado}</Text>
                            </div>
                            <div>
                            <Text>{item.cep}</Text>
                            </div>
                            <div>
                            <Text>{item.rua}</Text>
                            </div>
                            <div>
                            <Text>{item.cidade}</Text>
                            </div>
                            <div>
                            <Text>{item.numero}</Text>
                            </div>
                            <div>
                            <Text>{item.cnpj}</Text>
                            </div>
                            <div>
                               <IconRemove onClick={() => {delet(item.id)}}/>
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