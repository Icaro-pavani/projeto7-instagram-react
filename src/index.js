import ReactDOM from 'react-dom';
import Header from './Header';

import Feeds from "./Feeds";
import PerfilFonte from "./PerfilFonte";
import TopoSugestoes from "./TopoSugestoes";

function App() {
    return (
        <div>
            <Header />
            <main>
                <Feeds />
                <div className="sidebar">
                    <PerfilFonte name="catanacomics" nomeExibido="Catana" />

                    <ul className="sugestoes">
                        <TopoSugestoes />

                        <li class="sugestao">
                            <div class="perfil">
                                <a href="...">
                                  <img
                                    class="sugestao-perfil"
                                    src="imagens/badvibesmemes.jpg"
                                    alt="badvibesmemes"
                                  />
                                </a>

                                <div class="descricao">
                                  <a href="...">
                                    <h1>bad.vibes.memes</h1>
                                  </a>
                                  <p class="perfil-name">Segue você</p>
                                </div>
                            </div>
                            <h3>Seguir</h3>
                        </li>
                    </ul>

                    <div class="ajuda">
                      <p>
                        <a href="...">Sobre</a> • <a href="...">Ajuda</a> • <a href="...">Imprensa</a> • <a href="...">API</a> • <a href="...">Carreiras</a> • <a href="...">Privacidade</a> • <a href="...">Termos</a> •
                        <a href="...">Localizações</a> • <a href="...">Contas mais relevantes</a> • <a href="...">Hashtags</a> • <a href="...">Idioma</a>
                      </p>
                    </div>

                    <div class="company">
                      <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
