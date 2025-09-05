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
                                    I'm a Full Stack Developer with 4+ years of
                                    experience in designing and developing
                                    scalable web applications. My expertise
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
                                    On the backend, I specialize in Python
                                    development, building microservices, and
                                    working with technologies like Django,
                                    MySQL, RabbitMQ, Docker, and Splunk. I have
                                    extensive experience in system design and
                                    integration, working with both technical and
                                    non-technical stakeholders to deliver
                                    solutions that meet diverse requirements.
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
                                    For frontend development, I work with modern
                                    technologies including React, TypeScript,
                                    HTML, and CSS. I'm passionate about creating
                                    intuitive user interfaces and ensuring
                                    seamless integration between frontend and
                                    backend systems.
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
                                    I'm committed to continuous learning and
                                    staying current with emerging technologies.
                                    My experience includes researching and
                                    implementing new technologies, working with
                                    partner teams, and integrating systems
                                    across different platforms.
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
