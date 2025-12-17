import { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { StatusButton } from "./Button";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
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
