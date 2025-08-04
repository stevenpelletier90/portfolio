import CountUp from "../CountUp";
import "../../styles/components/SkillsSection.css";

function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-grid">
          <div className="skill-stat">
            <CountUp end={7} suffix="+" />
            <div className="stat-label">YEARS OF EXPERIENCE</div>
            <p className="stat-description">
              A proven track record of delivering high-performance web
              solutions across various industries.
            </p>
          </div>

          <div className="skill-stat">
            <CountUp end={50} suffix="+" />
            <div className="stat-label">PROJECTS COMPLETED</div>
            <p className="stat-description">
              Successfully designed and developed websites, applications,
              and digital solutions for clients.
            </p>
          </div>

          <div className="skill-stat">
            <CountUp end={110} suffix="%" />
            <div className="stat-label">COMMITMENT</div>
            <p className="stat-description">
              I give 110% dedication and commitment to every project I work
              on, ensuring exceptional results.
            </p>
          </div>

          <div className="skill-stat">
            <CountUp end={100} suffix="%" />
            <div className="stat-label">CLIENT SATISFACTION</div>
            <p className="stat-description">
              Exceptional service and quality ensures a 100% client
              satisfaction and happiness rate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;