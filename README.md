# Aladin UX — Vibe Code Project

**Project Praktikum Rekayasa Interaksi (UX)**  
**Nama:** M. Yusuf Al-Farizi  
**NIM:** 202310370311482

Project ini adalah aplikasi frontend berbasis **React + Vite** yang mengembangkan alur pengalaman pembayaran belanja online dengan Virtual Account (VA). Aplikasi dibuat berdasarkan kebutuhan UX pada Worksheet 8 dan wireframe Worksheet 12.

## Demo Aplikasi
**[Buka Aladin UX App — GitHub Pages](https://yusufalfariziii.github.io/aladin-ux-vibe-code/)**

## Dokumen Perencanaan
- [PRD — Product Requirements Document](PRD.md)
- [PRD + Skill — Panduan Vibe Coding](PRD-SKILL.md)
- [Change Log](CHANGELOG.md)
- [Ringkasan Worksheet 12](docs/WORKSHEET12-SUMMARY.md)

## Source Code Project
Source code utama aplikasi berada di folder `src/`:
- [src/App.jsx](src/App.jsx) — komponen layar, state aplikasi, navigasi, dan interaksi.
- [src/main.jsx](src/main.jsx) — entry point React.
- [src/styles.css](src/styles.css) — styling dan responsive layout.
- [package.json](package.json) — dependency dan script project.
- [vite.config.js](vite.config.js) — konfigurasi Vite dan GitHub Pages.
- [index.html](index.html) — entry point HTML.
- [.github/workflows/pages.yml](.github/workflows/pages.yml) — build dan deployment.

## Fitur yang Dapat Didemonstrasikan
1. Beranda Aladin dengan akses ke Bayar & Beli.
2. Halaman Bayar & Beli untuk menemukan Virtual Account.
3. Skenario Virtual Account tersedia.
4. Layar konfirmasi pembayaran simulasi.
5. Skenario Virtual Account tidak tersedia.
6. Pemilihan metode alternatif: QRIS, Transfer Bank, dan E-Wallet.
7. Navigasi kembali dan feedback untuk tindakan simulasi.

## Wireframe
- [Layar 1 — Bayar & Beli](wireframe/wireframe-01.svg)
- [Layar 2 — Virtual Account](wireframe/wireframe-02.svg)
- [Layar 3 — Konfirmasi Pembayaran](wireframe/wireframe-03.svg)
- [Layar 4 — VA Tidak Tersedia](wireframe/wireframe-04.svg)
- [Layar 5 — Metode Pembayaran Alternatif](wireframe/wireframe-05.svg)

## Menjalankan Project di Komputer Lokal
Pastikan Node.js dan npm sudah tersedia, lalu jalankan:

```bash
npm install
npm run dev
```

Vite akan menampilkan alamat development server di terminal.

Untuk membuat build production:

```bash
npm run build
npm run preview
```

Hasil build production berada pada folder `dist/`.

## Teknologi
| Teknologi | Penggunaan |
|---|---|
| React | Komponen dan state antarmuka |
| Vite | Development server dan production build |
| JavaScript (JSX) | Logika interaksi dan tampilan |
| CSS | Desain responsif |
| GitHub Actions | Otomatisasi build dan deployment |
| GitHub Pages | Hosting demo aplikasi |

## Batasan Project
Project ini merupakan aplikasi frontend/prototype konseptual untuk tugas UX. Data merchant, nomor VA, dan nominal adalah data simulasi. Aplikasi tidak terhubung ke backend, core banking, API Aladin, payment gateway, QRIS, bank, atau e-wallet, serta tidak melakukan transaksi uang sungguhan.
