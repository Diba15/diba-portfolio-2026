import type { ExperienceItem } from "@/types/experience";

export const experienceDataEn: ExperienceItem[] = [
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
      "Developed and maintained user interfaces for a regional tourism and MSME (UMKM) management platform using Laravel and Bootstrap, delivering a consistent visual identity across public directory pages and admin dashboards.",
      "Collaborated regularly with designers and backend developer to integrate UI mockups and system features, minimizing visual mismatches and code rework.",
      "Implemented responsive layouts with Bootstrap grid systems, ensuring seamless navigation for users across desktop, tablet, and mobile devices.",
      "Conducted routine cross-browser testing and UI debugging on public and internal modules, ensuring a stable, bug-free user experience before deployment.",
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
      "Created and maintained interactive Tableau dashboards for an internal oil and gas monitoring system, automating routine reporting and eliminating manual compilation.",
      "Performed regular data cleaning, validation, and migration of inconsistent records into the target database, ensuring accurate datasets for internal reports.",
      "Documented and updated data models and application flow for a Laravel and SQL web application, helping developers understand and maintain the codebase easily.",
      "Coordinated regularly with engineers and analysts to translate system updates into structured technical documentation, improving team knowledge transfer.",
    ],
  },
];

export const experienceDataId: ExperienceItem[] = [
  {
    id: "exp_simbarraya",
    role: "Frontend Developer",
    company: "SIMBARRAYA",
    period: "Okt 2023 - Feb 2024",
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
      "Mengembangkan dan merawat antarmuka pengguna untuk platform manajemen pariwisata dan UMKM daerah menggunakan Laravel dan Bootstrap, menghadirkan konsistensi visual di halaman publik maupun dasbor admin.",
      "Berkolaborasi rutin dengan desainer dan pengembang backend untuk mengintegrasikan mockup UI dan fitur sistem, meminimalkan ketidaksesuaian visual dan perbaikan ulang kode.",
      "Mengimplementasikan tata letak responsif dengan sistem grid Bootstrap, memastikan navigasi lancar di perangkat desktop, tablet, maupun seluler.",
      "Melakukan pengujian lintas browser dan debugging UI secara berkala pada modul publik dan internal untuk menjamin performa stabil sebelum rilis.",
    ],
  },
  {
    id: "exp_bph_migas",
    role: "Technical Writer Intern",
    company: "BPH MIGAS",
    period: "Okt 2021 - Mei 2022",
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
      "Membangun dan memelihara dasbor interaktif Tableau untuk sistem monitoring migas internal, mengotomatisasi pelaporan berkala dan menghilangkan rekap manual.",
      "Melakukan pembersihan data, validasi, dan migrasi rekaman inkonsisten ke basis data target untuk memastikan akurasi data pelaporan internal.",
      "Mendokumentasikan dan memperbarui model data serta alur aplikasi web berbasis Laravel dan SQL, memudahkan pengembang dalam memahami dan memelihara kode.",
      "Berkoordinasi rutin dengan para engineer dan analis untuk menuangkan pembaruan sistem ke dalam dokumentasi teknis terstruktur guna mempercepat transfer pengetahuan tim.",
    ],
  },
];

export function getExperienceData(locale: string = "en"): ExperienceItem[] {
  return locale === "id" ? experienceDataId : experienceDataEn;
}

export const experienceData = experienceDataEn;
