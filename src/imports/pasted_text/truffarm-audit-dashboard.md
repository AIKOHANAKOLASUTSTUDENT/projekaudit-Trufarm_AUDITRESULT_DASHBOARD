# PROMPT FIGMA MAKE — TRUFARM INFORMATION SYSTEM AUDIT DASHBOARD
## (Salin seluruh isi prompt ini ke Figma Make)

---

## INSTRUKSI UTAMA

Buat sebuah **halaman dashboard audit sistem informasi lengkap** untuk TRUFARM menggunakan Figma Make. Dashboard ini harus interaktif, profesional, dan mencakup semua bagian yang disebutkan di bawah ini secara berurutan dari atas ke bawah. Semua data sudah disertakan langsung dalam prompt ini — tidak perlu menghubungkan dokumen eksternal.

---

## WARNA & BRANDING TRUFARM

**Color palette TRUFARM (wajib digunakan):**
- **Primary Green:** `#1DB954` / `#22C55E` (hijau Trufarm — untuk header utama, aksen, badge aktif)
- **Dark Green:** `#15803D` (hover, border, sub-header)
- **Charcoal / Dark Text:** `#1A1A2E` (teks heading utama, sidebar gelap)
- **White:** `#FFFFFF` (background card, teks di atas gelap)
- **Light Gray Background:** `#F8FAFC` (background halaman)
- **Card Border:** `#E2E8F0` (border card halaman)
- **Critical Red:** `#EF4444` (risk level critical)
- **High Amber:** `#F59E0B` (risk level high)
- **Moderate Yellow:** `#EAB308` (risk level moderate)
- **Low Green:** `#22C55E` (risk level low)
- **Info Blue:** `#3B82F6` (informasi, sub-kategori NIST)

**Font:** Inter atau Poppins
**Border radius umum:** 12px untuk card, 8px untuk badge/pill
**Shadow card:** `0 2px 8px rgba(0,0,0,0.07)`

---

## BAGIAN 1 — HEADER UTAMA (STICKY TOP)

Buat header full-width dengan background warna `#1A1A2E` (charcoal gelap).

### Kiri header:
- **Placeholder logo Trufarm** — kotak dengan teks "[ Logo Trufarm ]" ukuran 120×40px, background putih, border radius 8px. (pengguna akan menautkan logo sendiri nanti)
- Di bawah logo: teks kecil `"Information System Audit Dashboard"`

### Tengah header:
- **Judul besar:** `"TRUFARM — Laporan Audit Sistem Informasi"`
- **Sub-judul:** `"Berbasis NIST Cybersecurity Framework 2.0"`
- **Badge status:** pill hijau `"Audit In Progress"` atau `"Audit Selesai"` — buat sebagai toggle yang bisa diklik

### Kanan header:
- **Kotak foto wawancara** — 2 thumbnail placeholder berdampingan (masing-masing 80×60px, background abu-abu, teks `"[ Foto Interview 1 ]"` dan `"[ Foto Interview 2 ]"`). Di bawah masing-masing foto, tampilkan keterangan:
  - Foto 1: `"Interview Store Manager — 23 Februari 2026"`
  - Foto 2: `"Interview IT Management — 10 Maret 2026"`
- Di bawah kedua foto: teks kecil `"Lokasi: TruFarm Airmadidi, Sulawesi Utara"`

---

## BAGIAN 2 — PROFIL PERUSAHAAN

### 2A. Kartu Info Perusahaan (grid 4 kolom metric cards)

| Label | Value |
|---|---|
| Nama Perusahaan | PT TruFarm Indonesia |
| Jenis Usaha | Retail Supermarket Modern Lokal |
| Lokasi HQ | Jakarta |
| Tanggal Audit | 23 Februari 2026 & 10 Maret 2026 |
| Jumlah Cabang | 4 Cabang |
| Total Karyawan | 60+ Karyawan |
| Sistem Utama | Microsoft Dynamics NAV (Navision) + Talenta HRD |
| Tim Auditor | 5 Mahasiswa Universitas Klabat — ISA-A |

### 2B. Deskripsi Perusahaan (text card)

> "Trufarm adalah perusahaan bisnis retail modern asal lokal yang berkembang di Sulawesi Utara. Bergerak di bidang retail supermarket yang menjual produk makanan, frozen food, bahan makanan segar, serta kebutuhan rumah tangga. Trufarm memiliki 4 cabang yang berlokasi di Sangihe, Boulevard, Grand Kawanua, dan Airmadidi, dengan kantor pusat (HQ) di Jakarta. Saat ini Trufarm memiliki lebih dari 60 karyawan yang beroperasi di seluruh cabang."

**Kategori Produk (4 chip/badge hijau):**
`Makanan & Grocery` | `Frozen Food` | `Bahan Makanan Segar` | `Kebutuhan Rumah Tangga`

**Infrastruktur IT (info bar bawah):**
`CCTV Tersedia` | `1 Tim IT per Toko` | `Menggunakan Kabel LAN` | `UPS Tersedia` | `Sistem Terintegrasi (kecuali timbangan manual)`

### 2C. Struktur Hierarki Organisasi Toko (diagram pohon/tree)

Buat diagram hierarki vertikal ke bawah dengan warna Trufarm:

```
                    [ AREA HEAD ]
                         |
              [ STORE MANAGER / KEPALA TOKO ]
                         |
                [ ASISTEN MANAGER ]
                         |
                  [ SUPERVISOR ]
                         |
                  [ ASSOCIATED ]

ASSOCIATED dibagi menjadi 7 posisi (grid horizontal di bawah):
[ KASIR ] [ FRESH ] [ GROCERY ] [ ACCOUNTING ] [ IT ] [ SATPAM ] [ LOSS PREVENTION ]
```

