import type {
  CertificationItem,
  EducationItem,
  SkillCategory,
} from "@/types/about";

export const educationData: EducationItem[] = [
  {
    id: "edu_revou",
    institution: "RevoU",
    degree: "Associate Degree, Fullstack Software Engineering",
    fieldOfStudy: "Fullstack Software Engineering",
    period: "Feb 2026 - Sep 2026",
    location: "Remote",
    finalProject: "Trubrush: Digital Art Portfolio & Commission Platform with Integrated Escrow and Artwork Verification.",
    techStack: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Tailwind CSS",
      "Git",
    ],
    descriptions: [
      "Completed an intensive full-stack program building responsive web applications with HTML, CSS, JavaScript, TypeScript, React, and Next.js.",
      "Architected RESTful APIs with NestJS and PostgreSQL backed by clean architecture principles.",
      "Utilized Git for version control and collaborative team workflows, applying AI tools responsibly to improve development efficiency.",
      "Built TruBrush as CRACK (AKA Final Project).",
    ],
  },
  {
    id: "edu_telkom_s1",
    institution: "Telkom University",
    degree: "Bachelor, Informatics",
    fieldOfStudy: "Informatics Engineering",
    period: "Sep 2022 - Sep 2024",
    location: "Bandung, Indonesia",
    gpa: "3.69 / 4.00",
    thesis:
      "Applications of the LSTM Method for Classification of Indoor Air Quality Index on Indoor Air Pollution Concentration.",
    techStack: [
      "Python",
      "LSTM / Deep Learning",
      "Machine Learning",
      "Computer Science",
      "System Architecture",
    ],
    descriptions: [
      "Graduated with GPA 3.69, focusing on software engineering principles and deep learning classification systems.",
      "Authored research thesis applying Long Short-Term Memory (LSTM) neural networks to classify indoor air quality indices based on pollutant concentrations.",
    ],
  },
  {
    id: "edu_telkom_d3",
    institution: "Telkom University",
    degree: "Diploma, Application Software Engineering",
    fieldOfStudy: "Rekayasa Perangkat Lunak Aplikasi",
    period: "Sep 2019 - Sep 2022",
    location: "Bandung, Indonesia",
    gpa: "3.85 / 4.00",
    finalProject:
      "PROAKFIT, a Final Project Management Application of the Faculty of Applied Sciences.",
    techStack: [
      "PHP",
      "Laravel",
      "CodeIgniter",
      "MySQL",
      "Java",
      "JavaScript",
      "Web Development",
    ],
    descriptions: [
      "Graduated with High Distinction (GPA 3.85), building a solid foundation in web architectures, relational database management, and object-oriented programming.",
      "Developed PROAKFIT as final project, a full-featured academic management application utilized for coordinating final projects across the Faculty of Applied Sciences.",
    ],
  },
];

export const certificationData: CertificationItem[] = [
  {
    id: "cert_dicoding_frontend",
    title: "Belajar Membuat Frontend Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    issueDate: "Feb 2024",
    expirationDate: "Feb 2028",
    credentialUrl: "https://dicoding.com",
    techStack: ["Frontend", "HTML5", "CSS3", "JavaScript DOM"],
  },
  {
    id: "cert_db_programming_sql",
    title: "Database Programming",
    issuer: "Oracle Academy",
    issueDate: "Aug 2023",
    credentialUrl: "https://oracle.com",
    techStack: ["Oracle SQL", "PL/SQL", "Database Development"],
  },
  {
    id: "cert_db_design",
    title: "Database Design",
    issuer: "Oracle Academy",
    issueDate: "Jul 2023",
    credentialUrl: "https://oracle.com",
    techStack: ["Relational Modeling", "ERD", "Normalization"],
  },
];

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "PHP", level: "Intermediate" },
      { name: "SQL", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React 19", level: "Advanced" },
      { name: "Next.js 16 (App Router)", level: "Advanced" },
      { name: "Tailwind CSS v4", level: "Advanced" },
      { name: "NestJS", level: "Intermediate" },
      { name: "Laravel", level: "Intermediate" },
      { name: "Vue.js", level: "Intermediate" },
      { name: "Bootstrap", level: "Advanced" },
      { name: "Zustand & TanStack Query", level: "Advanced" },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MySQL", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Bun & NPM", level: "Advanced" },
      { name: "Biome", level: "Advanced" },
      { name: "Tableau", level: "Intermediate" },
      { name: "Excel & Google Sheets", level: "Intermediate" },
    ],
  },
  {
    category: "Soft Skills & Principles",
    skills: [
      { name: "Team Collaboration", level: "Advanced" },
      { name: "Problem Solving", level: "Advanced" },
      { name: "Detail-Oriented", level: "Advanced" },
      { name: "Analytical Thinking", level: "Advanced" },
      { name: "Adaptability", level: "Advanced" },
      { name: "Responsible AI Usage", level: "Advanced" },
    ],
  },
];
