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
      "TruBrush adalah platform portofolio seni digital dan pemesanan komisi karya berbasis escrow aman yang didedikasikan khusus untuk karya buatan manusia (human-made art). Dilengkapi alur verifikasi bukti pengerjaan (WIP), proteksi kanvas anti-salin sisi klien, dompet digital penarikan saldo, serta dashboard kurator & admin lengkap dengan metrik finansial platform.",
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
      "NestJS 11",
      "Prisma ORM",
      "PostgreSQL",
      "Zustand",
      "TanStack Query v5",
      "Playwright",
      "Jest",
      "Biome",
      "Bun",
    ],
    liveUrl: "https://trubrush.vercel.app",
    githubUrl: "https://github.com/Diba15/trubrush",
    docsUrl: "https://trubrush-be.up.railway.app/docs",
    caseStudy: {
      overview:
        "TruBrush adalah platform portofolio seni digital dan pemesanan komisi karya berbasis escrow aman yang didedikasikan khusus untuk karya buatan manusia (human-made art).",
      problemStatement:
        "Maraknya seni generatif AI memicu krisis kepercayaan terhadap keaslian karya digital. Di sisi lain, transaksi komisi freelance konvensional rentan terhadap risiko klien kabur (ghosting) dan pembajakan karya tanpa izin sebelum pelunasan.",
      objectives: [
        "Membangun alur verifikasi bukti proses (WIP) untuk memastikan keaslian karya buatan manusia.",
        "Menerapkan sistem pembayaran komisi berbasis escrow aman dengan isolasi transaksi atomik.",
        "Mengamankan kanvas visual dari pembajakan langsung melalui proteksi sisi klien.",
        "Menyediakan dashboard transparan untuk mediasi sengketa, sistem strike, dan audit finansial.",
      ],
      solution:
        "Merancang arsitektur decoupled fullstack (Next.js 16 App Router di frontend dan NestJS 11 4-tier di backend). Menerapkan kurasi manual bukti proses (sketsa/timelapse WIP), isolasi transaksi escrow di database, serta proteksi kanvas browser anti-snipping.",
      outcomes: [
        "Membangun sistem pembayaran escrow: mengunci dana komisi klien di muka dan memotong platform fee 5% otomatis (seniman menerima 95% bersih saat karya disetujui).",
        "Mengembangkan antrean kurasi bukti karya (sketsa, video timelapse, layer) sebelum karya dapat dipublikasikan ke galeri umum.",
        "Mengimplementasikan proteksi kanvas sisi klien (blur otomatis saat window kehilangan fokus dan penonaktifan klik kanan).",
        "Membangun dashboard kurator & admin untuk mediasi sengketa refund, penalti strike seniman, dan pelacakan metrik transaksi kas.",
      ],
      keyAchievements: [
        "26 Unit Test Spec Files (NestJS + Jest) menguji Controller & Service pada seluruh 13 modul bisnis.",
        "7 Playwright E2E Test Suites menguji alur kritis: RBAC, Curation, Escrow, dan Sanitization.",
        "Integrasi dokumentasi REST API interaktif OpenAPI (Swagger) pada deployment Railway.",
      ],
      impact:
        "Memberikan perlindungan hak cipta dan rasa aman finansial bagi seniman manusia, serta menghilangkan risiko penipuan transaksi komisi seni digital.",
      stackGroups: [
        {
          category: "Frontend",
          items: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS v4",
            "Zustand",
            "TanStack Query v5",
          ],
        },
        {
          category: "Backend",
          items: [
            "NestJS 11",
            "TypeScript",
            "Prisma ORM",
            "PostgreSQL",
            "Bcrypt",
            "JWT HttpOnly",
          ],
        },
        {
          category: "Testing & Quality",
          items: [
            "Playwright E2E",
            "Jest Unit Testing",
            "Biome Linter",
            "Bun Runtime",
          ],
        },
        {
          category: "Deployment",
          items: [
            "Vercel (Frontend)",
            "Railway (Backend API)",
            "Swagger OpenAPI",
          ],
        },
      ],
      problemSolutions: [
        {
          idNumber: 1,
          problem: "Banjir Konten AI & Hilangnya Visibilitas Karya",
          solution:
            "Feed publik eksklusif melalui sistem kurasi dengan validasi bukti proses (sketsa, layer, dan video timelapse).",
        },
        {
          idNumber: 2,
          problem: "Pencurian Aset & Scraping Liar Browser",
          solution:
            "Proteksi browser otomatis: pencegahan klik kanan/drag, tirai window blur anti-screenshot, dan perlindungan media stream.",
        },
        {
          idNumber: 3,
          problem: "Pelanggaran Hak Cipta & Kerentanan Finansial",
          solution:
            "Perlindungan hak cipta via label kurasi terverifikasi, didukung sistem pembayaran aman Escrow dan mediasi sengketa transparan.",
        },
      ],
      futurePlans: [
        {
          title: "Aplikasi Mobile",
          tag: "iOS / Android",
          description:
            "Portofolio seniman & manajemen transaksi komisi langsung via aplikasi mobile native.",
        },
        {
          title: "Deteksi AI Otomatis",
          tag: "Machine Learning",
          description:
            "Pipeline machine learning computer vision untuk deteksi awal indikasi artefak AI secara otomatis.",
        },
        {
          title: "Glaze Data Protection",
          tag: "AI Protect",
          description:
            "Integrasi cloaking seni digital (Glaze) untuk melindungi gaya ilustrasi dari scraping model AI.",
        },
        {
          title: "Monetisasi Membership",
          tag: "Premium",
          description:
            "Skema membership langganan premium untuk fitur analitik komisi, prioritas kurasi, dan badge seniman pro.",
        },
        {
          title: "Marketplace Global",
          tag: "Multi-mata uang",
          description:
            "Dukungan transaksi lintas batas negara dengan multi-currency payment gateway dan konversi kurs otomatis.",
        },
      ],
    },
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
      "Revoshop adalah aplikasi web e-commerce toko online yang dibangun untuk penugasan Milestone 3 RevoU Fullstack Software Engineering. Dibangun menggunakan Next.js 16, React 19, TypeScript, dan Tailwind CSS dengan Bun runtime, terintegrasi dengan Platzi Fake Store API untuk manajemen data produk dan autentikasi multi-peran (Admin & User), serta dilengkapi alur belanja lengkap dari keranjang hingga checkout.",
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
    caseStudy: {
      overview:
        "Revoshop adalah platform e-commerce toko online modern yang dibangun untuk penugasan Milestone 3 RevoU Fullstack Software Engineering.",
      problemStatement:
        "Banyak aplikasi belanja online mengalami desinkronisasi state keranjang belanja saat berpindah halaman, ketiadaan pemisahan otentikasi hak akses (RBAC) antara pembeli dan admin, serta penanganan error API pihak ketiga yang rapuh.",
      objectives: [
        "Membangun sistem keranjang belanja interaktif yang reaktif dan konsisten di seluruh navigasi halaman.",
        "Mengimplementasikan Role-Based Access Control (RBAC) yang aman untuk pembeli dan admin.",
        "Menyediakan antarmuka manajemen katalog produk khusus admin (CRUD penuh).",
      ],
      solution:
        "Mengembangkan antarmuka modular Next.js dengan Bun runtime untuk performa tinggi, memusatkan mutasi state keranjang (single source of truth), mengamankan rute admin dengan enkripsi bcryptjs, dan menangani Platzi Store API dengan fallback error handling.",
      outcomes: [
        "Sistem keranjang belanja lengkap: penambahan produk, penyesuaian kuantitas, penghapusan item, dan kalkulasi subtotal dinamis.",
        "Alur simulasi checkout dengan validasi form pengguna dan notifikasi toast instan.",
        "Sistem autentikasi multi-peran (Admin & User) dengan hashing password bcryptjs dan proteksi rute.",
        "Portal Admin Product Management dengan kapabilitas CRUD penuh terhadap katalog Platzi Store API.",
      ],
      keyAchievements: [
        "Integrasi aman otentikasi role-based (RBAC) dengan proteksi password hashing bcryptjs.",
        "Zero unhandled state errors pada alur belanja keranjang dan simulasi checkout pengguna.",
        "Performa rendering cepat menggunakan runtime Bun dan desain responsif Tailwind CSS.",
      ],
      impact:
        "Membuktikan penguasaan alur transaksi e-commerce, kehandalan manajemen state keranjang belanja, dan keamanan otentikasi multi-peran standar industri.",
      stackGroups: [
        {
          category: "Frontend",
          items: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS",
            "Axios",
          ],
        },
        {
          category: "Backend & Data",
          items: [
            "Platzi Fake Store API",
            "bcryptjs Authentication",
            "JSON Data Modeling",
          ],
        },
        {
          category: "Tools & Quality",
          items: ["Bun Runtime", "Biome Linter", "Component-Driven UI"],
        },
        {
          category: "Deployment",
          items: ["Vercel Deployment"],
        },
      ],
    },
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
      "Aplikasi task management yang dibangun menggunakan Vue.js 3 dan Tailwind CSS. Menggunakan browser local storage untuk persistensi data secara lokal di peramban, memungkinkan daftar tugas tetap aman dan dapat diakses bahkan setelah peramban ditutup atau dimuat ulang.",
    thumbnail: "/projects/todos-app.png",
    gallery: [
      "/projects/todos-app/1.png",
      "/projects/todos-app/2.png",
      "/projects/todos-app/3.png",
    ],
    techStack: [
      "Vue.js 3",
      "Tailwind CSS",
      "Vite",
      "JavaScript",
      "date-fns",
      "notivue",
      "LocalStorage API",
    ],
    liveUrl: "https://todos-app-peach.vercel.app/",
    githubUrl: "https://github.com/Diba15/diba-todos-app",
    caseStudy: {
      overview:
        "Aplikasi task management interaktif dengan persistensi data lokal di peramban pengguna tanpa ketergantungan server backend.",
      problemStatement:
        "Banyak aplikasi to-do list mewajibkan registrasi akun di awal atau kehilangan data saat tab browser dimuat ulang. Ketiadaan pengelompokan kategori dan waktu tenggat juga menyulitkan pengguna dalam memprioritaskan pekerjaan.",
      objectives: [
        "Menghadirkan aplikasi task management bebas friksi tanpa perlu login atau latency koneksi server.",
        "Menjamin retensi data tugas 100% di peramban menggunakan Browser LocalStorage API.",
        "Menyediakan sistem filter multi-kategori dan waktu (Today, Tomorrow, Week, Month) yang reaktif.",
      ],
      solution:
        "Mengadopsi Vue 3 Composition API (Script Setup) untuk arsitektur reaktif, mengenkapsulasi LocalStorage dengan data seeding awal, serta memanfaatkan date-fns dan notivue untuk feedback interaksi yang lancar.",
      outcomes: [
        "Layer sinkronisasi Browser LocalStorage otomatis pada setiap penambahan, pengeditan, atau penghapusan tugas.",
        "Sistem filter multi-dimensi: Kategori (Work, Personal, Shopping, Others) dan Waktu (Today, Tomorrow, Week, Month via date-fns).",
        "Siklus hidup CRUD tugas lengkap: inline editing, indikator prioritas, dan toggle penyelesaian instan.",
        "Integrasi notifikasi swipeable interaktif (notivue) dan animasi transisi motion preset.",
      ],
      keyAchievements: [
        "100% data retention pada peramban pengguna tanpa pernah kehilangan data saat reload atau restart.",
        "Sub-millisecond filtering latency berkat kalkulasi reaktif Vue computed properties.",
        "Performa aplikasi ultra-ringan dengan zero-backend dependency.",
      ],
      impact:
        "Menyediakan alat bantu produktivitas harian yang instan, privat, dan responsif tanpa hambatan autentikasi.",
      stackGroups: [
        {
          category: "Frontend",
          items: [
            "Vue.js 3 (Composition API)",
            "Tailwind CSS",
            "JavaScript ES6+",
            "HTML5",
          ],
        },
        {
          category: "Libraries & APIs",
          items: ["LocalStorage API", "date-fns", "notivue Notification"],
        },
        {
          category: "Tools & Build",
          items: ["Vite", "ESLint", "PostCSS"],
        },
        {
          category: "Deployment",
          items: ["Vercel"],
        },
      ],
    },
    features: [
      "Persistent Task Storage using Browser LocalStorage",
      "Category & Status Filtering (Work, Personal, Today)",
      "Instant Task Creation, Editing & Completion Toggling",
      "Clean Dashboard Layout with Search Filter",
    ],
  },
];
