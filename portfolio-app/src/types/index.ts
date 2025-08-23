// Theme types
export type ThemeMode = "light" | "dark";

// Navigation types
export type SectionId =
    | "hero"
    | "about"
    | "skills"
    | "projects"
    | "cv"
    | "contact";

// Project types
export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
    image?: string;
}

// Skills types
export interface SkillCategory {
    name: string;
    skills: string[];
}

export interface SkillsData {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
}

// Experience types
export interface Experience {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string[];
}

// Education types
export interface Education {
    id: number;
    degree: string;
    institution: string;
    period: string;
    description?: string;
}

// Contact types
export interface ContactInfo {
    email: string;
    location: string;
    socialLinks: {
        github: string;
        linkedin: string;
        twitter?: string;
    };
}

// Component props types
export interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export interface NavLinkProps {
    sectionId: SectionId;
    icon: string;
    label: string;
    onClick: (sectionId: SectionId) => void;
}