Warnai kotak:
- Area Head: background `#1A1A2E`, teks putih
- Store Manager: background `#15803D`, teks putih
- Asisten Manager: background `#1DB954`, teks putih
- Supervisor: background `#86EFAC` (hijau muda), teks gelap
- Associated: background putih, border hijau
- 7 posisi staff: background `#F0FDF4`, teks `#15803D`, border hijau tipis

### 2D. Visi & Misi (2 card berdampingan)

**VISI:**
> "Menjadi perusahaan retail modern lokal terkemuka di Sulawesi Utara yang memberikan kualitas produk terbaik dengan harga terjangkau, serta mendukung kemajuan masyarakat dan perekonomian lokal."

**MISI:**
1. Menyediakan produk-produk berkualitas yang memenuhi kebutuhan masyarakat sehari-hari
2. Mengembangkan sistem operasional yang efisien dan berbasis teknologi informasi
3. Memberikan pelayanan terbaik kepada pelanggan di seluruh cabang
4. Membangun ekosistem bisnis yang berkelanjutan dan berdampak positif bagi komunitas lokal
5. Mengelola sumber daya manusia secara profesional untuk mendukung pertumbuhan perusahaan

---

## BAGIAN 3 — SCOPE & OBJECTIVE AUDIT

### 3A. Ruang Lingkup Audit (6 card grid 3 kolom)

Buat 6 kartu scope dengan ikon dan deskripsi:

**Card 1 — Sistem ERP Navision**
- Ikon: database/server
- Deskripsi: "Sistem paling penting untuk mengelola data operasional termasuk data barang, promo, inventaris, dan proses pemusnahan barang (shrinkage/stringkits). Dikelola dan diupdate dari pusat Jakarta."

**Card 2 — Sistem POS (Point of Sale)**
- Ikon: cash register / kasir
- Deskripsi: "Sistem kasir yang digunakan untuk transaksi penjualan setiap hari. Sistem paling kritis — operasional toko tidak dapat berjalan jika sistem POS mati. Sering terganggu akibat listrik tidak stabil."

**Card 3 — Manajemen Keamanan Sistem**
- Ikon: shield / kunci
- Deskripsi: "Meninjau kebijakan akses pengguna, termasuk penggunaan password yang saat ini hanya 4 digit dan tidak pernah diganti secara berkala. Tidak ada kebijakan keamanan tertulis."

**Card 4 — Infrastruktur & Stabilitas Teknis**
- Ikon: server rack / lightning
- Deskripsi: "Penilaian stabilitas server dan listrik yang sering menyebabkan gangguan sistem, prosedur pemeliharaan (maintenance), serta manajemen update sistem yang dilakukan tiba-tiba dari pusat tanpa jadwal."

**Card 5 — Tata Kelola & Dokumentasi**
- Ikon: dokumen / clipboard
- Deskripsi: "Mengevaluasi ketergantungan operasional pada instruksi lisan karena belum adanya SOP tertulis. Semua kebijakan disampaikan secara verbal oleh kepala toko atau tim IT."

**Card 6 — Prosedur Backup Data**
- Ikon: cloud / harddisk
- Deskripsi: "Meninjau efektivitas proses pencadangan data yang saat ini dilakukan manual 1 bulan sekali oleh IT shift pagi. Data disimpan di harddisk fisik di ruangan toko tanpa off-site backup."

### 3B. Tujuan (Objective) Audit (4 card grid 2 kolom)

**Objective 1 — Identifikasi Risiko & Kelemahan**
> "Menemukan celah keamanan atau potensi kegagalan pada sistem informasi yang digunakan saat ini di TruFarm Airmadidi"

**Objective 2 — Meningkatkan Keandalan & Stabilitas**
> "Memastikan operasional toko tetap berjalan lancar tanpa terganggu oleh kendala teknis seperti sistem yang lambat, listrik tidak stabil, atau pembaruan mendadak dari pusat"

**Objective 3 — Penyusunan Standardisasi Operasional**
> "Menyediakan SOP sistem informasi yang jelas dan tertulis untuk mengurangi ketergantungan pada intervensi manusia secara lisan dan meminimalkan human error"

**Objective 4 — Evaluasi Pengendalian Internal**
> "Menilai kecukupan dan efektivitas pengendalian pada proses pengelolaan data usaha, mulai dari input promo, manajemen inventaris, hingga laporan penjualan ke manajemen pusat"

### 3C. Rumusan Masalah (numbered list card)

1. Bagaimana kondisi keamanan sistem informasi di TruFarm Airmadidi saat ini?
2. Bagaimana penerapan NIST CSF dalam menganalisis keamanan sistem di TruFarm Airmadidi?
3. Apa saja kesenjangan (gap) dan rekomendasi peningkatan keamanan sistem?

---

## BAGIAN 4 — RISK REGISTER LENGKAP (TABEL INTERAKTIF)

### Header tabel:
Judul: "Risk Register — Identifikasi Risiko Sistem Informasi TruFarm"

