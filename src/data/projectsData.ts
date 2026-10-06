import type { ProjectItem } from "@/types/project";

export const projectsData: ProjectItem[] = [
  {
    id: "proj_trubrush",
    slug: "trubrush",
    title: "TruBrush",
    category: "Fullstack",
    featured: true,
    summary:
      "Platform portofolio seni digital karya buatan manusia dan pemesanan komisi berbasis escrow dengan proteksi kanvas.",
    description:
      "TruBrush adalah platform portofolio seni digital dan pemesanan komisi karya berbasis escrow aman yang khusus didedikasikan untuk karya buatan manusia (human-made art). Seniman wajib mengunggah bukti proses pengerjaan (sketsa, video timelapse, atau layer) yang diverifikasi melalui antrean kurator. Dilengkapi proteksi kanvas anti-salin sisi klien, pelacakan komisi per milestone, dompet digital penarikan saldo, serta dashboard admin & kurator lengkap dengan laporan finansial.",
    thumbnail: "/projects/trubrush.png",
    gallery: [
      "/projects/trubrush/1.png",
      "/projects/trubrush/2.png",
      "/projects/trubrush/3.png",
      "/projects/trubrush/4.png",
    ],
    techStack: [
      "TypeScript",
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "Zustand",
      "TanStack Query v5",
      "DaisyUI",
      "Axios",
      "Biome",
      "Bun",
      "Playwright",
    ],
    liveUrl: "https://trubrush.vercel.app",
    githubUrl: "https://github.com/Diba15/trubrush",
    features: [
      "Escrow-based Commission Ordering & Milestone Progress Tracking",
      "Human-Made Art Curation & WIP Verification Workflow",
      "Client-side Artwork Protection (Canvas Blur on Focus Loss & Right-Click Guard)",
      "Digital Wallet for Client Payments & Artist Withdrawals",
      "Curator & Admin Dashboard for Dispute Mediation & Audit Logs",
      "Financial Reporting (GMV, Escrow Balance, 5% Platform Fee & CSV Export)",
    ],
  },
  {
    id: "proj_revoshop",
    slug: "revoshop",
    title: "Revoshop",
    category: "Fullstack",
    featured: true,
    summary:
      "Platform e-commerce online store modern dengan sistem keranjang belanja, checkout, dan role-based authentication.",
    description:
      "Revoshop adalah aplikasi web e-commerce toko online yang dibangun untuk penugasan Milestone 3 RevoU Fullstack Software Engineering. Dibangun menggunakan Next.js 16, React 19, TypeScript, dan Tailwind CSS dengan Bun runtime, platform ini terintegrasi dengan Platzi Fake Store API untuk manajemen data produk dan autentikasi multi-peran (Admin & User), serta dilengkapi alur belanja lengkap dari keranjang hingga checkout.",
    thumbnail: "/projects/revoshop.png",
    gallery: [
      "/projects/revoshop/1.png",
      "/projects/revoshop/2.png",
      "/projects/revoshop/3.png",
      "/projects/revoshop/4.png",
      "/projects/revoshop/5.png",
    ],
    techStack: [
      "TypeScript",
      "Next.js",
      "React 19",
      "Tailwind CSS",
      "Bun",
      "Axios",
      "Platzi Store API",
      "bcryptjs",
    ],
    liveUrl: "https://milestone-3-diba15.vercel.app/",
    githubUrl: "https://github.com/Diba15/revoshop-Diba15",
    features: [
      "Interactive Cart System (Add, Quantity Adjust, Clear & Remove)",
      "Simulated Checkout Flow with Toast Notifications",
      "Role-based Authentication (Admin & User Roles)",
      "Admin Product Management (CRUD Operations)",
      "Product Search & Multi-category Filtering",
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
    gallery: [
      "/projects/todos-app/1.png",
      "/projects/todos-app/2.png",
      "/projects/todos-app/3.png",
    ],
    techStack: ["Vue.js", "Tailwind CSS", "LocalStorage API", "JavaScript"],
    liveUrl: "https://todos-app-peach.vercel.app/",
    githubUrl: "https://github.com/Diba15/diba-todos-app",
    features: [
      "Persistent Task Storage using Browser LocalStorage",
      "Category & Status Filtering (Work, Personal, Today)",
      "Instant Task Creation, Editing & Completion Toggling",
      "Clean Dashboard Layout with Search Filter",
    ],
  },
];
