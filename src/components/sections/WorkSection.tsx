import { CTAButton } from "../Button";
import "../../styles/components/WorkSection.css";

function WorkSection() {
  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <div className="work-images">
          <div className="screenshot-stack">
            <div className="screenshot-main">
              <img
                src="https://placehold.co/400x300/2563eb/ffffff?text=Main+Project"
                alt="Featured project screenshot"
              />
            </div>

            <div className="screenshot-back screenshot-left">
              <img
                src="https://placehold.co/400x300/059669/ffffff?text=Project+Two"
                alt="Project screenshot"
              />
            </div>

            <div className="screenshot-back screenshot-right">
              <img
                src="https://placehold.co/400x300/dc2626/ffffff?text=Project+Three"
                alt="Project screenshot"
              />
            </div>
          </div>
        </div>

        <div className="work-content">
          <h2 className="work-title">My Work</h2>

          <h3 className="work-subtitle">Crafting Digital Experiences</h3>

          <p className="work-description">
            From responsive websites to complex web applications, I create
            digital solutions that combine beautiful design with robust
            functionality. Each project is tailored to meet specific
            business goals while providing exceptional user experiences.
          </p>

          <div>
            <CTAButton href="#connect" className="work-cta">
              View All Projects
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;