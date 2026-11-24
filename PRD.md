# Product Requirements Document (PRD)
## Aladin UX — Pengalaman Pembayaran Belanja Online dengan Virtual Account

| Informasi | Keterangan |
|---|---|
| Pemilik proyek | M. Yusuf Al-Farizi |
| NIM | 202310370311482 |
| Mata kuliah | Rekayasa Interaksi (UX) |
| Produk yang dikaji | Aladin |
| Persona | Rani (nama samaran / persona komposit) |
| Fokus proyek | Alur pembayaran belanja online menggunakan Virtual Account (VA) |
| Versi dokumen | 1.1 |
| Status | Frontend MVP (React + Vite), untuk prototype konseptual |

---

## 1. Ringkasan Produk

Proyek ini merancang prototype pengalaman pembayaran belanja online pada aplikasi Aladin dengan fokus pada kebutuhan pengguna terhadap metode Virtual Account (VA). Rancangan berusaha membuat informasi metode pembayaran mudah ditemukan, status ketersediaan VA mudah dipahami, serta memberikan arahan ketika VA tidak tersedia.

PRD ini menjadi acuan untuk pembuatan wireframe, pengembangan frontend melalui Vibe Coding, dan evaluasi prototype. Implementasi project menggunakan React dan Vite dengan source code pada folder `src/`. Aplikasi frontend dapat dijalankan secara lokal dan dibangun untuk GitHub Pages. Aplikasi tetap bersifat konseptual untuk kebutuhan praktikum UX dan tidak terhubung ke sistem Aladin, layanan perbankan, marketplace, payment gateway, atau transaksi uang sungguhan.

## 2. Latar Belakang dan Dasar Penelitian

Berdasarkan Worksheet 8, pola kebutuhan VA yang paling konsisten muncul pada responden R2 dan R3. Keduanya pernah membutuhkan VA untuk belanja online, menganggap VA lebih mudah, pernah mencari VA, dan menyatakan akan menggunakan aplikasi mobile banking lain ketika VA tidak tersedia.

Jawaban R1 pada bagian pengalaman membutuhkan VA tidak konsisten. Oleh karena itu, R1 tidak digunakan sebagai bukti utama untuk menyimpulkan pola kebutuhan VA.

### 2.1 Ringkasan bukti pengguna

| Sumber | Temuan yang tercatat | Implikasi terhadap rancangan |
|---|---|---|
| Wawancara R2 (WS5) | Pernah membutuhkan VA untuk belanja online; pernah mencari VA; menganggap VA lebih mudah; menggunakan aplikasi mobile banking lain jika VA tidak tersedia. | Metode VA perlu mudah ditemukan, statusnya perlu jelas, dan pengguna perlu diberi arahan saat VA tidak tersedia. |
| Wawancara R3 (WS5) | Pernah membutuhkan VA untuk belanja online; pernah mencari VA; menganggap VA lebih mudah; menggunakan aplikasi lain jika VA tidak tersedia. | Rancangan perlu mengurangi ketidakpastian dan membantu pengguna memahami pilihan berikutnya. |
| Wawancara R1 (WS5) | Jawaban tentang pengalaman membutuhkan VA tidak konsisten. | Tidak dijadikan dasar utama pola kebutuhan VA dalam PRD ini. |
| Worksheet 8 | UX-01 sampai UX-03 diprioritaskan tinggi; UX-04 dan UX-05 sedang; UX-06 rendah. | Fokus prototype utama diarahkan pada pencarian metode, kepastian VA, informasi ketika VA tidak tersedia, dan alur yang sederhana. |

**Batas bukti:** penelitian yang menjadi dasar proyek ini melibatkan tiga responden. Temuan tersebut menggambarkan pola dari responden yang diwawancarai, bukan kesimpulan untuk seluruh pengguna Aladin.

## 3. Pernyataan Masalah

Pengguna yang melakukan belanja online dan membutuhkan pembayaran melalui VA perlu mengetahui apakah metode tersebut tersedia di Aladin. Ketika VA tidak tersedia atau tidak ditemukan, pengguna dapat beralih ke aplikasi mobile banking lain. Pengalaman ini menunjukkan perlunya informasi yang jelas mengenai metode pembayaran, status VA, dan langkah alternatif.

### 3.1 Rumusan masalah dalam sudut pandang pengguna

