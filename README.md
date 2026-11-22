# Aladin UX — Vibe Code Project

Project Praktikum Rekayasa Interaksi (UX) — M. Yusuf Al-Farizi (202310370311482).

Fokus: pengalaman pembayaran belanja online menggunakan Virtual Account (VA).

## Dokumen utama
- [PRD](PRD.md) — Product Requirements Document
- [PRD + Skill](PRD-SKILL.md) — instruksi Vibe Code / AI coding agent
- [Change Log](CHANGELOG.md) — riwayat perubahan
- [Ringkasan Worksheet 12](docs/WORKSHEET12-SUMMARY.md)

## Prototype
- [Buka Prototype Interaktif](prototype/index.html)
- [Kode JavaScript](prototype/assets/script.js)
- [Styling CSS](prototype/assets/styles.css)

Prototype memiliki dua cabang demo: VA tersedia dan VA tidak tersedia. Data transaksi adalah simulasi; prototype tidak terhubung ke layanan pembayaran nyata.

## Wireframe
- [Layar 1 — Bayar & Beli](wireframe/wireframe-01.svg)
- [Layar 2 — Virtual Account](wireframe/wireframe-02.svg)
- [Layar 3 — Konfirmasi Pembayaran](wireframe/wireframe-03.svg)
- [Layar 4 — VA Tidak Tersedia](wireframe/wireframe-04.svg)
- [Layar 5 — Metode Pembayaran Alternatif](wireframe/wireframe-05.svg)

## Menjalankan
Buka `prototype/index.html` di browser. Tidak membutuhkan backend atau instalasi dependency.

## Publikasi GitHub Pages
1. Buka **Settings → Pages** pada repository.
2. Pada **Build and deployment**, pilih **GitHub Actions** sebagai Source.
3. Push perubahan ke branch `main` atau jalankan workflow **Deploy prototype to GitHub Pages** secara manual dari tab Actions.
4. Setelah workflow berhasil, prototype dapat dibuka melalui URL Pages yang ditampilkan GitHub.

## Batasan
Ini adalah prototype konseptual untuk tugas UX, bukan aplikasi resmi Aladin. Tidak melakukan transaksi uang, tidak membuat VA sungguhan, dan tidak memiliki integrasi backend/core banking.
