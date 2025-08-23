import type { Education, Experience } from "../types";

export const experiences: Experience[] = [
    {
        id: 1,
        title: "Senior Full Stack Developer",
        company: "Tech Company",
        period: "2022 - Present",
        description: [
            "Led development of multiple web applications using React, TypeScript, and Node.js",
            "Implemented CI/CD pipelines and improved deployment processes",
            "Mentored junior developers and conducted code reviews",
            "Collaborated with cross-functional teams to deliver high-quality products",
        ],
    },
    {
        id: 2,
        title: "Full Stack Developer",
        company: "Startup Inc",
        period: "2020 - 2022",
        description: [
            "Built and maintained web applications using Python, Django, and React",
            "Integrated third-party APIs and payment systems",
            "Optimized database queries and improved application performance",
            "Participated in agile development processes and sprint planning",
        ],
    },
];

export const education: Education[] = [
    {
        id: 1,
        degree: "Bachelor of Science in Computer Science",
        institution: "University Name",
        period: "2016 - 2020",
        description:
            "Graduated with honors. Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems",
    },
];
