import type { ExperienceItem } from "@/types/experience";

export const experienceData: ExperienceItem[] = [
  {
    id: "exp_simbarraya",
    role: "Frontend Developer",
    company: "SIMBARRAYA",
    period: "Oct 2023 - Feb 2024",
    type: "Contract",
    location: "Indonesia",
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
      "Managed website aesthetics with Laravel and Bootstrap, delivering a consistent, responsive interface across pages and devices and making the site accessible and easier to use for visitors.",
      "Collaborated with the design and backend teams to integrate designs and backend features into the interface, reducing mismatches and keeping the team aligned to ship features without rework.",
      "Implemented responsive layouts with Bootstrap, enabling the website to remain usable across desktop, tablet, and mobile devices, improving accessibility for all visitors.",
    ],
  },
  {
    id: "exp_bph_migas",
    role: "Technical Writer Intern",
    company: "BPH MIGAS",
    period: "Oct 2021 - May 2022",
    type: "Internship",
    location: "Jakarta, Indonesia",
    techStack: [
      "Laravel",
      "PHP",
      "SQL Server",
      "Tableau",
      "Python",
      "Anaconda",
      "JavaScript",
    ],
    descriptions: [
      "Created dashboards and automated reporting in Tableau, enabling reports to be viewed and refreshed without manual compilation, saving time and making data easier for the team to read and use.",
      "Cleaned inconsistent data and migrated it into the target system, achieving consistent datasets ready for reports and applications and enabling accurate reporting and features.",
      "Documented the data model and application flow logic for a Laravel and SQL application, enabling the team to maintain clear reference documentation and making it easier for other developers to understand and maintain the system.",
    ],
  },
];
