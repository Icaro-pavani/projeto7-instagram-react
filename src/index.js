import ReactDOM from 'react-dom';
import Header from './Header';

import Stories from "./Stories";

function App() {
    return (
        <div>
            <Header />
            <main>
                <div class="feeds">
                    <ul class="feed-bar">
                        <Stories />
                    </ul>
                </div>
            </main>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
