import React from "react";

interface Experience {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string[];
}

interface Education {
    id: number;
    degree: string;
    institution: string;
    period: string;
    description?: string;
}

const CV: React.FC = () => {
    const experiences: Experience[] = [
        {
            id: 1,
            title: "Senior Full Stack Developer",
            company: "Tech Company",
            period: "2022 - Present",
            description: [
                "Led development of multiple web applications using React, TypeScript, and Node.js",
                "Implemented CI/CD pipelines and improved deployment processes",
                "Mentored junior developers and conducted code reviews",
                "Collaborated with cross-functional teams to deliver high-quality products",
            ],
        },
        {
            id: 2,
            title: "Full Stack Developer",
            company: "Startup Inc",
            period: "2020 - 2022",
            description: [
                "Built and maintained web applications using Python, Django, and React",
                "Integrated third-party APIs and payment systems",
                "Optimized database queries and improved application performance",
                "Participated in agile development processes and sprint planning",
            ],
        },
    ];

    const education: Education[] = [
        {
            id: 1,
            degree: "Bachelor of Science in Computer Science",
            institution: "University Name",
            period: "2016 - 2020",
            description:
                "Graduated with honors. Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems",
        },
    ];

    return (
        <section id="cv" className="cv-section">
            <div className="container">
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
                    <button className="btn btn-primary">
                        Download Full CV
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CV;