### Tombol aksi di kanan atas tabel:
- **Tombol "+ Tambah Risiko"** (hijau, prominent) — saat diklik, muncul form inline/modal dengan field:
  - Risk ID (auto-generate: R-11, R-12, dst)
  - Aset
  - Risk Event / Ancaman (Threat)
  - Kerentanan (Vulnerability)
  - Dampak (Impact): dropdown (Sangat Rendah / Rendah / Sedang / Tinggi / Sangat Tinggi)
  - Kemungkinan (Likelihood): dropdown (Low / Medium / High)
  - Risk Level: dropdown (Low / Moderate / High / Critical)
  - Rencana Mitigasi
  - Tombol [Simpan] dan [Batal]

### Kolom tabel:
`Risk ID` | `Aset` | `Ancaman (Threat)` | `Kerentanan (Vulnerability)` | `Dampak` | `Likelihood` | `Risk Level` | `Usulan Kontrol / Mitigasi`

### Data 10 baris risk register (dari dokumen audit):

**R-01**
- Aset: Data Transaksi
- Ancaman: Kesalahan input data
- Kerentanan: Tidak ada SOP tertulis dan pelatihan karyawan terbatas (hanya 3 hari untuk kasir)
- Dampak: Data tidak akurat — kesalahan data promo pernah terjadi dan berjalan terus tanpa terdeteksi
- Likelihood: Medium
- Risk Level: **HIGH**
- Mitigasi: Buat SOP input data tertulis; tingkatkan durasi dan materi pelatihan karyawan; tambahkan validasi input di sistem

**R-02**
- Aset: Sistem POS/Kasir
- Ancaman: Gangguan sistem operasional
- Kerentanan: Monitoring masih manual melalui log; tidak ada sistem alert otomatis; listrik tidak stabil
- Dampak: Transaksi terganggu — sistem POS adalah sistem paling kritis dan operasional berhenti total jika mati
- Likelihood: High
- Risk Level: **HIGH**
- Mitigasi: Implementasi monitoring otomatis dan alert sistem; optimalkan UPS; buat prosedur shutdown darurat tertulis

**R-03**
- Aset: Sistem Navision (ERP)
- Ancaman: Kegagalan sistem akibat update mendadak
- Kerentanan: Update sistem dari pusat dilakukan tiba-tiba tanpa jadwal; tidak ada koordinasi sebelumnya
- Dampak: Operasional terganggu — sistem Navision tidak dapat diakses selama proses update berlangsung
- Likelihood: Medium
- Risk Level: **HIGH**
- Mitigasi: Jadwalkan update sistem secara terstruktur di luar jam operasional; koordinasikan dengan pusat Jakarta

**R-04**
- Aset: Jaringan LAN
- Ancaman: Gangguan jaringan
- Kerentanan: Tidak ada sistem monitoring jaringan; hanya menggunakan kabel LAN tanpa backup koneksi
- Dampak: Sistem tidak dapat diakses; seluruh operasional berbasis sistem terhenti
- Likelihood: Medium
- Risk Level: **HIGH**
- Mitigasi: Tambahkan monitoring jaringan real-time; sediakan backup koneksi internet (misalnya koneksi mobile/LTE sebagai failover)

**R-05**
- Aset: Infrastruktur Listrik
- Ancaman: Gangguan listrik
- Kerentanan: Ketergantungan pada listrik PLN; server harus dimatikan manual sebelum UPS habis; bergantung pada kehadiran IT shift pagi
- Dampak: Sistem mati; server berisiko rusak jika tidak dimatikan tepat waktu sebelum UPS habis
- Likelihood: Medium
- Risk Level: **MODERATE**
- Mitigasi: Optimalkan prosedur shutdown server otomatis sebelum UPS habis; tambah kapasitas UPS; kurangi ketergantungan pada kehadiran IT pagi

**R-06**
- Aset: Data Backup
- Ancaman: Kehilangan data
- Kerentanan: Backup tidak konsisten (bergantung shift IT); hanya 1x per bulan; disimpan di harddisk fisik di ruangan toko; tidak ada off-site backup
- Dampak: Kehilangan data penting jika terjadi pencurian, kebakaran, atau kerusakan fisik di toko
- Likelihood: Medium
- Risk Level: **HIGH**
- Mitigasi: Jadwalkan backup harian secara otomatis; implementasi cloud backup; simpan salinan off-site; uji restore backup secara berkala minimal 1x/kuartal

**R-07**
- Aset: Sistem Akses / Akun Pengguna
- Ancaman: Akses tidak sah ke sistem
- Kerentanan: Password hanya 4 digit bebas untuk crew/kasir; tidak pernah diganti; tidak ada audit login; tidak ada informasi kapan terakhir login
- Dampak: Penyalahgunaan akun; akses tidak sah ke data transaksi dan inventaris; potensi credential stuffing sangat tinggi
- Likelihood: High
- Risk Level: **CRITICAL**
- Mitigasi: Wajibkan password minimal 8 karakter alfanumerik; rotasi password minimal tiap 90 hari; aktifkan audit log login; nonaktifkan akun secara otomatis setelah tidak aktif

**R-08**
- Aset: SDM (Sumber Daya Manusia IT)
- Ancaman: Human error / Single point of failure
- Kerentanan: Tim IT hanya 1 orang per toko; pelatihan keamanan tidak menyeluruh (hanya manager yang dilatih IT, kasir hanya 3 hari); tidak ada buku panduan tertulis
- Dampak: Jika IT berhalangan, operasional teknis toko dapat lumpuh total; kesalahan operasional meningkat
- Likelihood: Medium
- Risk Level: **HIGH**
- Mitigasi: Buat buku panduan (runbook) tertulis untuk troubleshoot dasar; latih asisten atau supervisor sebagai backup IT; koordinasi antar IT toko tetap dipertahankan

