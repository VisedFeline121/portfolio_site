import type { SkillsData } from "../types";

export const skills: SkillsData = {
    frontend: [
        {
            name: "React",
            description:
                "Building interactive user interfaces with hooks, context, and modern React patterns.",
        },
        {
            name: "TypeScript",
            description:
                "Adding type safety and better developer experience to JavaScript applications.",
        },
        {
            name: "JavaScript",
            description:
                "Core language expertise with ES6+ features, async programming, and DOM manipulation.",
        },
        {
            name: "HTML",
            description:
                "Semantic markup, accessibility best practices, and modern HTML5 features.",
        },
        {
            name: "CSS",
            description:
                "Responsive design, CSS Grid, Flexbox, animations, and modern styling techniques.",
        },
    ],
    backend: [
        {
            name: "Python",
            description:
                "Backend development with FastAPI, Django, and data processing capabilities.",
        },
        {
            name: "Node.js",
            description:
                "Server-side JavaScript with event-driven architecture and npm ecosystem.",
        },
        {
            name: "Django",
            description:
                "Full-featured Python web framework with built-in admin and ORM.",
        },
        {
            name: "FastAPI",
            description:
                "Modern Python web framework for building APIs with automatic documentation.",
        },
        {
            name: "Nginx",
            description:
                "High-performance web server and reverse proxy for production deployments.",
        },
        {
            name: "RabbitMQ",
            description:
                "Message broker for asynchronous communication between microservices.",
        },
    ],
    database: [
        {
            name: "MongoDB",
            description:
                "NoSQL document database for flexible data modeling and scalability.",
        },
        {
            name: "MySQL",
            description:
                "Relational database management system for structured data storage.",
        },
        {
            name: "Redis",
            description:
                "In-memory data structure store for caching and real-time applications.",
        },
    ],
    tools: [
        {
            name: "Git",
            description:
                "Version control with branching strategies and collaborative workflows.",
        },
        {
            name: "Docker",
            description:
                "Containerization for consistent development and deployment environments.",
        },
        {
            name: "VS Code",
            description:
                "Code editor with extensions, debugging, and integrated development tools.",
        },
        {
            name: "Bash",
            description:
                "Command-line shell scripting for automation and system administration.",
        },
        {
            name: "PyCharm",
            description:
                "Python IDE with advanced debugging, testing, and code analysis tools.",
        },
    ],
};

// Tab labels
export const tabLabels = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    tools: "Tools & IDEs",
};
