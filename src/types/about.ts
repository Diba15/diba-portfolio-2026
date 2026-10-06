export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  period: string;
  location?: string;
  gpa?: string;
  achievements?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  badgeUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level?: "Beginner" | "Intermediate" | "Advanced";
    icon?: string;
  }[];
}
