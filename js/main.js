/* ===================================
   THEME TOGGLE
   =================================== */
function getTheme() {
  return document.documentElement.getAttribute("data-theme") || "dark";
}

function isLight() {
  return getTheme() === "light";
}

const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = isLight() ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

/* ===================================
   HERO WAVE CANVAS + SHOOTING STARS
   =================================== */
const heroEl = document.getElementById("home");
if (heroEl) {
  const canvas = document.createElement("canvas");
  canvas.className = "hero-wave-canvas";
  heroEl.insertBefore(canvas, heroEl.firstChild);

  const ctx = canvas.getContext("2d");
  let width,
    height,
    mouseX = 0.5,
    mouseY = 0.5;

  function resize() {
    const w = heroEl.offsetWidth;
    const h = heroEl.offsetHeight;
    width = canvas.width = w;
    height = canvas.height = h;
  }
  resize();
  window.addEventListener("resize", resize);

  heroEl.addEventListener("mousemove", (e) => {
    const rect = heroEl.getBoundingClientRect();
    mouseX = (e.clientX - rect.left) / rect.width;
    mouseY = (e.clientY - rect.top) / rect.height;
  });

  // Waves — brighter toward the bottom
  const waves = [
    {
      amplitude: 35,
      frequency: 0.01,
      speed: 0.018,
      color: "167, 139, 250",
      opacity: 0.12,
      yOffset: 0.45,
    },
    {
      amplitude: 40,
      frequency: 0.008,
      speed: 0.015,
      color: "102, 126, 234",
      opacity: 0.18,
      yOffset: 0.55,
    },
    {
      amplitude: 30,
      frequency: 0.012,
      speed: 0.02,
      color: "167, 139, 250",
      opacity: 0.2,
      yOffset: 0.65,
    },
    {
      amplitude: 50,
      frequency: 0.006,
      speed: 0.01,
      color: "102, 126, 234",
      opacity: 0.22,
      yOffset: 0.72,
    },
    {
      amplitude: 25,
      frequency: 0.015,
      speed: 0.025,
      color: "240, 147, 251",
      opacity: 0.18,
      yOffset: 0.8,
    },
    {
      amplitude: 45,
      frequency: 0.007,
      speed: 0.013,
      color: "130, 100, 255",
      opacity: 0.25,
      yOffset: 0.88,
    },
  ];

  // Shooting stars
  const stars = [];
  const maxStars = 3;

  function spawnStar() {
    if (stars.length >= maxStars) return;
    stars.push({
      x: Math.random() * width * 0.6,
      y: Math.random() * height * 0.5,
      vx: 4 + Math.random() * 6,
      vy: 1.5 + Math.random() * 3,
      life: 1,
      decay: 0.008 + Math.random() * 0.012,
      len: 60 + Math.random() * 80,
      width: 1 + Math.random() * 1.5,
    });
  }

  let t = 0;

  function draw() {
    ctx.clearRect(0, 0, width, height);
    t += 1;

    const light = isLight();
    const oMul = light ? 0.5 : 1;

    // Draw waves
    for (const wave of waves) {
      const mouseInfluence = (mouseX - 0.5) * 20;
      const baseY = height * wave.yOffset + (mouseY - 0.5) * 30;

      ctx.beginPath();
      ctx.moveTo(0, height);

      for (let x = 0; x <= width; x += 3) {
        const y =
          baseY +
          Math.sin(x * wave.frequency + t * wave.speed + mouseInfluence) *
            wave.amplitude +
          Math.sin(x * wave.frequency * 0.5 + t * wave.speed * 1.3) *
            wave.amplitude *
            0.5;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.closePath();

      const o = wave.opacity * oMul;
      const gradient = ctx.createLinearGradient(
        0,
        baseY - wave.amplitude,
        0,
        height
      );
      gradient.addColorStop(0, `rgba(${wave.color}, ${o * 0.3})`);
      gradient.addColorStop(0.6, `rgba(${wave.color}, ${o})`);
      gradient.addColorStop(1, `rgba(${wave.color}, ${o * 0.8})`);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    // Spawn shooting stars randomly
    if (Math.random() < 0.008) spawnStar();

    // Draw shooting stars
    for (let i = stars.length - 1; i >= 0; i--) {
      const s = stars[i];
      s.x += s.vx;
      s.y += s.vy;
      s.life -= s.decay;

      if (s.life <= 0 || s.x > width + 100 || s.y > height + 100) {
        stars.splice(i, 1);
        continue;
      }

      const tailX = s.x - s.vx * (s.len / s.vx);
      const tailY = s.y - s.vy * (s.len / s.vx);

      const tailColor = light ? "80, 60, 180" : "167, 139, 250";
      const headColor = light ? "60, 40, 150" : "255, 255, 255";

      const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
      grad.addColorStop(0, `rgba(${tailColor}, 0)`);
      grad.addColorStop(0.7, `rgba(${tailColor}, ${s.life * 0.4})`);
      grad.addColorStop(1, `rgba(${headColor}, ${s.life * 0.9})`);

      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(s.x, s.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth = s.width;
      ctx.lineCap = "round";
      ctx.stroke();

      // Bright head glow
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.width + 1, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${headColor}, ${s.life * 0.6})`;
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/* ===================================
   FOOTER SUNSET WAVE CANVAS
   =================================== */
const footerCanvas = document.querySelector(".footer-wave-canvas");
if (footerCanvas) {
  const footer = footerCanvas.closest(".footer");
  const fCtx = footerCanvas.getContext("2d");
  let fWidth, fHeight;

  function footerResize() {
    const w = footer.offsetWidth;
    const h = footer.offsetHeight;
    fWidth = footerCanvas.width = w;
    fHeight = footerCanvas.height = h;
  }
  footerResize();
  window.addEventListener("resize", footerResize);

  const sunsetWaves = [
    {
      amplitude: 20,
      frequency: 0.014,
      speed: 0.022,
      color: "255, 170, 70",
      opacity: 0.1,
      yOffset: 0.15,
    },
    {
      amplitude: 30,
      frequency: 0.006,
      speed: 0.012,
      color: "255, 100, 30",
      opacity: 0.12,
      yOffset: 0.25,
    },
    {
      amplitude: 25,
      frequency: 0.01,
      speed: 0.018,
      color: "255, 140, 50",
      opacity: 0.15,
      yOffset: 0.35,
    },
    {
      amplitude: 35,
      frequency: 0.008,
      speed: 0.014,
      color: "255, 60, 40",
      opacity: 0.18,
      yOffset: 0.45,
    },
    {
      amplitude: 40,
      frequency: 0.005,
      speed: 0.01,
      color: "220, 50, 30",
      opacity: 0.2,
      yOffset: 0.55,
    },
    {
      amplitude: 30,
      frequency: 0.009,
      speed: 0.016,
      color: "255, 80, 20",
      opacity: 0.22,
      yOffset: 0.65,
    },
  ];

  let fT = 0;

  function drawFooter() {
    fCtx.clearRect(0, 0, fWidth, fHeight);
    fT += 1;

    const fOmul = isLight() ? 0.5 : 1;

    for (const wave of sunsetWaves) {
      const baseY = fHeight * wave.yOffset;

      fCtx.beginPath();
      fCtx.moveTo(0, fHeight);

      for (let x = 0; x <= fWidth; x += 3) {
        const y =
          baseY +
          Math.sin(x * wave.frequency + fT * wave.speed) * wave.amplitude +
          Math.sin(x * wave.frequency * 0.6 + fT * wave.speed * 1.4) *
            wave.amplitude *
            0.4;
        fCtx.lineTo(x, y);
      }

      fCtx.lineTo(fWidth, fHeight);
      fCtx.closePath();

      const o = wave.opacity * fOmul;
      const gradient = fCtx.createLinearGradient(
        0,
        baseY - wave.amplitude,
        0,
        fHeight
      );
      gradient.addColorStop(0, `rgba(${wave.color}, ${o * 0.3})`);
      gradient.addColorStop(0.6, `rgba(${wave.color}, ${o})`);
      gradient.addColorStop(1, `rgba(${wave.color}, ${o * 0.8})`);
      fCtx.fillStyle = gradient;
      fCtx.fill();
    }

    requestAnimationFrame(drawFooter);
  }

  drawFooter();
}

/* ===================================
   HEADER SCROLL
   =================================== */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ===================================
   COPYRIGHT YEAR
   =================================== */
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* ===================================
   TESTIMONIALS DATA & RENDERING
   =================================== */
const testimonials = [
  {
    text: "I had the pleasure of working with Steve, an exceptional web designer and developer who consistently brings both creativity and technical expertise to every project. His professionalism, design skills, and attention to detail made a strong impact on our team. As a key member of our team, Steve was always willing to jump in and help, whether it was sharing feedback, offering advice on best practices, or finding ways to make our work more efficient. He played a big role in improving our documentation and adding content to the company library, which made processes clearer and easier for everyone. On top of that, he was a major contributor to designing web pages, running accessibility audits, building blog layouts, and working directly with clients, and he handled all of it with a great attitude. He\u2019s adaptable, reliable, and a true team player who brings his best to every project. Steve would be an excellent asset to any company.",
    author: "Stephen Kasahara",
    title: "UX/UI Designer | Figma, Prototyping & Design Systems",
  },
  {
    text: "Few people bring the rare combination of talent, work ethic, and dedication that Steve does. We work together at DealerOn Automotive on a massive content migration project, where Steve has quickly become one of the main driving forces behind our success. He naturally stepped into a leadership role, creating reusable code snippets, streamlining workflows, taking on difficult tasks, and generously mentoring teammates (myself included) along the way. His deep understanding of front-end development has made a huge difference in my learning. Steve knows development like the back of his hand (I\u2019m half convinced he could code in his sleep), and he approaches every challenge with skill and creativity. Steve is the kind of person you can completely rely on to get things done, and get them done good. Any team would be lucky to have him!",
    author: "Jenna McLaughlin",
    title:
      "Web Designer \u2022 Front-End Developer \u2022 Web Developer \u2022 UI/UX Engineer \u2022 Product Designer",
  },
  {
    text: "Steven is a natural leader and an exceptionally skilled web developer. He consistently demonstrates a strong command of both front-end and back-end development and approaches every project with dedication and precision. During our time working together at DealerOn, we collaborated on multiple projects, and I was always impressed by his technical expertise and willingness to support the team. Steven frequently created custom code snippets and scripts that significantly streamlined our content migration process. His contributions made a huge difference in our workflow efficiency. Whenever I had a question or encountered a roadblock, he was quick to offer thoughtful solutions and guidance. He\u2019s not only talented and hardworking, but also a great teammate. I highly recommend Steven and have no doubt he\u2019ll continue to excel in any role he takes on. I truly hope we have the opportunity to collaborate again in the future.",
    author: "Amanda Dovel",
    title: "Web Design and Development",
  },
  {
    text: "I had the pleasure of working alongside Steve at DealerOn. He rose to become a leader very quickly by helping others when they needed guidance or assistance in understanding projects. He took the time to create thorough documentation for his projects. Steve also demonstrated excellent initiative in creating snippets and developing tools for the team that would enhance efficiency. He was somebody you could rely on when it came to design and development. His dedication to improving efficiency on projects is impressive. He was diligent in creating user-friendly designs that were responsive and ADA compliant. When it came to peer reviews, Steve was invaluable to others in their work, providing helpful feedback that ultimately made them more efficient and better developers. Anyone would be fortunate to have him on their team, thanks to his natural leadership skills, willingness to take on new challenges, and exceptional problem-solving abilities.",
    author: "Perla Perez Orona",
    title: "Web Developer",
  },
  {
    text: "I got to work with Steven at DealerOn as Web Designers. Steven is a fantastic coworker and consistently went above and beyond, helping everyone around him, constantly looking for ways to improve efficiency and develop a collaborative work environment. Steven showed himself to be a natural leader and mentor to others. He took it upon himself to create clearer, more effective documentation to help onboard new team members, making the transition process smoother for everyone. He also played a key role in organizing small project teams, helping ensure the right people were in the right places to get things done efficiently. Steven brings a level of initiative, collaboration, and foresight that makes a real difference. Any team would be lucky to have him.",
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
    text: "I\u2019ve had the pleasure of working with Steve on several web design projects, and I can confidently say he is an exceptional collaborator and a natural leader. He consistently takes initiative, communicates with clarity, and brings a level of thoroughness to his work that sets a high standard for the entire team. Steve has also helped me grow as a developer by regularly reviewing my work and offering clear, constructive feedback. He\u2019s always willing to answer questions, no matter how big or small, and it\u2019s evident that his knowledge of web design and front-end development runs deep. I highly recommend Steve for any project that values dedication, leadership, and top-tier design execution.",
    author: "Alicia Diller",
    title:
      "Skilled Front-End Developer | Crafting Engaging and Responsive Web Applications",
  },
  {
    text: "Having Steven on the team has elevated not just the quality of our output, but also how we approach problems and support each other as developers. Steven leads by example\u2014combining deep expertise in modern design systems with clear, thoughtful communication that helps elevate everyone around him. Whether he\u2019s guiding a new teammate through a UI problem or initiating projects to improve our workflow, Steven consistently fosters a culture of clarity, respect, and shared success. Steven doesn\u2019t just contribute to the team\u2014he actively shapes how it grows and improves, consistently driving smarter processes and more efficient workflows. He\u2019s not only highly knowledgeable about current design trends and frontend best practices, but he\u2019s also incredibly generous with that knowledge\u2014sharing resources, initiating thoughtful code reviews, and always pushing our standards higher. He has a keen sense of what makes a user experience intuitive and effective, and he\u2019s just as passionate about helping teammates grow as he is about crafting polished, performance-driven interfaces. I\u2019d recommend Steven to any team looking for a collaborative, forward-thinking leader who makes an immediate and lasting impact.",
    author: "Michael Karabach",
    title: "Front-End Developer | Vue | React | Laravel | Inertia.js",
  },
  {
    text: "I had the pleasure of working alongside Steven, and he reviewed my work a few times, always providing incredibly helpful and in-depth feedback. What stood out to me was the completeness of his reviews - not only did he highlight areas for improvement, but he also shared relevant resources and clear recommendations to support the process. As a web designer and developer, Steven brings a rare combination of creative insight and technical precision. His understanding of UX/UI principles, frontend best practices, and performance optimization is exceptional. Beyond the quality of his own work, he actively contributes to the growth and success of those around him. I\u2019d gladly recommend him to any team looking for a reliable, insightful, and highly skilled professional in web design and development.",
    author: "Anastasiia Dementieva",
    title: "Software Engineer",
  },
  {
    text: "I\u2019ve had the pleasure of working with Steven as a fellow Web Designer, and he\u2019s been a fantastic teammate. Steven is highly collaborative and has a real talent for connecting teams and keeping projects aligned. He brings strong technical skills across responsive design, accessibility (WCAG), branding, CMS platforms, and performance optimization. He gives thoughtful, constructive, and thorough feedback that helps the team grow, and he\u2019s someone I\u2019ve personally turned to for career advice. He also created onboarding documentation that made a significant difference when I was new to the team, and I know it has helped others as well. Steven\u2019s impact goes beyond design. His experience and communication skills make him a valuable resource for teams in development, product, and content strategy. He understands how to connect the dots across disciplines and always approaches problems with empathy and clarity. He\u2019s someone you can count on, both professionally and personally, and I\u2019ve learned a lot from working with him.",
    author: "Devagya Sharma",
    title: "User Experience Designer | Visual Designer | Frontend Developer",
  },
  {
    text: "I had the pleasure of working with Steven on several projects including one very large site. Through every one, Steven has shown his web design and Wordpress mastery. Whenever I had a question, Steven would not give me just any answer, he would work to give me the best, and many times non-obvious, answer. Whether it required utilizing new plugins, working with a theme, or general UI/UX stuff, Steven would not skimp on even the most minute details leading to quality-first results that made me a better developer and designer. Steven has a unique blend of technical skills and creativity on top of being a great leader and a great person to collaborate with. From theme building to project management, Steven\u2019s the guy you want on a team to take a project from concept to completion.",
    author: "Brooks Gunn",
    title: "Frontend Web Developer at PatientNow",
  },
  {
    text: "I had the pleasure of working with Steven at Patient now and I can confidently say that he is one of the most knowledgeable and helpful colleagues I\u2019ve ever worked with. His deep understanding of WordPress sites, especially plugins and certain aspects of JavaScript coding and troubleshooting, consistently impressed me. His ability to communicate complex ideas in an accessible manner to someone just starting out in the field made him an invaluable resource to myself and the team. Steven was always ready to lend a helping hand, no matter how busy he was. His collaborative spirit and willingness to go above and beyond to support his colleagues really improved team morale and helped us meet deadlines and exceed client expectations. I particularly appreciated his patience and dedication when explaining new concepts and helping me troubleshoot issues which I was completely unfamiliar with. Working with Steven was productive and thoroughly enjoyable! His positive attitude and expertise are something that made for a much more enjoyable and productive work experience! I highly recommend Steven for any team that needs a highly skilled front end web developer!",
    author: "Eric Rion",
    title: "Frontend Developer | Full Stack Web Development",
  },
  {
    text: "Working with Steven at PatientNow was truly a great experience. He was an excellent resource for any questions or issues, consistently proving to be the go-to person for implementing processes that were outside of our comfort zone. His expertise in web development was unparalleled. Steven is an exceptional team player and an outstanding lead developer. Although I didn\u2019t report to Steven directly, he always demonstrated the qualities of a supervisor or director. He was extremely helpful, patient, and diligent with his work, and he never hesitated to put in the necessary hours to complete tasks. His dedication and leadership skills make him an invaluable asset to any team. I am confident that Steven has a bright future ahead, and any business fortunate enough to have him will have essentially won the lottery. I thank Steven for showing me some of my earliest techniques and best practices that i use daily for doing great work.",
    author: "George W. Gallagher",
    title: "Web Developer | USMC Veteran",
  },
  {
    text: "As an SEO, working with a competent, hard working web developer is critical. Steven directs all development activities related to lead generation and e-commerce, so we work closely together. He is always prioritizing SEO and other marketing efforts in order to increase the bottom line. He\u2019s an excellent manager, always making himself available when necessary and ensuring all tasks between different departments are completed to near perfection. His talents of development and programming, combined by his eye for design, simplicity, and efficiency are what make him a truly indispensable part of our team.",
    author: "Jaimyn Chang",
    title: "SEO, UX, and CRO Strategist",
  },
  {
    text: "Steven is a talented web designer and developer who brought a lot of structure and clarity to our work. He has a strong eye for design and a solid grasp of how to translate that into clean, functional builds that look great across devices. The guidelines and processes he created became a real foundation for our team. They made collaboration easier, reduced confusion, and kept everyone on the same page when working through complex migrations. Steven was always willing to explain the reasoning behind his choices, which helped the rest of us grow and refine our own approach. He combines technical skill with a calm, professional presence that makes projects run smoothly. Working with him made our whole team stronger.",
    author: "Lev Bakin",
    title: "Frontend Web Developer",
  },
];

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

function createTestimonialCard(testimonial) {
  const card = document.createElement("div");
  card.className = "testimonial-marquee-card";

  const content = document.createElement("div");
  content.className = "testimonial-marquee-content";

  const preview = document.createElement("p");
  preview.className = "testimonial-preview";
  preview.textContent =
    "\u201C" + truncateText(testimonial.text, 150) + "\u201D";

  const authorDiv = document.createElement("div");
  authorDiv.className = "testimonial-marquee-author";

  const nameRow = document.createElement("div");
  nameRow.className = "author-name-row";

  const name = document.createElement("h3");
  name.textContent = testimonial.author;

  const linkedinIcon = document.createElement("i");
  linkedinIcon.className = "fa-brands fa-linkedin linkedin-icon-inline";

  nameRow.appendChild(name);
  nameRow.appendChild(linkedinIcon);

  const title = document.createElement("p");
  title.textContent = testimonial.title;

  authorDiv.appendChild(nameRow);
  authorDiv.appendChild(title);

  content.appendChild(preview);
  content.appendChild(authorDiv);
  card.appendChild(content);

  card.addEventListener("click", () => openModal(testimonial));
  return card;
}

function renderTestimonials() {
  const rows = document.querySelectorAll(".testimonials-marquee-track");
  const row1 = testimonials.slice(0, 5);
  const row2 = testimonials.slice(5, 10);
  const row3 = testimonials.slice(10, 15);
  const groups = [row1, row2, row3];

  rows.forEach((track, i) => {
    const group = groups[i];
    // Duplicate for infinite scroll
    [...group, ...group].forEach((t) => {
      track.appendChild(createTestimonialCard(t));
    });
  });
}

/* ===================================
   TESTIMONIAL MODAL
   =================================== */
const modal = document.getElementById("testimonial-modal");
const modalClose = document.getElementById("testimonial-modal-close");
const modalAuthor = document.getElementById("modal-author");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");

function openModal(testimonial) {
  modalAuthor.textContent = testimonial.author;
  modalTitle.textContent = testimonial.title;
  modalText.textContent = "\u201C" + testimonial.text + "\u201D";
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

if (modal && modalClose) {
  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

/* ===================================
   INIT
   =================================== */
if (document.querySelector(".testimonials-marquee-track")) {
  renderTestimonials();
}
