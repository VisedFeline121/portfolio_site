import React from "react";
import { projects } from "../../../data/projects";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import { Container } from "../../layout/Container";
import TechTag from "../../ui/TechTag";
import "./Projects.css";

const Projects: React.FC = () => {
    const { isVisible, elementRef } = useIntersectionObserver();

    return (
        <section
            ref={elementRef}
            id="projects"
            className={`projects-section ${
                isVisible ? "section-visible" : "section-hidden"
            }`}
        >
            <Container>
                <h2 className="section-title">
                    My <span className="gradient-word">Projects</span>
                </h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-content">
                                <h3 className="project-title">
                                    {project.title}
                                </h3>
                                <p className="project-description">
                                    {project.description}
                                </p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech) => (
                                        <TechTag
                                            key={tech}
                                            name={tech}
                                            projectUsage={
                                                project.technologyUsage[tech]
                                            }
                                        />
                                    ))}
                                </div>
                                <div className="project-spacer"></div>
                                <div className="project-links">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        GitHub
                                    </a>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Projects;
