import { useNavigate } from 'react-router-dom';
import { DarkButton, CTAButton } from './Button';
import '../styles/Footer.css';

function Footer() {
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-tagline'>
          <h2>My artistic style and analytic approach creates truly unforgettable designs.</h2>
          <div className='footer-cta'>
            <DarkButton
              href='#resume'
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('resume');
              }}
            >
              Download My Resume
            </DarkButton>
            <CTAButton href='https://www.linkedin.com/in/stevendpelletier/'>Let's Connect</CTAButton>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <div className='footer-container'>
          <div className='footer-left'>
            <a href='/' onClick={handleLogoClick} className='footer-logo'>
              <img src='/logo-white.svg' alt='Steven Pelletier Logo' className='footer-logo-image' />
              <span className='footer-logo-text'>Steven Pelletier</span>
            </a>
          </div>
          <div className='footer-right'>
            <nav className='footer-nav'>
              <a
                href='#work'
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('work');
                }}
              >
                Work
              </a>
              <a
                href='#about'
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                About
              </a>
              <a
                href='#resume'
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('resume');
                }}
              >
                Resume
              </a>
              <a href='https://www.linkedin.com/in/stevendpelletier/' target='_blank' rel='noopener noreferrer'>
                Connect
              </a>
            </nav>
          </div>
        </div>
        <div className='footer-credits'>
          <div className='footer-credits-content'>
            <p>Copyright © {new Date().getFullYear()} Steven Pelletier</p>
            <a href='mailto:steve.d.pelletier@gmail.com' className='footer-email'>
              steve.d.pelletier@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
