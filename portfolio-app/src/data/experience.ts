import type { Activity, Education, Experience } from "../types";

export const experiences: Experience[] = [
    {
        id: 1,
        title: "Backend Developer",
        company: "The Technological Unit of the Intelligence Corps",
        period: "June 2020 - January 2024",
        description: [
            "Worked across multiple teams and system architectures",
            "Design and development in High-Level domain: Python Services development, Python Micro-Services libraries",
            "Work with technological and non-technological consumers with diverse requirements",
            "Work with partner teams and integration between team systems and external systems",
            "Research and implementation of new technologies",
        ],
    },
];

export const education: Education[] = [
    {
        id: 1,
        degree: "Bachelor of Science in Computer Science",
        institution: "Technion - Israel Institute of Technology",
        period: "May 2024 - Present",
        description:
            "Currently pursuing a Computer Science degree at the Technion, focusing on software engineering, algorithms, and modern development practices.\n\n<strong>Made the Dean's List in Semesters:</strong> B.\n\n<strong>Currently in Semester:</strong> D.\n\n<strong>GPA:</strong> 91",
    },
];

export const activities: Activity[] = [
    {
        id: 1,
        title: "Volunteer Math Tutor",
        organization: "81-on-one Program",
        period: "2022 - 2023",
        description:
            "Tutored high school students in mathematics to prepare them for their Bagrut exams. Demonstrated strong communication skills and ability to explain complex concepts clearly to students.",
        type: "volunteer",
    },
];
