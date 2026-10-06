export type ExperienceType =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Freelance"
  | "Internship";

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  period: string;
  type: ExperienceType;
  descriptions: string[];
  techStack: string[];
}
