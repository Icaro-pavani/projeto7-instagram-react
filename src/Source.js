import Link from "./Link";

export default function Source(props) {
    return (
        <div class="source">
          <div class="perfil-fonte">
            <a href="...">
              <img
                class="sugestao-perfil"
                src={`imagens/${props.name}.jpg`}
                alt={props.name}
              />
            </a>
            <a href="..."><p>{props.name}</p></a>
          </div>
          <Link type="icon" class="ellipsis" name="ellipsis-horizontal-outline" />
        </div>
    );
}