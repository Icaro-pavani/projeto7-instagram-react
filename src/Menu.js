import Links from './Links';
import Link from "./Link";

export default function Menu() {
    const icones = [
        {class: "icone-esquerda mobile paper", name: "paper-plane-outline"},
        {class: "icone-esquerda mobile", name: "compass-outline"},
        {class: "icone-esquerda mobile", name: "heart-outline"},
        {class: "icone-esquerda end mobile", name: "person-outline"}
    ];
    return (
        <div class="menu">
          <Link type="img" class="logo" name="logo" />
          <input
            type="text"
            class="pesquisa mobile"
            name="Pesquisa"
            placeholder="Pesquisar"
          />
          <Links icones={icones}/>
        </div>
    );
}