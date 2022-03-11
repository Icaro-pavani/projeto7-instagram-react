export default function Story(props) {
    return (
        <li>
          <div class="story">
            <div class="foto-story">
              <img src={`imagens/${props.name}.jpg`} alt={props.name} />
            </div>
            <p>{props.name}</p>
          </div>
        </li>
    );
}