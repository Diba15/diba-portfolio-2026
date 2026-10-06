export type ProjectCategory =
  | "All"
  | "Fullstack"
  | "Frontend"
  | "Mobile"
  | "Open Source";

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  featured: boolean;
  category: Exclude<ProjectCategory, "All">;
  thumbnail: string;
  gallery?: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
  challenges?: string[];
  metrics?: string[];
}
