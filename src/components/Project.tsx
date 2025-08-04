import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import { CTAButton } from "./Button";
import { Helmet } from "react-helmet-async";
import "../styles/Project.css";

function Project() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Project Not Found</h1>
        <CTAButton onClick={() => navigate("/")}>Back to Projects</CTAButton>
      </div>
    );
  }

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>{project.title} - Steven Pelletier Portfolio</title>
        <meta name="description" content={project.description} />
        <meta name="keywords" content={project.technologies.join(", ")} />
        <meta
          property="og:title"
          content={`${project.title} - Steven Pelletier`}
        />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.thumbnail} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="project-page">
        <div className="project-header">
          <button onClick={handleBackClick} className="back-button">
            <i className="fa-solid fa-arrow-left"></i>
            Back to Projects
          </button>
        </div>

        <div className="project-content">
          <div className="project-hero">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="project-hero-image"
            />
            <div className="project-hero-text">
              <h1 className="project-title">{project.title}</h1>
              <p className="project-description">{project.description}</p>

              <div className="project-tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <CTAButton href={project.liveUrl} className="project-cta">
                  View Live Site
                </CTAButton>
                <a
                  href={project.githubUrl}
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                  View Code
                </a>
              </div>
            </div>
          </div>

          <div className="project-details">
            <h2>Project Details</h2>
            <p className="project-details-text">{project.details}</p>

            <div className="project-gallery">
              <h3>Screenshots</h3>
              <div className="gallery-grid">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="gallery-image"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