> Sebagai pengguna Aladin yang sedang membayar belanja online, saya ingin menemukan metode pembayaran dan mengetahui apakah Virtual Account dapat digunakan, sehingga saya dapat menentukan langkah pembayaran tanpa kebingungan.

## 4. Target Pengguna dan Persona

| Elemen | Deskripsi |
|---|---|
| Target pengguna | Pengguna Aladin yang melakukan pembayaran belanja online dan membutuhkan metode VA. |
| Persona | Rani (nama samaran / persona komposit). |
| Dasar persona | Mewakili pola kebutuhan utama yang muncul dari wawancara R2 dan R3. |
| Tujuan utama | Menyelesaikan pembayaran dengan metode yang dibutuhkan secara mudah, jelas, dan praktis. |
| Kebutuhan utama | Menemukan metode pembayaran, mengetahui ketersediaan VA, dan memahami alternatif saat VA tidak tersedia. |
| Catatan | Rani bukan nama asli responden dan bukan gambaran semua pengguna Aladin. |

## 5. Tujuan Produk dan Keberhasilan

### 5.1 Tujuan produk

1. Membantu pengguna menemukan pilihan metode pembayaran yang relevan.
2. Menampilkan informasi status VA secara jelas dalam skenario prototype.
3. Memberi penjelasan dan pilihan langkah berikutnya ketika VA tidak tersedia.
4. Menyajikan urutan layar dan tindakan yang sederhana serta konsisten.

### 5.2 Indikator keberhasilan prototype

| Indikator | Kriteria yang dapat diamati saat demo/evaluasi |
|---|---|
| Kemudahan menemukan VA | Pengguna dapat menemukan opsi Virtual Account dari halaman Bayar & Beli. |
| Kejelasan status | Pengguna dapat membedakan skenario VA tersedia dan VA tidak tersedia. |
| Kejelasan arahan | Pada skenario VA tidak tersedia, pengguna dapat menemukan pilihan metode alternatif. |
| Kemudahan navigasi | Tombol utama dan tombol kembali mengarahkan pengguna ke layar yang sesuai. |
| Kejelasan simulasi | Pengguna memahami bahwa data dan konfirmasi pembayaran hanya simulasi. |

Indikator di atas merupakan kriteria evaluasi prototype, bukan hasil pengujian pengguna yang sudah dilakukan.

## 6. Kebutuhan Pengguna dan UX Requirements

Tabel berikut mempertahankan kebutuhan dan prioritas yang dirumuskan pada Worksheet 8.

| ID | Kebutuhan / UX Requirement | Prioritas | Alasan | Penerapan pada prototype |
|---|---|---|---|---|
| UX-01 | Pengguna membutuhkan informasi yang jelas mengenai metode pembayaran yang tersedia agar dapat menentukan metode yang sesuai. | P1 — Tinggi | Membantu pengguna memahami pilihan pembayaran. | Pilihan VA, e-wallet, dan transfer ditampilkan pada layar Bayar & Beli. |
| UX-02 | Pengguna membutuhkan kepastian mengenai ketersediaan VA agar mengetahui apakah pembayaran dapat dilakukan melalui Aladin. | P1 — Tinggi | Berkaitan langsung dengan kebutuhan pencarian VA dari R2 dan R3. | Layar Virtual Account menampilkan skenario VA tersedia. |
| UX-03 | Pengguna membutuhkan informasi dan alternatif yang jelas ketika VA tidak tersedia agar mengetahui langkah berikutnya. | P1 — Tinggi | Berkaitan dengan temuan bahwa R2 dan R3 akan beralih ke aplikasi lain ketika VA tidak tersedia. | Layar VA Tidak Tersedia menjelaskan kondisi dan mengarahkan ke metode alternatif. |
| UX-04 | Pengguna membutuhkan alur pembayaran yang sederhana dan mudah dipahami. | P2 — Sedang | Mendukung kelancaran pengalaman setelah metode ditemukan. | Urutan layar dibuat ringkas dengan tombol tindakan utama dan tombol kembali. |
| UX-05 | Pengguna membutuhkan akses yang jelas terhadap riwayat transaksi sebelumnya. | P2 — Sedang | Kebutuhan sekunder yang muncul pada wawancara. | Tidak menjadi fokus alur prototype utama pembayaran VA. |
| UX-06 | Pengguna membutuhkan penjelasan yang mudah dipahami mengenai batas/periode ketersediaan riwayat transaksi. | P3 — Rendah | Mendukung kebutuhan riwayat, tetapi bukan masalah utama pada skenario VA. | Tidak diimplementasikan pada prototype utama ini. |

