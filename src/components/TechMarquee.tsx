import Marquee from "react-fast-marquee";
import "../styles/components/TechMarquee.css";

const techStack = [
  { name: "React", icon: "fab fa-react" },
  { name: "TypeScript", icon: "fab fa-js-square" },
  { name: "WordPress", icon: "fab fa-wordpress" },
  { name: "PHP", icon: "fab fa-php" },
  { name: "JavaScript", icon: "fab fa-js-square" },
  { name: "CSS3", icon: "fab fa-css3-alt" },
  { name: "HTML5", icon: "fab fa-html5" },
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "Python", icon: "fab fa-python" },
  { name: "Figma", icon: "fab fa-figma" },
  { name: "Photoshop", icon: "fas fa-palette" },
  { name: "Illustrator", icon: "fas fa-vector-square" },
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "MySQL", icon: "fas fa-database" },
  { name: "MongoDB", icon: "fas fa-leaf" },
  { name: "Vite", icon: "fas fa-bolt" },
  { name: "Webpack", icon: "fas fa-cube" },
  { name: "SASS", icon: "fab fa-sass" },
  { name: "TailwindCSS", icon: "fas fa-wind" },
  { name: "Bootstrap", icon: "fab fa-bootstrap" },
];

function TechMarquee() {
  return (
    <div className="tech-marquee">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {techStack.map((tech, index) => (
          <span key={index} className="marquee-item">
            <i className={tech.icon}></i>
            {tech.name}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

export default TechMarquee;
