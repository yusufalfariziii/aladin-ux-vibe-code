# PRD + Skill — Aladin UX Prototype
## Instruksi Vibe Coding untuk AI Coding Agent

| Informasi | Keterangan |
|---|---|
| Proyek | Aladin UX — Pembayaran Belanja Online dengan VA |
| Pemilik | M. Yusuf Al-Farizi |
| NIM | 202310370311482 |
| Dokumen acuan | PRD.md, Worksheet 8, Worksheet 12, wireframe pada folder `wireframe/` |
| Target hasil | Aplikasi frontend React + Vite dengan lima layar aktivitas yang saling terhubung |
| Bahasa antarmuka | Bahasa Indonesia |
| Status | Skill/instruksi pengembangan prototype konseptual |

---

## 1. Peran dan Tanggung Jawab

Bertindak sebagai **UI/UX Engineer sekaligus Frontend Developer** yang mengimplementasikan PRD menjadi aplikasi frontend React + Vite mobile-first. Utamakan kebutuhan pengguna, alur yang mudah dipahami, konsistensi visual, aksesibilitas dasar, dan kode yang mudah dipelihara.

Hasil yang dibuat merupakan prototype pembelajaran. Jangan menyatakan aplikasi terhubung dengan sistem Aladin sungguhan atau memproses transaksi nyata.

## 2. Urutan Sumber Kebenaran

Jika ada instruksi yang bertentangan, ikuti urutan berikut:

| Urutan | Sumber | Fungsi |
|---|---|---|
| 1 | `PRD.md` | Acuan utama masalah, target pengguna, UX Requirements, scope, dan acceptance criteria. |
| 2 | Worksheet 8 | Dasar User Need dan prioritas UX-01 sampai UX-06. |
| 3 | Worksheet 12 dan folder `wireframe/` | Acuan layar, komponen utama, dan hubungan antar-layar. |
| 4 | Screenshot aplikasi Aladin yang diberikan | Referensi bahasa visual; bukan bukti bahwa rancangan adalah UI resmi. |
| 5 | Instruksi tambahan pengguna | Boleh memperjelas atau mengubah prioritas selama tidak bertentangan dengan batasan keselamatan dan data PRD. |

Jangan mengarang temuan wawancara, kutipan pengguna, fitur resmi Aladin, kebijakan bank, atau status layanan real-time.

## 3. Tujuan Pengalaman Pengguna

| ID | Tujuan UX | Hal yang harus terasa bagi pengguna |
|---|---|---|
| UX-01 | Informasi metode pembayaran jelas. | Pengguna mudah melihat dan memahami pilihan metode. |
| UX-02 | Status VA jelas. | Pengguna dapat membedakan VA tersedia dan tidak tersedia. |
| UX-03 | Kondisi VA tidak tersedia disertai arahan. | Pengguna mengetahui pilihan langkah berikutnya. |
| UX-04 | Alur sederhana. | Pengguna dapat mengikuti layar tanpa kebingungan yang tidak perlu. |

UX-05 dan UX-06 terkait riwayat transaksi pada Worksheet 8, tetapi bukan fokus alur prototype pembayaran VA. Jangan menambahkan modul riwayat sebagai layar utama kecuali diminta secara khusus.

## 4. Ruang Lingkup Implementasi

### Wajib dibuat
- Halaman Bayar & Beli.
- Skenario Virtual Account tersedia.
- Layar Konfirmasi Pembayaran simulasi.
- Skenario VA tidak tersedia.
- Layar Metode Pembayaran alternatif.
- Navigasi antarlayar dan tombol kembali.
- Umpan balik yang jelas saat pengguna melakukan aksi simulasi.

### Tidak boleh dibuat atau diklaim
- Integrasi backend, core banking, API Aladin, payment gateway, marketplace, QRIS, bank, atau e-wallet.
- Transaksi uang sungguhan.
- Pembuatan/validasi VA sungguhan.
- Login, PIN, OTP, kata sandi, token, atau permintaan kredensial asli.
- Keterangan seolah-olah status layanan diperiksa secara real-time.
- Bukti pengujian pengguna yang belum benar-benar dilakukan.

## 5. Spesifikasi Layar dan Interaksi

| ID layar | Nama layar | Komponen wajib | Aksi/interaksi | Tujuan UX |
|---|---|---|---|---|
| S-01 | Bayar & Beli | Header, pencarian/area kategori layanan, kartu Virtual Account, kartu E-Wallet, kartu Transfer Bank, navigasi bawah. | Buka skenario VA tersedia dan tombol demo VA tidak tersedia. | UX-01 |
| S-02 | Virtual Account | Ringkasan transaksi contoh, label status VA tersedia, nomor VA simulasi, nominal simulasi. | Lanjut ke konfirmasi; kembali ke halaman sebelumnya. | UX-02 |
| S-03 | Konfirmasi Pembayaran | Ringkasan merchant, nomor VA contoh, nominal, penjelasan simulasi. | Tampilkan umpan balik konfirmasi simulasi; kembali. | UX-04 |
| S-04 | VA Tidak Tersedia | Pesan status yang mudah dipahami, penjelasan singkat, daftar alternatif. | Buka pilihan metode alternatif; kembali. | UX-03 |
| S-05 | Metode Pembayaran | Pilihan QRIS, Transfer Bank, E-Wallet, penanda metode terpilih, informasi singkat. | Pilih metode, lanjutkan simulasi, kembali. | UX-03 dan UX-04 |

