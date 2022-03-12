import Link from "./Link";

export default function Comentario(props) {
    return (
        <div class="comentario">
          <div class="texto-comentario">
            <img class="img-comentario" src={`imagens/${props.nameImagem}.jpg`} alt={props.nameImagem}/>
            <p><strong>{props.name}</strong>  {props.msg}</p>
          </div>
          <Link type="icon" class="bottom-icon" name="heart-outline" />
        </div>
    );
}