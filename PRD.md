# PRD — Aladin UX: Pembayaran Belanja Online dengan Virtual Account

**Pemilik:** M. Yusuf Al-Farizi  
**NIM:** 202310370311482  
**Mata Kuliah:** Rekayasa Interaksi (UX)  
**Persona:** Rani (nama samaran / persona komposit)

## 1. Problem
Pengguna membutuhkan metode VA untuk pembayaran belanja online. Berdasarkan pola utama wawancara R2 dan R3, pengguna pernah mencari VA dan beralih ke aplikasi mobile banking lain ketika VA tidak tersedia. Jawaban R1 pada pengalaman membutuhkan VA tidak konsisten sehingga bukan bukti utama pola VA.

## 2. Goal
Membuat pengalaman pembayaran yang membuat pengguna:
- mudah mengetahui metode pembayaran;
- mengetahui apakah VA tersedia;
- memahami tindakan yang bisa diambil jika VA tidak tersedia;
- mengikuti alur pembayaran yang sederhana.

## 3. UX Requirements
- **UX-01:** Informasi metode pembayaran jelas (P1).
- **UX-02:** Status ketersediaan VA jelas (P1).
- **UX-03:** Kondisi VA tidak tersedia disertai informasi dan alternatif (P1).
- **UX-04:** Alur pembayaran sederhana dan mudah dipahami (P2).
- **UX-05/UX-06:** Riwayat transaksi merupakan kebutuhan sekunder, bukan fokus prototype utama.

## 4. Scope
### In
1. Bayar & Beli
2. Virtual Account tersedia
3. Konfirmasi Pembayaran
4. VA Tidak Tersedia
5. Metode Pembayaran alternatif

### Out
Backend, core banking, payment gateway, VA sungguhan, QRIS sungguhan, OTP/PIN, dan transaksi uang nyata.

## 5. User Flow
**VA tersedia:** Bayar & Beli → Virtual Account → Konfirmasi Pembayaran.

**VA tidak tersedia:** Bayar & Beli → VA Tidak Tersedia → Metode Pembayaran alternatif.

## 6. Acceptance Criteria
- VA mudah ditemukan dari area pembayaran.
- Status VA mudah dipahami.
- Kondisi tidak tersedia memiliki penjelasan dan langkah berikutnya.
- Tombol utama dan tombol kembali dapat digunakan.
- Prototype dapat didemonstrasikan tanpa backend.
- Data transaksi ditandai sebagai simulasi.

## 7. Visual Direction
Menggunakan screenshot Aladin yang diberikan sebagai referensi bahasa visual secara konseptual: header biru, kartu rounded, aksen biru, ikon layanan, dan bottom navigation. Ini bukan klaim sebagai UI resmi Aladin.
