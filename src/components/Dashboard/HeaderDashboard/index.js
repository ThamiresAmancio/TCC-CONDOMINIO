import '../../../Styles/icons.css';
function HeaderDashboardComponent(nome, email){
    return (
        <header>
            <div>
                <h1 id="nome">
                    {nome}
                </h1>
                <h3 id="email">
                    {email}
                </h3>
            </div>
            <figure>
                <img src="" alt="teste" id="fotoPerfil" />
            </figure>
            <span className="material-icons">
                expand_more
            </span>
        </header>
    );
}

export default HeaderDashboardComponent;