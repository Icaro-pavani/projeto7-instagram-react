import ReactDOM from 'react-dom';
import Header from './Header';

import FeedBar from "./FeedBar";

function App() {
    return (
        <div>
            <Header />
            <main>
                <div class="feeds">
                    <FeedBar />
                </div>
            </main>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
