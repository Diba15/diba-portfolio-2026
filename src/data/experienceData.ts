import type { ExperienceItem } from "@/types/experience";

export const experienceData: ExperienceItem[] = [
  {
    id: "exp_simbarraya",
    role: "Frontend Engineer",
    company: "SIMBARRAYA",
    period: "Oktober 2023 - February 2024",
    type: "Contract",
    techStack: [
      "Laravel",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
    ],
    descriptions: [
      "Developed responsive and interactive user interfaces for SIMBARRAYA web platforms.",
      "Collaborated with backend teams to integrate REST APIs into dynamic Blade templates and Bootstrap components.",
      "Optimized frontend performance, cross-browser compatibility, and overall user experience.",
    ],
  },
  {
    id: "exp_bph_migas",
    role: "Technical Writer Intern",
    company: "BPH MIGAS",
    period: "Oktober 2021 - May 2022",
    type: "Internship",
    techStack: [
      "Laravel",
      "PHP",
      "Python",
      "Anaconda",
      "Tableau",
      "JavaScript",
      "SQL Server",
    ],
    descriptions: [
      "Authored and structured comprehensive technical documentation and system manuals.",
      "Assisted in data visualization using Tableau and data processing workflows with Python Anaconda.",
      "Supported technical evaluations and documentation of internal web systems built on Laravel and SQL Server.",
    ],
  },
];
