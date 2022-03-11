export default function Comentario(props) {
    return (
        <div class="comentario">
          <div class="texto-comentario">
            <img class="img-comentario" src={`imagens/${props.name}.jpg`} alt={props.name}/>
            <p><strong>{props.name}</strong>  {props.msg}</p>
          </div>
          <ion-icon class="bottom-icon" name="heart-outline"></ion-icon>
        </div>
    );
}