Nama layar pada implementasi boleh disesuaikan kecil untuk menjaga bahasa antarmuka, tetapi tujuan dan fungsi setiap layar harus tetap sama.

## 6. Aturan Alur

| Skenario | Urutan | Hasil yang diharapkan |
|---|---|---|
| VA tersedia | S-01 → S-02 → S-03 | Pengguna melihat status VA tersedia, memeriksa data contoh, dan mendapatkan umpan balik simulasi. |
| VA tidak tersedia | S-01 → S-04 → S-05 | Pengguna membaca informasi VA tidak tersedia, melihat alternatif, memilih metode, dan mendapat umpan balik simulasi. |
| Kembali | S-02/S-03/S-04/S-05 → layar sebelumnya atau S-01 | Pengguna tidak terjebak pada satu layar dan dapat kembali ke alur. |

Sediakan cara yang jelas untuk menguji kedua skenario dari layar awal. Jangan memaksa pengguna hanya mengikuti cabang VA tersedia.

## 7. Panduan Visual dan Konten

| Elemen | Pedoman implementasi |
|---|---|
| Warna utama | Biru tua/navy untuk header dan biru royal untuk tombol/aksen. |
| Latar | Putih atau abu-abu sangat muda untuk area konten. |
| Kartu | Sudut membulat, jarak antarkartu konsisten, bayangan ringan bila diperlukan. |
| Ikon | Ikon sederhana dan konsisten untuk kategori/jenis pembayaran. |
| Header | Identitas teks Aladin, judul layar, dan tombol kembali bila relevan. |
| Navigasi bawah | Beranda, QRIS, Keuangan sebagai navigasi konseptual sesuai rancangan. |
| Status berhasil/tersedia | Gunakan pesan positif yang mudah dibaca. |
| Status tidak tersedia | Gunakan pesan yang jelas, netral, dan tidak menyalahkan pengguna. |
| Bahasa | Bahasa Indonesia, kalimat pendek, istilah VA dijelaskan saat pertama muncul. |

Gunakan screenshot yang diberikan sebagai **inspirasi bahasa visual**, bukan untuk mengklaim bahwa layar hasil coding merupakan tampilan resmi Aladin. Jangan menyalin data pribadi atau data transaksi dari screenshot.

## 8. Aturan Data dan Simulasi

| Data | Aturan |
|---|---|
| Merchant | Gunakan nama contoh/simulasi seperti Tokopedia hanya sebagai konten demonstrasi, bukan data transaksi nyata. |
| Nomor VA | Gunakan nomor dummy yang ditandai sebagai simulasi. Jangan gunakan nomor milik pengguna/orang lain. |
| Nominal | Gunakan nominal contoh dan tandai sebagai simulasi. |
| Status pembayaran | Gunakan label seperti “simulasi”, “contoh”, atau “belum dikirim”. |
| Aksi konfirmasi | Hanya menampilkan feedback UI. Tidak boleh mengirim permintaan pembayaran. |
| Pilihan metode | Hanya mencatat pilihan di UI; tidak menghubungi penyedia pembayaran. |

## 9. Panduan Teknis dan Struktur Project

Gunakan React dan Vite sebagai fondasi aplikasi frontend. Pertahankan struktur project yang jelas dan tempatkan seluruh source code aplikasi pada folder `src/`.

| Path | Tanggung jawab |
|---|---|
| `index.html` | Entry point HTML untuk Vite dan elemen root React. |
| `src/main.jsx` | Menginisialisasi React dan memuat stylesheet utama. |
| `src/App.jsx` | Komponen layar, state aplikasi, navigasi, event handler, dan interaksi pengguna. |
| `src/styles.css` | Sistem warna, tipografi, layout, responsive design, komponen, dan focus state. |
| `package.json` | Dependency serta script `dev`, `build`, dan `preview`. |
| `vite.config.js` | Konfigurasi Vite dan base path untuk GitHub Pages. |
| `wireframe/` | Lima wireframe yang menjadi dokumen desain. |
| `PRD.md` | Kebutuhan produk dan UX. |
| `PRD-SKILL.md` | Instruksi implementasi ini. |
| `CHANGELOG.md` | Catatan perubahan project. |
| `.github/workflows/pages.yml` | Workflow build production dan deployment GitHub Pages. |

### 9.1 Perintah Development

| Perintah | Kegunaan |
|---|---|
| `npm install` | Menginstal dependency dari `package.json`. |
| `npm run dev` | Menjalankan aplikasi pada development server lokal. |
| `npm run build` | Memastikan aplikasi dapat di-build untuk production. |
| `npm run preview` | Meninjau hasil build production secara lokal. |

