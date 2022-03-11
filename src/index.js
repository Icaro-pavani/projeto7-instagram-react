import ReactDOM from 'react-dom';
import Header from './Header';

import FeedBar from "./FeedBar";

import Source from "./Source";

import PostBottom from "./PostBottom";
import Curtidas from "./Curtidas";

function App() {
    return (
        <div>
            <Header />
            <main>
                <div class="feeds">
                    <FeedBar />
                    <div class="posts">
                        <div class="post">
                            <Source name="meowed" />

                            <img
                              src="imagens/gato-telefone.jpg"
                              alt="gato-telefone"
                              class="foto-post"
                            />

                            <PostBottom />

                            <Curtidas name="respondeai" numCurtidas="101.523" />

                            <div class="comentarios">
                              <div class="foto-comentario">
                                <img src="imagens/meowed.jpg" alt="meowed"/>
                              </div>
                              <p><strong>meowed</strong>  Lorem ipsum dolor sit amet. Non similique nisi qui perspiciatis rerum et molestiae illum eum quos iusto.</p>
                              <a href="#"><p>mais</p></a>
                            </div>
                            <a href="#"><p class="quantidade">Ver todos os 2 comentários</p></a>
                            <div class="comentario">
                              <div class="texto-comentario">
                                <img class="img-comentario" src="imagens/9gag.jpg" alt="9gag"/>
                                <p><strong>9gag</strong>  Lorem ipsum dolor sit amet.</p>
                              </div>
                              <a href="#"><ion-icon class="bottom-icon" name="heart-outline"></ion-icon></a>
                            </div>
                            <p class="hora">HÁ 6 HORAS</p>
                            <div class="add-comentario">
                              <div class="campo-esquerdo">
                                <ion-icon class="post-icon" name="happy-outline"></ion-icon>
                                <input type="text" name="comentário" placeholder="Adicione um comentário..."/>
                              </div>
                              <a href="#">Publicar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