**R-09**
- Aset: Server Lokal
- Ancaman: Kerusakan server
- Kerentanan: Tidak ada Disaster Recovery Plan (DRP) formal; pernah terjadi masalah server di Manado
- Dampak: Sistem tidak dapat digunakan; data tidak dapat diakses; seluruh operasional berhenti
- Likelihood: Low
- Risk Level: **MODERATE**
- Mitigasi: Susun Disaster Recovery Plan (DRP) formal; lakukan maintenance server berkala; uji pemulihan sistem secara periodik

**R-10**
- Aset: Sistem Informasi Keseluruhan
- Ancaman: Tidak ada audit sistem
- Kerentanan: Tidak ada risk assessment formal; tidak ada risk register; tidak ada evaluasi berkala
- Dampak: Risiko tidak teridentifikasi dan tidak tertangani; potensi gangguan besar tidak terdeteksi sejak dini
- Likelihood: Medium
- Risk Level: **HIGH**
- Mitigasi: Lakukan audit sistem informasi secara berkala (minimal 1x/tahun); bentuk risk register dan evaluasi berkala; tunjuk penanggung jawab manajemen risiko IT

---

## BAGIAN 5 — RISK MATRIX (HEATMAP VISUAL)

Buat matriks risiko 5×5 (Likelihood vs Impact) dalam bentuk heatmap berwarna:

**Judul:** "Risk Matrix — TruFarm Airmadidi"

**Sumbu X (horizontal) — Impact (Dampak):**
`Very Low` | `Low` | `Medium` | `High` | `Very High`

**Sumbu Y (vertikal) — Likelihood (Kemungkinan):**
`High` | `Medium` | `Low` (dari atas ke bawah)

**Warna sel:**
- High Likelihood + High/Very High Impact = Merah (Critical)
- High Likelihood + Medium Impact = Oranye (High)
- Medium Likelihood + High/Very High Impact = Oranye (High)
- Medium Likelihood + Medium Impact = Kuning (Moderate)
- Low + Low = Hijau (Low)

**Titik risiko yang ditempatkan di matriks:**

| Kode | Nama Risiko | Likelihood | Impact |
|---|---|---|---|
| R-07 | Akses tidak sah (password lemah) | High | High → Critical |
| R-02 | Gangguan POS/kasir | High | High → Critical |
| R-01 | Kesalahan input data | Medium | High |
| R-03 | Kegagalan akibat update mendadak | Medium | High |
| R-04 | Gangguan jaringan | Medium | High |
| R-06 | Kehilangan data backup | Medium | High |
| R-08 | Human error / SDM IT terbatas | Medium | High |
| R-10 | Tidak ada audit sistem | Medium | Medium |
| R-05 | Gangguan listrik | Medium | Medium → Moderate |
| R-09 | Kerusakan server | Low | High → Moderate |

Di setiap titik, tampilkan kode risiko (R-01, R-02, dst) sebagai label kecil.

**Legenda:**
- Merah = Critical
- Oranye = High
- Kuning = Moderate
- Hijau = Low

---

## BAGIAN 6 — NIST CSF 2.0 FRAMEWORK + HASIL AUDIT

### Header section:
Judul: "Analisis NIST Cybersecurity Framework 2.0 — TruFarm Airmadidi"
Sub: "Berdasarkan hasil wawancara 23 Februari 2026 & 10 Maret 2026 dengan Store Manager & IT Management"

### Kartu skor ringkasan (6 fungsi NIST — horizontal bar):

| Fungsi | Nama | Skor | Level | Bar Color |
|---|---|---|---|---|
| GV | Govern | 1.0/5 | Initial | Merah |
| ID | Identify | 2.0/5 | Developing | Oranye |
| PR | Protect | 1.5/5 | Initial-Developing | Merah-Oranye |
| DE | Detect | 1.5/5 | Developing | Oranye |
| RS | Respond | 1.5/5 | Developing | Oranye |
| RC | Recover | 1.0/5 | Initial | Merah |

**Skor Keseluruhan:** 1.4/5 — Tingkat Maturity: **INITIAL**

**Keterangan tingkat maturity:**
- 1 = Initial (Ad hoc, tidak terdokumentasi, bergantung individu)
- 2 = Developing (Sebagian diterapkan tapi belum konsisten)
- 3 = Defined (Proses terdokumentasi dan diterapkan secara konsisten)
- 4 = Managed (Diukur dan dimonitor secara aktif)
- 5 = Optimized (Proses continuous improvement berjalan penuh)

---

### Detail per Fungsi NIST (accordion / expandable section):

---

#### FUNGSI 1: GOVERN (GV) — Skor 1.0/5 — CRITICAL

**GV.OC-1 — Organizational Context**
- Status: ✅ MEMADAI
- Pertanyaan: "Sistem informasi apa saja yang digunakan dalam operasional? Untuk proses apa saja?"
- Jawaban interview: "Sistem paling penting adalah POS/kasir dan Navision. Navision digunakan untuk mengelola transaksi penjualan, data barang, promo, inventaris, dan proses pemusnahan barang (shrinkage/stringkits). Semua sistem dipegang oleh kepala toko dan digunakan untuk operasional harian serta pelaporan ke manajemen pusat."
- Temuan: Sistem informasi digunakan secara aktif untuk operasional utama. Navision terintegrasi antar cabang — bisa mengecek stok dari semua toko secara real-time.
- Gap: Dokumentasi konteks organisasi belum formal.

