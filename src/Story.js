export default function Story(props) {
    return (
        <li>
          <div className="story">
            <a href="...">
              <div className="foto-story">
                <img src={`imagens/${props.name}.jpg`} alt={props.name} />
              </div>
              <p>{props.name}</p>
            </a>
          </div>
        </li>
    );
}