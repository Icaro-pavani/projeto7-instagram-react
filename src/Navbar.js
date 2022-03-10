import Logo from "./Logo";
import Icones  from "./Icones";

export default function Navbar() {
    return (
        <div class="navbar">
            <div class="container">
              <Logo />

              <div class="logo-mobile">
                <ion-icon name="logo-instagram"></ion-icon>
              </div>

              <div class="instagram-mobile">
                <img src="assets/img/logo.png" alt=""/>
              </div>
        
              <div class="pesquisa">
                <input type="text" placeholder="Pesquisar" />
              </div>
        
              <Icones />

              <div class="icones-mobile">
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
            </div>
        </div>
    );
}