**GV.RM-1 — Risk Management Strategy**
- Status: ⚠️ PERLU PERBAIKAN
- Pertanyaan: "Apakah TRUFARM memiliki strategi khusus untuk mengelola risiko IT? Apakah ada evaluasi rutin?"
- Jawaban interview: "Pengelolaan risiko dilakukan secara tidak formal. Hanya ada UPS untuk mengatasi listrik tidak stabil, dan backup data. Belum pernah dilakukan audit sistem informasi secara formal. Tidak ada strategi tertulis."
- Temuan: Manajemen risiko bersifat reaktif — hanya menangani masalah ketika sudah terjadi.
- Gap: Tidak ada strategi manajemen risiko terdokumentasi dan evaluasi berkala.

**GV.RR-1 — Roles, Responsibilities & Authorities**
- Status: ⚠️ PERLU PERBAIKAN
- Pertanyaan: "Siapa yang bertanggung jawab atas sistem Navision? Siapa yang mengelola IT? Apakah pembagian tugas sudah terdokumentasi?"
- Jawaban interview: "Tim IT hanya 1 orang per toko. IT Airmadidi bertanggung jawab untuk toko Airmadidi; untuk masalah besar, pusat Jakarta yang menangani. Masing-masing tim IT antar toko tidak boleh libur bersamaan — ada koordinasi saling backup untuk input promo. Pembagian tugas hanya diketahui secara lisan."
- Temuan: Terdapat satu IT per toko dengan koordinasi antar toko, namun SDM sangat terbatas dan tidak terdokumentasi.
- Gap: Tidak ada dokumentasi formal pembagian peran dan tanggung jawab IT.

**GV.PO-1 — Policy**
- Status: ❌ BELUM ADA
- Pertanyaan: "Apakah ada kebijakan tertulis terkait keamanan sistem? Bagaimana kebijakan disosialisasikan?"
- Jawaban interview: "SOP diberitahukan secara lisan karena belum ada buku panduan tertulis. Satu-satunya SOP yang ada adalah untuk stringkits (pemusnahan barang) yang dilakukan by sistem. Tidak ada kebijakan keamanan IT tertulis apapun."
- Temuan: Seluruh kebijakan operasional dan keamanan sistem hanya disampaikan secara lisan, sangat bergantung pada ingatan dan pengalaman individu.
- Gap: Tidak ada kebijakan keamanan formal. Sangat berisiko terhadap inkonsistensi dan pergantian karyawan.

---

#### FUNGSI 2: IDENTIFY (ID) — Skor 2.0/5 — DEVELOPING

**ID.AM-1 — Asset Management**
- Status: ⚠️ PERLU PERBAIKAN
- Pertanyaan: "Apakah ada daftar aset IT? Sistem apa saja yang digunakan?"
- Jawaban interview: "Navision dapat mengecek barang dari semua toko secara real-time. Menggunakan kabel LAN untuk akses internet sistem. Timbangan masih manual dan tidak terintegrasi ke Navision. Memiliki CCTV di setiap toko. Inventaris software tidak terdokumentasi."
- Aset yang teridentifikasi: Komputer kasir (POS), server lokal, Navision, Talenta HRD, jaringan LAN, UPS, CCTV, harddisk backup.
- Gap: Inventaris hardware dan software tidak terdokumentasi secara formal. Timbangan manual belum terintegrasi.

**ID.RA-1 — Risk Assessment**
- Status: ❌ BELUM ADA
- Pertanyaan: "Apakah pernah dilakukan analisis risiko? Risiko apa yang paling sering terjadi?"
- Jawaban interview: "Belum pernah dilakukan audit sistem informasi secara menyeluruh. Gangguan yang sering terjadi: listrik tidak stabil menyebabkan POS mati, update mendadak dari pusat mengganggu operasional, gangguan jaringan, dan server bermasalah di Manado. Tidak ada proses penilaian risiko yang terstruktur."
- Gap: Tidak ada risk assessment formal, risk register, atau proses evaluasi risiko sistematis.

**ID.IM-1 — Improvement**
- Status: ⚠️ PERLU PERBAIKAN
- Pertanyaan: "Apakah ada evaluasi berkala? Bagaimana sistem diperbaiki?"
- Jawaban interview: "Perbaikan sistem dilakukan berdasarkan pengalaman operasional dan insiden yang terjadi. Jika sistem tidak diperbarui bisa terjadi lag atau lambat. Belum ada proses improvement yang terdokumentasi."
- Gap: Perbaikan bersifat ad hoc, tidak terdokumentasi, tidak ada siklus PDCA (Plan-Do-Check-Act).

---

#### FUNGSI 3: PROTECT (PR) — Skor 1.5/5 — INITIAL-DEVELOPING

**PR.AA-1 — Access Control**
- Status: ⚠️ PERLU PERBAIKAN
- Pertanyaan: "Apakah setiap karyawan memiliki akun sendiri? Apakah ada pembatasan akses? Bagaimana kebijakan password?"
- Jawaban interview: "Masing-masing crew/karyawan memiliki akun login sendiri dengan hak akses berbeda-beda sesuai peran. Ketika karyawan keluar, akun langsung dihapus. Password untuk crew/kasir: 4 angka bebas, tidak ada rotasi. Password untuk tim IT diberikan oleh manager. Tidak pernah terjadi akses dari luar perusahaan."
- Temuan: Kontrol akses per pengguna sudah ada (positif), namun keamanan password sangat lemah.
- Gap: Password 4 digit tanpa rotasi sangat rentan. Tidak ada kebijakan password kuat.

