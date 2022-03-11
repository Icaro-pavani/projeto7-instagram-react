import Feeds from "./Feeds";
import Sidebar from "./Sidebar";

export default function Main() {
    return (
        <main>
            <Feeds />
            <Sidebar name="catanacomics" nomeExibido="Catana" ano="2022" />
        </main>
    );
}