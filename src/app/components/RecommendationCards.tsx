import { Plus, X, FileText, Database, Lock, Server, Shield, Users, Activity, AlertTriangle } from 'lucide-react';

const nistRecommendations = [
  {
    function: 'Govern',
    risk: 'Seluruh kebijakan keamanan disampaikan secara lisan, tidak ada dokumen formal kebijakan IT, pembagian peran IT tidak terdokumentasi (SK/TOR belum ada).',
    impact: 'Pengelolaan keamanan tidak konsisten, sulit dievaluasi dan diaudit bila terjadi insiden.',
    recommendations: [
      'Susun dokumen Kebijakan Keamanan Informasi tertulis (penggunaan sistem, password, hak akses, backup, insiden).',
      'Formalkan pembagian peran IT toko dan IT pusat dalam dokumen tertulis beserta jalur eskalasi.',
      'Sosialisasikan kebijakan kepada seluruh karyawan secara berkala, minimal 6 bulan sekali.',
      'Tinjau dan perbarui kebijakan minimal setahun sekali.'
    ],
    priority: 'Tinggi'
  },
  {
    function: 'Identify',
    risk: 'Inventaris perangkat lunak dan versinya tidak ada, tidak ada proses penilaian risiko formal (Risk Register), evaluasi sistem hanya berdasarkan pengalaman tanpa dokumentasi.',
    impact: 'Kerentanan sistem tidak teridentifikasi; mitigasi risiko tidak terarah; potensi insiden tidak terdeteksi sejak dini.',
    recommendations: [
      'Buat inventaris lengkap hardware dan software per perangkat, mencakup nama, versi, lisensi, dan status pembaruan; diperbarui setiap 6 bulan sekali.',
      'Susun Risk Register yang mencantumkan aset utama (POS, Navision, jaringan), ancaman, kerentanan, dan tingkat risiko.',
      'Dokumentasikan setiap proses evaluasi dan perbaikan sistem secara terstruktur.'
    ],
    priority: 'Tinggi'
  },
  {
    function: 'Protect',
    risk: 'Update sistem tidak terjadwal (mendadak dari pusat); tidak ada kebijakan pergantian password berkala; pelatihan keamanan tidak mencakup aspek keamanan informasi yang memadai untuk kasir.',
    impact: 'Celah keamanan tidak tertambal; akun rentan diakses pihak tidak berwenang; human error meningkat.',
    recommendations: [
      'Implementasi kebijakan pergantian password minimal 90 hari untuk semua akun.',
      'Standarisasi jadwal patch/update software (bukan mendadak dari pusat).',
      'Selenggarakan pelatihan keamanan rutin tahunan untuk semua karyawan.',
      'Backup ditingkatkan menjadi 3-2-1 (lokal + eksternal + cloud) dengan jadwal mingguan.'
    ],
    priority: 'Tinggi'
  },
  {
    function: 'Detect',
    risk: 'Monitoring sistem hanya manual oleh IT (cek log kasir); tidak ada sistem alert otomatis; anomali seperti promo yang tidak terhapus baru diketahui setelah berdampak',
    impact: 'Insiden terdeteksi terlambat; potensi kerugian finansial akibat promo berjalan tanpa kontrol.',
    recommendations: [
      'Pusatkan log aktivitas POS, Navision, dan LAN ke satu dashboard monitoring.',
      'Aktifkan alert otomatis (email/WA) untuk kondisi anomali: login gagal, server offline, promo tidak terhapus.',
      'Tetapkan jadwal review log harian atau mingguan oleh IT.',
      'Evaluasi bulanan terhadap tren insiden dan anomali yang ditemukan'
    ],
    priority: 'Sedang'
  },
  {
    function: 'Respond',
    risk: 'Tidak ada SOP penanganan insiden tertulis; analisis dan dokumentasi insiden belum dilakukan secara sistematis; tidak ada standar komunikasi saat terjadi gangguan.',
    impact: 'Respons tidak seragam; pemulihan lambat; insiden serupa dapat berulang karena tidak ada pembelajaran formal.',
    recommendations: [
      'Susun SOP Penanganan Insiden 1-2 halaman (pelaporan-triase-eskalasi-penutupan).',
      'Buat template laporan insiden: waktu, penyebab, dampak, tindakan, rekomendasi.',
      'Implementasikan form RCA (Root Cause Analysis) untuk setiap insiden P1 dan P2.',
      'Lakukan simulasi penanganan insiden minimal 1x per tahun.'
    ],
    priority: 'Tinggi'
  },
  {
    function: 'Recover',
    risk: 'Backup hanya dilakukan sekitar satu bulan sekali secara lokal; belum pernah dilakukan uji pemulihan (restore test); tidak ada Disaster Recovery Plan (DRP).',
    impact: 'Risiko gagal restore saat insiden besar; downtime berkepanjangan; kehilangan data transaksi yang tidak terbackup.',
    recommendations: [
      'Susun Disaster Recovery Plan (DRP) dengan jadwal, tanggung jawab, dan prosedur pelaporan.',
      'Tingkatkan frekuensi backup menjadi harian/mingguan dengan pola 3-2-1.',
      'Lakukan uji pemulihan (restore test) minimal satu kali per triwulan.',
      'Simpan satu salinan backup di lokasi berbeda (offsite) sebagai proteksi fisik.',
      'Dokumentasikan dan laporkan setiap proses serta hasil pemulihan kepada manajemen.'
    ],
    priority: 'Tinggi'
  }
];

