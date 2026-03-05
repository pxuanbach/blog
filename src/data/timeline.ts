export type TimelineItemType =
    | "work"
    | "education"
    | "certification"
    | "achievement";

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
        id: 99,
        type: "education",
        iconType: "education",
        title: "Master of Cybersecurity",
        company: "University of Information Technology – VNU HCM",
        duration: "08/2024 - Present",
        description: `Pursuing a Master's degree in Cybersecurity, focusing on advanced topics such as LLM security, 
        network security, cryptography, and ethical hacking.`,
        achievements: ["GPA: 8.09 / 10"],
    },
    {
        id: 100,
        type: "work",
        iconType: "work",
        title: "Full-stack Developer",
        company: "SHIFTASIA",
        duration: "08/2024 - Present",
        description: `Collaborate with cross-functional teams across the full software development lifecycle. 
            Actively contribute to architecting and building diverse applications, including B2B platforms, 
            EdTech solutions, and internal enterprise tools.`,
        achievements: [],
    },
    {
        id: 101,
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
        id: 102,
        type: "education",
        iconType: "education",
        title: "SOFTWARE ENGINEER",
        company: "University of Information Technology – VNU HCM",
        duration: "08/2019 - 09/2023",
        description:
            `Completed comprehensive coursework in Software Engineering, 
            with a specialized focus on backend architecture, distributed databases, 
            and cloud-native technologies.`,
        achievements: ["GPA: 8.33 / 10"],
    },
];

// ─── What I Built ────────────────────────────────────────────────

export interface BuiltItem {
    id: number;
    title: string;
    duration: string;
    description: string;
    achievements: string[];
    url?: string;
    imageUrl?: string;
}

export const builtData: BuiltItem[] = [
    {
        id: 99,
        title: "UtilKits",
        url: "https://util-kits.io.vn",
        duration: "Released in 03/2026",
        imageUrl: "img/built_logo/util-kits.io.vn.png",
        description:
            `A comprehensive suite of fast, client-side browser utilities for PDF and text processing. 
            Features include secure PDF manipulation (merge, compress, split, sign) and essential text tools 
            like word counting and data encoding.`,
        achievements: [],
    },
    {
        id: 100,
        title: "Immersed in Code Blog",
        url: "#",
        imageUrl: "img/logo.png",
        duration: "Released in 05/2024",
        description:
            `A personal tech blog dedicated to sharing in-depth insights, coding tutorials, 
            and industry best practices focusing on software engineering and modern programming paradigms.`,
        achievements: [],
    },
];
