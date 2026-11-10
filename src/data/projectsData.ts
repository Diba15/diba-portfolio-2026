import type { ProjectItem } from "@/types/project";

export const projectsDataId: ProjectItem[] = [
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
        "TruBrush adalah platform portofolio seni digital dan pemesanan komisi karya berbasis escrow aman yang didedikasikan khusus untuk <hl>karya buatan manusia (human-made art)</hl>.",
      problemStatement:
        "Maraknya seni generatif AI memicu <u>krisis kepercayaan terhadap keaslian karya digital</u>. Di sisi lain, transaksi komisi freelance konvensional rentan terhadap <u>risiko klien kabur (ghosting)</u> dan pembajakan karya tanpa izin sebelum pelunasan.",
      objectives: [
        "Membangun alur verifikasi bukti proses (WIP) untuk memastikan keaslian karya buatan manusia.",
        "Menerapkan sistem pembayaran komisi berbasis escrow aman dengan isolasi transaksi atomik.",
        "Mengamankan kanvas visual dari pembajakan langsung melalui proteksi sisi klien.",
        "Menyediakan dashboard transparan untuk mediasi sengketa, sistem strike, dan audit finansial.",
      ],
      solution:
        "Merancang <hl>arsitektur decoupled fullstack (Next.js 16 App Router di frontend dan NestJS 11 4-tier di backend)</hl>. Menerapkan kurasi manual bukti proses (sketsa/timelapse WIP), <u>isolasi transaksi escrow di database</u>, serta <u>proteksi kanvas browser anti-snipping</u>.",
      outcomes: [
        "Membangun sistem pembayaran escrow: mengunci dana komisi klien di muka dan memotong platform fee 5% otomatis (seniman menerima 95% bersih saat karya disetujui).",
        "Mengembangkan antrean kurasi bukti karya (sketsa, video timelapse, layer) sebelum karya dapat dipublikasikan ke galeri umum.",
        "Mengimplementasikan proteksi kanvas sisi klien (blur otomatis saat window kehilangan fokus dan penonaktifan klik kanan).",
        "Membangun dashboard kurator & admin untuk mediasi sengketa refund, penalti strike seniman, dan pelacakan metrik transaksi kas.",
      ],
      keyAchievements: [
        "<u>26 Unit Test Spec Files (NestJS + Jest)</u> menguji Controller & Service pada seluruh 13 modul bisnis.",
        "<u>7 Playwright E2E Test Suites</u> menguji alur kritis: RBAC, Curation, Escrow, dan Sanitization.",
        "Integrasi dokumentasi REST API interaktif OpenAPI (Swagger) pada deployment Railway.",
      ],
      impact:
        "Memberikan <hl>perlindungan hak cipta dan rasa aman finansial</hl> bagi seniman manusia, serta menghilangkan risiko penipuan transaksi komisi seni digital.",
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
        "Banyak aplikasi belanja online mengalami <u>desinkronisasi state keranjang belanja saat berpindah halaman</u>, ketiadaan pemisahan otentikasi hak akses (RBAC) antara pembeli dan admin, serta penanganan error API pihak ketiga yang rapuh.",
      objectives: [
        "Membangun alur keranjang belanja interaktif yang reaktif dan konsisten di seluruh navigasi halaman.",
        "Mengimplementasikan Role-Based Access Control (RBAC) yang aman untuk pembeli dan admin.",
        "Menyediakan antarmuka manajemen katalog produk khusus admin (CRUD penuh).",
      ],
      solution:
        "Mengembangkan antarmuka modular Next.js dengan Bun runtime untuk performa tinggi, memusatkan mutasi state keranjang (single source of truth), mengamankan rute admin dengan <hl>Role-Based Access Control (RBAC)</hl> dan <u>hashing password bcryptjs</u>, serta menangani Platzi Store API dengan fallback error handling.",
      outcomes: [
        "Sistem keranjang belanja lengkap: penambahan produk, penyesuaian kuantitas, penghapusan item, dan kalkulasi subtotal dinamis.",
        "Alur simulasi checkout dengan validasi form pengguna dan notifikasi toast instan.",
        "Sistem autentikasi multi-peran (Admin & User) dengan hashing password bcryptjs dan proteksi rute.",
        "Portal Admin Product Management dengan kapabilitas CRUD penuh terhadap katalog Platzi Store API.",
      ],
      keyAchievements: [
        "<u>Integrasi aman otentikasi role-based (RBAC)</u> dengan proteksi password hashing bcryptjs.",
        "<u>Zero unhandled state errors</u> pada alur belanja keranjang dan simulasi checkout pengguna.",
        "Performa rendering cepat menggunakan runtime Bun dan desain responsif Tailwind CSS.",
      ],
      impact:
        "Membuktikan penguasaan alur transaksi e-commerce, <hl>kehandalan manajemen state keranjang belanja</hl>, dan keamanan otentikasi multi-peran standar industri.",
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
        "Aplikasi task management interaktif dengan <hl>persistensi data lokal di peramban pengguna tanpa ketergantungan server backend</hl>.",
      problemStatement:
        "Banyak aplikasi to-do list mewajibkan registrasi akun di awal atau <u>kehilangan data saat tab browser dimuat ulang</u>. Ketiadaan pengelompokan kategori dan waktu tenggat juga menyulitkan pengguna dalam memprioritaskan pekerjaan.",
      objectives: [
        "Menghadirkan aplikasi task management bebas friksi tanpa perlu login atau latency koneksi server.",
        "Menjamin retensi data tugas 100% di peramban menggunakan Browser LocalStorage API.",
        "Menyediakan sistem filter multi-kategori dan waktu (Today, Tomorrow, Week, Month) yang reaktif.",
      ],
      solution:
        "Mengadopsi <hl>Vue 3 Composition API (Script Setup)</hl> untuk arsitektur reaktif, mengenkapsulasi LocalStorage dengan data seeding awal, serta memanfaatkan <u>sistem filter multi-dimensi (kategori & waktu)</u> untuk feedback interaksi yang lancar.",
      outcomes: [
        "Layer sinkronisasi Browser LocalStorage otomatis pada setiap penambahan, pengeditan, atau penghapusan tugas.",
        "Sistem filter multi-dimensi: Kategori (Work, Personal, Shopping, Others) dan Waktu (Today, Tomorrow, Week, Month via date-fns).",
        "Siklus hidup CRUD tugas lengkap: inline editing, indikator prioritas, dan toggle penyelesaian instan.",
        "Integrasi notifikasi swipeable interaktif (notivue) dan animasi transisi motion preset.",
      ],
      keyAchievements: [
        "<u>100% data retention</u> pada peramban pengguna tanpa pernah kehilangan data saat reload atau restart.",
        "<u>Sub-millisecond filtering latency</u> berkat kalkulasi reaktif Vue computed properties.",
        "Performa aplikasi ultra-ringan dengan zero-backend dependency.",
      ],
      impact:
        "Menyediakan alat bantu produktivitas harian yang <hl>instan, privat, dan responsif</hl> tanpa hambatan autentikasi.",
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

export const projectsDataEn: ProjectItem[] = [
  {
    id: "proj_trubrush",
    slug: "trubrush",
    title: "TruBrush",
    category: "Fullstack",
    featured: true,
    summary:
      "A human-made digital art portfolio and secure escrow commission platform with client-side canvas protection.",
    description:
      "TruBrush is a secure, escrow-backed digital art portfolio and commission platform dedicated exclusively to human-made creations. Equipped with work-in-progress (WIP) verification workflows, anti-scraping client-side canvas protection, in-platform digital balance withdrawals, and curator/admin management dashboards with real-time financial metrics.",
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
        "TruBrush is a dedicated digital art showcase and escrow-powered commission platform tailored specifically for <hl>authentic, human-made art</hl>.",
      problemStatement:
        "The influx of generative AI has sparked a <u>crisis of trust regarding the authenticity of digital artwork</u>. Meanwhile, traditional freelance art commissions are plagued by <u>client ghosting</u>, payment disputes, and unauthorized asset snipping before final payout.",
      objectives: [
        "Architect a Work-In-Progress (WIP) proof verification workflow ensuring human creation authenticity.",
        "Implement a secure escrow commission payment system with atomic transaction isolation.",
        "Defend visual artwork from direct browser ripping via client-side canvas protection shields.",
        "Deliver transparent dashboards for dispute mediation, strike penalties, and financial auditing.",
      ],
      solution:
        "Engineered a <hl>decoupled full-stack architecture (Next.js 16 App Router on frontend and a 4-tier NestJS 11 backend)</hl>. Implemented manual curation queues for WIP verification, <u>database-level escrow fund isolation</u>, and <u>browser canvas security controls</u>.",
      outcomes: [
        "Built an escrow payment engine: locking client commission funds upfront and automatically taking a 5% platform fee (artists net 95% upon milestone approval).",
        "Constructed a multi-step curation pipeline (sketches, layer proofs, timelapse video) before artworks are showcased to public feeds.",
        "Integrated client-side canvas defenses (automatic blur shield upon browser window defocus and right-click guard).",
        "Developed comprehensive curator & admin portals for dispute refund arbitration, artist strike logging, and cash flow auditing.",
      ],
      keyAchievements: [
        "<u>26 NestJS + Jest Unit Test Spec Files</u> verifying Controllers and Services across all 13 business domain modules.",
        "<u>7 Playwright End-to-End Test Suites</u> validating critical user paths: RBAC, Curation, Escrow, and Sanitization.",
        "Interactive Swagger OpenAPI documentation seamlessly deployed on Railway backend infrastructure.",
      ],
      impact:
        "Provides ironclad <hl>copyright reassurance and financial peace of mind</hl> for human creators, mitigating fraud and establishing genuine trust in digital art commissioning.",
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
          problem: "AI Influx & Loss of Human Artwork Visibility",
          solution:
            "Exclusive public feed governed by a curation system validating sketches, layers, and timelapse videos.",
        },
        {
          idNumber: 2,
          problem: "Asset Theft & Unchecked Browser Scraping",
          solution:
            "Automated browser defense: drag/context menu prevention, defocus window blur shield, and media streaming protection.",
        },
        {
          idNumber: 3,
          problem: "Copyright Infringement & Payment Vulnerability",
          solution:
            "Certified human-art labels backed by secure Escrow payments and a transparent dispute arbitration dashboard.",
        },
      ],
      futurePlans: [
        {
          title: "Mobile Application",
          tag: "iOS / Android",
          description:
            "Artist portfolio browsing and direct commission order management via native mobile apps.",
        },
        {
          title: "Automated AI Detection",
          tag: "Machine Learning",
          description:
            "Computer vision ML pipeline to flag initial indicators of generative AI artifacts automatically.",
        },
        {
          title: "Glaze Data Cloaking",
          tag: "AI Protect",
          description:
            "Integration of style-cloaking filters (Glaze) shielding art styles from unauthorized model scraping.",
        },
        {
          title: "Creator Membership Tier",
          tag: "Premium",
          description:
            "Monthly subscription for advanced business analytics, priority curation queues, and verified pro badges.",
        },
        {
          title: "Global Marketplace",
          tag: "Multi-currency",
          description:
            "Cross-border payment gateway support with automated exchange rates and localized payouts.",
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
      "Modern e-commerce platform featuring interactive cart state, checkout simulation, and role-based authentication.",
    description:
      "Revoshop is a modern online store web application engineered for RevoU Fullstack Software Engineering Milestone 3. Powered by Next.js 16, React 19, TypeScript, and Tailwind CSS under the Bun runtime, it integrates with Platzi Fake Store API for dynamic catalog queries, dual-role RBAC authentication (Admin & User), and an end-to-end purchasing workflow from cart management to simulated checkout.",
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
        "Revoshop is a full-featured e-commerce web application built to showcase modern state architecture and authentication patterns.",
      problemStatement:
        "Many shopping interfaces struggle with <u>desynchronized cart states across navigation</u>, a lack of clear separation between customer and administrator privileges (RBAC), and fragile error handling against third-party API disruptions.",
      objectives: [
        "Build a reactive, persistent shopping cart state synchronized throughout page navigation.",
        "Implement secure Role-Based Access Control (RBAC) protecting customer and administrative views.",
        "Deliver a complete Admin Product Management dashboard with full CRUD capabilities.",
      ],
      solution:
        "Created a modular Next.js application leveraging Bun, centralized cart mutations around a <hl>single source of truth</hl>, secured admin routes using <hl>Role-Based Access Control (RBAC)</hl> and <u>bcryptjs hashing</u>, and safeguarded external API communication.",
      outcomes: [
        "Full cart management suite: item addition, quantity increments, individual removals, and instant subtotal recalculations.",
        "Simulated multi-step checkout workflow complete with form validation and responsive sonner notifications.",
        "Dual-role authentication (Admin & User) with salted password hashing and protected route middleware.",
        "Dedicated Admin Product Management interface enabling full CRUD manipulation against the Platzi catalog API.",
      ],
      keyAchievements: [
        "<u>Secure role-based access control (RBAC)</u> with robust bcryptjs password encryption.",
        "<u>Zero unhandled runtime state errors</u> across shopping cart and simulated checkout journeys.",
        "Fast rendering metrics powered by Bun runtime and responsive Tailwind CSS layouts.",
      ],
      impact:
        "Demonstrates complete mastery over e-commerce state dynamics, <hl>high-reliability cart management</hl>, and enterprise-grade authentication standards.",
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
      "Interactive task management web app with persistent browser local storage and reactive filtering.",
    description:
      "A fast task management application crafted with Vue.js 3 and Tailwind CSS. Employs browser local storage for client-side data persistence, ensuring that user tasks remain secure and readily accessible across browser restarts without server latency.",
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
        "A lightweight, interactive task productivity application delivering <hl>instant client-side data persistence with zero backend overhead</hl>.",
      problemStatement:
        "Many to-do apps demand mandatory account registration or <u>suffer data loss on refresh</u>. The absence of multi-criteria category and temporal deadlines frequently complicates task prioritization for users.",
      objectives: [
        "Provide a zero-friction task management tool requiring no sign-in or server connection latency.",
        "Guarantee 100% data retention directly in client storage via the Browser LocalStorage API.",
        "Deliver reactive multi-category and time-based filters (Today, Tomorrow, Week, Month).",
      ],
      solution:
        "Adopted <hl>Vue 3 Composition API (Script Setup)</hl> for granular reactivity, encapsulated LocalStorage with initial seed states, and integrated <u>multi-dimensional filtering (categories & date-fns)</u> and notivue for fluid feedback.",
      outcomes: [
        "Automatic LocalStorage synchronization layer executing on every task creation, update, or deletion.",
        "Multi-dimensional filtering system: Categories (Work, Personal, Shopping, Others) and Temporal horizons (Today, Tomorrow, Week, Month).",
        "Complete CRUD lifecycle: inline editing, visual priority tags, and single-click completion toggling.",
        "Integration of swipeable interactive toasts (notivue) and smooth layout transitions.",
      ],
      keyAchievements: [
        "<u>100% client-side data retention</u> with zero lost tasks on restart or refresh.",
        "<u>Sub-millisecond filter latency</u> powered by Vue computed property memoization.",
        "Ultra-lightweight bundle size with absolute zero backend dependencies.",
      ],
      impact:
        "Delivers an <hl>instant, private, and distraction-free</hl> daily productivity aid accessible immediately from any web browser.",
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

export function getProjectsData(locale: string = "en"): ProjectItem[] {
  return locale === "id" ? projectsDataId : projectsDataEn;
}

export function getProjectBySlug(
  slug: string,
  locale: string = "en",
): ProjectItem | undefined {
  const projects = getProjectsData(locale);
  return projects.find((p) => p.slug === slug);
}

export const projectsData = projectsDataEn;