const mapControlsToRiskData = [
  { cId: 'C1', rId: 'R1', controlInPlace: 'Berdasarkan hasil wawancara, belum terdapat kebijakan keamanan tertulis. Direkomendasikan menyusun dan mengesahkan kebijakan keamanan informasi yang mencakup penggunaan sistem POS/Navision, aturan password, hak akses, dan prosedur backup, serta disosialisasikan kepada seluruh karyawan.', type: 'Preventive', outcome: 'Tersedianya kebijakan formal sehingga pengelolaan sistem lebih terarah dan konsisten', reason: 'Saat ini pengelolaan masih informal dan tidak terdokumentasi' },
  { cId: 'C2', rId: 'R2', controlInPlace: 'Backup data saat ini hanya dilakukan secara lokal sekitar 1 bulan sekali. Direkomendasikan backup otomatis harian dan penyimpanan cloud serta uji restore', type: 'Corrective', outcome: 'Data dapat dipulihkan dengan cepat saat terjadi kehilangan', reason: 'Backup tidak rutin dan belum pernah diuji' },
  { cId: 'C3', rId: 'R3', controlInPlace: 'Belum ada validasi sistem pada input kasir. Direkomendasikan penambahan validasi input dan pelatihan kasir', type: 'Preventive', outcome: 'Mengurangi kesalahan input transaksi', reason: 'Human error masih sering terjadi' },
  { cId: 'C4', rId: 'R4', controlInPlace: 'Monitoring sistem masih manual oleh IT. Direkomendasikan penggunaan sistem monitoring otomatis (alert system)', type: 'Detective', outcome: 'Gangguan sistem dapat terdeteksi lebih cepat', reason: 'Tidak ada notifikasi otomatis' },
  { cId: 'C5', rId: 'R5', controlInPlace: 'Belum terdapat SOP penanganan insiden. Direkomendasikan pembuatan SOP incident response', type: 'Detective', outcome: 'Penanganan insiden lebih cepat dan terstruktur', reason: 'Penanganan masih informal' },
  { cId: 'C6', rId: 'R6', controlInPlace: 'Belum ada pembatasan akses yang jelas. Direkomendasikan penerapan role-based access control', type: 'Preventive', outcome: 'Akses sistem lebih terkontrol', reason: 'Risiko kebocoran data' },
  { cId: 'C7', rId: 'R7', controlInPlace: 'Update sistem dilakukan tidak terjadwal. Direkomendasikan penjadwalan patch/update rutin', type: 'Preventive', outcome: 'Sistem lebih aman dari bug dan celah keamanan', reason: 'Update hanya saat ada masalah' },
  { cId: 'C8', rId: 'R8', controlInPlace: 'Dokumentasi sistem belum tersedia. Direkomendasikan pembuatan dokumentasi teknis dan SOP IT', type: 'Detective', outcome: 'Mengurangi ketergantungan pada individu', reason: 'Ketergantungan pada 1 IT' },
  { cId: 'C9', rId: 'R9', controlInPlace: 'Penggunaan akun masih bersama. Direkomendasikan penggunaan akun individu per karyawan', type: 'Preventive', outcome: 'Meningkatkan kontrol dan akuntabilitas', reason: 'Tidak bisa tracking pengguna' },
  { cId: 'C10', rId: 'R10', controlInPlace: 'Belum ada uji pemulihan data. Direkomendasikan melakukan restore test secara berkala', type: 'Corrective', outcome: 'Memastikan backup dapat digunakan saat dibutuhkan', reason: 'Backup belum pernah diuji' }
];

