import React from "react";

interface CVButtonProps {
    className?: string;
}

export const CVButton: React.FC<CVButtonProps> = ({ className = "" }) => {
    return (
        <a
            className={`cv-button ${className}`}
            href="/or_prager_cv.pdf"
            download="Or_Prager_CV.pdf"
        >
            <span className="cv-icon">⬇️</span>
            Download Full CV
        </a>
    );
};
