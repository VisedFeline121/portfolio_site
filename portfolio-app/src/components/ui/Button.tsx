import React from "react";
import type { ButtonProps } from "../../types";

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = "",
    type = "button",
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
