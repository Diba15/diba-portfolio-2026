import type { ProjectItem } from "@/types/project";

export const projectsData: ProjectItem[] = [
  {
    id: "proj_trubrush",
    slug: "trubrush",
    title: "TruBrush",
    category: "Fullstack",
    featured: true,
    summary:
      "Aplikasi web untuk platform portofolio seni digital dan pemesanan komisi berbasis escrow aman.",
    description:
      "TruBrush adalah platform portofolio seni digital dan pemesanan komisi karya berbasis escrow aman. Platform ini mengutamakan karya buatan manusia: seniman diminta melampirkan bukti proses pengerjaan (work in progress), dan setiap karya dikurasi oleh tim kurator sebelum dipublikasikan ke galeri umum.",
    thumbnail: "/projects/trubrush.png",
    techStack: [
      "TypeScript",
      "Next.js",
      "Zustand",
      "TanStack Query",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
    ],
    liveUrl: "https://trubrush.example.com",
    githubUrl: "https://github.com/dimaabagas73/trubrush",
    features: [
      "Escrow-based Commission Ordering System",
      "Curator Approval Workflow for Artwork Authentication",
      "Work-in-Progress (WIP) Proof Upload & Review",
      "Realtime Artist Profiles & Showcase",
    ],
  },
  {
    id: "proj_dewi_market",
    slug: "dewi-market",
    title: "Dewi Market",
    category: "Frontend",
    featured: true,
    summary:
      "Platform katalog dan pemesanan makanan berkualitas tinggi yang terintegrasi dengan MealDB API.",
    description:
      "Dewi Market adalah platform yang menyediakan berbagai macam makanan berkualitas tinggi untuk memenuhi kebutuhan kuliner harian. Dibangun dengan Vue.js dan Tailwind CSS, terintegrasi dengan MealDB API untuk menyajikan menu dinamis dan interaktif.",
    thumbnail: "/projects/dewi-market.png",
    techStack: [
      "Vue.js",
      "Tailwind CSS",
      "DaisyUI",
      "MealDB API",
      "JavaScript",
    ],
    liveUrl: "https://dewimarket.example.com",
    githubUrl: "https://github.com/dimaabagas73/dewi-market",
    features: [
      "Dynamic Food Catalog powered by MealDB API",
      "Interactive Categorized Menus (Dessert, Ayam, Daging Sapi, Seafood)",
      "Responsive Mobile-first Shopping Interface",
      "Order & Cart Simulation",
    ],
  },
  {
    id: "proj_todos_app",
    slug: "todos-app",
    title: "Todos Apps",
    category: "Frontend",
    featured: true,
    summary:
      "Aplikasi task management interaktif dengan persistensi browser local storage.",
    description:
      "Aplikasi task management yang dibangun menggunakan Vue.js dan Tailwind CSS. Menggunakan browser local storage untuk persistensi data secara lokal di peramban, memungkinkan daftar tugas tetap aman dan dapat diakses bahkan setelah peramban ditutup atau dimuat ulang.",
    thumbnail: "/projects/todos-app.png",
    techStack: ["Vue.js", "Tailwind CSS", "LocalStorage API", "JavaScript"],
    liveUrl: "https://todos.example.com",
    githubUrl: "https://github.com/dimaabagas73/todos-app",
    features: [
      "Persistent Task Storage using Browser LocalStorage",
      "Category & Status Filtering (Work, Personal, Today)",
      "Instant Task Creation, Editing & Completion Toggling",
      "Clean Dashboard Layout with Search Filter",
    ],
  },
];
