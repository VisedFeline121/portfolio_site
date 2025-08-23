import React from "react";
import type { SectionProps } from "../../types";

export const Container: React.FC<SectionProps> = ({
    children,
    className = "",
}) => {
    return <div className={`container ${className}`}>{children}</div>;
};
