import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContainerVisualizar, Header } from "./style";

function VisualizarMoradores() {

    const [moradores, setMoradores] = useState([])

    useEffect(()=>{
        api.get("/moradores").then(({data}) =>{
            setMoradores(data)
        });
    },[]);


    return(
        <>
            <Header>
                <p>Nome:</p>
                <p>Sobrenome:</p>
                <p>Email:</p>
                <p>Apartamento:</p>
            </Header>
            <ContainerVisualizar>
                {
                    moradores.map((item) => {
                        return  <div>

                        <tr>
                            <td>
                               {item.name}
                            </td>
                        </tr>
                        <tr>
                            <td>
                            {item.surname}
                            </td>
                        </tr>
                        <tr>
                            <td>
                            {item.email}
                            </td>
                        </tr>
                        <tr>
                            <td>
                            {item.ApartamentoId}
                            </td>
                        </tr>
                     </div>
                    })
                }

            </ContainerVisualizar>
        </>
       
    )

}

export default VisualizarMoradores;