import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContainerVisualizar, Header, IconEdit, IconRemove, List , Text } from "./style";

function VisualizarVisitantes() {

    const [visitantes, setVisitantes] = useState([])
    console.log(visitantes)
    useEffect(()=>{
        api.get("/visitantes/morador").then(({data}) =>{
            console.log('aaaaaaaaaaaaaaaaaaaaaaa',data)
            setVisitantes('bbbbbbbbbbbbbbbbb',data)
        });
    },[]);


    return(
        <>
            
            <ContainerVisualizar>
           
            {
                    visitantes.map((item) =>{
                        console.log('bbbbbbbbbbbbbbbbb',item)
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
                            <p>CPF</p>
                         </div>
                        </Header>
                        <List>
                            <div>
                             {item.name}
                            </div>
                            <div>
                            
                            </div>
                            <div>
                           
                            </div>
                            <div>

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