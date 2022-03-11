import ReactDOM from 'react-dom';
import Header from './Header';

import FeedBar from "./FeedBar";

import Source from "./Source";
import PostBottom from "./PostBottom";
import Curtidas from "./Curtidas";
import Comentarios from "./Comentarios";
import Comentario from "./Comentario";
import AddComentario from "./AddComentario";

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

                            <Comentarios name="meowed" msg="Lorem ipsum dolor sit amet. Non similique nisi qui perspiciatis rerum et molestiae illum eum quos iusto." />


                            <a href=".."><p class="quantidade">Ver todos os 2 comentários</p></a>

                            <Comentario name="9gag" msg="Lorem ipsum dolor sit amet." />
                            <p class="hora">HÁ 6 HORAS</p>
                            <AddComentario />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
