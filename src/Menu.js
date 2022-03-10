import Links from './Links';
import Link from "./Link";

export default function Menu() {
    return (
        <div class="menu">
          <Link type="img" class="logo" name="logo" />
          <input
            type="text"
            class="pesquisa mobile"
            name="Pesquisa"
            placeholder="Pesquisar"
          />
          <Links />
        </div>
    );
}