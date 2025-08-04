import "../../styles/components/ServicesSection.css";

function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">What I Do</h2>
          <p className="services-subtitle">
            Full-Stack Developer & Digital Solutions Architect
          </p>
        </div>

        <div className="services-content">
          {/* Developer Profile */}
          <div className="developer-profile">
            <h3 className="profile-title">Front-End Focused Full-Stack Developer</h3>
            <p className="profile-description">
              I'm a versatile developer who bridges the gap between design and functionality. 
              With 7+ years of experience, I specialize in creating performant, accessible, 
              and visually stunning web applications that deliver exceptional user experiences.
            </p>
            <p className="profile-description">
              My approach combines technical expertise with creative problem-solving, ensuring 
              that every project not only meets business objectives but also delights users. 
              I'm passionate about clean code, modern best practices, and staying current with 
              emerging technologies.
            </p>
            <div className="profile-highlights">
              <div className="highlight">
                <i className="fas fa-check-circle"></i>
                <span>Senior-level React & TypeScript expertise</span>
              </div>
              <div className="highlight">
                <i className="fas fa-check-circle"></i>
                <span>WordPress specialist with 50+ custom sites</span>
              </div>
              <div className="highlight">
                <i className="fas fa-check-circle"></i>
                <span>Performance optimization & SEO expert</span>
              </div>
              <div className="highlight">
                <i className="fas fa-check-circle"></i>
                <span>Team lead with mentorship experience</span>
              </div>
            </div>
          </div>

          {/* Skills Categories */}
          <div className="skills-categories">
            <div className="skill-category">
              <h4 className="category-title">
                <i className="fas fa-code"></i>
                Core Technologies
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript ES6+</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Sass/SCSS</span>
                <span className="skill-tag">Node.js</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="category-title">
                <i className="fas fa-paint-brush"></i>
                Design & UI
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Adobe XD</span>
                <span className="skill-tag">Responsive Design</span>
                <span className="skill-tag">CSS Grid</span>
                <span className="skill-tag">Flexbox</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">Bootstrap</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="category-title">
                <i className="fas fa-database"></i>
                Backend & CMS
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">WordPress</span>
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">GraphQL</span>
                <span className="skill-tag">WooCommerce</span>
                <span className="skill-tag">Headless CMS</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="category-title">
                <i className="fas fa-tools"></i>
                Tools & Workflow
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">Git/GitHub</span>
                <span className="skill-tag">Vite</span>
                <span className="skill-tag">Webpack</span>
                <span className="skill-tag">npm/yarn</span>
                <span className="skill-tag">Jest</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Agile/Scrum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;