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

export const profileDataEn: ProfileData = {
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
  location: "Karawang, West Java, Indonesia",
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

export const profileDataId: ProfileData = {
  fullName: "Dimas Bagas Saputro",
  nickName: "Diba",
  title: "Software Developer",
  roles: [
    "Software Developer",
    "Frontend Developer",
    "Fullstack Engineer",
    "Spesialis React & Next.js",
  ],
  email: "dimaabagas73@proton.me",
  phone: "+62895349060971",
  headline:
    "Lulusan Informatika yang berfokus menciptakan kode yang bersih, berkinerja tinggi, dan berpusat pada pengguna.",
  shortBio:
    "Software Developer yang mengutamakan empati pengguna, kejelasan kode, dan struktur yang mudah dirawat. Berpengalaman dalam ekosistem React, Next.js, TypeScript, dan arsitektur backend modern.",
  fullBio:
    "Lulusan Teknik Informatika berdedikasi tinggi yang mengedepankan empati pengguna, kode yang terstruktur rapi, dan kolaborasi tim lintas fungsi. Memiliki pengalaman profesional sebagai Frontend Developer di SIMBARRAYA dan Technical Writer Intern di BPH MIGAS, di mana saya mengasah kemampuan membangun antarmuka web responsif, mendokumentasikan alur logika sistem, serta berkoordinasi antartim. Baru saja menyelesaikan program Full-Stack Software Engineering di RevoU, saya menguasai TypeScript, React, Next.js, NestJS, Laravel, dan PostgreSQL, memadukan keahlian teknis modern dengan komunikasi yang efektif. Pengalaman industri, kemampuan adaptasi, dan pemecahan masalah saya menjadikan saya siap berkontribusi optimal sebagai Frontend maupun Full-Stack Developer.",
  availability: "Tersedia untuk peluang baru",
  location: "Karawang, Jawa Barat, Indonesia",
  avatarUrl: "/profile.png",
  socials: {
    github: "https://github.com/Diba15",
    linkedin: "https://linkedin.com/in/dimasbagassaputro",
    instagram: "https://instagram.com/dimazzbagazz",
  },
  languages: [
    { language: "Bahasa Indonesia", level: "Penutur Asli (Native)" },
    { language: "Bahasa Inggris", level: "Profesional (Membaca & Menulis)" },
  ],
};

export function getProfileData(locale: string = "en"): ProfileData {
  return locale === "id" ? profileDataId : profileDataEn;
}

export const profileData = profileDataEn;
