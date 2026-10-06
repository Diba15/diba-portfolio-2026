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
    "I am an Informatics graduate who values user empathy, clarity, and clean, maintainable code. I worked as a Frontend Developer at SIMBARRAYA, completed a Technical Writer internship at BPH MIGAS, and built full-stack projects in the RevoU Full-Stack Software Engineer program. At SIMBARRAYA, I built responsive, device-friendly interfaces with Laravel and Bootstrap, working closely with design and backend teams to improve performance and usability. My strengths include React, Next.js, TypeScript, and PostgreSQL, alongside collaboration and clear communication. I use AI responsibly to speed up development while reviewing and understanding every change, and I'm eager to contribute as a frontend/full-stack developer.",
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