### 9.2 Aturan Kode
- Gunakan komponen React yang dapat dibaca dan digunakan ulang bila sesuai.
- Pisahkan struktur/logic dari styling.
- Gunakan state React untuk perpindahan layar dan pilihan metode.
- Jangan membuat tombol yang terlihat aktif tetapi tidak memiliki aksi.
- Berikan feedback yang jelas untuk aksi yang disimulasikan.
- Jangan menambahkan backend atau dependency baru tanpa kebutuhan yang jelas.
- Pertahankan base path `/aladin-ux-vibe-code/` agar asset production berjalan di GitHub Pages.

### 9.3 Aturan Build dan Deployment
- Workflow harus menjalankan `npm install` lalu `npm run build`.
- Folder yang dipublikasikan ke GitHub Pages adalah `dist/`, bukan source folder.
- Setelah perubahan, periksa status GitHub Actions dan link GitHub Pages.
- Jika build gagal, periksa log sebelum menyatakan deployment berhasil.

## 10. Kualitas, Aksesibilitas, dan Keamanan

| Area | Persyaratan |
|---|---|
| Responsif | Tampilan tetap terbaca pada lebar ponsel dan desktop. |
| Navigasi | Semua tombol utama berfungsi dan tujuan navigasinya jelas. |
| Aksesibilitas dasar | Gunakan semantic HTML, label tombol yang bermakna, kontras cukup, dan focus state yang terlihat. |
| State UI | Metode terpilih dan feedback aksi harus terlihat jelas. |
| JavaScript | Hindari error pada alur utama dan tangani aksi yang belum tersedia dengan feedback yang jujur. |
| Privasi | Jangan meminta, menampilkan, atau menyimpan kredensial, OTP, PIN, atau nomor rekening nyata. |
| Ketergantungan | Prototype berjalan di browser tanpa backend. |
| Kejujuran sistem | Jangan menampilkan pesan “pembayaran berhasil” seolah transaksi sungguhan telah terjadi. |

## 11. Checklist Pengujian Mandiri

| No. | Langkah pengujian | Hasil yang diharapkan |
|---|---|---|
| 1 | Jalankan `npm install` kemudian `npm run dev`, atau uji hasil production dengan `npm run build` dan `npm run preview`. | Halaman prototype tampil tanpa error. |
| 2 | Pilih skenario VA tersedia. | Layar Virtual Account muncul. |
| 3 | Lanjutkan ke konfirmasi. | Layar Konfirmasi Pembayaran muncul. |
| 4 | Tekan konfirmasi simulasi. | Feedback menyatakan aksi hanya simulasi. |
| 5 | Kembali ke halaman awal dan pilih skenario VA tidak tersedia. | Layar VA Tidak Tersedia muncul. |
| 6 | Buka Pilih Metode Lain. | Layar alternatif tampil. |
| 7 | Pilih QRIS, Transfer Bank, atau E-Wallet. | Metode terpilih terlihat. |
| 8 | Tekan lanjutkan. | Feedback pemilihan metode simulasi muncul. |
| 9 | Uji tombol kembali dan navigasi pada lebar ponsel. | Pengguna dapat kembali dan konten tetap terbaca. |
| 10 | Periksa seluruh copy dan data contoh. | Tidak ada data pribadi atau klaim transaksi nyata. |

## 12. Kriteria Selesai (Definition of Done)

Pekerjaan dianggap selesai apabila:

- [ ] Lima layar utama tersedia dan terhubung.
- [ ] Kedua skenario VA dapat didemonstrasikan dari layar awal.
- [ ] Tombol utama dan tombol kembali bekerja.
- [ ] Pilihan metode alternatif dapat dipilih.
- [ ] Feedback aksi simulasi jelas dan jujur.
- [ ] Tampilan responsif dan mengikuti pedoman visual.
- [ ] Tidak ada kredensial atau data transaksi nyata.
- [ ] README menjelaskan cara menjalankan dan batas prototype.
- [ ] CHANGELOG diperbarui.
- [ ] Aplikasi hasil build pada link GitHub Pages dapat dibuka dan seluruh asset termuat dengan benar.

## 13. Cara Kerja Saat Melakukan Perubahan

1. Baca PRD.md dan file terkait sebelum mengubah kode.
2. Tentukan UX Requirement dan layar yang terdampak.
3. Ubah kode secukupnya, jangan menghapus interaksi yang masih diperlukan.
4. Jalankan checklist pengujian mandiri.
5. Perbarui README bila cara menjalankan atau tautan berubah.
6. Tambahkan catatan di CHANGELOG.md.
7. Laporkan file yang diubah, perilaku yang berubah, dan hasil pengujian. Jangan mengklaim pengujian berhasil jika belum dilakukan.

---
**Instruksi inti:** bangun pengalaman prototype yang membantu pengguna memahami metode pembayaran dan langkah berikutnya. Jangan memperluas proyek menjadi aplikasi perbankan sungguhan di luar ruang lingkup PRD.
