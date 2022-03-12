import Link from "./Link";


export default function Links(props) {
    const {icones} = props;
    
    const links = icones.map(icone => <Link type="icon" class={icone.class} name={icone.name} />);
    return (
        <div class="links">
            {links}
        </div>
    )
}