import type {
  CertificationItem,
  EducationItem,
  SkillCategory,
} from "@/types/about";

export const educationData: EducationItem[] = [
  {
    id: "edu_revou",
    institution: "RevoU",
    degree: "Fullstack Software Engineering",
    fieldOfStudy: "Software Engineering",
    period: "Feb 2026 - Sep 2026",
    location: "Remote",
    techStack: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "Jest",
      "Playwright",
    ],
    descriptions: [
      "Intensive fullstack software engineering curriculum building scalable end-to-end web applications.",
      "Architected clean backend services and RESTful APIs using TypeScript, Next.js, and NestJS backed by PostgreSQL and Prisma ORM.",
      "Implemented comprehensive end-to-end and unit testing pipelines using Jest and Playwright.",
    ],
  },
  {
    id: "edu_telkom_s1",
    institution: "Telkom University",
    degree: "Bachelor of Informatics Engineering (S1)",
    fieldOfStudy: "Informatics Engineering",
    period: "2022 - 2024",
    location: "Bandung, Indonesia",
    techStack: [
      "Python",
      "Machine Learning",
      "Firebase",
      "Computer Science",
      "System Architecture",
    ],
    descriptions: [
      "Focused on advanced software engineering principles, system architecture, and machine learning methodologies.",
      "Completed undergraduate research and capstone projects applying computer science fundamentals to real-world software problems.",
    ],
  },
  {
    id: "edu_telkom_d3",
    institution: "Telkom University",
    degree: "Diploma of Education, Informatics (D3)",
    fieldOfStudy: "Informatics",
    period: "2019 - 2022",
    location: "Bandung, Indonesia",
    techStack: [
      "MySQL",
      "CodeIgniter",
      "PHP",
      "Java",
      "Kotlin",
      "Android",
      "Web Development",
      "Adobe Illustrator",
    ],
    descriptions: [
      "Gained comprehensive foundation in software engineering spanning web development (PHP, CodeIgniter, MySQL) and mobile application development (Java, Kotlin, Android).",
      "Prepared graphical user interface assets and wireframes using Adobe Illustrator.",
    ],
  }
];

export const certificationData: CertificationItem[] = [
  {
    id: "cert_db_design",
    title: "Database Design",
    issuer: "Oracle",
    issueDate: "Jul 2023",
    credentialUrl: "https://oracle.com",
    techStack: ["MySQL", "Database Design", "Relational Modeling"],
  },
  {
    id: "cert_db_programming_sql",
    title: "Database Programming with SQL",
    issuer: "Oracle",
    issueDate: "Agu 2023",
    credentialUrl: "https://oracle.com",
    techStack: ["MySQL", "SQL Queries", "Database Development"],
  },
  {
    id: "cert_solid_principles",
    title: "Learn SOLID Programming Principles",
    issuer: "Dicoding Indonesia",
    issueDate: "Jun 2023",
    expirationDate: "Jun 2026",
    credentialUrl: "https://dicoding.com",
    techStack: ["SOLID Principles", "Clean Architecture", "OOP Best Practices"],
  },
];

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React 19", level: "Intermediate" },
      { name: "Next.js 16 (App Router)", level: "Intermediate" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS v4", level: "Advanced" },
      { name: "Vue.js", level: "Intermediate" },
      { name: "Zustand (Client State)", level: "Intermediate" },
      { name: "TanStack Query", level: "Intermediate" },
      { name: "HTML5 / Semantic Web", level: "Advanced" },
      { name: "CSS3 / Modern Layouts", level: "Advanced" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "NestJS", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
      { name: "Prisma ORM", level: "Intermediate" },
      { name: "Laravel", level: "Intermediate" },
      { name: "PHP", level: "Intermediate" },
      { name: "RESTful API Architecture", level: "Intermediate" },
    ],
  },
  {
    category: "Tools, Testing & Workflow",
    skills: [
      { name: "Git & GitHub", level: "Intermediate" },
      { name: "Bun & NPM Ecosystem", level: "Advanced" },
      { name: "Biome (Lint & Format)", level: "Advanced" },
      { name: "Jest (Unit Testing)", level: "Intermediate" },
      { name: "Playwright (E2E Testing)", level: "Beginner" },
      { name: "Tableau", level: "Beginner" },
      { name: "Python / Anaconda", level: "Beginner" },
    ],
  },
];
