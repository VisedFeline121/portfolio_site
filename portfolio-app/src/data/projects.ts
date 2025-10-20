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
        liveUrl: "https://pdfbookmarkmanager.com/",
        metrics: {
            users: 41,
            revenue: 1,
            capacity: "5000 bookmarks",
            pricing: "Free + $2.49 Pro Tier",
        },
    },
    {
        id: 2,
        title: "Portfolio Website",
        description:
            "A professional portfolio website showcasing full-stack development skills with modern React architecture, custom routing, and GitHub Pages deployment.",
        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "CSS Grid",
            "GitHub Pages",
            "Custom Hooks",
        ],
        technologyUsage: {
            React: "Component-based architecture with custom hooks for state management and animations",
            TypeScript:
                "Type safety for all components, interfaces, and data structures",
            Vite: "Fast development server and optimized production builds with code splitting",
            "CSS Grid":
                "Responsive layout system with custom properties for theming",
            "GitHub Pages":
                "Automated deployment pipeline with SSH authentication",
            "Custom Hooks":
                "Reusable logic for intersection observer, scroll management, and theme handling",
        },
        githubUrl: "https://github.com/VisedFeline121/portfolio_site",
        liveUrl: "https://visedfeline121.github.io/portfolio_site/",
    },
    {
        id: 3,
        title: "Excer",
        description:
            "A dashboard currently in development that displays the most talked about penny stocks from Reddit communities, providing stock information and links to popular discussions to help users discover trending investment opportunities.",
        technologies: ["Next.js", "React", "JavaScript", "Reddit API"],
        technologyUsage: {
            "Next.js":
                "Full-stack framework with server-side rendering for optimal performance and SEO",
            React: "Interactive dashboard UI with real-time stock data display and filtering components",
            TypeScript:
                "Type safety for stock data structures, Reddit API responses, and user interactions",
            "Reddit API":
                "Fetching trending posts and sentiment data from penny stock subreddits",
            "Stock Data API":
                "Real-time stock prices, market data, and company information",
            "Chart.js":
                "Interactive charts displaying stock price trends and sentiment analysis",
        },
        githubUrl: "https://github.com/VisedFeline121/excer",
    },
];
