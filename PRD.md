# Product Requirements Document (PRD)
## Alif Apriansyah — Engineering Portfolio & Personal Website

> **Version:** 1.0.0  
> **Last Updated:** 2026-09-24  
> **Status:** Active / In Development  
> **Target Audience for this PRD:** Alif Apriansyah (Author) and any future AI Coding Agents (Claude, Gemini, Cursor, ChatGPT, etc.) working on this repository.

---

## 1. Executive Summary & Project Identity

### 1.1 Project Overview
Situs portofolio personal milik **Alif Apriansyah**, mahasiswa Teknik Informatika Universitas Tadulako (Palu, Sulawesi Tengah). Portofolio ini dibangun sebagai etalase karya nyata, bukti rekayasa perangkat lunak (*software engineering*), kepemimpinan komunitas mahasiswa (HMTI Untad), dan riset terapan (WebGIS Spasial, IoT Computer Vision, dan Clean Architecture).

### 1.2 Benchmark & Inspirasi
- **Primary Benchmark:** [muhfarizzi.tech](https://muhfarizzi.tech) — portofolio rekan sejawat (Muh. Farizzi) yang menonjolkan estetika minimalis, *student builder*, tipografi terukur, serta data proyek riil tanpa kepalsuan marketing.
- **Design Benchmarks:** Paco Coursey, Lee Robinson, Linear App, Vercel Design System, and Emil Kowalski (micro-interactions).

### 1.3 Identitas Pengembang (Single Source of Truth)
- **Nama Lengkap:** Alif Apriansyah
- **Nama Panggilan:** Alif
- **Peran:** Informatics Engineering Student & Software Builder
- **Institusi:** Universitas Tadulako (Fakultas Teknik, Prodi Teknik Informatika — Angkatan 2024 / Semester 5)
- **Lokasi:** Palu, Sulawesi Tengah, Indonesia (Zona Waktu: WITA / UTC+8)
- **GitHub:** [https://github.com/Lieff246](https://github.com/Lieff246) (@Lieff246)
- **Email:** `alifapriansyah246@gmail.com`
- **LinkedIn:** [https://www.linkedin.com/in/alif-apriansyah](https://www.linkedin.com/in/alif-apriansyah)
- **Organisasi & Peran:**
  - Staff Divisi Penalaran Keilmuan (Intelektual) HMTI Untad (2025 — Sekarang)
  - Front-End Web Development Mentor di Komunitas Programming Tadulako (2025 — 2026)
  - Asisten Praktikum Laboratorium Komputer TI Untad (2026)
  - Ketua Tim Pelaksana "Ordinary Squad" — SIFOKUS IoT (LIDM 2025 Puspresnas / Capstone Design FATEK)

---

## 2. Core Philosophy: The Anti-"AI Slop" Manifesto

> [!IMPORTANT]
> **ATURAN MUTLAK BAGI SETIAP AI AGENT:**  
> Dilarang keras mengubah portofolio ini menjadi template generik "AI Slop". Desain harus terasa *handcrafted*, presisi, teknis, dan berbobot teknik informatika.

### 2.1 Yang DILARANG KERAS (AI Slop Tropes ❌)
1. **Dilarang Teks Klise:** Hindari kata-kata kosong seperti *"Passionate visionary developer crafting digital experiences"*, *"Transforming ideas into digital reality"*, dsb.
2. **Dilarang Gradien Ungu-Pink Neon yang Acak:** Hindari gradien blur murahan (*purple/cyan mesh gradients*) yang ditaruh tanpa tujuan struktural.
3. **Dilarang Ilustrasi Kartun 3D Generik:** Hindari gambar robot mengapung, astronot 3D, atau icon glassmorphism mengkilap template Canva/Figma gratisan.
4. **Dilarang Animasi Berlebihan yang Kasar:** Hindari animasi card terpental jauh (`scale-125`, `translate-y-6`), scroll hijacking, atau floating bubble yang mengganggu pembacaan.

### 2.2 Yang WAJIB DITERAPKAN (Crafted Engineering Aesthetic ✅)
1. **Tipografi Berbobot:** Kombinasi **Geist Sans** (bersih, geometris, modern) dan **JetBrains Mono / Geist Mono** (presisi teknis untuk metadata, commit, koordinat, dan stack).
2. **Hairline Precision (1px Borders):** Pembagian ruang menggunakan border 1px halus (`border-zinc-200` pada light canvas) dan grid arsitektural halus (`technical-grid-bg`).
3. **Aksen Status Fungsional:** Menggunakan aksen **Emerald (`#059669` / `#10B981`)** khusus untuk status hidup/aktif (dot denyut live, status open for collaboration, tag verified).
4. **Micro-Interactions yang Berkelas:**
   - Mouse-aware spotlight glow (border kartu menyala halus mengikuti posisi kursor).
   - Magnetic button feel.
   - Smooth copy-to-clipboard dengan toast mikro.
   - Interaksi filter kategori yang instan tanpa jank.
   - Modal studi kasus mendalam untuk proyek unggulan.

---

## 3. Technology Stack & Architecture

### 3.1 Stack Teknis
- **Framework:** Next.js 16 (App Router)
- **Runtime & Library:** React 19, TypeScript 5
- **Styling:** Tailwind CSS v4 (`@theme inline` di `globals.css`)
- **Iconography:** `lucide-react` + Custom SVG (`components/Icons.tsx`)
- **Image Optimization:** `next/image`

### 3.2 Struktur Direktori
```text
alif-portofolio/
├── app/
│   ├── favicon.ico
│   ├── globals.css         # Reset CSS, grid background, Tailwind v4
│   ├── layout.tsx          # Root layout, Geist font setup, metadata
│   └── page.tsx            # Single-page architecture yang memanggil semua section
├── components/
│   ├── CursorSpotlight.tsx  # Ambient spotlight mouse tracker & fluid follower
│   ├── ExperienceSection.tsx# Section pengalaman organisasi, asisten lab, & mentor
│   ├── FocusAreas.tsx       # 4 pilar kompetensi teknis (WebGIS, Backend, AI, IoT)
│   ├── Footer.tsx           # Footer, kontak cepat, copyright
│   ├── Hero.tsx             # Hero section, live WITA clock, foto profil, stats
│   ├── Icons.tsx            # SVG icons (GitHub, LinkedIn, dsb.)
│   ├── Navbar.tsx           # Fixed glassmorphic navigation bar
│   ├── ProjectCard.tsx      # Komponen kartu proyek interaktif
│   ├── ProjectModal.tsx     # Modal detail studi kasus proyek
│   ├── ProjectsSection.tsx  # Container proyek + filter kategori tab
│   └── TechStack.tsx        # Grid teknologi & developer tools
├── data/
│   └── portfolio.ts         # SINGLE SOURCE OF TRUTH untuk semua data teks & proyek
├── types/
│   └── portfolio.ts         # TypeScript interfaces (Project, Experience, dsb.)
├── public/
│   ├── alif.jpg             # Foto profil resmi Alif
│   └── images/              # Screenshot & aset visual proyek
├── PRD.md                   # Dokumen spesifikasi ini
└── package.json
```

---

## 4. Section-by-Section Functional Specification

### 4.1 Navigation Bar (`Navbar.tsx`)
- **Fungsi:** Navigasi cepat dengan fixed header semi-transparan (`backdrop-blur-md`).
- **Elemen:**
  - Logo/Brand: `ALIF.DEV` dengan monospaced tag `[UNTAD '24]`.
  - Link Menu: `#about`, `#focus`, `#projects`, `#experience`, `#skills`.
  - Action Button: Tombol `Contact` yang mengarah ke `mailto:alifapriansyah246@gmail.com`.
- **Interaksi:** Hover underline halus, border hairline bawah, responsif mobile drawer menu.

### 4.2 Hero & Live Console (`Hero.tsx`)
- **Fungsi:** Kesan pertama pengunjung; menampilkan identitas, kredensial kampus, dan ketersediaan kolaborasi.
- **Elemen Wajib:**
  1. **Live Clock Widget:** Menghitung waktu WITA (Palu, UTC+8) secara real-time (`WITA HH:MM:SS | Palu, Sulawesi Tengah`).
  2. **Status Badge:** Indikator denyut emerald berkedip: `● Open for collaboration & research projects`.
  3. **Typography Hero:**
     - Kicker: `INFORMATICS STUDENT & BUILDER` (Monospace badge).
     - Display: `ALIF.` (Font ukuran besar, tight letter-spacing).
     - Headline: *"Building thoughtful backends, WebGIS, and IoT systems from Palu."*
     - Lead Narrative: Deskripsi ringkas mengenai status Semester 5 TI Untad, HMTI, dan fokus teknologi.
  4. **Profile Photo Card:**
     - Menggunakan foto asli [alif.jpg](file:///d:/Tugas%20Alif/PORTOFOLIO/alif-portofolio/public/alif.jpg).
     - Efek visual: Default grayscale dengan kontras tinggi; saat mouse hover bertransisi halus menjadi *full color*.
     - Footer badge kartu: `STUDENT & BUILDER ● ACTIVE`.
  5. **4 Metrics Counters:**
     - 01 // STATUS: `Semester 5` (Teknik Informatika Untad)
     - 02 // PROJECTS: `Dynamic (e.g. 5+ Karya)` (WebGIS, AI, IoT, Flutter, Go)
     - 03 // ORGANISASI: `HMTI Untad` (Divisi Penalaran Keilmuan)
     - 04 // RISET LOMBA: `LIDM 2025` (Ketua Tim SIFOKUS IoT)

### 4.3 Focus Areas (`FocusAreas.tsx`)
- **Fungsi:** Mengelompokkan keahlian Alif ke dalam 4 domain rekayasa terarah:
  1. **Fullstack Web & WebGIS:** Laravel 11 (Headless API), React, TypeScript, Leaflet, GeoJSON.
  2. **Backend Engineering:** Go (Golang 1.21), Chi Router, Clean Architecture, MySQL, JWT.
  3. **AI & Computer Vision:** OpenCV, MediaPipe FaceMesh, Google Gemini API, Multi-Agent Systems.
  4. **IoT & Hardware Prototyping:** ESP32-CAM, sensor visual, 3D CAD/STL Enclosure Design.
- **Interaksi:** Hover card dengan border color change, highlight tag, dan transisi ikon.

### 4.4 Selected Works & Case Study Modal (`ProjectsSection.tsx`, `ProjectCard.tsx`, `ProjectModal.tsx`)
- **Fungsi:** Showcase proyek unggulan dengan dukungan studi kasus teknis mendalam.
- **Filter Tabs:** Dinamis dan auto-count (`All`, `Fullstack / WebGIS`, `Mobile`, `AI & Systems`, `Backend`, `Frontend / Web`).
- **Daftar Proyek Utama:**
  1. **Portal Pemetaan Sekolah Sulawesi Tengah (Featured):** WebGIS Decoupled untuk Dispen Sulteng (Laravel 11 REST API + React Leaflet).
  2. **SIFOKUS — Sensor Fokus Siswa (Featured):** IoT ESP32-CAM + Computer Vision MediaPipe EAR 6-titik untuk LIDM 2025.
  3. **MOVIEX — Movie Catalog & Streaming App:** Flutter, Dart, Firebase Auth, Cloud Firestore, GetX, YouTube Trailer Player.
  4. **SmartStudy AI:** Laravel 13 + Laravel AI SDK + 3 Multi-Agent Google Gemini API.
  5. **High-Performance Notes API:** Clean Architecture di Go 1.21 + Chi + MySQL + JWT.
  6. **Kuliner Nusantara:** HTML5/CSS3 Semantik responsif (Live di GitHub Pages).
- **Fitur Modal (`ProjectModal.tsx`):**
  - Klik kartu membuka dialog detail kasus (Deskripsi arsitektur, poin-poin *highlights*, rincian frontend/backend/database, link GitHub/Live). Responsif terhadap rasio aspek mobile vs web widescreen.

### 4.5 Experience & Leadership Timeline (`ExperienceSection.tsx`)
- **Fungsi:** Menampilkan rekam jejak kepemimpinan, pengajaran, dan asisten praktikum:
  1. **Staff Divisi Penalaran Keilmuan HMTI Untad** (2025 — Sekarang)
  2. **Front-End Web Development Mentor di Programming Tadulako** (2025 — 2026)
  3. **Asisten Praktikum Laboratorium Komputer TI Untad** (2026)
  4. **Ketua Tim Pelaksana LIDM 2025 (Ordinary Squad)** (2025)

### 4.6 Developer Toolbox / Tech Stack (`TechStack.tsx`)
- **Fungsi:** Mengelompokkan skill teknis berdasarkan kategori konkret:
  - *Languages*: PHP 8+, TypeScript, JavaScript, Go, Python 3, Kotlin, C++, SQL.
  - *Frameworks & Web*: Laravel, React 19, Next.js, Chi Router, Tailwind CSS, Vite.
  - *Geospatial*: Leaflet.js, GeoJSON, QGIS, ArcGIS, Buffer Analysis.
  - *AI, Vision & Embedded*: Gemini API, MediaPipe, OpenCV, ESP32-CAM, Arduino, 3D CAD.
  - *Tools & DevOps*: Git, GitHub, MySQL, Postman, Laragon, VS Code, Android Studio.

### 4.7 Footer & Quick Contact Console (`Footer.tsx`)
- **Fungsi:** Penutup halaman dengan opsi kontak instan dan navigasi kembali ke atas.
- **Interaksi:** Opsi copy email, link GitHub & LinkedIn, serta penanda hak cipta tahun aktif.

---

## 5. Micro-Interactions & "Keren Factor" Roadmap

Agar portofolio memiliki sentuhan *craft* yang memukau tanpa menjadi norak, berikut spesifikasi micro-interaction yang diizinkan dan direkomendasikan:

| Fitur Interaksi | Deskripsi & Implementasi Teknis | Lokasi Komponen |
|---|---|---|
| **Mouse Spotlight Card Glow** | Menghitung koordinat kursor lokal terhadap card (`onMouseMove`), menghasilkan radial-gradient halus pada border/background kartu ala Vercel/Linear. | `ProjectCard.tsx`, `FocusAreas.tsx` |
| **One-Click Email Copy with Toast** | Tombol kontak email memiliki tombol salin cepat. Saat diklik, teks tersalin ke clipboard dan memunculkan badge `"Copied! ✓"` selama 2 detik. | `Hero.tsx`, `Footer.tsx` |
| **Interactive Tech Tag Cross-Highlight** | Saat pengunjung hover pada sebuah tag (misal `Laravel 11` atau `React`), card proyek yang menggunakan tag tersebut mendapatkan highlight visual. | `ProjectsSection.tsx`, `TechStack.tsx` |
| **Connected Timeline Rail** | Garis vertikal penghubung antar-pengalaman dengan node indicator yang menyala saat di-scroll atau di-hover. | `ExperienceSection.tsx` |
| **Subtle Image Hover Zoom & Grayscale Fade** | Foto dan thumbnail proyek memiliki transisi halus `scale-102` dan desaturate-to-color tanpa lonjakan layout. | `ProjectCard.tsx`, `Hero.tsx` |
| **Snappy Filter Transitions** | Filter kategori berpindah dengan transisi opasitas dan posisi halus tanpa layout-shift yang berat. | `ProjectsSection.tsx` |

---

## 6. Aturan Modifikasi untuk AI Agent di Masa Depan

Bagi AI Agent mana pun yang memodifikasi project ini di kemudian hari:

1. **Semua Data Teks Harus Melalui `data/portfolio.ts`:**
   - JANGAN melakukan *hardcode* nama proyek, deskripsi pengalaman, atau link baru langsung di dalam file komponen JSX.
   - Tambahkan atau perbarui data di [data/portfolio.ts](file:///d:/Tugas%20Alif/PORTOFOLIO/alif-portofolio/data/portfolio.ts) dengan tipe data yang valid di [types/portfolio.ts](file:///d:/Tugas%20Alif/PORTOFOLIO/alif-portofolio/types/portfolio.ts).

2. **Pertahankan Tailwind CSS v4:**
   - Gunakan sintaks Tailwind v4 modern. Jangan menambahkan file konfigurasi `tailwind.config.js` usang jika tidak diminta, karena proyek ini menggunakan `@import "tailwindcss";` dan `@theme inline` di `globals.css`.

3. **Pastikan Responsive Mobile:**
   - Setiap fitur hover harus memiliki *fallback* yang nyaman untuk layar sentuh / mobile (di mana hover tidak berlaku).

4. **Kualitas Kode:**
   - Kode harus bersih dari linter error (`npm run lint`), aman dari hydration mismatch (misal pada komponen jam waktu nyata `timeString`), dan menjaga performa rendering tetap 60fps.
