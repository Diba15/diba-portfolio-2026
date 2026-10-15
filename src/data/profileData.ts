export interface ProfileLanguage {
  language: string;
  level: string;
}

export interface ProfileData {
  fullName: string;
  nickName: string;
  title: string;
  roles: string[];
  email: string;
  phone?: string;
  headline: string;
  shortBio: string;
  fullBio: string;
  availability: string;
  location: string;
  avatarUrl: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
  };
  languages: ProfileLanguage[];
}

export const profileData: ProfileData = {
  fullName: "Dimas Bagas Saputro",
  nickName: "Diba",
  title: "Software Developer",
  roles: [
    "Software Developer",
    "Frontend Developer",
    "Fullstack Engineer",
    "React & Next.js Specialist",
  ],
  email: "dimaabagas73@proton.me",
  phone: "+62895349060971",
  headline:
    "Informatics graduate crafting user-centric, performant, and clean code.",
  shortBio:
    "Software Developer who values user empathy, clarity, and clean maintainable code. Experienced across React, Next.js, TypeScript, and modern backend architectures.",
  fullBio:
    "A dedicated Informatics graduate who values user empathy, clear code, and cross-functional teamwork. With professional experience as a Frontend Developer at SIMBARRAYA and a Technical Writer Intern at BPH MIGAS, I have honed my skills in building responsive web interfaces, documenting system logic, and collaborating across teams. Having recently completed the Full-Stack Software Engineering program at RevoU, I am proficient in TypeScript, React, Next.js, NestJS, Laravel, and PostgreSQL, bringing a strong blend of modern technical expertise and clear communication skills. I am confident that my industry experience, adaptability, and problem-solving capabilities make me a standout candidate for a Frontend or Full-Stack Developer role.",
  availability: "Available for new opportunities",
  location: "Karawang, West Java",
  avatarUrl: "/profile.png",
  socials: {
    github: "https://github.com/Diba15",
    linkedin: "https://linkedin.com/in/dimasbagassaputro",
    instagram: "https://instagram.com/dimazzbagazz",
  },
  languages: [
    { language: "Indonesian", level: "Native" },
    { language: "English", level: "Professional (Reading & Writing)" },
  ],
};
