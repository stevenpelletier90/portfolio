import { CTAButton } from "../Button";
import "../../styles/components/HeroSection.css";

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      {/* Simple Background */}
      <div className="hero-background-container">
        <div className="hero-background" />
      </div>

      <div className="hero-text">
        <p className="hero-roles">Designer, Developer, WordPress Expert</p>
        <h1>Steven Pelletier</h1>
        <CTAButton href="#connect" className="hero-cta">
          Get In Touch
        </CTAButton>
      </div>
    </section>
  );
}

export default HeroSection;