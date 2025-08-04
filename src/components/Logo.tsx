import { useNavigate, useLocation } from "react-router-dom";

interface LogoProps {
  className?: string;
}

function Logo({ className = "" }: LogoProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // If on homepage, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If on project page, navigate to homepage
      navigate("/");
    }
  };

  return (
    <a href="/" onClick={handleLogoClick} className={`logo ${className}`}>
      <img
        src="/logo-white.svg"
        alt="Steven Pelletier Logo"
        className="logo-image"
      />
      <span className="logo-text">Steven Pelletier</span>
    </a>
  );
}

export default Logo;
