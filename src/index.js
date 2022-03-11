import ReactDOM from 'react-dom';
import Header from './Header';

import FeedBar from "./FeedBar";
import Post from "./Post";
import Posts from "./Posts";

function App() {
    return (
        <div>
            <Header />
            <main>
                <div class="feeds">
                    <FeedBar />
                    <Posts />
                </div>
            </main>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
