import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

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
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm a passionate Full Stack Developer with expertise
                            in modern web technologies. I love building scalable
                            applications that solve real-world problems and
                            provide excellent user experiences.
                        </p>
                        <p>
                            With a strong foundation in both frontend and
                            backend development, I enjoy working across the
                            entire stack. I'm particularly interested in React,
                            TypeScript, Python, and Node.js ecosystems.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new
                            technologies, contributing to open-source projects,
                            or sharing knowledge with the developer community.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
