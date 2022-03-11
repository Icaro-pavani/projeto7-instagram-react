import Story from "./Story";

export default function Stories() {
    const storiesNomes = [
        "9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawiwacomicsa",
        "respondeai", "filomoderna", "memeriagourmet"
    ];

    const stories = storiesNomes.map(nome => <Story name={nome} />);

    return (
        <div class="stories">
            {stories}
        </div>
    );
}