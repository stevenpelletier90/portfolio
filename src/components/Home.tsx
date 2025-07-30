import { CTAButton, CTADarkButton, GreetingButton, StatusButton, LightButton, DarkButton } from "./Button";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import Marquee from "react-fast-marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";

function Home() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroBlur = useTransform(scrollY, [0, 300], [0, 10]);

  return (
    <>
      <Helmet>
        <title>Steven Pelletier - Portfolio | Designer, Developer, WordPress Expert</title>
        <meta name="description" content="Steven Pelletier is a passionate Web Designer and Front-End Developer with over 7 years of experience creating high-performance digital solutions. Specializing in WordPress development, React applications, and performance optimization." />
        <meta name="keywords" content="Steven Pelletier, Web Developer, Front-End Developer, WordPress Expert, React Developer, Portfolio, Web Design" />
        <meta property="og:title" content="Steven Pelletier - Portfolio" />
        <meta property="og:description" content="Designer, Developer, WordPress Expert with 7+ years of experience" />
        <meta property="og:type" content="website" />
        <meta name="author" content="Steven Pelletier" />
      </Helmet>
      
      <main>
        <section id="home" className="hero-section">
          <motion.div 
            className="hero-text"
            style={{
              opacity: heroOpacity,
              filter: heroBlur
            }}
          >
            <p className="hero-roles">Designer, Developer, WordPress Expert</p>
            <h1>Steven Pelletier</h1>
            <CTAButton
              href="#work"
              className="hero-cta"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              My Work
            </CTAButton>
          </motion.div>
        </section>

        <section id="work" className="work-section">
        <div className="work-content">
          <h2>My Work</h2>
          <p>
            A selection of projects showcasing my development skills and
            creativity.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Button Test Area */}
          <div className="button-test-area">
            <h3>Modern Button Library</h3>
            <div className="button-grid">
              <div className="button-row">
                <h4>Status & Greeting</h4>
                <StatusButton />
                <GreetingButton />
              </div>
              
              <div className="button-row">
                <h4>Light Buttons</h4>
                <LightButton href="#about">Light Button</LightButton>
                <CTAButton href="#about">CTA Light</CTAButton>
                <LightButton 
                  href="#resume" 
                  icon={<i className="fa-solid fa-download"></i>}
                >
                  With Icon
                </LightButton>
              </div>
              
              <div className="button-row">
                <h4>Dark Buttons</h4>
                <DarkButton href="#resume">Dark Button</DarkButton>
                <CTADarkButton href="#about">CTA Dark</CTADarkButton>
                <DarkButton 
                  href="https://linkedin.com/in/stevendpelletier" 
                  icon={<i className="fa-brands fa-linkedin"></i>}
                >
                  With Icon
                </DarkButton>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section id="about" className="about-section">
        <div className="about-hero">
          <img src="/images/about-hero.jpg" alt="Steven Pelletier" className="about-hero-image" />
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a passionate Web Designer and Front-End Developer with over 7 years of experience creating high-performance 
              digital solutions. Currently serving as a Senior Web Developer at Mia Aesthetics, I specialize in WordPress 
              development, React applications, and performance optimization. My expertise spans from leading development teams 
              to building custom solutions that drive measurable business results and enhance user experiences.
            </p>
          </div>
          
          <div className="about-interests">
            <h3>Interests</h3>
            <ul className="interests-list">
              <li>Front-End Web Development</li>
              <li>WordPress Themes & Customization</li>
              <li>React App Development</li>
              <li>Performance Optimization</li>
              <li>Team Leadership</li>
              <li>A/B Testing & Analytics</li>
              <li>User Experience Design</li>
              <li>SEO & Conversion Optimization</li>
            </ul>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <h3>7+</h3>
            <p className="stat-label">YEARS OF EXPERIENCE</p>
            <p className="stat-description">Proven expertise in web development, from intern to senior leadership roles.</p>
          </div>
          <div className="stat-item">
            <h3>8</h3>
            <p className="stat-label">TEAM MEMBERS LED</p>
            <p className="stat-description">Successfully co-led and mentored a team of 8 web developers at PatientNow.</p>
          </div>
          <div className="stat-item">
            <h3>1s</h3>
            <p className="stat-label">PAGE LOAD IMPROVEMENT</p>
            <p className="stat-description">Reduced page load speeds by at least 1 second through optimization techniques.</p>
          </div>
          <div className="stat-item">
            <h3>100s</h3>
            <p className="stat-label">CLIENTS SERVED</p>
            <p className="stat-description">Managed scalable web development projects for hundreds of clients.</p>
          </div>
        </div>

        <div className="about-experience">
          <div className="experience-content">
            <div className="experience-testimonial">
              <blockquote>
                "Steve consistently delivers high-quality, responsive websites that meet technical standards and drive business results"
              </blockquote>
              <div className="testimonial-author">
                <img src="/images/testimonial-author.jpg" alt="Client" className="author-avatar" />
                <div className="author-info">
                  <p className="author-name">PERFORMANCE RESULTS</p>
                  <p className="author-company">Proven Track Record</p>
                </div>
              </div>
            </div>
            
            <div className="experience-timeline">
              <div className="timeline-item">
                <h4>Web Designer:</h4>
                <p className="company">DEALERON</p>
                <p className="duration">NOV 2024 - PRESENT</p>
              </div>
              <div className="timeline-item">
                <h4>Senior Web Developer:</h4>
                <p className="company">MIA AESTHETICS</p>
                <p className="duration">FEB 2023 - PRESENT</p>
              </div>
              <div className="timeline-item">
                <h4>Lead Web Developer:</h4>
                <p className="company">PATIENTNOW</p>
                <p className="duration">JAN 2022 - FEB 2023</p>
              </div>
              <div className="timeline-item">
                <h4>Web Developer:</h4>
                <p className="company">PATIENTNOW</p>
                <p className="duration">MAR 2020 - JAN 2022</p>
              </div>
              <div className="timeline-item">
                <h4>Associate Web Developer:</h4>
                <p className="company">PATIENTNOW</p>
                <p className="duration">FEB 2019 - MAR 2020</p>
              </div>
              <div className="timeline-item">
                <h4>Web Developer/Graphic Designer/IT:</h4>
                <p className="company">MARKETING HOLDERS</p>
                <p className="duration">AUG 2017 - JAN 2019</p>
              </div>
              <div className="timeline-item">
                <h4>Summer Intern:</h4>
                <p className="company">ON TARGET WEB SOLUTIONS</p>
                <p className="duration">MAY 2017 - JULY 2017</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tech-marquee">
          <Marquee 
            speed={50}
            gradient={false}
            pauseOnHover={true}
          >
            <span className="marquee-item">React</span>
            <span className="marquee-item">TypeScript</span>
            <span className="marquee-item">WordPress</span>
            <span className="marquee-item">PHP</span>
            <span className="marquee-item">JavaScript</span>
            <span className="marquee-item">CSS3</span>
            <span className="marquee-item">HTML5</span>
            <span className="marquee-item">Node.js</span>
            <span className="marquee-item">Python</span>
            <span className="marquee-item">Figma</span>
            <span className="marquee-item">Photoshop</span>
            <span className="marquee-item">Illustrator</span>
            <span className="marquee-item">Git</span>
            <span className="marquee-item">MySQL</span>
            <span className="marquee-item">MongoDB</span>
            <span className="marquee-item">Vite</span>
            <span className="marquee-item">Webpack</span>
            <span className="marquee-item">SASS</span>
            <span className="marquee-item">TailwindCSS</span>
            <span className="marquee-item">Bootstrap</span>
          </Marquee>
        </div>
        </section>

      </main>
    </>
  );
}

export default Home;
