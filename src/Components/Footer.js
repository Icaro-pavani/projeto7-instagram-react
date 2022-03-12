import Link from "./Link";

export default function Footer() {
    const iconesBottom = [
        {class: "bottom-icon desktop", name: "home"},
        {class: "bottom-icon desktop", name: "search-outline"},
        {class: "bottom-icon desktop", name: "add-circle-outline"},
        {class: "bottom-icon desktop", name: "heart-outline"},
        {class: "bottom-icon desktop", name: "person-outline"}
    ];
    return (
        <footer>
            <div className="icones-bottom">
                {iconesBottom.map(icone => <Link type="icon" class={icone.class} name={icone.name} />)}
            </div>
        </footer>
    )
}