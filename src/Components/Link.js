export default function Link(props) {
    if (props.type === "img") {
        return (
            <a href="..."><img class={props.class} src={`imagens/${props.name}.svg`} alt={props.name} /></a>
        );
    } else if (props.type === "icon"){
        return (
            <a href="..."><ion-icon class={props.class} name={props.name}></ion-icon></a>
        );
    }
}