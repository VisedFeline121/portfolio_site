import React, { useState } from "react";
import { skills } from "../data/skills";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Container } from "./layout/Container";

type SkillCategory = "frontend" | "backend" | "database" | "tools";

const Skills: React.FC = () => {
    const { isVisible, elementRef } = useIntersectionObserver();
    const [activeTab, setActiveTab] = useState<SkillCategory>("frontend");
    const [expandedSkills, setExpandedSkills] = useState<Set<string>>(
        new Set()
    );

    const toggleSkill = (skillName: string) => {
        const newExpanded = new Set(expandedSkills);
        if (newExpanded.has(skillName)) {
            newExpanded.delete(skillName);
        } else {
            newExpanded.add(skillName);
        }
        setExpandedSkills(newExpanded);
    };

    const tabLabels = {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        tools: "Tools & Platforms",
    };

    const getSkillIcon = (skillName: string) => {
        const iconMap: { [key: string]: string } = {
            // Frontend
            React: "⚛️",
            TypeScript: "📘",
            JavaScript: "🟨",
            HTML: "🌐",
            CSS: "🎨",
            "Next.js": "⚡",

            // Backend
            Python: "🐍",
            "Node.js": "🟢",
            Express: "🚂",
            FastAPI: "⚡",
            Django: "🎯",

            // Database
            PostgreSQL: "🐘",
            MongoDB: "🍃",
            SQLite: "💾",
            Redis: "🔴",

            // Tools
            Git: "📝",
            Docker: "🐳",
            AWS: "☁️",
            Vercel: "▲",
            Netlify: "🚀",
            "VS Code": "💻",
        };

        return iconMap[skillName] || "⚙️";
    };

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
                    {/* Tab Navigation */}
                    <div className="skills-tabs">
                        {(Object.keys(skills) as SkillCategory[]).map(
                            (category) => (
                                <button
                                    key={category}
                                    className={`skill-tab ${
                                        activeTab === category ? "active" : ""
                                    }`}
                                    onClick={() => setActiveTab(category)}
                                >
                                    {tabLabels[category]}
                                </button>
                            )
                        )}
                    </div>

                    {/* Tab Content */}
                    <div className="skills-tab-content">
                        <div className="skills-grid">
                            {skills[activeTab].map((skill) => (
                                <div
                                    key={skill.name}
                                    className={`skill-item ${
                                        expandedSkills.has(skill.name)
                                            ? "expanded"
                                            : ""
                                    }`}
                                >
                                    <button
                                        className="skill-header"
                                        onClick={() => toggleSkill(skill.name)}
                                    >
                                        <div className="skill-info">
                                            <span className="skill-icon">
                                                {getSkillIcon(skill.name)}
                                            </span>
                                            <span className="skill-name">
                                                {skill.name}
                                            </span>
                                        </div>
                                        <span
                                            className={`skill-toggle ${
                                                expandedSkills.has(skill.name)
                                                    ? "expanded"
                                                    : ""
                                            }`}
                                        >
                                            ▼
                                        </span>
                                    </button>
                                    <div className="skill-description">
                                        <div className="skill-description-content">
                                            {skill.description}
                                        </div>
                                    </div>
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
