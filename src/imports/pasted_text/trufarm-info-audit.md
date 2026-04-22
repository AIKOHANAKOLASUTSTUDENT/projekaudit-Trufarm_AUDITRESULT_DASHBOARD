Ringkasan eksekutif — audit sistem informasi Trufarm
1.4/5
Skor maturity NIST CSF
2
Temuan critical
3
Temuan high
4
Cabang diaudit
6
Area ruang lingkup
Tabel NIST CSF 2.0 — penilaian berdasarkan jawaban interview
Fungsi	Sub-kategori	Temuan dari interview	Rekomendasi	Skor	Status
GV
Govern	GV.PO-1
Kebijakan	SOP hanya diberikan secara lisan; tidak ada buku panduan tertulis. Update sistem dari pusat tiba-tiba tanpa jadwal.	Buat SOP tertulis digital; jadwalkan update sistem di luar jam operasional.	1/5	Critical
GV	GV.RR-1
Peran & tanggung jawab	Tim IT hanya 1 orang per toko. Pelatihan IT hanya untuk manager, kasir hanya 3 hari. IT antar toko bisa saling backup input promo.	Dokumentasikan pembagian peran; tambah SDM IT atau tunjuk backup IT per toko.	2/5	High
GV	GV.RM-1
Strategi risiko	Belum pernah dilakukan audit sistem. Tidak ada risk register formal. Risiko dikelola secara reaktif.	Lakukan risk assessment berkala; buat risk register terdokumentasi.	1/5	Critical
ID
Identify	ID.AM-1
Manajemen aset	Navision dapat mengecek barang dari semua toko (real-time). Timbangan masih manual dan tidak terintegrasi.	Dokumentasikan inventaris aset IT; integrasikan timbangan ke Navision.	2/5	High
ID	ID.RA-1
Penilaian risiko	Gangguan utama: listrik tidak stabil, update mendadak dari pusat, dan server bermasalah di Manado. Kesalahan input promo pernah terjadi.	Formalkan analisis risiko berdasarkan insiden yang tercatat.	2/5	High
PR
Protect	PR.AA-1
Kontrol akses	Password kasir/crew hanya 4 digit bebas. Tidak ada rotasi password. Password IT dari manager. Akun dihapus saat karyawan keluar.	Wajibkan password alfanumerik min. 8 karakter; rotasi tiap 90 hari; log waktu login terakhir.	1/5	Critical
PR	PR.AT-1
Pelatihan keamanan	Pelatihan IT ±2 minggu (hanya untuk manager). Pelatihan kasir hanya 3 hari. Tidak ada pelatihan keamanan siber khusus.	Buat modul pelatihan keamanan dasar untuk semua staf (phishing, password hygiene).	2/5	High
PR	PR.DS-1
Keamanan data	Backup manual 1x/bulan oleh IT shift pagi; kasir tidak boleh menyala saat backup. Data disimpan di HDD fisik di ruangan toko. Tidak ada off-site backup.	Otomatisasi backup harian ke cloud; tambah off-site backup untuk keamanan fisik.	1/5	Critical
PR	PR.PS-1
Keamanan platform	Sistem menggunakan kabel LAN. Tidak ada pembaruan sistem aktif (jika tidak diperbarui bisa lag). Update datang dari pusat tanpa jadwal. Power supply tersedia.	Jadwalkan pemeliharaan rutin; koordinasi update dengan pusat pada jam non-operasional.	2/5	High
DE
Detect	DE.CM-1
Monitoring	IT team dapat melihat log aktivitas kasir. CCTV tersedia. Tidak ada monitoring real-time atau alert otomatis untuk gangguan sistem.	Implementasi sistem monitoring/alert otomatis; integrasikan CCTV ke sistem IT.	2/5	High
DE	DE.AE-1
Analisis kejadian	Pernah terjadi: data promo tidak terhapus dan berjalan terus, salah input stringkits. Diketahui secara manual bukan otomatis.	Tambahkan validasi otomatis di sistem promo; buat mekanisme notifikasi anomali data.	1/5	Critical
RS
Respond	RS.MA-1
Manajemen insiden	Gangguan langsung dapat diatasi oleh IT. Server tidak boleh mati sendiri — harus dimatikan sebelum UPS habis. Maintenance oleh tim IT lokal.	Buat prosedur tertulis shutdown server darurat; tambahkan UPS auto-shutdown.	2/5	High
RS	RS.CO-1
Komunikasi insiden	Tidak ada prosedur pelaporan resmi. Komunikasi dilakukan secara lisan. Tidak ada laporan insiden terdokumentasi.	Buat formulir laporan insiden; tentukan jalur eskalasi yang jelas (IT → Manajer → Pusat).	1/5	Critical
RC
Recover	RC.RP-1
Rencana pemulihan	Belum pernah kehilangan data, tapi pernah ada kerusakan server di Manado. Tidak ada BCP (Business Continuity Plan) formal. Jika ada yang hilang, masih ada backup.	Susun BCP & DRP formal; uji pemulihan backup secara berkala (min. 1x/kuartal).	1/5	Critical
RC	RC.CO-1
Komunikasi pemulihan	Tidak ada laporan pasca-insiden. Tidak ada evaluasi formal setelah sistem kembali normal. Bergantung penuh pada kehadiran IT shift pagi.	Buat prosedur post-incident review; kurangi ketergantungan pada jadwal shift IT.	1/5	Critical
Skor maturity per fungsi NIST CSF 2.0
Skala maturity: 1 = Initial  ·  2 = Developing  ·  3 = Defined  ·  4 = Managed  ·  5 = Optimized
Critical (1/5)
High (1.5–2/5)
Acceptable (3+/5)
Tabel instrumen interview & jawaban per sub-kategori NIST CSF
GV — Govern (Tata kelola)
Apakah ada kebijakan tertulis terkait keamanan sistem informasi?
Tidak ada. SOP diberitahukan secara lisan karena belum ada buku panduan tertulis.
Siapa yang bertanggung jawab atas sistem Navision dan IT di toko?
Tim IT 1 orang per toko. Maintenance dari IT lokal, untuk gangguan besar dari pusat Jakarta.
Apakah TRUFARM memiliki strategi khusus untuk mengelola risiko IT?
Belum ada strategi formal. Belum pernah dilakukan audit sistem sebelumnya.
ID — Identify (Identifikasi aset & risiko)
Sistem apa yang paling penting dalam operasional?
POS/kasir adalah sistem paling penting. Sangat bergantung pada sistem — tidak bisa beroperasi jika sistem mati.
Risiko apa yang paling sering terjadi?
Listrik tidak stabil menyebabkan POS sering mati. Gangguan dari update sistem mendadak dari pusat. Server bermasalah di Manado.
Apakah data penting sudah teridentifikasi?
Navision dapat mengecek stok semua toko real-time. Stringkits (pemusnahan barang) dilakukan by sistem dan tidak bisa hilang.
PR — Protect (Perlindungan)
Bagaimana kebijakan password yang berlaku saat ini?
Password crew/kasir: 4 angka bebas. Tidak ada rotasi password. Password IT diberikan oleh manager.
Bagaimana prosedur backup data?
Backup 1x/bulan, manual oleh IT shift pagi. Kasir tidak boleh menyala saat backup. Data disimpan di HDD fisik di ruangan toko.
Apakah ada pelatihan keamanan untuk karyawan?
Pelatihan IT ±2 minggu hanya untuk manager. Kasir hanya 3 hari. Tidak ada pelatihan keamanan siber khusus.
Bagaimana koneksi jaringan sistem?
Menggunakan kabel LAN untuk akses internet sistem. Memiliki power supply (UPS). Server tidak boleh mati sendiri — harus dimatikan manual sebelum UPS habis.
DE — Detect (Deteksi)
Apakah ada monitoring aktivitas sistem?
IT team dapat melihat log aktivitas kasir. CCTV tersedia. Namun tidak ada monitoring real-time atau alert otomatis.
Pernahkah terjadi anomali atau kesalahan data?
Ya — data promo tidak terhapus dan terus berjalan. Salah input di stringkits pernah terjadi. Diketahui secara manual, bukan otomatis.
RS — Respond (Respons insiden)
Apa yang dilakukan jika sistem mengalami gangguan?
Jika ada gangguan, IT langsung bisa mengatasi. IT antar toko bisa saling backup. IT Airmadidi menangani toko Airmadidi, pusat untuk sisanya.
Apakah ada dokumentasi insiden?
Tidak ada laporan insiden resmi. Semua komunikasi dilakukan secara lisan. Tidak ada jalur eskalasi tertulis.
Pernahkah terjadi akses tidak sah dari luar?
Tidak pernah terjadi akses dari luar perusahaan. Tidak pernah kehilangan data, tetapi pernah ada kerusakan server.
RC — Recover (Pemulihan)
Apakah ada rencana pemulihan jika terjadi bencana?
Tidak ada BCP formal. Jika ada data yang hilang, masih ada backup di HDD. Belum pernah kehilangan data secara permanen.
Berapa lama pemulihan sistem jika terjadi gangguan besar?
Tidak ada target RTO yang ditetapkan. Pemulihan bergantung pada kehadiran IT shift pagi. Masing-masing tim IT tidak boleh libur bersamaan.
Apakah backup pernah diuji untuk verifikasi?
Backup belum pernah diuji secara formal. Jika ada data hilang diasumsikan masih ada di backup, namun tidak pernah diverifikasi.