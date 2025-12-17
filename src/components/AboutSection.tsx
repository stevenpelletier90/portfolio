function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>

          {/* Professional Summary */}
          <p className="about-summary">
            I'm a Senior Web Developer transforming complex challenges into elegant digital solutions. Known for elevating team performance through mentorship, creating efficiency-driving tools, and championing accessibility-first development. I don't just write code—I build systems, improve workflows, and empower teams to deliver exceptional results.
          </p>

          {/* Impact & Achievements */}
          <div className="about-impact">
            <h4 className="impact-title">Key Impact</h4>
            <div className="impact-grid">
              <div className="impact-item">
                <i className="fas fa-rocket"></i>
                <div>
                  <strong>Performance Expert</strong>
                  <p>Optimized high-traffic sites serving 500+ concurrent users with 40% faster load times</p>
                </div>
              </div>
              <div className="impact-item">
                <i className="fas fa-users"></i>
                <div>
                  <strong>Team Leadership</strong>
                  <p>Mentored 10+ developers through code reviews, documentation, and onboarding processes—recognized for raising team standards</p>
                </div>
              </div>
              <div className="impact-item">
                <i className="fas fa-universal-access"></i>
                <div>
                  <strong>Accessibility Champion</strong>
                  <p>Led WCAG/ADA compliance audits ensuring inclusive, user-friendly experiences for all visitors</p>
                </div>
              </div>
              <div className="impact-item">
                <i className="fas fa-cogs"></i>
                <div>
                  <strong>Workflow Optimization</strong>
                  <p>Created automation tools and reusable code snippets that streamlined enterprise content migration processes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Categories */}
          <div className="skills-categories">
            <div className="skill-category">
              <h4 className="category-title">
                <i className="fas fa-code"></i>
                Frontend & Modern JavaScript
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript ES6+</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3/Sass</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">Responsive Design</span>
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
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">GraphQL</span>
                <span className="skill-tag">Headless CMS</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="category-title">
                <i className="fas fa-chart-line"></i>
                Performance & Optimization
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">Core Web Vitals</span>
                <span className="skill-tag">SEO</span>
                <span className="skill-tag">Accessibility (WCAG)</span>
                <span className="skill-tag">Performance Audits</span>
                <span className="skill-tag">Code Optimization</span>
                <span className="skill-tag">Lighthouse</span>
                <span className="skill-tag">Bundle Analysis</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="category-title">
                <i className="fas fa-tools"></i>
                Dev Tools & Collaboration
              </h4>
              <div className="skill-tags">
                <span className="skill-tag">Git/GitHub</span>
                <span className="skill-tag">Vite/Webpack</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Code Reviews</span>
                <span className="skill-tag">Agile/Scrum</span>
                <span className="skill-tag">Documentation</span>
                <span className="skill-tag">Figma</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-images">
          <div className="image-mosaic">
            <div className="mosaic-item mosaic-large">
              <img
                src="https://placehold.co/400x300/2563eb/ffffff?text=Steven+Working"
                alt="Steven working"
              />
            </div>
            <div className="mosaic-item mosaic-small">
              <img
                src="https://placehold.co/200x150/7c3aed/ffffff?text=Development"
                alt="Development setup"
              />
            </div>
            <div className="mosaic-item mosaic-medium">
              <img
                src="https://placehold.co/300x200/059669/ffffff?text=Team+Work"
                alt="Team collaboration"
              />
            </div>
            <div className="mosaic-item mosaic-small">
              <img
                src="https://placehold.co/200x150/dc2626/ffffff?text=Code"
                alt="Code on screen"
              />
            </div>
            <div className="mosaic-item mosaic-medium">
              <img
                src="https://placehold.co/300x200/ea580c/ffffff?text=Creative"
                alt="Creative process"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
