import type { Project } from "../types";

export const projects: Project[] = [
    {
        id: 1,
        title: "PDF Bookmark Manager",
        description:
            "A Chrome extension that transforms PDF reading by allowing users to create and manage up to 5000 bookmarks across multiple PDFs. Users can jump instantly to any section with custom titles and offline functionality. Perfect for students, researchers, and professionals.",
        technologies: [
            "Chrome Extension API",
            "JavaScript",
            "HTML/CSS",
            "Landing Page Development",
            "Adobe Premiere Pro",
        ],
        technologyUsage: {
            "Chrome Extension API":
                "Built native browser integration for seamless PDF bookmarking and navigation",
            JavaScript:
                "Core logic for bookmark management, PDF page navigation, and offline storage",
            "HTML/CSS":
                "Clean, intuitive user interface for bookmark management and organization",
            "Landing Page Development":
                "Professional marketing website with features showcase and pricing",
            "Adobe Premiere Pro":
                "Learned video editing and rendering for the extension's demo video",
        },
        githubUrl: "https://github.com/VisedFeline121/pdf-bookmark-manager",
        liveUrl: "https://pdfbookmarkmanager.com/",
        metrics: {
            users: 38,
            revenue: 1,
            capacity: "5000 bookmarks",
            pricing: "Free + $2.49 Pro Tier",
        },
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
