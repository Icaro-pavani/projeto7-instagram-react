import ReactDOM from 'react-dom';
import Header from './Header';
import Main from "./Main";

import Feeds from "./Feeds";
import Sidebar from "./Sidebar";

function App() {
    return (
        <div>
            <Header />
            <Main />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
