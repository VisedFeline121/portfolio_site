import React from "react";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import { Container } from "../../layout/Container";
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
                    <div className="about-text">
                        <p>
                            I'm a dedicated Full Stack Developer with a passion
                            for creating robust, scalable web applications. My
                            approach combines technical expertise with a focus
                            on user experience, ensuring that every project
                            delivers both functionality and elegance.
                        </p>
                        <p>
                            With experience across the entire development stack,
                            I specialize in modern technologies including React,
                            TypeScript, Python, and Node.js. I believe in
                            writing clean, maintainable code and following
                            industry best practices to create solutions that
                            stand the test of time.
                        </p>
                        <p>
                            I'm committed to continuous learning and staying
                            current with emerging technologies. When I'm not
                            coding, I contribute to open-source projects and
                            engage with the developer community to share
                            knowledge and best practices.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;
