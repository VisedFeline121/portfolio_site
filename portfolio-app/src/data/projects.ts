import type { Project } from "../types";

export const projects: Project[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description:
            "A full-stack e-commerce application built with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration.",
        technologies: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Stripe",
        ],
        githubUrl: "https://github.com/yourusername/ecommerce-platform",
        liveUrl: "https://ecommerce-demo.com",
    },
    {
        id: 2,
        title: "Task Management App",
        description:
            "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        technologies: [
            "React",
            "TypeScript",
            "Python",
            "FastAPI",
            "WebSocket",
            "Redis",
        ],
        githubUrl: "https://github.com/yourusername/task-manager",
        liveUrl: "https://task-manager-demo.com",
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description:
            "A weather application that displays current weather and forecasts using external APIs. Features include location-based weather, 7-day forecast, and weather alerts.",
        technologies: [
            "React",
            "TypeScript",
            "OpenWeather API",
            "Chart.js",
            "CSS Grid",
        ],
        githubUrl: "https://github.com/yourusername/weather-dashboard",
        liveUrl: "https://weather-dashboard-demo.com",
    },
];