## 7. Ruang Lingkup Produk

| Termasuk dalam proyek (In Scope) | Tidak termasuk dalam proyek (Out of Scope) |
|---|---|
| Halaman Bayar & Beli. | Backend dan database transaksi. |
| Pilihan layanan pembayaran, termasuk Virtual Account. | Integrasi ke core banking atau sistem internal Aladin. |
| Skenario status VA tersedia. | Pembuatan nomor VA sungguhan. |
| Layar ringkasan/konfirmasi pembayaran konseptual. | Pengiriman pembayaran atau pemindahan uang. |
| Skenario VA tidak tersedia. | Integrasi payment gateway, marketplace, QRIS, bank, dan e-wallet. |
| Informasi dan pilihan alternatif pembayaran. | Autentikasi nyata, OTP, PIN, atau penyimpanan kredensial. |
| Navigasi antar-layar untuk demonstrasi. | Klaim status ketersediaan metode secara real-time. |

## 8. Spesifikasi Layar

| No. | Nama layar | Tujuan pengguna | Informasi/komponen utama | Aksi utama |
|---|---|---|---|---|
| 1 | Bayar & Beli | Menemukan metode pembayaran yang dibutuhkan. | Kategori layanan, Virtual Account, E-Wallet, Transfer Bank. | Memilih/mengecek Virtual Account atau mencoba skenario VA tidak tersedia. |
| 2 | Virtual Account | Memahami status VA pada skenario tersedia. | Informasi transaksi contoh, status VA tersedia, nomor VA simulasi, nominal simulasi. | Melanjutkan ke konfirmasi atau kembali. |
| 3 | Konfirmasi Pembayaran | Memeriksa informasi pembayaran sebelum konfirmasi simulasi. | Merchant contoh, nomor VA simulasi, nominal, status simulasi. | Menekan konfirmasi simulasi atau kembali. |
| 4 | VA Tidak Tersedia | Memahami bahwa metode VA tidak dapat digunakan pada skenario tersebut. | Pesan status, penjelasan singkat, pilihan metode lain. | Membuka pilihan metode alternatif atau kembali. |
| 5 | Metode Pembayaran | Mempertimbangkan langkah alternatif. | QRIS, Transfer Bank, E-Wallet, informasi ketersediaan layanan. | Memilih metode untuk simulasi atau kembali. |

## 9. Alur Pengguna

### 9.1 Skenario A — VA tersedia

| Langkah | Layar | Tindakan pengguna | Respons prototype |
|---|---|---|---|
| 1 | Bayar & Beli | Memilih Virtual Account atau tombol skenario VA tersedia. | Membuka layar Virtual Account. |
| 2 | Virtual Account | Membaca status dan data VA contoh. | Menampilkan status VA tersedia dan data simulasi. |
| 3 | Konfirmasi Pembayaran | Memeriksa ringkasan dan menekan tombol konfirmasi simulasi. | Menampilkan umpan balik bahwa konfirmasi hanya simulasi. |

### 9.2 Skenario B — VA tidak tersedia

| Langkah | Layar | Tindakan pengguna | Respons prototype |
|---|---|---|---|
| 1 | Bayar & Beli | Memilih tombol simulasi VA tidak tersedia. | Membuka layar informasi VA tidak tersedia. |
| 2 | VA Tidak Tersedia | Membaca pesan status. | Menjelaskan bahwa VA tidak tersedia pada skenario ini. |
| 3 | Metode Pembayaran | Menekan pilihan metode lain dan memilih alternatif. | Menampilkan QRIS, Transfer Bank, dan E-Wallet sebagai pilihan konseptual. |
| 4 | Metode Pembayaran | Menekan lanjutkan. | Menampilkan umpan balik pemilihan metode sebagai simulasi, bukan transaksi nyata. |

## 10. Kebutuhan Fungsional Prototype

