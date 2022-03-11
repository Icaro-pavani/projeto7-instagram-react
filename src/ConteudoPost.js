export default function ConteudoPost(props) {
    if (props.type === "img"){
        return (
            <img
              src={`imagens/${props.name}.jpg`}
              alt={props.name}
              class="foto-post"
            />
        );
    } else if (props.type === "video") {
        return (
            <video autoplay muted poster loop>
              <source src={`videos/${props.name}.mp4`} type="video/mp4"/>
              <source src={`videos/${props.name}.ogv`} type="video/ogv"/>
              Impossível Reproduzir
            </video>
        )
    }
}