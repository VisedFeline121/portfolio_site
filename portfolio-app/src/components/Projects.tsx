import React from "react";

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
    image?: string;
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description:
                "A full-stack e-commerce application built with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration.",
            technologies: [
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "PostgreSQL",
                "Stripe",
            ],
            githubUrl: "https://github.com/yourusername/ecommerce-platform",
            liveUrl: "https://ecommerce-demo.com",
        },
        {
            id: 2,
            title: "Task Management App",
            description:
                "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            technologies: [
                "React",
                "TypeScript",
                "Python",
                "FastAPI",
                "WebSocket",
                "Redis",
            ],
            githubUrl: "https://github.com/yourusername/task-manager",
            liveUrl: "https://task-manager-demo.com",
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description:
                "A weather application that displays current weather and forecasts using external APIs. Features include location-based weather, 7-day forecast, and weather alerts.",
            technologies: [
                "React",
                "TypeScript",
                "OpenWeather API",
                "Chart.js",
                "CSS Grid",
            ],
            githubUrl: "https://github.com/yourusername/weather-dashboard",
            liveUrl: "https://weather-dashboard-demo.com",
        },
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
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
                                        <span key={tech} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
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
            </div>
        </section>
    );
};

export default Projects;
