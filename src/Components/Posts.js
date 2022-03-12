import Post from "./Post";

export default function Posts() {
    const posts = [
        {
            source: "meowed",
            postType: "img",
            nomeConteudo: "gato-telefone",
            sourcePrimeiraCurtida: "respondeai",
            nomeExibidoPrimeiraCurtida: "respondeai",
            numCurtidas: "101.253",
            sourceMensagem: "Lorem ipsum dolor sit amet. Non similique nisi qui perspiciatis rerum et molestiae illum eum quos iusto.",
            qtdComentarios: "2",
            nomeImagemPrimeiroComentario: "9gag",
            nomeSourcePrimeiroComentario: "9gag",
            mensagemPrimeiroComentario: "Lorem ipsum dolor sit amet.",
            tempo: "HÁ 6 HORAS"
        },
        {
            source: "barked",
            postType: "img",
            nomeConteudo: "dog",
            sourcePrimeiraCurtida: "adorableanimals",
            nomeExibidoPrimeiraCurtida: "adorable_animals",
            numCurtidas: "99.159",
            sourceMensagem: "Lorem ipsum dolor sit amet. Non similique nisi qui perspiciatis rerum et molestiae illum eum quos iusto.",
            qtdComentarios: "16",
            nomeImagemPrimeiroComentario: "memeriagourmet",
            nomeSourcePrimeiroComentario: "memeriagourmet",
            mensagemPrimeiroComentario: "Lorem ipsum dolor sit amet.",
            tempo: "HÁ 9 HORAS"
        },
        {
            source: "9gag",
            postType: "video",
            nomeConteudo: "video",
            sourcePrimeiraCurtida: "respondeai",
            nomeExibidoPrimeiraCurtida: "respondeai",
            numCurtidas: "104.523",
            sourceMensagem: "Lorem ipsum dolor sit amet. Non similique nisi qui perspiciatis rerum et molestiae illum eum quos iusto.",
            qtdComentarios: "3",
            nomeImagemPrimeiroComentario: "adorableanimals",
            nomeSourcePrimeiroComentario: "adorable_animals",
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
                            nomeExibidoPrimeiraCurtida={post.nomeExibidoPrimeiraCurtida}
                            numCurtidas={post.numCurtidas}
                            sourceMensagem={post.sourceMensagem}
                            qtdComentarios={post.qtdComentarios}
                            nomeImagemPrimeiroComentario={post.nomeImagemPrimeiroComentario}
                            nomeSourcePrimeiroComentario={post.nomeSourcePrimeiroComentario}
                            mensagemPrimeiroComentario={post.mensagemPrimeiroComentario}
                            tempo={post.tempo}
                        />
                    </li>
                );
            })}
        </ul>
    );
}