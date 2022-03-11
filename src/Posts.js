import Post from "./Post";

export default function Posts() {
    const posts = [
        {
            source: "meowed",
            postType: "img",
            nomeConteudo: "gato-telefone",
            sourcePrimeiraCurtida: "respondeai",
            numCurtidas: "101.253",
            sourceMensagem: "Lorem ipsum dolor sit amet. Non similique nisi qui perspiciatis rerum et molestiae illum eum quos iusto.",
            qtdComentarios: "2",
            sourcePrimeiroComentario: "9gag",
            mensagemPrimeiroComentario: "Lorem ipsum dolor sit amet.",
            tempo: "HÁ 6 HORAS"
        },
        {
            source: "barked",
            postType: "img",
            nomeConteudo: "dog",
            sourcePrimeiraCurtida: "adorableanimals",
            numCurtidas: "99.159",
            sourceMensagem: "Lorem ipsum dolor sit amet. Non similique nisi qui perspiciatis rerum et molestiae illum eum quos iusto.",
            qtdComentarios: "16",
            sourcePrimeiroComentario: "memeriagourmet",
            mensagemPrimeiroComentario: "Lorem ipsum dolor sit amet.",
            tempo: "HÁ 9 HORAS"
        },
        {
            source: "9gag",
            postType: "video",
            nomeConteudo: "video",
            sourcePrimeiraCurtida: "respondeai",
            numCurtidas: "104.523",
            sourceMensagem: "Lorem ipsum dolor sit amet. Non similique nisi qui perspiciatis rerum et molestiae illum eum quos iusto.",
            qtdComentarios: "3",
            sourcePrimeiroComentario: "adorableanimals",
            mensagemPrimeiroComentario: "Lorem ipsum dolor sit amet.",
            tempo: "HÁ 12 HORAS"
        }
    ];

    return (
        <ul class="posts">
            {posts.map(post => {
                return(
                    <li>
                        <Post
                            source={post.source}
                            postType={post.postType}
                            nomeConteudo={post.nomeConteudo}
                            sourcePrimeiraCurtida={post.sourcePrimeiraCurtida}
                            numCurtidas={post.numCurtidas}
                            sourceMensagem={post.sourceMensagem}
                            qtdComentarios={post.qtdComentarios}
                            sourcePrimeiroComentario={post.sourcePrimeiroComentario}
                            mensagemPrimeiroComentario={post.mensagemPrimeiroComentario}
                            tempo={post.tempo}
                        />
                    </li>
                );
            })}
        </ul>
    );
}