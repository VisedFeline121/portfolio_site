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
        technologyUsage: {
            React: "Frontend UI with product catalog, shopping cart, and user dashboard components",
            TypeScript:
                "Type safety for API responses, user data, and product interfaces",
            "Node.js":
                "Backend server handling user authentication and product management",
            Express:
                "RESTful API endpoints for products, users, and order processing",
            PostgreSQL:
                "Database storing user accounts, product inventory, and order history",
            Stripe: "Secure payment processing for checkout and subscription management",
        },
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
        technologyUsage: {
            React: "Interactive task boards with drag-and-drop functionality and real-time updates",
            TypeScript:
                "Type definitions for task objects, user permissions, and API contracts",
            Python: "Backend logic for task processing and team collaboration features",
            FastAPI:
                "High-performance API with automatic documentation for task CRUD operations",
            WebSocket:
                "Real-time task updates and live collaboration between team members",
            Redis: "Caching frequently accessed task data and managing user sessions",
        },
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
        technologyUsage: {
            React: "Weather dashboard UI with location search and forecast display components",
            TypeScript:
                "Type safety for weather data structures and API responses",
            "OpenWeather API":
                "Real-time weather data and 7-day forecast information",
            "Chart.js":
                "Interactive charts displaying temperature trends and weather patterns",
            "CSS Grid":
                "Responsive layout for weather cards and dashboard organization",
        },
        githubUrl: "https://github.com/yourusername/weather-dashboard",
        liveUrl: "https://weather-dashboard-demo.com",
    },
];
