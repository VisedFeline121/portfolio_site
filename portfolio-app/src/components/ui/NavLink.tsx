import React from "react";
import type { NavLinkProps } from "../../types";

export const NavLink: React.FC<NavLinkProps> = ({
    sectionId,
    icon,
    label,
    onClick,
}) => {
    return (
        <button className="nav-link" onClick={() => onClick(sectionId)}>
            <span className="nav-icon">{icon}</span>
            {label}
        </button>
    );
};
