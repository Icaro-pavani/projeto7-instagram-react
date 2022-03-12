import PerfilFonte from "./PerfilFonte";
import Sugestoes from "./Sugestoes";
import Ajuda from "./Ajuda";
import Company from "./Company"

export default function Sidebar(props) {
    return (
        <div className="sidebar">
            <PerfilFonte name={props.name} nomeExibido={props.nomeExibido} />
            <Sugestoes />
            <Ajuda />
            <Company ano={props.ano} />
        </div>
    )
}