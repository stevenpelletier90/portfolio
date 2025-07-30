import { useNavigate } from "react-router-dom";
import { CTAButton } from "./Button";
import "../styles/NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-text">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-description">
            Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="not-found-actions">
            <CTAButton onClick={() => navigate("/")} className="not-found-cta">
              Back to Home
            </CTAButton>
            <button 
              onClick={() => navigate(-1)} 
              className="back-button"
            >
              <i className="fa-solid fa-arrow-left"></i>
              Go Back
            </button>
          </div>
        </div>
        
        <div className="not-found-illustration">
          <div className="error-code">404</div>
          <div className="error-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;