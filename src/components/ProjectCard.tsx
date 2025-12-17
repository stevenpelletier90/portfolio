import { Link } from "react-router-dom";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/${project.id}`} className="project-card">
      <div className="project-card-image">
        <img src={project.thumbnail} alt={project.title} />
        <div className="project-card-overlay">
          <span className="view-project">
            View Project
            <i className="fa-solid fa-arrow-up-right"></i>
          </span>
        </div>
      </div>

      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>

        <div className="project-card-tech">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-badge more">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
