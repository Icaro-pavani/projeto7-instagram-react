export default function Curtidas(props) {
    return (
        <div class="curtidas">
          <img src={`imagens/${props.name}.jpg`} alt={props.name}/>
          <p>Curtido por <strong>{props.nomeExibido}</strong> e <strong>outras {props.numCurtidas} pessoas</strong></p>
        </div>
    )
}