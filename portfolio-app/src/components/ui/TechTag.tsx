import React, { useState } from "react";
import "./TechTag.css";

interface TechTagProps {
    name: string;
    projectUsage?: string;
}

const TechTag: React.FC<TechTagProps> = ({ name, projectUsage }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    // Only show tooltip if we have project-specific usage
    if (!projectUsage) {
        return <span className="tech-tag">{name}</span>;
    }

    return (
        <div className="tech-tag-container">
            <span
                className="tech-tag"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onFocus={() => setShowTooltip(true)}
                onBlur={() => setShowTooltip(false)}
                tabIndex={0}
                role="button"
                aria-label={`${name} - ${projectUsage}`}
            >
                {name}
            </span>

            {showTooltip && (
                <div className="tech-tooltip" role="tooltip">
                    <div className="tooltip-header">
                        <h4>{name}</h4>
                    </div>
                    <div className="tooltip-content">
                        <p className="tooltip-usage">
                            <strong>Used for:</strong> {projectUsage}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TechTag;
