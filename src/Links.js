import Link from "./Link";

const icones = [
    {class: "icone-esquerda mobile paper", name: "paper-plane-outline"},
    {class: "icone-esquerda mobile", name: "compass-outline"},
    {class: "icone-esquerda mobile", name: "heart-outline"},
    {class: "icone-esquerda end mobile", name: "person-outline"}
];

const links = icones.map(icone => <Link type="icon" class={icone.class} name={icone.name} />);

export default function Links() {
    return (
        <div class="links">
            {links}
        </div>
    )
}