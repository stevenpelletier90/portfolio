import { CTAButton } from "./Button";

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
          <h2 className="work-title">Featured Projects</h2>

          <h3 className="work-subtitle">Real Solutions, Measurable Impact</h3>

          <p className="work-description">
            Each project represents a unique challenge solved through strategic
            thinking and technical execution. From enterprise content migrations
            serving thousands of users to accessibility-compliant custom
            solutions, my work combines performance, usability, and business
            impact.
          </p>

          <div>
            <CTAButton href="#connect" className="work-cta">
              Let's Work Together
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
