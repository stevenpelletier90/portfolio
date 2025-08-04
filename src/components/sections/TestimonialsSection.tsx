import "../../styles/components/TestimonialsSection.css";

function TestimonialsSection() {
  const testimonials = [
    {
      text: "Steven is an exceptional web developer who consistently delivers high-quality work. His expertise in WordPress development and performance optimization has been invaluable to our team. He has a great eye for detail and always goes above and beyond to ensure projects are completed to perfection.",
      author: "Sarah Johnson",
      title: "Marketing Director at TechCorp"
    },
    {
      text: "Working with Steven was a game-changer for our digital presence. His React development skills and ability to translate complex requirements into beautiful, functional interfaces is remarkable. He's not just a developer, but a true problem solver who thinks strategically about user experience.",
      author: "Michael Chen",
      title: "CTO at StartupHub"
    },
    {
      text: "Steven's leadership and technical expertise at Mia Aesthetics has been outstanding. He transformed our development workflow and delivered multiple high-performance websites that significantly improved our conversion rates. His mentorship of junior developers is equally impressive.",
      author: "Lisa Rodriguez",
      title: "VP of Operations at Mia Aesthetics"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What People Say</h2>
          <p className="testimonials-subtitle">
            Recommendations from LinkedIn colleagues and clients
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
            >
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-title">
                    {testimonial.title}
                  </p>
                </div>
                <div className="linkedin-badge">
                  <i className="fab fa-linkedin"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;