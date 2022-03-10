import Links from './Links';

export default function Menu() {
    return (
        <div class="menu">
          <a href="..."><img class="logo" src="imagens/logo.svg" alt="" /></a>
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