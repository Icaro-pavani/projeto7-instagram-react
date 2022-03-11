export default function Source(props) {
    return (
        <div class="source">
          <div class="perfil-fonte">
            <img
              class="sugestao-perfil"
              src={`imagens/${props.name}.jpg`}
              alt={props.name}
            />
            <p>{props.name}</p>
          </div>
          <ion-icon
              class="ellipsis"
              name="ellipsis-horizontal-outline"></ion-icon>
        </div>
    );
}