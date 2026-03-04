export type TimelineItemType =
    | "work"
    | "education"
    | "certification"
    | "achievement"
    | "personal_project";

export interface TimelineItem {
    id: number;
    type: TimelineItemType;
    title: string;
    company: string;
    duration: string;
    description: string;
    achievements: string[];
    iconType: TimelineItemType;
    url?: string;
}

export const timelineData: TimelineItem[] = [
    {
        id: 101,
        type: "personal_project",
        iconType: "personal_project",
        title: "UtilKits",
        company: "util-kits.io.vn",
        url: "https://util-kits.io.vn",
        duration: "Released in 03/2026",
        description:
            `Fast, simple browser-based utilities for PDF and text processing. 
            Merge, compress, split, and sign PDF files. Word count, URL encoder and more.`,
        achievements: [],
    },
    {
        id: 100,
        type: "work",
        iconType: "work",
        title: "Full-stack Developer",
        company: "SHIFTASIA",
        duration: "08/2024 - Present",
        description:
            `Work with diverse and talented colleagues across multiple aspects of project development. 
      Contributed to the development of a wide range of projects, including B2B, Educational, and internal tools.`,
        achievements: [],
    },
    {
        id: 101,
        type: "personal_project",
        iconType: "personal_project",
        title: "Immersed in Code Blog",
        company: "immersedincode.io.vn",
        url: "#",
        duration: "Released in 05/2024",
        description:
            `Created and maintain a personal technical blog to share knowledge and experience gained throughout work and studies.`,
        achievements: [],
    },
    {
        id: 102,
        type: "work",
        iconType: "work",
        title: "Intern & Software Engineer",
        company: "TiSoHa Software Solution",
        duration: "07/2022 - 07/2024",
        description:
            `Collaborated with senior engineers to develop new features and solve technical problems. 
      Produced modern, high-performance, and maintainable code for a wide range of projects.`,
        achievements: [],
    },
    {
        id: 103,
        type: "education",
        iconType: "education",
        title: "Bachelor of Software Engineering",
        company: "University of Information Technology – VNU HCM",
        duration: "08/2019 - 09/2023",
        description:
            `Studied Software Engineering with a strong focus on backend systems, databases, and cloud technologies.`,
        achievements: ["GPA: 8.33 / 10"],
    },
];
