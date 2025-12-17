import { useState } from "react";

interface Testimonial {
  text: string;
  author: string;
  title: string;
}

function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);

  const testimonials = [
    {
      text: "I had the pleasure of working with Steve, an exceptional web designer and developer who consistently brings both creativity and technical expertise to every project. His professionalism, design skills, and attention to detail made a strong impact on our team. As a key member of our team, Steve was always willing to jump in and help, whether it was sharing feedback, offering advice on best practices, or finding ways to make our work more efficient. He played a big role in improving our documentation and adding content to the company library, which made processes clearer and easier for everyone. On top of that, he was a major contributor to designing web pages, running accessibility audits, building blog layouts, and working directly with clients, and he handled all of it with a great attitude. He's adaptable, reliable, and a true team player who brings his best to every project. Steve would be an excellent asset to any company.",
      author: "Stephen Kasahara",
      title: "UX/UI Designer | Figma, Prototyping & Design Systems",
    },
    {
      text: "Few people bring the rare combination of talent, work ethic, and dedication that Steve does. We work together at DealerOn Automotive on a massive content migration project, where Steve has quickly become one of the main driving forces behind our success. He naturally stepped into a leadership role, creating reusable code snippets, streamlining workflows, taking on difficult tasks, and generously mentoring teammates (myself included) along the way. His deep understanding of front-end development has made a huge difference in my learning. Steve knows development like the back of his hand (I'm half convinced he could code in his sleep), and he approaches every challenge with skill and creativity. Steve is the kind of person you can completely rely on to get things done, and get them done good. Any team would be lucky to have him!",
      author: "Jenna McLaughlin",
      title:
        "Web Designer • Front-End Developer • Web Developer • UI/UX Engineer • Product Designer",
    },
    {
      text: "Steven is a natural leader and an exceptionally skilled web developer. He consistently demonstrates a strong command of both front-end and back-end development and approaches every project with dedication and precision. During our time working together at DealerOn, we collaborated on multiple projects, and I was always impressed by his technical expertise and willingness to support the team. Steven frequently created custom code snippets and scripts that significantly streamlined our content migration process. His contributions made a huge difference in our workflow efficiency. Whenever I had a question or encountered a roadblock, he was quick to offer thoughtful solutions and guidance. He's not only talented and hardworking, but also a great teammate. I highly recommend Steven and have no doubt he'll continue to excel in any role he takes on. I truly hope we have the opportunity to collaborate again in the future.",
      author: "Amanda Dovel",
      title: "Web Design and Development",
    },
    {
      text: "I had the pleasure of working alongside Steve at DealerOn. He rose to become a leader very quickly by helping others when they needed guidance or assistance in understanding projects. He took the time to create thorough documentation for his projects. Steve also demonstrated excellent initiative in creating snippets and developing tools for the team that would enhance efficiency. He was somebody you could rely on when it came to design and development. His dedication to improving efficiency on projects is impressive. He was diligent in creating user-friendly designs that were responsive and ADA compliant. When it came to peer reviews, Steve was invaluable to others in their work, providing helpful feedback that ultimately made them more efficient and better developers. Anyone would be fortunate to have him on their team, thanks to his natural leadership skills, willingness to take on new challenges, and exceptional problem-solving abilities.",
      author: "Perla Perez Orona",
      title: "Web Developer",
    },
    {
      text: "I got to work with Steven at DealerOn as Web Designers. Steven is a fantastic coworker and consistently went above and beyond, helping everyone around him, constantly looking for ways to improve efficiency and develop a collaborative work environment. Steven showed himself to be a natural leader and mentor to tohers. He took it upon himself to create clearer, more effective documentation to help onboard new team members, making the transition process smoother for everyone. He also played a key role in organizing small project teams, helping ensure the right people were in the right places to get things done efficiently. Steven brings a level of initiative, collaboration, and foresight that makes a real difference. Any team would be lucky to have him.",
      author: "Nicholas Geronimo",
      title: "Web Developer",
    },
    {
      text: "Working with Steve at DealerOn has been a pleasure. He is a hardworking, thoughtful designer and developer who consistently goes above and beyond, both in his own work and in supporting the team. He shows up every day with a great attitude, a strong desire to grow, and a genuine willingness to jump in and help wherever needed. His contributions have made a clear impact across multiple projects, helping us deliver better, more polished products. Steve has a sharp eye for UX and UI, along with a strong understanding of front-end development. He is deeply committed to accessibility and making sure the sites we build are user-friendly and inclusive. He also gives thoughtful, constructive feedback during peer reviews, which has helped strengthen our overall work. He brings a calm, practical approach to problem-solving and is someone the team can always count on. Any company would be lucky to have him.",
      author: "Kevin Jamieson",
      title:
        "Frontend Web Developer & Designer | HTML, CSS, JavaScript, WordPress",
    },
    {
      text: "I've had the pleasure of working with Steve on several web design projects, and I can confidently say he is an exceptional collaborator and a natural leader. He consistently takes initiative, communicates with clarity, and brings a level of thoroughness to his work that sets a high standard for the entire team. Steve has also helped me grow as a developer by regularly reviewing my work and offering clear, constructive feedback. He's always willing to answer questions, no matter how big or small, and it's evident that his knowledge of web design and front-end development runs deep. I highly recommend Steve for any project that values dedication, leadership, and top-tier design execution.",
      author: "Alicia Diller",
      title:
        "Skilled Front-End Developer | Crafting Engaging and Responsive Web Applications",
    },
    {
      text: "Having Steven on the team has elevated not just the quality of our output, but also how we approach problems and support each other as developers. Steven leads by example—combining deep expertise in modern design systems with clear, thoughtful communication that helps elevate everyone around him. Whether he's guiding a new teammate through a UI problem or initiating projects to improve our workflow, Steven consistently fosters a culture of clarity, respect, and shared success. Steven doesn't just contribute to the team—he actively shapes how it grows and improves, consistently driving smarter processes and more efficient workflows. He's not only highly knowledgeable about current design trends and frontend best practices, but he's also incredibly generous with that knowledge—sharing resources, initiating thoughtful code reviews, and always pushing our standards higher. He has a keen sense of what makes a user experience intuitive and effective, and he's just as passionate about helping teammates grow as he is about crafting polished, performance-driven interfaces. I'd recommend Steven to any team looking for a collaborative, forward-thinking leader who makes an immediate and lasting impact.",
      author: "Michael Karabach",
      title: "Front-End Developer | Vue | React | Laravel | Inertia.js",
    },
    {
      text: "I had the pleasure of working alongside Steven, and he reviewed my work a few times, always providing incredibly helpful and in-depth feedback. What stood out to me was the completeness of his reviews - not only did he highlight areas for improvement, but he also shared relevant resources and clear recommendations to support the process. As a web designer and developer, Steven brings a rare combination of creative insight and technical precision. His understanding of UX/UI principles, frontend best practices, and performance optimization is exceptional. Beyond the quality of his own work, he actively contributes to the growth and success of those around him. I'd gladly recommend him to any team looking for a reliable, insightful, and highly skilled professional in web design and development.",
      author: "Anastasiia Dementieva",
      title: "Software Engineer",
    },
    {
      text: "I've had the pleasure of working with Steven as a fellow Web Designer, and he's been a fantastic teammate. Steven is highly collaborative and has a real talent for connecting teams and keeping projects aligned. He brings strong technical skills across responsive design, accessibility (WCAG), branding, CMS platforms, and performance optimization. He gives thoughtful, constructive, and thorough feedback that helps the team grow, and he's someone I've personally turned to for career advice. He also created onboarding documentation that made a significant difference when I was new to the team, and I know it has helped others as well. Steven's impact goes beyond design. His experience and communication skills make him a valuable resource for teams in development, product, and content strategy. He understands how to connect the dots across disciplines and always approaches problems with empathy and clarity. He's someone you can count on, both professionally and personally, and I've learned a lot from working with him.",
      author: "Devagya Sharma",
      title: "User Experience Designer | Visual Designer | Frontend Developer",
    },
    {
      text: "I had the pleasure of working with Steven on several projects including one very large site. Through every one, Steven has shown his web design and Wordpress mastery. Whenever I had a question, Steven would not give me just any answer, he would work to give me the best, and many times non-obvious, answer. Whether it required utilizing new plugins, working with a theme, or general UI/UX stuff, Steven would not skimp on even the most minute details leading to quality-first results that made me a better developer and designer. Steven has a unique blend of technical skills and creativity on top of being a great leader and a great person to collaborate with. From theme building to project management, Steven's the guy you want on a team to take a project from concept to completion.",
      author: "Brooks Gunn",
      title: "Frontend Web Developer at PatientNow",
    },
    {
      text: "I had the pleasure of working with Steven at Patient now and I can confidently say that he is one of the most knowledgeable and helpful colleagues I've ever worked with. His deep understanding of WordPress sites, especially plugins and certain aspects of JavaScript coding and troubleshooting, consistently impressed me. His ability to communicate complex ideas in an accessible manner to someone just starting out in the field made him an invaluable resource to myself and the team. Steven was always ready to lend a helping hand, no matter how busy he was. His collaborative spirit and willingness to go above and beyond to support his colleagues really improved team morale and helped us meet deadlines and exceed client expectations. I particularly appreciated his patience and dedication when explaining new concepts and helping me troubleshoot issues which I was completely unfamiliar with. Working with Steven was productive and thoroughly enjoyable! His positive attitude and expertise are something that made for a much more enjoyable and productive work experience! I highly recommend Steven for any team that needs a highly skilled front end web developer!",
      author: "Eric Rion",
      title: "Frontend Developer | Full Stack Web Development",
    },
    {
      text: "Working with Steven at PatientNow was truly a great experience. He was an excellent resource for any questions or issues, consistently proving to be the go-to person for implementing processes that were outside of our comfort zone. His expertise in web development was unparalleled. Steven is an exceptional team player and an outstanding lead developer. Although I didn't report to Steven directly, he always demonstrated the qualities of a supervisor or director. He was extremely helpful, patient, and diligent with his work, and he never hesitated to put in the necessary hours to complete tasks. His dedication and leadership skills make him an invaluable asset to any team. I am confident that Steven has a bright future ahead, and any business fortunate enough to have him will have essentially won the lottery. I thank Steven for showing me some of my earliest techniques and best practices that i use daily for doing great work.",
      author: "George W. Gallagher",
      title: "Web Developer | USMC Veteran",
    },
    {
      text: "As an SEO, working with a competent, hard working web developer is critical. Steven directs all development activities related to lead generation and e-commerce, so we work closely together. He is always prioritizing SEO and other marketing efforts in order to increase the bottom line. He's an excellent manager, always making himself available when necessary and ensuring all tasks between different departments are completed to near perfection. His talents of development and programming, combined by his eye for design, simplicity, and efficiency are what make him a truly indispensable part of our team.",
      author: "Jaimyn Chang",
      title: "SEO, UX, and CRO Strategist",
    },
  ];

  // Split testimonials into 3 rows for the marquee effect
  const row1 = testimonials.slice(0, 5);
  const row2 = testimonials.slice(5, 10);
  const row3 = testimonials.slice(10, 14);

  // Helper function to truncate text
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What People Say</h2>
          <p className="testimonials-subtitle">
            14 LinkedIn recommendations from colleagues and clients
          </p>
        </div>

        <div className="testimonials-marquee-wrapper">
          {/* Row 1 - scrolls left */}
          <div className="testimonials-marquee-row">
            <div className="testimonials-marquee-track">
              {[...row1, ...row1].map((testimonial, index) => (
                <div
                  key={`row1-${index}`}
                  className="testimonial-marquee-card"
                  onClick={() => setSelectedTestimonial(testimonial)}
                >
                  <div className="testimonial-marquee-content">
                    <p className="testimonial-preview">
                      "{truncateText(testimonial.text, 150)}"
                    </p>
                    <div className="testimonial-marquee-author">
                      <div className="author-name-row">
                        <h4>{testimonial.author}</h4>
                        <i className="fab fa-linkedin linkedin-icon-inline"></i>
                      </div>
                      <p>{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - scrolls right */}
          <div className="testimonials-marquee-row testimonials-marquee-row-reverse">
            <div className="testimonials-marquee-track">
              {[...row2, ...row2].map((testimonial, index) => (
                <div
                  key={`row2-${index}`}
                  className="testimonial-marquee-card"
                  onClick={() => setSelectedTestimonial(testimonial)}
                >
                  <div className="testimonial-marquee-content">
                    <p className="testimonial-preview">
                      "{truncateText(testimonial.text, 150)}"
                    </p>
                    <div className="testimonial-marquee-author">
                      <div className="author-name-row">
                        <h4>{testimonial.author}</h4>
                        <i className="fab fa-linkedin linkedin-icon-inline"></i>
                      </div>
                      <p>{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - scrolls left */}
          <div className="testimonials-marquee-row">
            <div className="testimonials-marquee-track">
              {[...row3, ...row3, ...row3].map((testimonial, index) => (
                <div
                  key={`row3-${index}`}
                  className="testimonial-marquee-card"
                  onClick={() => setSelectedTestimonial(testimonial)}
                >
                  <div className="testimonial-marquee-content">
                    <p className="testimonial-preview">
                      "{truncateText(testimonial.text, 150)}"
                    </p>
                    <div className="testimonial-marquee-author">
                      <div className="author-name-row">
                        <h4>{testimonial.author}</h4>
                        <i className="fab fa-linkedin linkedin-icon-inline"></i>
                      </div>
                      <p>{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for expanded testimonial */}
      {selectedTestimonial && (
        <div
          className="testimonial-modal-overlay"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="testimonial-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="testimonial-modal-close"
              onClick={() => setSelectedTestimonial(null)}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="testimonial-modal-content">
              <div className="testimonial-modal-header">
                <div className="linkedin-badge-large">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div>
                  <h3>{selectedTestimonial.author}</h3>
                  <p>{selectedTestimonial.title}</p>
                </div>
              </div>
              <div className="testimonial-modal-text">
                <p>"{selectedTestimonial.text}"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default TestimonialsSection;
