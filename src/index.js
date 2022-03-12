import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
