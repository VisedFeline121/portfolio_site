import React from "react";

interface IconProps {
    src: string;
    alt: string;
    className?: string;
    size?: number;
}

export const Icon: React.FC<IconProps> = ({
    src,
    alt,
    className = "",
    size = 16,
}) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`icon ${className}`}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                filter: "invert(1)", // This makes the icon inherit the text color
            }}
        />
    );
};
