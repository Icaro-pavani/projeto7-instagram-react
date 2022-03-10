const nomeIcones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];
const icones = nomeIcones.map(nome => <ion-icon name={nome}></ion-icon>);

export default function Icones() {
    return (
        <div class="icones">
          {icones}
        </div>
    );
}