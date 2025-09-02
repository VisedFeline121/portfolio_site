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
    technologyUsage: Record<string, string>;
    githubUrl: string;
    liveUrl?: string;
    image?: string;
}

// Technology types
export interface TechInfo {
    description: string;
    usage: string;
}

// Skills types
export interface Skill {
    name: string;
    description: string;
}

export interface SkillCategory {
    name: string;
    skills: Skill[];
}

export interface SkillsData {
    frontend: Skill[];
    backend: Skill[];
    database: Skill[];
    tools: Skill[];
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

// Activity types
export interface Activity {
    id: number;
    title: string;
    organization?: string;
    period: string;
    description: string;
    type: "volunteer" | "achievement" | "activity";
}

export interface FormField {
    name: string;
    label: string;
    type: "text" | "email" | "textarea";
    required: boolean;
    rows?: number;
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
