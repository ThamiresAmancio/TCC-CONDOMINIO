import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContainerVisualizar, Header, IconEdit, IconRemove, List , Text } from "./style";

function VisualizarVisitantes() {

    const [visitantes, setVisitantes] = useState([])

    useEffect(()=>{
        api.get("/visitantes/sindico").then(({data}) =>{
            console.log(visitantes)
            setVisitantes(data)
        });
    },[]);


    return(
        <>
            
            <ContainerVisualizar>
            {
                    visitantes.map((item) =>{
                    return <>
                     <Header>
                         <div>
                            <p>Foto</p>
                         </div>
                         <div>
                             <p>Nome</p>
                         </div>
                         <div>
                            <p>RG</p>
                         </div>
                         <div>
                            <p>Data</p>
                         </div>
                        </Header>
                        <List>
                            <div>

                            </div>
                            <div>
                            <Text>{item.name}</Text>
                            </div>
                            <div>
                            <Text>{item.rg}</Text>
                            </div>
                            <div>
                            <Text>{item.data}</Text>
                            </div>
                    </List>
                        </>
                    })
                }
            </ContainerVisualizar>
        </>
       
    )

}

export default VisualizarVisitantes;