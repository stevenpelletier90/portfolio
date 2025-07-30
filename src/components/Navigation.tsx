import { useNavigate, useLocation } from "react-router-dom";

interface NavigationProps {
  className?: string;
}

function Navigation({ className = "" }: NavigationProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // If not on homepage, navigate there first then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className={`nav-links ${className}`}>
      <li>
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("work");
          }}
        >
          Work
        </a>
      </li>
      <li>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/stevendpelletier/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect
        </a>
      </li>
    </ul>
  );
}

export default Navigation;