**PR.AT-1 — Awareness & Training**
- Status: ⚠️ PERLU PERBAIKAN
- Pertanyaan: "Apakah karyawan mendapat pelatihan? Apakah mencakup keamanan?"
- Jawaban interview: "Pelatihan diberikan: tim IT ±2 minggu (hanya untuk manager/IT), kasir ±3 hari. Tidak ada pelatihan keamanan siber khusus untuk semua karyawan. Pelatihan tidak dilakukan secara rutin setelah onboarding awal."
- Gap: Pelatihan belum fokus pada aspek keamanan; tidak konsisten dan tidak rutin; kasir sebagai pengguna utama sistem hanya dilatih 3 hari.

**PR.DS-1 — Data Security**
- Status: ❌ PERLU PERBAIKAN SERIUS
- Pertanyaan: "Bagaimana backup data dilakukan? Di mana disimpan?"
- Jawaban interview: "Backup dilakukan manual 1x per bulan oleh IT shift pagi. Prosedur backup: kasir tidak boleh menyala saat backup berlangsung. Data disimpan di harddisk fisik yang ada di ruangan toko. Tidak ada cloud backup. Tidak ada off-site backup. Jika ada data yang hilang diasumsikan masih ada backup, tapi belum pernah diuji."
- Gap: Backup sangat tidak konsisten (bergantung shift); frekuensi terlalu jarang; penyimpanan fisik di toko berisiko tinggi terhadap pencurian/bencana; tidak ada pengujian restore.

**PR.PS-1 — Platform Security**
- Status: ⚠️ PERLU PERBAIKAN
- Pertanyaan: "Apakah sistem diperbarui? Siapa yang maintenance?"
- Jawaban interview: "Sistem digunakan secara terpusat dan stabil. Update sistem dilakukan dari pusat Jakarta tiba-tiba tanpa jadwal. IT tim per toko bertanggung jawab maintenance lokal. Jika sistem tidak diperbarui, bisa terjadi lag/lambat. Tidak ada antivirus yang disebutkan. Tidak ada inventaris software."
- Gap: Update tidak terjadwal berpotensi mengganggu operasional; tidak ada kontrol software di level toko.

---

#### FUNGSI 4: DETECT (DE) — Skor 1.5/5 — DEVELOPING

**DE.CM-1 — Continuous Monitoring**
- Status: ⚠️ PERLU PERBAIKAN
- Pertanyaan: "Apakah ada monitoring sistem? Siapa yang memonitor?"
- Jawaban interview: "IT team dapat melihat log aktivitas kasir. CCTV tersedia di toko tapi tidak terintegrasi ke sistem IT. Tidak ada sistem monitoring otomatis. Tidak ada notifikasi/alert jika terjadi aktivitas mencurigakan atau gangguan sistem."
- Gap: Monitoring hanya manual melalui log; tidak ada sistem deteksi dini otomatis; CCTV berdiri sendiri.

**DE.AE-1 — Adverse Event Analysis**
- Status: ✅ MEMADAI (terbatas)
- Pertanyaan: "Pernahkah terjadi anomali? Bagaimana diketahui?"
- Jawaban interview: "Pernah terjadi: kesalahan input promo yang tidak terhapus dan terus berjalan di sistem. Pernah salah input di stringkits. Gangguan jaringan dan listrik juga pernah terjadi. Analisis dilakukan setelah kejadian secara manual, bukan otomatis. Tidak ada dokumentasi kejadian."
- Gap: Analisis gangguan dilakukan secara reaktif; tidak terdokumentasi; tidak ada analisis pola gangguan.

---

#### FUNGSI 5: RESPOND (RS) — Skor 1.5/5 — DEVELOPING

**RS.MA-1 — Incident Management**
- Status: ⚠️ PERLU PERBAIKAN
- Pertanyaan: "Apa yang dilakukan jika sistem error? Siapa yang bertanggung jawab?"
- Jawaban interview: "Jika ada gangguan, IT langsung menangani. IT antar toko bisa saling backup. Server tidak boleh mati sendiri — harus dimatikan manual sebelum UPS habis oleh IT shift pagi. Jika update dari pusat menyebabkan gangguan, pusat yang menangani. Tidak ada SOP tertulis untuk penanganan insiden."
- Gap: Penanganan cepat tapi tidak berdasarkan SOP tertulis; prosedur bergantung pada ingatan dan pengalaman IT.

**RS.AN-1 — Incident Analysis**
- Status: ⚠️ PERLU PERBAIKAN
- Pertanyaan: "Apakah setiap insiden dianalisis? Adakah dokumentasi?"
- Jawaban interview: "Analisis dilakukan berdasarkan pengalaman terhadap kesalahan sistem. Tidak ada dokumentasi formal dari kejadian-kejadian sebelumnya. Tidak ada Root Cause Analysis terdokumentasi."
- Gap: Tidak ada rekaman insiden; tidak ada pembelajaran sistematis dari insiden yang pernah terjadi.

**RS.CO-1 — Incident Communication**
- Status: ✅ MEMADAI
- Pertanyaan: "Bagaimana komunikasi saat terjadi gangguan?"
- Jawaban interview: "Komunikasi dilakukan antara tim IT toko dan IT pusat saat terjadi gangguan sistem. Maintenance dari IT lokal untuk masalah toko, pusat untuk masalah besar. Ada koordinasi antar IT toko untuk saling backup."
- Temuan: Komunikasi berjalan meskipun tidak formal.
- Gap: Tidak ada standar/template komunikasi insiden; tidak ada laporan resmi.