const ratingTableData = [
  { rId: 'R5', cId: 'C5', control: 'SOP incident belum tersedia', risk: 'Penanganan insiden tidak terstruktur', method: 'Interview dengan tim IT', result: 'Tidak terdapat SOP penanganan insiden', rating: 'Missing', points: 0, recommendation: 'Susun SOP incident response & alur eskalasi' },
  { rId: 'R4', cId: 'C4', control: 'Monitoring sistem masih manual', risk: 'Keterlambatan deteksi gangguan', method: 'Interview & observasi', result: 'Monitoring dilakukan manual tanpa alert otomatis', rating: 'Ineffective', points: 2, recommendation: 'Implementasi monitoring & alert otomatis' },
  { rId: 'R1', cId: 'C1', control: 'Tidak ada kebijakan keamanan', risk: 'Tata kelola tidak terarah', method: 'Interview dengan tim IT', result: 'Tidak terdapat kebijakan keamanan tertulis', rating: 'Missing', points: 0, recommendation: 'Susun kebijakan keamanan informasi' },
  { rId: 'R2', cId: 'C2', control: 'Backup tidak rutin', risk: 'Gagal pulih layanan', method: 'Interview & pengecekan praktik backup', result: 'Backup ada namun tidak terjadwal dan tidak konsisten', rating: 'Ineffective', points: 2, recommendation: 'Jadwalkan backup harian + cloud' },
  { rId: 'R6', cId: 'C6', control: 'Hak akses tidak diatur formal', risk: 'Kebocoran data', method: 'Interview & observasi akun', result: 'Akses sudah menggunakan akun tetapi belum ada pengaturan formal.', rating: 'Partially Effective', points: 3, recommendation: 'Terapkan role-based access control' },
  { rId: 'R9', cId: 'C9', control: 'Disaster Recovery Plan belum tersedia', risk: 'Tidak ada akuntabilitas pemulihan', method: 'Interview', result: 'Tidak terdapat Disaster Recovery Plan', rating: 'Missing', points: 0, recommendation: 'Susun DRP dan RTO/RPO' },
  { rId: 'R3', cId: 'C3', control: 'Validasi input tidak ada', risk: 'Human error', method: 'Interview & observasi', result: 'Kesalahan input masih terjadi dan tidak ada SOP validasi', rating: 'Missing', points: 0, recommendation: 'Tambahkan validasi sistem & SOP' },
  { rId: 'R7', cId: 'C7', control: 'Update tidak rutin', risk: 'Kerentanan sistem', method: 'Interview', result: 'Update dilakukan tanpa jadwal tetap', rating: 'Ineffective', points: 2, recommendation: 'Jadwal patch/update rutin' },
  { rId: 'R10', cId: 'C10', control: 'Tidak ada uji restore', risk: 'Backup tidak pasti', method: 'Interview', result: 'Backup belum pernah diuji pemulihannya', rating: 'Ineffective', points: 2, recommendation: 'Lakukan uji restore secara berkala' },
  { rId: 'R8', cId: 'C8', control: 'Tidak ada dokumentasi sistem', risk: 'Ketergantungan pada IT', method: 'Interview', result: 'Dokumentasi belum tersedia', rating: 'Missing', points: 0, recommendation: 'Buat dokumentasi sistem & prosedur.' }
];

