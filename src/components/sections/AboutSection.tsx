// AboutSection doesn't use motion animations directly
import "../../styles/components/AboutSection.css";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <h3 className="about-subtitle">
            Designer, Developer, WordPress Expert
          </h3>
          <p className="about-paragraph">
            I'm a passionate Web Designer and Front-End Developer with over
            7 years of experience creating high-performance digital
            solutions. Currently serving as a Senior Web Developer at Mia
            Aesthetics, I specialize in WordPress development, React
            applications, and performance optimization. My expertise spans
            from leading development teams to building custom solutions that
            drive measurable business results and enhance user experiences.
          </p>
          <p className="about-paragraph">
            My journey in web development started with a curiosity for how
            things work on the internet, and has evolved into a career where
            I get to solve complex problems and create beautiful, functional
            websites every day. I believe in clean code, thoughtful design,
            and the power of technology to make businesses more successful.
          </p>
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