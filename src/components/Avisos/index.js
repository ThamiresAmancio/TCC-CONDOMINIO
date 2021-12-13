import { ContentAviso, HeaderAviso } from "./stylesAvisos";

function Avisos({title, link, informacoes, urgencia}){

    return(
        <>
            <ContentAviso>
                <HeaderAviso>
                    <h1>{title}</h1>
                </HeaderAviso>
                <div>
                    <span>{informacoes}</span>
                    <span><a rel="noopener noreferrer" target="_blank" href={link}>{link}</a></span>
                    <span>{urgencia}</span>
                </div>
            </ContentAviso>
        </>
    );
}

export default Avisos;