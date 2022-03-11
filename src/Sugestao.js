export default function Sugestao(props) {
    return (
        <li class="sugestao">
            <div class="perfil">
                <a href="...">
                  <img
                    class="sugestao-perfil"
                    src={`imagens/${props.name}.jpg`}
                    alt={props.name}
                  />
                </a>
                <div class="descricao">
                  <a href="...">
                    <h1>{props.nomeExibido}</h1>
                  </a>
                  <p class="perfil-name">{props.seguir === "sim" ? "Segue você" : "Novo no Instagram"}</p>
                </div>
            </div>
            <h3>Seguir</h3>
        </li>
    )
}