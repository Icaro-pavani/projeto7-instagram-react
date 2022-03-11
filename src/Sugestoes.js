import TopoSugestoes from "./TopoSugestoes";
import Sugestao from "./Sugestao";

export default function Sugestoes() {
    const sugestoes =[
        {
            name: "badvibesmemes",
            nomeExibido: "bad.vibes.memes",
            seguir: "sim"
        },
        {
            name: "chibirdart",
            nomeExibido: "chibirdart",
            seguir: "sim"
        },
        {
            name: "razoesparaacreditar",
            nomeExibido: "razoesparaacreditar",
            seguir: "não"
        },
        {
            name: "adorableanimals",
            nomeExibido: "adorable_animals",
            seguir: "sim"
        },
        {
            name: "smallcutecats",
            nomeExibido: "smallcutecats",
            seguir: "sim"
        }    
    ];

    return (
        <ul className="sugestoes">
            <TopoSugestoes />
            {sugestoes.map(sugestao => <Sugestao name={sugestao.name} nomeExibido={sugestao.nomeExibido} seguir={sugestao.seguir} />)}
        </ul>
    );
}