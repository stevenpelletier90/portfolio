import { CTAButton } from "./Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useRef } from "react";
import TechMarquee from "./TechMarquee";

function Home() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -150]);
  
  // Work section scroll animations
  const workRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: workRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values for screenshot movement - expand outward on scroll
  const leftScreenshotX = useTransform(scrollYProgress, [0, 0.5, 1], [0, -30, -80]);
  const rightScreenshotX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 30, 80]);
  const mainScreenshotY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0, -20, -40]);

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
          {/* Simple Parallax Background */}
          <motion.div 
            className="hero-background"
            style={{ y: backgroundY }}
          />
          
          <motion.div 
            className="hero-text"
            style={{
              opacity: heroOpacity
            }}
          >
            <p className="hero-roles">Designer, Developer, WordPress Expert</p>
            <h1>Steven Pelletier</h1>
            <CTAButton
              href="#connect"
              className="hero-cta"
            >
              Get In Touch
            </CTAButton>
          </motion.div>
        </section>

        <section id="about" className="about-section">
          <div className="about-container">
            <div className="about-text">
              <h2 className="about-title">About Me</h2>
              <h3 className="about-subtitle">Designer, Developer, WordPress Expert</h3>
              <p className="about-paragraph">
                I'm a passionate Web Designer and Front-End Developer with over 7 years of experience creating high-performance 
                digital solutions. Currently serving as a Senior Web Developer at Mia Aesthetics, I specialize in WordPress 
                development, React applications, and performance optimization. My expertise spans from leading development teams 
                to building custom solutions that drive measurable business results and enhance user experiences.
              </p>
              <p className="about-paragraph">
                My journey in web development started with a curiosity for how things work on the internet, and has evolved into 
                a career where I get to solve complex problems and create beautiful, functional websites every day. I believe in 
                clean code, thoughtful design, and the power of technology to make businesses more successful.
              </p>
            </div>
            
            <div className="about-images">
              <div className="image-mosaic">
                <div className="mosaic-item mosaic-large">
                  <img src="https://placehold.co/400x300/2563eb/ffffff?text=Steven+Working" alt="Steven working" />
                </div>
                <div className="mosaic-item mosaic-small">
                  <img src="https://placehold.co/200x150/7c3aed/ffffff?text=Development" alt="Development setup" />
                </div>
                <div className="mosaic-item mosaic-medium">
                  <img src="https://placehold.co/300x200/059669/ffffff?text=Team+Work" alt="Team collaboration" />
                </div>
                <div className="mosaic-item mosaic-small">
                  <img src="https://placehold.co/200x150/dc2626/ffffff?text=Code" alt="Code on screen" />
                </div>
                <div className="mosaic-item mosaic-medium">
                  <img src="https://placehold.co/300x200/ea580c/ffffff?text=Creative" alt="Creative process" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Marquee */}
        <TechMarquee />

        {/* What I Do Section */}
        <section id="services" className="services-section">
          <div className="services-container">
            <motion.div 
              className="services-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="services-title">What I Do</h2>
              <p className="services-subtitle">Comprehensive web development services to bring your vision to life</p>
            </motion.div>
            
            <div className="services-grid">
              <motion.div 
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3 className="service-title">Web Development</h3>
                <p className="service-description">
                  Custom websites and web applications built with modern technologies like React, TypeScript, and performance optimization.
                </p>
              </motion.div>

              <motion.div 
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">
                  <i className="fab fa-wordpress"></i>
                </div>
                <h3 className="service-title">WordPress Development</h3>
                <p className="service-description">
                  Expert WordPress development, custom themes, plugins, and performance optimization for scalable content management.
                </p>
              </motion.div>

              <motion.div 
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3 className="service-title">Responsive Design</h3>
                <p className="service-description">
                  Mobile-first responsive designs that provide exceptional user experiences across all devices and screen sizes.
                </p>
              </motion.div>

              <motion.div 
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                <h3 className="service-title">Performance Optimization</h3>
                <p className="service-description">
                  Website speed optimization, SEO improvements, and technical enhancements to maximize conversion rates.
                </p>
              </motion.div>

              <motion.div 
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="service-title">Team Leadership</h3>
                <p className="service-description">
                  Leading development teams, mentoring junior developers, and establishing best practices for project success.
                </p>
              </motion.div>

              <motion.div 
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3 className="service-title">Digital Strategy</h3>
                <p className="service-description">
                  Strategic planning and implementation of digital solutions that drive business growth and user engagement.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills/Stats Section */}
        <section id="skills" className="skills-section">
          <div className="skills-container">
            <div className="skills-grid">
              <motion.div 
                className="skill-stat"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">7+</div>
                <div className="stat-label">YEARS OF EXPERIENCE</div>
                <p className="stat-description">
                  A proven track record of delivering high-performance web solutions across various industries.
                </p>
              </motion.div>

              <motion.div 
                className="skill-stat"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">50+</div>
                <div className="stat-label">PROJECTS COMPLETED</div>
                <p className="stat-description">
                  Successfully designed and developed websites, applications, and digital solutions for clients.
                </p>
              </motion.div>

              <motion.div 
                className="skill-stat"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">110%</div>
                <div className="stat-label">COMMITMENT</div>
                <p className="stat-description">
                  I give 110% dedication and commitment to every project I work on, ensuring exceptional results.
                </p>
              </motion.div>

              <motion.div 
                className="skill-stat"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">100%</div>
                <div className="stat-label">CLIENT SATISFACTION</div>
                <p className="stat-description">
                  Exceptional service and quality ensures a 100% client satisfaction and happiness rate.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="work" className="work-section" ref={workRef}>
          <div className="work-container">
            <div className="work-images">
              <div className="screenshot-stack">
                <motion.div 
                  className="screenshot-main"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{ y: mainScreenshotY }}
                >
                  <img src="https://placehold.co/400x300/2563eb/ffffff?text=Main+Project" alt="Featured project screenshot" />
                </motion.div>
                
                <motion.div 
                  className="screenshot-back screenshot-left"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  style={{ x: leftScreenshotX }}
                >
                  <img src="https://placehold.co/400x300/059669/ffffff?text=Project+Two" alt="Project screenshot" />
                </motion.div>
                
                <motion.div 
                  className="screenshot-back screenshot-right"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  style={{ x: rightScreenshotX }}
                >
                  <img src="https://placehold.co/400x300/dc2626/ffffff?text=Project+Three" alt="Project screenshot" />
                </motion.div>
              </div>
            </div>
            
            <div className="work-content">
              <motion.h2 
                className="work-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                My Work
              </motion.h2>
              
              <motion.h3 
                className="work-subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Crafting Digital Experiences
              </motion.h3>
              
              <motion.p 
                className="work-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                From responsive websites to complex web applications, I create digital solutions that combine beautiful design with robust functionality. Each project is tailored to meet specific business goals while providing exceptional user experiences.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <CTAButton href="#connect" className="work-cta">
                  View All Projects
                </CTAButton>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials-section">
          <div className="testimonials-container">
            <motion.div 
              className="testimonials-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="testimonials-title">What People Say</h2>
              <p className="testimonials-subtitle">Recommendations from LinkedIn colleagues and clients</p>
            </motion.div>
            
            <div className="testimonials-grid">
              <motion.div 
                className="testimonial-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "Steven is an exceptional web developer who consistently delivers high-quality work. His expertise in WordPress development and performance optimization has been invaluable to our team. He has a great eye for detail and always goes above and beyond to ensure projects are completed to perfection."
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">Sarah Johnson</h4>
                    <p className="author-title">Marketing Director at TechCorp</p>
                  </div>
                  <div className="linkedin-badge">
                    <i className="fab fa-linkedin"></i>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="testimonial-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "Working with Steven was a game-changer for our digital presence. His React development skills and ability to translate complex requirements into beautiful, functional interfaces is remarkable. He's not just a developer, but a true problem solver who thinks strategically about user experience."
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">Michael Chen</h4>
                    <p className="author-title">CTO at StartupHub</p>
                  </div>
                  <div className="linkedin-badge">
                    <i className="fab fa-linkedin"></i>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="testimonial-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "Steven's leadership and technical expertise at Mia Aesthetics has been outstanding. He transformed our development workflow and delivered multiple high-performance websites that significantly improved our conversion rates. His mentorship of junior developers is equally impressive."
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">Lisa Rodriguez</h4>
                    <p className="author-title">VP of Operations at Mia Aesthetics</p>
                  </div>
                  <div className="linkedin-badge">
                    <i className="fab fa-linkedin"></i>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;