export function RecommendationCards() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl text-[#1A1A2E] mb-2">Rekomendasi Perbaikan Pasca-Audit</h2>
          <p className="text-sm text-gray-600">Disusun berdasarkan temuan audit NIST CSF — TruFarm Airmadidi</p>
        </div>
      </div>

      {/* Tabel Ringkasan Rekomendasi NIST CSF */}
      <div className="mb-10">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
          <p className="text-sm text-blue-800 text-justify">
            Tabel berikut merangkum seluruh rekomendasi perbaikan berdasarkan enam fungsi dari NIST CSF 2.0, beserta risiko yang mendasari, dampak yang ditimbulkan, prioritas penanganan, dan status kontrol saat ini di TRUFARM. Rekomendasi ini disusun berdasarkan kondisi nyata hasil wawancara dengan pihak TRUFARM dan analisis menggunakan NIST Cybersecurity Framework (CSF) versi 2.0.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700">
              <thead className="bg-[#1A1A2E] text-white">
                <tr>
                  <th className="px-4 py-3 font-medium whitespace-nowrap">Fungsi NIST</th>
                  <th className="px-4 py-3 font-medium min-w-[250px]">Risiko / Kelemahan</th>
                  <th className="px-4 py-3 font-medium min-w-[200px]">Dampak</th>
                  <th className="px-4 py-3 font-medium min-w-[300px]">Rekomendasi / Kontrol Perbaikan</th>
                  <th className="px-4 py-3 font-medium text-center whitespace-nowrap">Prioritas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {nistRecommendations.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 font-semibold align-top text-[#1A1A2E]">
                      {item.function}
                    </td>
                    <td className="px-4 py-4 align-top text-gray-600">
                      {item.risk}
                    </td>
                    <td className="px-4 py-4 align-top text-gray-600">
                      {item.impact}
                    </td>
                    <td className="px-4 py-4 align-top">
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {item.recommendations.map((rec, i) => (
                          <li key={i}>{rec}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-4 align-top text-center">
                      <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold ${item.priority === 'Tinggi' ? 'bg-[#EF4444] text-white' : 'bg-[#F59E0B] text-white'
                        }`}>
                        {item.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-[#22C55E] p-4 rounded-r-lg">
          <p className="text-sm text-green-800 text-justify leading-relaxed">
            Hasil rekomendasi di atas, telah disusun berdasarkan kondisi nyata dari hasil wawancara dengan pihak Trufarm dan dengan analisis menggunakan NIST Cybersecurity Framework (CSF) versi 2.0. Implementasi rekomendasi di atas diharapkan dapat memperkuat tata kelola keamanan sistem informasi TRUFARM secara bertahap dan berkelanjutan. Prioritas utama diberikan kepada aspek kebijakan tertulis, penguatan keamanan akses, audit sistem, dan penyusunan prosedur formal penanganan insiden dan pemulihan. Dengan menerapkan rekomendasi ini, TRUFARM diharapkan dapat meningkatkan kesiapan dalam menghadapi risiko, mengurangi potensi gangguan operasional, serta menjaga keamanan data transaksi dan kepercayaan manajemen dalam pengelolaan sistem informasi.
          </p>
        </div>
      </div>

      {/* Map Controls to Risk */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-[#1A1A2E] mb-4">5.1 Map Controls to Risk</h3>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed text-justify">
          Bagian ini memetakan setiap Risiko yang menjadi prioritas ke control yang sesuai agar jalur Risiko, control, dan Tindakan jelas, terukur, dan dapat diaudit. Pemetaan ini disusun dari hasil wawancara dan kerangka NIST CSF, dengan tiga jenis control yaitu:
          <br /><br />
          <span className="font-semibold text-[#1A1A2E]">• Preventive:</span> mencegah kejadian sebelum terjadi<br />
          <span className="font-semibold text-[#1A1A2E]">• Detective:</span> mendeteksi ancaman atau anomali sedini mungkin<br />
          <span className="font-semibold text-[#1A1A2E]">• Corrective:</span> memulihkan sistem dan menurunkan dampak setelah insiden
        </p>

        <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700">
              <thead className="bg-[#1A1A2E] text-white">
                <tr>
                  <th className="px-4 py-3 font-medium whitespace-nowrap">Control ID</th>
                  <th className="px-4 py-3 font-medium whitespace-nowrap">Risk ID</th>
                  <th className="px-4 py-3 font-medium min-w-[300px]">Control in Place</th>
                  <th className="px-4 py-3 font-medium whitespace-nowrap">Control Type</th>
                  <th className="px-4 py-3 font-medium min-w-[200px]">Expected Outcome</th>
                  <th className="px-4 py-3 font-medium min-w-[200px]">Reason</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mapControlsToRiskData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-[#1A1A2E] align-top">{item.cId}</td>
                    <td className="px-4 py-3 font-semibold text-[#EF4444] align-top">{item.rId}</td>
                    <td className="px-4 py-3 align-top text-gray-600">{item.controlInPlace}</td>
                    <td className="px-4 py-3 align-top">
                      <span className={`inline-flex items-center justify-center px-2 py-1 rounded-md text-xs font-medium ${item.type === 'Preventive' ? 'bg-blue-100 text-blue-800' :
                          item.type === 'Detective' ? 'bg-purple-100 text-purple-800' :
                            'bg-orange-100 text-orange-800'
                        }`}>
                        {item.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 align-top text-gray-600">{item.outcome}</td>
                    <td className="px-4 py-3 align-top text-gray-600">{item.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 5.2 Rating Table (Ranking) */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-[#1A1A2E] mb-4"> Rating Table (Ranking) - Map Controls to Risks</h3>

        <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700">
              <thead className="bg-[#1A1A2E] text-white">
                <tr>
                  <th className="px-4 py-3 font-medium whitespace-nowrap">RID</th>
                  <th className="px-4 py-3 font-medium whitespace-nowrap">C I</th>
                  <th className="px-4 py-3 font-medium min-w-[200px]">Control</th>
                  <th className="px-4 py-3 font-medium min-w-[150px]">Risk</th>
                  <th className="px-4 py-3 font-medium min-w-[150px]">Evaluation Method</th>
                  <th className="px-4 py-3 font-medium min-w-[200px]">Result</th>
                  <th className="px-4 py-3 font-medium whitespace-nowrap">Rating</th>
                  <th className="px-4 py-3 font-medium text-center whitespace-nowrap">Points</th>
                  <th className="px-4 py-3 font-medium min-w-[200px]">Recommendation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {ratingTableData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-[#EF4444] align-top">{item.rId}</td>
                    <td className="px-4 py-3 font-semibold text-[#1A1A2E] align-top">{item.cId}</td>
                    <td className="px-4 py-3 align-top text-gray-600">{item.control}</td>
                    <td className="px-4 py-3 align-top text-gray-600">{item.risk}</td>
                    <td className="px-4 py-3 align-top text-gray-600">{item.method}</td>
                    <td className="px-4 py-3 align-top text-gray-600">{item.result}</td>
                    <td className="px-4 py-3 align-top">
                      <span className={`inline-flex items-center justify-center px-2 py-1 rounded-md text-xs font-medium ${item.rating === 'Missing' ? 'bg-red-100 text-red-800' :
                          item.rating === 'Ineffective' ? 'bg-orange-100 text-orange-800' :
                            'bg-yellow-100 text-yellow-800'
                        }`}>
                        {item.rating}
                      </span>
                    </td>
                    <td className="px-4 py-3 align-top text-center font-bold text-[#1A1A2E]">
                      {item.points > 0 ? `+${item.points}` : item.points}
                    </td>
                    <td className="px-4 py-3 align-top text-gray-600">{item.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-semibold text-[#1A1A2E] mb-3">Keterangan:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><span className="inline-block w-32 font-medium text-green-700">Effective</span> = +4</li>
              <li><span className="inline-block w-32 font-medium text-yellow-700">Partially Effective</span> = +3</li>
              <li><span className="inline-block w-32 font-medium text-orange-700">Ineffective</span> = +2</li>
              <li><span className="inline-block w-32 font-medium text-red-700">Missing</span> = 0 (+1 / −2)</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="font-semibold text-[#1A1A2E]">Total points saat ini: <span className="text-red-600">11 / 40</span> (10 kontrol × maksimum 4)</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-semibold text-[#1A1A2E] mb-3">Standar Penilaian Trufarm:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><span className="font-medium text-green-700">Skor 30–40 = Tinggi</span> (Kontrol matang, terdokumentasi baik)</li>
              <li><span className="font-medium text-yellow-700">Skor 20–29 = Sedang</span> (Kontrol berjalan tetapi tidak konsisten)</li>
              <li><span className="font-medium text-orange-700">Skor 10–19 = Rendah</span> (Kontrol sebagian besar tidak efektif)</li>
              <li><span className="font-medium text-red-700">Skor &lt; 10 = Sangat Rendah</span> (Hampir seluruh kontrol tidak tersedia)</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="font-semibold text-[#1A1A2E]">Nilai Trufarm saat ini = <span className="text-red-600">11/40 (Rendah)</span></p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg shadow-sm">
          <p className="text-sm text-red-800 leading-relaxed text-justify">
            Berdasarkan total skor 11 dari maksimum 40, tingkat efektivitas kontrol keamanan informasi di Trufarm berada pada kategori <strong className="font-bold">Rendah</strong>. Hal ini menunjukkan bahwa sebagian besar kontrol masih belum berjalan secara konsisten atau belum terdokumentasi, dan masih bergantung pada kebiasaan manual serta pengalaman individu tim IT. Dengan demikian, Trufarm memerlukan peningkatan signifikan pada aspek dokumentasi, standarisasi proses, serta penerapan kontrol preventif dan detektif yang lebih kuat.
          </p>
        </div>
      </div>

    </div>
  );
}
