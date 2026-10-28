import type {
  CertificationItem,
  EducationItem,
  SkillCategory,
} from "@/types/about";

export const educationDataEn: EducationItem[] = [
  {
    id: "edu_revou",
    institution: "RevoU",
    degree: "Associate Degree, Fullstack Software Engineering",
    fieldOfStudy: "Fullstack Software Engineering",
    period: "Feb 2026 - Sep 2026",
    location: "Remote",
    finalProject:
      "Trubrush: Digital Art Portfolio & Commission Platform with Integrated Escrow and Artwork Verification.",
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

export const educationDataId: EducationItem[] = [
  {
    id: "edu_revou",
    institution: "RevoU",
    degree: "Associate Degree, Rekayasa Perangkat Lunak Fullstack",
    fieldOfStudy: "Fullstack Software Engineering",
    period: "Feb 2026 - Sep 2026",
    location: "Remote",
    finalProject:
      "Trubrush: Platform Portofolio Seni Digital & Pemesanan Komisi dengan Integrasi Escrow dan Verifikasi Karya.",
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
      "Menyelesaikan program intensif full-stack membangun aplikasi web modern responsif dengan HTML, CSS, JavaScript, TypeScript, React, dan Next.js.",
      "Merancang RESTful API menggunakan NestJS dan PostgreSQL dengan pendekatan arsitektur bersih (clean architecture).",
      "Memanfaatkan Git untuk kontrol versi dan alur kerja kolaborasi tim, serta menerapkan AI tools secara bertanggung jawab untuk meningkatkan efisiensi pengembangan.",
      "Membangun TruBrush sebagai proyek akhir (Final Project).",
    ],
  },
  {
    id: "edu_telkom_s1",
    institution: "Telkom University",
    degree: "Sarjana (S1), Informatika",
    fieldOfStudy: "Teknik Informatika",
    period: "Sep 2022 - Sep 2024",
    location: "Bandung, Indonesia",
    gpa: "3.69 / 4.00",
    thesis:
      "Penerapan Metode LSTM untuk Klasifikasi Indeks Kualitas Udara Dalam Ruangan terhadap Konsentrasi Polusi Udara.",
    techStack: [
      "Python",
      "LSTM / Deep Learning",
      "Machine Learning",
      "Ilmu Komputer",
      "Arsitektur Sistem",
    ],
    descriptions: [
      "Lulus dengan IPK 3.69, berfokus pada prinsip rekayasa perangkat lunak dan sistem klasifikasi deep learning.",
      "Menulis skripsi penelitian penerapan neural network Long Short-Term Memory (LSTM) untuk mengklasifikasikan indeks kualitas udara berdasarkan konsentrasi polutan.",
    ],
  },
  {
    id: "edu_telkom_d3",
    institution: "Telkom University",
    degree: "Diploma Tiga (D3), Rekayasa Perangkat Lunak Aplikasi",
    fieldOfStudy: "Rekayasa Perangkat Lunak Aplikasi",
    period: "Sep 2019 - Sep 2022",
    location: "Bandung, Indonesia",
    gpa: "3.85 / 4.00",
    finalProject:
      "PROAKFIT, Aplikasi Pengelolaan Proyek Akhir Mahasiswa Fakultas Ilmu Terapan.",
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
      "Lulus dengan predikat Sangat Memuaskan (IPK 3.85), membangun fondasi kokoh dalam arsitektur web, manajemen basis data relasional, dan pemrograman berorientasi objek.",
      "Mengembangkan PROAKFIT sebagai proyek akhir, aplikasi manajemen akademik lengkap yang digunakan untuk mengoordinasikan sidang proyek akhir mahasiswa Fakultas Ilmu Terapan.",
    ],
  },
];

export const certificationData: CertificationItem[] = [
  {
    id: "cert_dicoding_frontend",
    title: "Belajar Membuat Frontend Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    issueDate: "Feb 2025",
    expirationDate: "Feb 2028",
    credentialUrl: "https://www.dicoding.com/certificates/GRX532NG3Z0M",
    techStack: ["Frontend", "HTML5", "CSS3", "JavaScript DOM"],
  },
  {
    id: "cert_db_programming_sql",
    title: "Database Programming",
    issuer: "Oracle Academy",
    issueDate: "Aug 2023",
    credentialUrl:
      "https://drive.google.com/file/d/17azhP-2ncrddvdW79C0GoUcyJz5kB1k5/view",
    techStack: ["Oracle SQL", "PL/SQL", "Database Development"],
  },
  {
    id: "cert_db_design",
    title: "Database Design",
    issuer: "Oracle Academy",
    issueDate: "Jul 2023",
    credentialUrl:
      "https://drive.google.com/file/d/1QLkbvwkSU-zR0PyH8t1m1QuJLsux6LiD/view",
    techStack: ["Relational Modeling", "ERD", "Normalization"],
  },
];

export const skillsDataEn: SkillCategory[] = [
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
      { name: "React 19", level: "Intermediate" },
      { name: "Next.js 16 (App Router)", level: "Intermediate" },
      { name: "Tailwind CSS v4", level: "Advanced" },
      { name: "NestJS", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
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
      { name: "MySQL", level: "Intermediate" },
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
      { name: "Problem Solving", level: "Intermediate" },
      { name: "Time Management", level: "Advanced" },
      { name: "Detail-Oriented", level: "Intermediate" },
      { name: "Analytical Thinking", level: "Advanced" },
      { name: "Adaptability", level: "Advanced" },
      { name: "Responsible AI Usage", level: "Advanced" },
    ],
  },
];

export const skillsDataId: SkillCategory[] = [
  {
    category: "Bahasa Pemrograman",
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
    category: "Framework & Pustaka",
    skills: [
      { name: "React 19", level: "Intermediate" },
      { name: "Next.js 16 (App Router)", level: "Intermediate" },
      { name: "Tailwind CSS v4", level: "Advanced" },
      { name: "NestJS", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "Laravel", level: "Intermediate" },
      { name: "Vue.js", level: "Intermediate" },
      { name: "Bootstrap", level: "Advanced" },
      { name: "Zustand & TanStack Query", level: "Advanced" },
    ],
  },
  {
    category: "Basis Data & Perangkat",
    skills: [
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Bun & NPM", level: "Advanced" },
      { name: "Biome", level: "Advanced" },
      { name: "Tableau", level: "Intermediate" },
      { name: "Excel & Google Sheets", level: "Intermediate" },
    ],
  },
  {
    category: "Soft Skills & Prinsip Kerja",
    skills: [
      { name: "Kolaborasi Tim", level: "Advanced" },
      { name: "Pemecahan Masalah", level: "Intermediate" },
      { name: "Manajemen Waktu", level: "Advanced" },
      { name: "Ketelitian & Detail", level: "Intermediate" },
      { name: "Berpikir Analitis", level: "Advanced" },
      { name: "Kemampuan Adaptasi", level: "Advanced" },
      { name: "Pemanfaatan AI Bertanggung Jawab", level: "Advanced" },
    ],
  },
];

export function getEducationData(locale: string = "en"): EducationItem[] {
  return locale === "id" ? educationDataId : educationDataEn;
}

export function getSkillsData(locale: string = "en"): SkillCategory[] {
  return locale === "id" ? skillsDataId : skillsDataEn;
}

export function getCertificationData(
  _locale: string = "en",
): CertificationItem[] {
  return certificationData;
}

export const educationData = educationDataEn;
export const skillsData = skillsDataEn;
