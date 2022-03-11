import ReactDOM from 'react-dom';
import Header from './Header';

import Feeds from "./Feeds";
import PerfilFonte from "./PerfilFonte";
import Sugestoes from "./Sugestoes";
import Ajuda from "./Ajuda";
import Company from "./Company"

function App() {
    return (
        <div>
            <Header />
            <main>
                <Feeds />
                <div className="sidebar">
                    <PerfilFonte name="catanacomics" nomeExibido="Catana" />

                    <Sugestoes />

                    {/* <ul className="sugestoes">
                        <TopoSugestoes />

                        <Sugestao name="badvibesmemes" nomeExibido="bad.vibes.memes" seguir="sim"/>
                    </ul> */}

                    <Ajuda />
                    <Company ano="2022" />
                </div>
            </main>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
