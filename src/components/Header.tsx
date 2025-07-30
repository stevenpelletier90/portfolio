import Logo from "./Logo";
import Navigation from "./Navigation";
import { StatusButton } from "./Button";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <Logo />
        <Navigation className="desktop-nav" />
        <StatusButton />
      </div>
      <div className="header-bottom">
        <Navigation className="mobile-nav" />
      </div>
    </header>
  );
}

export default Header;
