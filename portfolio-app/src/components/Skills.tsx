import React from "react";
import { skills } from "../data/skills";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Container } from "./layout/Container";

const Skills: React.FC = () => {
    const { isVisible, elementRef } = useIntersectionObserver();

    return (
        <section
            ref={elementRef}
            id="skills"
            className={`skills-section ${
                isVisible ? "section-visible" : "section-hidden"
            }`}
        >
            <Container>
                <h2 className="section-title">My Skills</h2>
                <div className="skills-content">
                    <div className="skills-category">
                        <h3>Frontend</h3>
                        <div className="skills-grid">
                            {skills.frontend.map((skill) => (
                                <div key={skill} className="skill-item">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>Backend</h3>
                        <div className="skills-grid">
                            {skills.backend.map((skill) => (
                                <div key={skill} className="skill-item">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>Database</h3>
                        <div className="skills-grid">
                            {skills.database.map((skill) => (
                                <div key={skill} className="skill-item">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>Tools & Platforms</h3>
                        <div className="skills-grid">
                            {skills.tools.map((skill) => (
                                <div key={skill} className="skill-item">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Skills;
