const icones = [
    {class: "icone-esquerda mobile paper", name: "paper-plane-outline"},
    {class: "icone-esquerda mobile", name: "compass-outline"},
    {class: "icone-esquerda mobile", name: "heart-outline"},
    {class: "icone-esquerda end mobile", name: "person-outline"}
];

const links = icones.map(icone => <a href="..."><ion-icon class={icone.class} name={icone.name}></ion-icon></a>);

export default function Links() {
    return (
        <div class="links">
            {links}
        </div>
    )
}