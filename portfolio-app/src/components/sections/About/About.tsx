import React from "react";
import BackendIcon from "../../../assets/icons/ui/about/backend.svg";
import FrontendIcon from "../../../assets/icons/ui/about/frontend.svg";
import LearningIcon from "../../../assets/icons/ui/about/learning.svg";
import StackIcon from "../../../assets/icons/ui/about/stack.svg";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import { Container } from "../../layout/Container";
import { Icon } from "../../ui/Icon";
import "./About.css";

const About: React.FC = () => {
    const { isVisible, elementRef } = useIntersectionObserver();

    return (
        <section
            ref={elementRef}
            id="about"
            className={`about-section ${
                isVisible ? "section-visible" : "section-hidden"
            }`}
        >
            <Container>
                <h2 className="section-title">
                    About <span className="gradient-word">Me</span>
                </h2>
                <div className="about-content">
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-point">
                                <div className="timeline-icon">
                                    <Icon
                                        src={StackIcon}
                                        alt="Full Stack"
                                        size={24}
                                    />
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h3>Full Stack Development</h3>
                                <p>
                                    I'm a Full Stack Developer with 3+ years of
                                    experience in designing and developing
                                    scalable web applications. My experience
                                    spans both backend and frontend development,
                                    allowing me to create comprehensive
                                    solutions that deliver exceptional user
                                    experiences.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-point">
                                <div className="timeline-icon">
                                    <Icon
                                        src={BackendIcon}
                                        alt="Backend"
                                        size={24}
                                    />
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h3>Backend Expertise</h3>
                                <p>
                                    I work primarily with Python, building
                                    services and integrations supported by tools
                                    like MySQL, RabbitMQ, Docker, and Splunk.
                                    I’ve also worked on system design and
                                    integration projects that required close
                                    collaboration with both technical and
                                    non-technical teams.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-point">
                                <div className="timeline-icon">
                                    <Icon
                                        src={FrontendIcon}
                                        alt="Frontend"
                                        size={24}
                                    />
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h3>Frontend Development</h3>
                                <p>
                                    I have experience developing frontend
                                    components using React, TypeScript, HTML,
                                    and CSS — mainly for integrating backend
                                    services and building simple, functional
                                    interfaces.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-point">
                                <div className="timeline-icon">
                                    <Icon
                                        src={LearningIcon}
                                        alt="Learning"
                                        size={24}
                                    />
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h3>Continuous Learning</h3>
                                <p>
                                    I care deeply about improving as a
                                    developer. I regularly explore new
                                    technologies, refine my development
                                    practices, and learn from real-world
                                    projects and collaborations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;
