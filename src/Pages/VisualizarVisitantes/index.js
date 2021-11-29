import { useEffect, useRef, useState } from "react";
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

    const [visitantesMoradores, setVisitantesMoradores] = useState([])

    

    useEffect(()=>{
        api.get("/visitantes/morador").then(({data}) =>{
            console.log(visitantes)
            setVisitantesMoradores(data)
        });
    },[]);

  const imgRef = useRef();
  
  const [image, setImage] = useState(null);
  
  const handleFile = async (e) => {
    setImage(e.target.files[0]);
    imgRef.current.src = URL.createObjectURL(e.target.files[0]);
  };


    return(
        <>
            
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
            <ContainerVisualizar>
            {
                    visitantes.map((item) =>{
                    return <>
                    
                    <List key={item.id}>
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
                {
                    visitantesMoradores.map((item) =>{
                    return <>
                    
                    <List key={item.id}>
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