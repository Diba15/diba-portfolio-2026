export interface ProfileData {
  fullName: string;
  nickName: string;
  title: string;
  roles: string[];
  email: string;
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
}

export const profileData: ProfileData = {
  fullName: "Dimas Bagas Saputro",
  nickName: "Diba",
  title: "Frontend Developer",
  roles: [
    "Frontend Developer",
    "Web Software Engineer",
    "Fullstack Developer",
    "React & Next.js Specialist",
  ],
  email: "dimaabagas73@gmail.com",
  headline: "Building thoughtful, performant web experiences.",
  shortBio:
    "Frontend Developer with a passion for creating beautiful, accessible, and high-performance websites using modern web frameworks.",
  fullBio:
    "Greetings, my name is Dimas Bagas Saputro, and I hold a Bachelor's degree in Informatics Engineering from Telkom University. I possess a keen interest and am presently dedicating my efforts towards the domains of Frontend Web Development and Backend Web Development.",
  availability: "Available for new projects",
  location: "Indonesia",
  avatarUrl: "/profile.png",
  socials: {
    github: "https://github.com/Diba15",
    linkedin: "https://linkedin.com/in/dimasbagassaputro",
    instagram: "https://instagram.com/dimazzbagazz",
  },
};
