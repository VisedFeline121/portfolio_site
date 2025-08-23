import React from "react";

const Skills: React.FC = () => {
    const skills = {
        frontend: [
            "React",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Next.js",
        ],
        backend: ["Python", "Node.js", "Express", "FastAPI", "Django"],
        database: ["PostgreSQL", "MongoDB", "SQLite", "Redis"],
        tools: ["Git", "Docker", "AWS", "Vercel", "Netlify", "VS Code"],
    };

    return (
        <section id="skills" className="skills-section">
            <div className="container">
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
            </div>
        </section>
    );
};

export default Skills;
