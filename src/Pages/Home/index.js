import { Link } from 'react-router-dom';
import '../../Styles/home.css';
import '../../Styles/home.css';

function Home() {
    return (
        <>
            <header>
                <h1>Towers Admin</h1>
                <nav class="box-6">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a class="scroll" href="/#sectionServices">Serviços</a></li>
                        <li><a class="scroll" href="/#sectionSobreNos">Sobre nos</a></li>
                        <li><a class="scroll" href="/#sectionAdmin">Seja um admin</a></li>
                        <li><a class="scroll" href="/#sectionMapa">Contatos</a></li>
                    </ul>
                </nav>
                <Link to="/Login">Entrar</Link>
            </header>
            {/* <!-- title da page --> */}
            <section class="section-title">
                <figure>

                </figure>
                <h1>
                    Towers Admin
                </h1>
                <div>
                    <h2>
                        Um sistema administrativo para condomínio
                        <br />
                        e de facil entendimento
                    </h2>
                    <p>
                        Tenha um dia mais produtivo e seguro e mais:
                        <br />
                        tudo em um só app.
                    </p>
                </div>
            </section>
            {/* <!-- serviços --> */}
            <section class="box-8 section-services" id="sectionServices">
                <figure class="box-2 figure-left">

                </figure>
                <main class="box-3">
                    <h1>
                        Nossos serviços
                    </h1>
                    <p>
                        Nossos serviços são acessados em duas maneiras:
                    </p>
                    <br />
                    <p>
                        <u>Sistema Web</u> e <u>Aplicativo Mobile</u> (android).
                    </p>
                    <br />
                    <p>
                        Para acessa-lo informe ao administrador do seu condomínio que deseja um login.
                    </p>

                </main>
                <figure class="box-2 figure-right">

                </figure>
            </section>
            {/* <!-- sobre nós --> */}
            <section class="section-sobre" id="sectionSobreNos">
                <h1>Sobre nós</h1>
                <p>
                    Imagine agendar espaços de festas, ir a assembleias e reuniões, e caso não tenha comparecido as assembleias saber sobre as mudanças estabelecidas e muito mais, e o melhor de tudo, sem sair de casa!, deixando você, sua família e seu condomínio seguros da contaminação do covid-19. A Towers Admin surgiu para tornar isso realidade, aumentar a produtividade do seu condomínio com um sistema fácil de entender e com excelentes ferramentas.
                </p>
                <h2><u>Bem-vindos ao Towers Admin.</u></h2>
            </section>
            {/* <!-- seja um admin --> */}
            <section class="section-admin" id="sectionAdmin">

                <div class="box-4">
                    <h1>Seja um admin</h1>
                    <p>
                        Não é qualquer pessoa que pode administrar um condomínio. Isso porque essa função exige um perfil adequado e conhecimentos em diferentes áreas. No entanto, para ocupar esse cargo, não é necessário que a pessoa seja um condômino. Em outras palavras, tanto um morador como um síndico profissional e, até mesmo, uma empresa especializada podem atuar nessa gestão.
                    </p>
                    <h2>
                        Caso queira ser um admin entre em contato com:
                    </h2>
                    <div class="box-3">
                        <span class="material-icons">
                            mail_outline
                        </span>
                        <p>
                            towersadmin@email.com
                        </p>
                    </div>

                </div>
                <figure>

                </figure>
            </section>
            {/* <!-- mapa --> */}
            <section class="section-mapa" id="sectionMapa">
                <h1>Nossa locaziação:</h1>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1047723391343!2d-46.900181785022966!3d-23.52873378469903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0154039cb55b%3A0xadf34a919f156950!2sSENAI%20Jandira%20-%20Professor%20Vicente%20Amato!5e0!3m2!1spt-BR!2sbr!4v1633144555080!5m2!1spt-BR!2sbr"
                    width="65%" height="100%" style={{border: '0'}} allowfullscreen="" loading="lazy" title="mapa" 
                    ></iframe>
                <div>
                    <h1>Siga-nos nas redes sociais:</h1>
                    <div>
                        <figure id="imgWhatsapp"></figure>
                        <p>(11) 4772-4700</p>
                    </div>
                    <div>
                        <figure id="imgInstagram"></figure>
                        <p>@senai_jandira</p>
                    </div>
                    <div>
                        <figure id="imglinkedin"></figure>
                        <p>Senai Jandira</p>
                    </div>
                </div>
            </section>
            {/* <!-- rodapé --> */}
            <footer>
                <h1>Towers Admin - Todos os direitos reservados &copy;</h1>
            </footer>
        </>
    );
}

export default Home;