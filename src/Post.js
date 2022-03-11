import Source from "./Source";
import PostBottom from "./PostBottom";
import Curtidas from "./Curtidas";
import Comentarios from "./Comentarios";
import Comentario from "./Comentario";
import AddComentario from "./AddComentario";
import ConteudoPost from "./ConteudoPost";

export default function Post(props) {
    return (
        <div class="post">
            <Source name={props.source} />
            <ConteudoPost type={props.postType} name={props.nomeConteudo} />
            <PostBottom />
            <Curtidas name={props.sourcePrimeiraCurtida} numCurtidas={props.numCurtidas} />
            <Comentarios name={props.source} msg={props.sourceMensagem} />
            <p class="quantidade">Ver todos os {props.qtdComentarios} comentários</p>
            <Comentario name={props.sourcePrimeiroComentario} msg={props.mensagemPrimeiroComentario} />
            <p class="hora">{props.tempo}</p>
            <AddComentario />
        </div>
    )
}