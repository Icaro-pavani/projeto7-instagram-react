export default function PerfilFonte(props) {
    return (
        <div>
            <a href="...">
              <img
                className="img-perfil"
                src={`imagens/${props.name}.jpg`}
                alt={props.name}
              />
            </a>
            <div className="alinhamento">
              <a href="...">
                <h1>{props.name}</h1>
              </a>
              <p className="perfil-name">{props.nomeExibido}</p>
            </div>
        </div>
    )
}