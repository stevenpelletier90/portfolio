import { CTAButton } from "./Button";

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-text">
        <p className="hero-roles">Senior Web Developer & Team Leader</p>
        <h1>Steven Pelletier</h1>
        <p className="hero-tagline">
          Building high-performance web solutions while elevating teams through mentorship, automation, and accessibility-first development
        </p>
        <CTAButton href="#work" className="hero-cta">
          View My Work
        </CTAButton>
      </div>
    </section>
  );
}

export default HeroSection;
