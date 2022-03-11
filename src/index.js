import ReactDOM from 'react-dom';
import Header from './Header';

import FeedBar from "./FeedBar";
import Post from "./Post";

function App() {
    return (
        <div>
            <Header />
            <main>
                <div class="feeds">
                    <FeedBar />
                    <div class="posts">
                        <Post
                            source="meowed"
                            postType="img"
                            nomeConteudo="gato-telefone"
                            sourcePrimeiraCurtida="respondeai"
                            numCurtidas="101.253"
                            sourceMensagem="Lorem ipsum dolor sit amet. Non similique nisi qui perspiciatis rerum et molestiae illum eum quos iusto." 
                            qtdComentarios="2"
                            sourcePrimeiroComentario="9gag"
                            mensagemPrimeiroComentario="Lorem ipsum dolor sit amet."
                            tempo="HÁ 6 HORAS"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
