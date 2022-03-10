import Menu from "./Menu";
import Link from "./Link";

export default function PositionMenu() {
    return (
        <div class="position-menu">
          <Link type="icon" class="logo-icon" name="logo-instagram" />
          <Menu />
          <Link type="icon" class="icone-esquerda desktop" name="paper-plane-outline" />
        </div>
    );
}