| Kode | Kebutuhan fungsional | Kriteria implementasi |
|---|---|---|
| FR-01 | Menampilkan halaman Bayar & Beli. | Halaman menampilkan kategori layanan dan pilihan metode pembayaran utama. |
| FR-02 | Membuka skenario VA tersedia. | Aksi dari halaman awal membuka layar Virtual Account. |
| FR-03 | Menampilkan status dan data VA simulasi. | Status, nomor VA, dan nominal diberi konteks data contoh/simulasi. |
| FR-04 | Membuka layar konfirmasi. | Tombol lanjut dari layar VA tersedia membuka layar konfirmasi. |
| FR-05 | Menampilkan umpan balik konfirmasi simulasi. | Prototype menampilkan pesan simulasi dan tidak mengirim transaksi. |
| FR-06 | Membuka skenario VA tidak tersedia. | Tombol demo di halaman awal membuka layar VA Tidak Tersedia. |
| FR-07 | Menampilkan alternatif pembayaran. | Layar alternatif menampilkan QRIS, Transfer Bank, dan E-Wallet sebagai contoh pilihan. |
| FR-08 | Memilih metode alternatif. | Pengguna dapat memilih salah satu metode dan melihat metode terpilih. |
| FR-09 | Menyediakan navigasi kembali. | Tombol kembali membawa pengguna ke layar sebelumnya atau halaman awal sesuai alur. |

## 11. Kebutuhan Nonfungsional dan Prinsip Desain

| Aspek | Ketentuan |
|---|---|
| Responsif | Tata letak dapat digunakan pada layar ponsel dan ukuran desktop. |
| Bahasa | Menggunakan Bahasa Indonesia yang jelas dan ringkas. |
| Konsistensi | Istilah, tombol, warna, dan urutan navigasi digunakan secara konsisten. |
| Aksesibilitas dasar | Teks mudah dibaca, kontras cukup, tombol memiliki label yang jelas, dan elemen interaktif memiliki focus state. |
| Keamanan data | Tidak meminta atau menyimpan PIN, OTP, kata sandi, token, atau data rekening nyata. |
| Ketergantungan teknis | Prototype dapat berjalan di browser tanpa backend dan tanpa dependency eksternal wajib. |
| Kejelasan simulasi | Data merchant, nomor VA, nominal, dan konfirmasi ditandai sebagai data simulasi. |

## 12. Arah Visual

Dalam menyusun tampilan, rancangan mengacu pada beberapa elemen yang terlihat pada aplikasi Aladin, seperti warna biru, kartu putih dengan sudut membulat, ikon layanan, dan navigasi bawah Beranda–QRIS–Keuangan. Elemen tersebut disesuaikan dengan kebutuhan pengguna dan alur pembayaran VA yang menjadi fokus rancangan.

| Elemen visual | Penerapan pada rancangan |
|---|---|
| Header | Warna biru tua dengan identitas teks Aladin dan judul halaman. |
| Warna aksen | Biru untuk tombol utama, ikon, dan penanda pilihan. |
| Kartu informasi | Kartu putih dengan sudut membulat untuk mengelompokkan informasi. |
| Ikon layanan | Ikon sederhana untuk membantu membedakan jenis metode pembayaran. |
| Navigasi bawah | Beranda, QRIS, dan Keuangan sebagai elemen navigasi konseptual. |
| Pesan status | Warna/status dibedakan agar kondisi tersedia dan tidak tersedia mudah dikenali. |

## 13. Acceptance Criteria

| ID | Kriteria penerimaan | Cara memeriksa |
|---|---|---|
| AC-01 | Pengguna dapat menemukan opsi Virtual Account dari halaman Bayar & Beli. | Jalankan prototype dan buka pilihan VA. |
| AC-02 | Pengguna dapat mengenali status VA tersedia. | Periksa layar Virtual Account. |
| AC-03 | Pengguna dapat melanjutkan dari VA tersedia ke layar konfirmasi. | Tekan tombol Lanjutkan Pembayaran. |
| AC-04 | Pengguna memperoleh informasi yang jelas ketika VA tidak tersedia. | Jalankan tombol skenario VA tidak tersedia. |
| AC-05 | Pengguna dapat menemukan alternatif pembayaran setelah membaca pesan VA tidak tersedia. | Tekan tombol Pilih Metode Lain. |
| AC-06 | Pengguna dapat memilih metode alternatif dan melihat umpan balik simulasi. | Pilih QRIS, Transfer Bank, atau E-Wallet lalu lanjutkan. |
| AC-07 | Navigasi kembali dapat digunakan. | Uji tombol kembali pada beberapa layar. |
| AC-08 | Prototype tidak memberi kesan bahwa pembayaran sungguhan telah dilakukan. | Periksa label simulasi dan pesan umpan balik. |

