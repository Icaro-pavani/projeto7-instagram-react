import ReactDOM from 'react-dom';
import Header from './Header';

import Feeds from "./Feeds";

function App() {
    return (
        <div>
            <Header />
            <main>
                <Feeds />
            </main>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
