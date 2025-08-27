import React from "react";
import { education, experiences } from "../../../data/experience";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import { Container } from "../../layout/Container";
import { CVButton } from "../../ui/CVButton";
import "./CV.css";

const CV: React.FC = () => {
    const { isVisible, elementRef } = useIntersectionObserver();

    return (
        <section
            ref={elementRef}
            id="cv"
            className={`cv-section ${
                isVisible ? "section-visible" : "section-hidden"
            }`}
        >
            <Container>
                <h2 className="section-title">Experience & Education</h2>

                <div className="cv-content">
                    <div className="experience-section">
                        <h3>Professional Experience</h3>
                        <div className="experience-list">
                            {experiences.map((exp) => (
                                <div key={exp.id} className="experience-item">
                                    <div className="experience-header">
                                        <h4 className="experience-title">
                                            {exp.title}
                                        </h4>
                                        <span className="experience-company">
                                            {exp.company}
                                        </span>
                                        <span className="experience-period">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <ul className="experience-description">
                                        {exp.description.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="education-section">
                        <h3>Education</h3>
                        <div className="education-list">
                            {education.map((edu) => (
                                <div key={edu.id} className="education-item">
                                    <div className="education-header">
                                        <h4 className="education-degree">
                                            {edu.degree}
                                        </h4>
                                        <span className="education-institution">
                                            {edu.institution}
                                        </span>
                                        <span className="education-period">
                                            {edu.period}
                                        </span>
                                    </div>
                                    {edu.description && (
                                        <p className="education-description">
                                            {edu.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="cv-download">
                    <CVButton />
                </div>
            </Container>
        </section>
    );
};

export default CV;