**RS.MI-1 — Incident Mitigation**
- Status: ⚠️ PERLU PERBAIKAN
- Pertanyaan: "Apa tindakan pencegahan jangka panjang setelah insiden?"
- Jawaban interview: "TRUFARM melakukan tindakan perbaikan setelah insiden seperti perbaikan data promo, update sistem stringkits, serta koordinasi antar tim IT. Tidak ada prosedur mitigasi terdokumentasi."
- Gap: Mitigasi bersifat reaktif dan tidak terdokumentasi; tidak ada langkah pencegahan sistematis.

---

#### FUNGSI 6: RECOVER (RC) — Skor 1.0/5 — CRITICAL

**RC.RP-1 — Recovery Plan Execution**
- Status: ⚠️ PERLU PERBAIKAN
- Pertanyaan: "Apakah ada rencana pemulihan? Berapa lama waktu pemulihan? Apakah backup pernah diuji?"
- Jawaban interview: "Backup data dilakukan sekitar 1 bulan sekali dan disimpan di harddisk lokal di ruangan toko. Tidak ada prosedur tetap untuk pemulihan. Backup belum pernah diuji untuk verifikasi apakah data bisa dipulihkan. Tidak ada Business Continuity Plan (BCP) atau Disaster Recovery Plan (DRP) formal."
- Temuan: Belum pernah kehilangan data secara permanen — ini karena keberuntungan, bukan karena kontrol yang baik.
- Gap: Tidak ada DRP/BCP; backup tidak konsisten dan tidak teruji; tidak ada target waktu pemulihan (RTO).

**RC.CO-1 — Recovery Communication**
- Status: ⚠️ PERLU PERBAIKAN
- Pertanyaan: "Bagaimana informasi pemulihan disampaikan? Adakah laporan pasca-insiden?"
- Jawaban interview: "Informasi pemulihan disampaikan secara internal antar tim IT. Tidak ada laporan formal setelah sistem kembali normal. Tidak ada evaluasi pasca-insiden. Pemulihan sangat bergantung pada kehadiran IT shift pagi."
- Gap: Tidak ada prosedur komunikasi pemulihan standar; tidak ada post-incident review; ketergantungan penuh pada jadwal shift IT.

---

### Gap Analysis Summary Table (tabel ringkasan 3 kolom)

Buat tabel dengan kolom: `Fungsi` | `Kondisi Aktual` | `Best Practice NIST` | `Gap`

Isi 15 baris sesuai dengan semua sub-kategori di atas (GV.OC-1 sampai RC.CO-1).

---

## BAGIAN 7 — STRENGTH & WEAKNESS

### Strengths (7 kartu hijau):
1. Sistem operasional terintegrasi — Navision terintegrasi antar toko, stok real-time
2. Kontrol akses pengguna — setiap karyawan punya akun dengan hak akses berbeda
3. Monitoring aktivitas — IT dapat memantau log aktivitas kasir
4. Backup data sudah dilakukan — ada mekanisme backup meskipun belum optimal
5. Respons insiden cepat — IT langsung menangani gangguan saat terjadi
6. Koordinasi IT toko dan pusat — ada kerja sama IT antar toko dan pusat
7. Infrastruktur pendukung — UPS tersedia untuk menjaga stabilitas saat listrik padam

### Weakness/Area Perbaikan (10 kartu merah/amber):
1. Tidak ada kebijakan tertulis — SOP hanya lisan, tidak konsisten
2. Tidak ada audit sistem — belum pernah dilakukan sebelum ini
3. Password lemah — 4 digit, tidak pernah diganti
4. Monitoring manual — tidak ada sistem alert otomatis
5. Update sistem tidak terjadwal — mengganggu operasional mendadak
6. Backup tidak konsisten — bergantung shift, 1x/bulan, HDD lokal saja
7. Tidak ada SOP penanganan insiden — bergantung pengalaman IT
8. Tidak ada risk assessment formal — risiko tidak terprioritaskan
9. Tidak ada dokumentasi improvement — perbaikan tidak terstruktur
10. Pelatihan keamanan tidak menyeluruh — human error meningkat

---

## BAGIAN 8 — KARTU REKOMENDASI (INTERAKTIF)

### Header:
Judul: "Rekomendasi Perbaikan Pasca-Audit"
Sub: "Disusun berdasarkan temuan audit NIST CSF — TruFarm Airmadidi"

### Tombol "+ Tambah Rekomendasi" (pojok kanan atas, hijau):
Saat diklik, muncul form dengan field:
- Nomor rekomendasi (auto)
- Judul rekomendasi
- Kategori (dropdown: Governance / Access Control / Data Security / Monitoring / Incident Response / Recovery / Training / Infrastructure)
- Prioritas (dropdown: Critical / High / Medium / Low)
- Deskripsi detail
- Tombol [Simpan] dan [Batal]

### 10 Kartu Rekomendasi Default (sudah terisi):

**REC-01 — Digitalisasi SOP**
- Kategori: Governance
- Prioritas: CRITICAL
- Deskripsi: "Segera buat buku panduan tertulis (SOP digital) untuk seluruh prosedur operasional sistem informasi, termasuk prosedur penggunaan Navision, POS, backup, dan penanganan insiden. Kurangi ketergantungan pada instruksi lisan."

**REC-02 — Otomatisasi Backup Harian**
- Kategori: Data Security
- Prioritas: CRITICAL
- Deskripsi: "Ubah sistem backup dari manual (bergantung shift pagi) menjadi otomatis terjadwal setiap hari. Implementasi cloud backup atau scheduled task di malam hari. Tambahkan off-site backup. Lakukan uji restore minimal 1x per kuartal untuk memastikan data dapat dipulihkan."

