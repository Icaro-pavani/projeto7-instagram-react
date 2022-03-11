export default function Comentarios(props) {
    return (
        <div class="comentarios">
          <div class="foto-comentario">
            <img src={`imagens/${props.name}.jpg`} alt={props.name}/>
          </div>
          <p><strong>{props.name}</strong>  {props.msg}</p>
          <a href="..."><p>mais</p></a>
        </div>
    );
}