## 14. Risiko, Asumsi, dan Batasan

| Jenis | Penjelasan |
|---|---|
| Batas data | Temuan berasal dari tiga responden; pola VA terutama didukung R2 dan R3. |
| Konsistensi data | Jawaban R1 pada pengalaman membutuhkan VA tidak konsisten dan tidak digunakan sebagai bukti utama. |
| Persona | Rani adalah nama samaran/persona komposit, bukan identitas responden. |
| Asumsi rancangan | Tampilan status VA tersedia/tidak tersedia digunakan untuk menguji kebutuhan informasi dan alur, bukan untuk menyatakan kondisi layanan Aladin yang sebenarnya. |
| Data contoh | Nama merchant, nomor VA, dan nominal adalah konten simulasi. |
| Batas teknis | Prototype tidak terhubung ke sistem Aladin atau layanan pembayaran nyata. |

## 15. Rencana Pengembangan Berikutnya

1. Meminta masukan pengguna/teman uji terhadap kejelasan label dan alur.
2. Memperbaiki wireframe dan prototype berdasarkan hasil masukan.
3. Mengembangkan visual dan interaksi melalui Vibe Coding dengan PRD ini sebagai acuan.
4. Memperbarui Change Log setiap perubahan yang dilakukan.
5. Jika kelak dikembangkan menjadi produk nyata, kebutuhan integrasi dan keamanan harus divalidasi terpisah dengan pihak yang berwenang.

---
**Dokumen ini merupakan PRD untuk prototype konseptual tugas Rekayasa Interaksi (UX), bukan spesifikasi implementasi sistem perbankan produksi.**


## 16. Implementasi Project

Project diwujudkan sebagai aplikasi frontend berbasis React dan Vite. Bagian ini menjelaskan hasil implementasi teknis agar source project dapat dikenali dan dikembangkan lebih lanjut.

| Komponen | Implementasi |
|---|---|
| Frontend framework | React |
| Build tool | Vite |
| Bahasa | JavaScript (JSX) |
| Styling | CSS responsif |
| Navigasi layar | State React pada aplikasi satu halaman (single-page interface) |
| Penyimpanan | Tidak menggunakan database; state hanya untuk interaksi selama sesi prototype |
| Deployment | GitHub Actions dan GitHub Pages |
| Backend/API | Tidak ada pada versi ini |

### 16.1 Struktur Project

| Path | Fungsi |
|---|---|
| `index.html` | Entry point aplikasi Vite. |
| `src/main.jsx` | Mount React ke elemen root. |
| `src/App.jsx` | Komponen aplikasi, layar, navigasi, state, dan interaksi. |
| `src/styles.css` | Gaya visual, layout responsif, dan komponen UI. |
| `vite.config.js` | Konfigurasi build dan base path GitHub Pages. |
| `package.json` | Dependency dan perintah development/build. |
| `.github/workflows/pages.yml` | Build aplikasi dan deployment ke GitHub Pages. |
| `wireframe/` | Dokumentasi lima rancangan layar. |

### 16.2 Cara Menjalankan Project

| Perintah | Fungsi |
|---|---|
| `npm install` | Menginstal dependency project. |
| `npm run dev` | Menjalankan development server lokal Vite. |
| `npm run build` | Membuat hasil build production ke folder `dist/`. |
| `npm run preview` | Meninjau hasil build production secara lokal. |

### 16.3 Status Implementasi

| Area | Status |
|---|---|
| Frontend React | Diimplementasikan. |
| Layar utama dan lima layar aktivitas | Diimplementasikan sebagai antarmuka frontend. |
| Navigasi dan pilihan skenario | Diimplementasikan dengan state lokal. |
| Data VA dan nominal | Data simulasi. |
| Backend dan integrasi layanan bank | Belum termasuk dalam ruang lingkup. |
| Pengujian pengguna formal | Belum dilaksanakan; perlu dilakukan pada tahap evaluasi berikutnya. |