**REC-03 — Penguatan Kebijakan Password**
- Kategori: Access Control
- Prioritas: CRITICAL
- Deskripsi: "Ubah kebijakan password dari 4 digit menjadi minimal 8 karakter alfanumerik (kombinasi huruf dan angka). Wajibkan pergantian password minimal setiap 90 hari. Aktifkan audit log untuk mencatat waktu login terakhir setiap akun."

**REC-04 — Penjadwalan Update Sistem**
- Kategori: Infrastructure
- Prioritas: HIGH
- Deskripsi: "Koordinasikan dengan IT Pusat Jakarta agar semua update sistem Navision dan POS dijadwalkan di luar jam operasional toko (misalnya pukul 02.00–05.00 dini hari). Buat kalender update bulanan yang dikomunikasikan ke semua kepala toko minimal 3 hari sebelumnya."

**REC-05 — Implementasi Monitoring Otomatis**
- Kategori: Monitoring
- Prioritas: HIGH
- Deskripsi: "Implementasi sistem monitoring otomatis dengan notifikasi alert untuk mendeteksi gangguan sistem, anomali aktivitas pengguna, dan masalah jaringan. Integrasikan monitoring ke dashboard IT sehingga dapat diakses real-time oleh IT toko dan pusat."

**REC-06 — Pembuatan Risk Register Formal**
- Kategori: Governance
- Prioritas: HIGH
- Deskripsi: "Buat dan dokumentasikan risk register formal berdasarkan hasil audit ini. Lakukan evaluasi risk register minimal setiap 6 bulan. Tunjuk penanggung jawab manajemen risiko IT di setiap toko."

**REC-07 — Penyusunan DRP & BCP**
- Kategori: Recovery
- Prioritas: HIGH
- Deskripsi: "Susun Disaster Recovery Plan (DRP) dan Business Continuity Plan (BCP) formal yang mencakup: prosedur pemulihan data, daftar kontak darurat, prosedur operasional manual jika sistem mati. Uji DRP minimal 1x per tahun."

**REC-08 — Pelatihan Keamanan Siber**
- Kategori: Training
- Prioritas: HIGH
- Deskripsi: "Buat program pelatihan keamanan dasar untuk semua karyawan (bukan hanya IT dan manager). Materi meliputi: kesadaran keamanan password, pengenalan phishing, prosedur penanganan data sensitif, dan cara melaporkan insiden. Lakukan pelatihan minimal 1x per tahun."

**REC-09 — Dokumentasi Inventory Aset IT**
- Kategori: Governance
- Prioritas: MEDIUM
- Deskripsi: "Buat inventaris lengkap semua aset IT per toko: hardware (komputer kasir, server, UPS, CCTV, perangkat jaringan), software (Navision versi, Talenta, OS), dan lisensi. Update inventaris setiap ada perubahan aset."

**REC-10 — SOP Penanganan Insiden Tertulis**
- Kategori: Incident Response
- Prioritas: HIGH
- Deskripsi: "Buat SOP tertulis untuk penanganan insiden yang mencakup: prosedur shutdown server darurat, langkah pertama saat POS mati, prosedur eskalasi (IT toko → Store Manager → IT Pusat), template laporan insiden, dan prosedur pasca-insiden. Pastikan SOP tersedia di setiap toko dan mudah diakses."

---

## BAGIAN 9 — FOOTER

**Informasi audit:**
- Auditor: Mahasiswa Universitas Klabat — Mata Kuliah Information System Audit - A
- Tim: Brendon Davidson Kulon (Ketua), Aiko Hanako Lasut, Jonathan Reinald Lapian, Carolina Pears Pamela Langi, Fiktor Retno Lobbu
- Tanggal audit lapangan: 23 Februari 2026 & 10 Maret 2026
- Lokasi: TruFarm Airmadidi, Sulawesi Utara
- Framework: NIST Cybersecurity Framework (CSF) 2.0
- Metode: Wawancara terstruktur + Observasi langsung + Dokumentasi

**Disclaimer kecil:**
> "Dashboard ini dibuat berdasarkan hasil wawancara dan observasi lapangan. Data bersifat kualitatif dan tidak mencakup implementasi teknis secara langsung."

---

## CATATAN TEKNIS FIGMA MAKE

1. **Fitur interaktif wajib:**
   - Form "Tambah Risiko" di Risk Register harus menyimpan data ke state dan menampilkan baris baru di tabel
   - Form "Tambah Rekomendasi" harus menyimpan dan menampilkan kartu baru
   - Toggle status audit di header

2. **Navigasi:**
   - Buat sidebar navigasi kiri atau tab navigasi atas untuk melompat ke setiap bagian
   - Sections: Profil | Scope | Risk Register | Risk Matrix | NIST CSF | Rekomendasi

3. **Responsive:**
   - Layout harus bekerja baik di layar lebar (desktop/presentasi)
   - Card grid menggunakan CSS grid dengan min-width kolom

4. **Placeholder gambar:**
   - Header foto wawancara: 2 slot dengan teks placeholder yang jelas
   - Logo Trufarm: 1 slot dengan teks "[Logo Trufarm]"
   - Semua placeholder harus mudah diganti dengan gambar URL

5. **Print/export friendly:**
   - Hindari animasi berlebihan
   - Pastikan semua tabel bisa di-scroll horizontal jika terlalu lebar