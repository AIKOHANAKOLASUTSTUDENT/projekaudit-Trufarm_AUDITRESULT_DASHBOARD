import { useState, Fragment } from "react";
import {
  Database,
  Server,
  Lock,
  Shield,
  FileText,
  HardDrive,
  ShoppingCart,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { RiskRegisterTable } from "./components/RiskRegisterTable";
import { RecommendationCards } from "./components/RecommendationCards";
const logoTrufarm = "/TRUFARM.jpg";
const fotoTeam1 = "/interview1.jpeg";
const fotoTeam2 = "/interview2.jpeg";

export default function App() {
  const [auditStatus, setAuditStatus] = useState<
    "In Progress" | "Audit Selesai"
  >("In Progress");
  const [expandedNIST, setExpandedNIST] = useState<string | null>(null);

  const nistScores = [
    {
      code: "GV",
      name: "Govern",
      score: 1.0,
      max: 5,
      level: "Initial",
      color: "#EF4444",
    },
    {
      code: "ID",
      name: "Identify",
      score: 2.0,
      max: 5,
      level: "Developing",
      color: "#F59E0B",
    },
    {
      code: "PR",
      name: "Protect",
      score: 1.5,
      max: 5,
      level: "Initial-Developing",
      color: "#F59E0B",
    },
    {
      code: "DE",
      name: "Detect",
      score: 1.5,
      max: 5,
      level: "Developing",
      color: "#F59E0B",
    },
    {
      code: "RS",
      name: "Respond",
      score: 1.5,
      max: 5,
      level: "Developing",
      color: "#F59E0B",
    },
    {
      code: "RC",
      name: "Recover",
      score: 1.0,
      max: 5,
      level: "Initial",
      color: "#EF4444",
    },
  ];

  const strengths = [
    "Sistem operasional terintegrasi — Navision terintegrasi antar toko, stok real-time",
    "Kontrol akses pengguna — setiap karyawan punya akun dengan hak akses berbeda",
    "Monitoring aktivitas — IT dapat memantau log aktivitas kasir",
    "Backup data sudah dilakukan — ada mekanisme backup meskipun belum optimal",
    "Respons insiden cepat — IT langsung menangani gangguan saat terjadi",
    "Koordinasi IT toko dan pusat — ada kerja sama IT antar toko dan pusat",
    "Infrastruktur pendukung — UPS tersedia untuk menjaga stabilitas saat listrik padam",
  ];

  const weaknesses = [
    "Tidak ada kebijakan tertulis — SOP hanya lisan, tidak konsisten",
    "Tidak ada audit sistem — belum pernah dilakukan sebelum ini",
    "Password lemah — 4 digit, tidak pernah diganti",
    "Monitoring manual — tidak ada sistem alert otomatis",
    "Update sistem tidak terjadwal — mengganggu operasional mendadak",
    "Backup tidak konsisten — bergantung shift, 1x/bulan, HDD lokal saja",
    "Tidak ada SOP penanganan insiden — bergantung pengalaman IT",
    "Tidak ada risk assessment formal — risiko tidak terprioritaskan",
    "Tidak ada dokumentasi improvement — perbaikan tidak terstruktur",
    "Pelatihan keamanan tidak menyeluruh — human error meningkat",
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* HEADER UTAMA */}
      <header className="bg-[#1A1A2E] text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-[1600px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between gap-8">
            {/* Kiri - Logo */}
            <div className="flex-shrink-0">
              <div
                className="bg-white rounded-lg overflow-hidden"
                style={{ width: "180px", height: "60px" }}
              >
                <img
                  src={logoTrufarm}
                  alt="Logo Trufarm"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Tengah - Judul */}
            <div className="flex-1 text-center">
              <h1 className="text-3xl mb-2">
                TRUFARM — Laporan Audit Sistem Informasi
              </h1>
              <p className="text-lg text-gray-300">
                Berbasis NIST Cybersecurity Framework 2.0
              </p>
            </div>

            {/* Kanan - Status Badge */}
            <div className="flex-shrink-0">
              <button
                onClick={() =>
                  setAuditStatus(
                    auditStatus === "In Progress"
                      ? "Audit Selesai"
                      : "In Progress",
                  )
                }
                className={`px-6 py-3 rounded-full text-sm transition-colors ${
                  auditStatus === "In Progress"
                    ? "bg-[#22C55E] hover:bg-[#15803D]"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {auditStatus}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-8 py-8 space-y-12">
        {/* PROFIL PERUSAHAAN */}
        <section id="profil">
          <h2 className="text-3xl text-[#1A1A2E] mb-6">Profil Perusahaan</h2>

          {/* Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Nama Perusahaan", value: "PT TruFarm Indonesia" },
              {
                label: "Jenis Usaha",
                value: "Retail Supermarket Modern Lokal",
              },
              { label: "Lokasi HQ", value: "Jakarta" },
              { label: "Tanggal Audit", value: "10 Maret 2026" },
              { label: "Jumlah Cabang", value: "4 Cabang" },
              { label: "Total Karyawan", value: "60+ Karyawan" },
              {
                label: "Sistem Utama",
                value: "Microsoft Dynamics NAV + Talenta HRD",
              },
              {
                label: "Tim Auditor",
                value: "5 Mahasiswa Universitas Klabat — ISA-A",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E2E8F0] p-4 shadow-sm"
              >
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="text-sm text-[#1A1A2E]">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Deskripsi */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm mb-6">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Trufarm adalah perusahaan bisnis retail modern asal lokal yang
              berkembang di Sulawesi Utara. Bergerak di bidang retail
              supermarket yang menjual produk makanan, frozen food, bahan
              makanan segar, serta kebutuhan rumah tangga. Trufarm memiliki 4
              cabang yang berlokasi di Sangihe, Boulevard, Grand Kawanua, dan
              Airmadidi, dengan kantor pusat (HQ) di Jakarta. Saat ini Trufarm
              memiliki lebih dari 60 karyawan yang beroperasi di seluruh cabang.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "Makanan & Grocery",
                "Frozen Food",
                "Bahan Makanan Segar",
                "Kebutuhan Rumah Tangga",
              ].map((cat, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-[#22C55E] text-white text-sm rounded-lg"
                >
                  {cat}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-600 border-t border-gray-200 pt-4">
              {[
                "CCTV Tersedia",
                "1 Tim IT per Toko",
                "Menggunakan Kabel LAN",
                "UPS Tersedia",
                "Sistem Terintegrasi (kecuali timbangan manual)",
              ].map((info, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-100 rounded-lg">
                  {info}
                </span>
              ))}
            </div>
          </div>

          {/* Dokumentasi Foto Audit */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm mb-6">
            <h3 className="text-xl text-[#1A1A2E] mb-4">
              Dokumentasi Audit Lapangan
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Lokasi: TruFarm Airmadidi, Sulawesi Utara | Tanggal: 10 Maret 2026
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="rounded-xl overflow-hidden border-2 border-[#22C55E] mb-3">
                  <img
                    src={fotoTeam1}
                    alt="Interview Store Manager"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-sm text-gray-700">
                  Interview dengan Store Manager
                </p>
                <p className="text-xs text-gray-500">10 Maret 2026</p>
              </div>
              <div className="text-center">
                <div className="rounded-xl overflow-hidden border-2 border-[#22C55E] mb-3">
                  <img
                    src={fotoTeam2}
                    alt="Interview IT Management"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-sm text-gray-700">
                  Interview dengan IT Management & Tim Audit
                </p>
                <p className="text-xs text-gray-500">10 Maret 2026</p>
              </div>
            </div>
          </div>

          {/* Struktur Organisasi */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-sm mb-6">
            <h3 className="text-xl text-[#1A1A2E] mb-6 text-center">
              Struktur Hierarki Organisasi Toko
            </h3>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-[#1A1A2E] text-white px-8 py-3 rounded-lg text-center min-w-[200px]">
                AREA HEAD
              </div>
              <div className="w-0.5 h-8 bg-gray-300"></div>
              <div className="bg-[#15803D] text-white px-8 py-3 rounded-lg text-center min-w-[200px]">
                STORE MANAGER / KEPALA TOKO
              </div>
              <div className="w-0.5 h-8 bg-gray-300"></div>
              <div className="bg-[#22C55E] text-white px-8 py-3 rounded-lg text-center min-w-[200px]">
                ASISTEN MANAGER
              </div>
              <div className="w-0.5 h-8 bg-gray-300"></div>
              <div className="bg-[#86EFAC] text-[#1A1A2E] px-8 py-3 rounded-lg text-center min-w-[200px]">
                SUPERVISOR
              </div>
              <div className="w-0.5 h-8 bg-gray-300"></div>
              <div className="bg-white border-2 border-[#22C55E] text-[#15803D] px-8 py-3 rounded-lg text-center min-w-[200px]">
                ASSOCIATED
              </div>
              <div className="w-0.5 h-8 bg-gray-300"></div>
              <div className="grid grid-cols-7 gap-3">
                {[
                  "KASIR",
                  "FRESH",
                  "GROCERY",
                  "ACCOUNTING",
                  "IT",
                  "SATPAM",
                  "LOSS PREVENTION",
                ].map((pos, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F0FDF4] border border-[#22C55E] text-[#15803D] px-4 py-3 rounded-lg text-center text-sm"
                  >
                    {pos}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visi & Misi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#22C55E] to-[#15803D] text-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl mb-4">VISI</h3>
              <p className="leading-relaxed">
                Menjadi perusahaan retail modern lokal terkemuka di Sulawesi
                Utara yang memberikan kualitas produk terbaik dengan harga
                terjangkau, serta mendukung kemajuan masyarakat dan perekonomian
                lokal.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm">
              <h3 className="text-xl text-[#1A1A2E] mb-4">MISI</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                <li>
                  Menyediakan produk-produk berkualitas yang memenuhi kebutuhan
                  masyarakat sehari-hari
                </li>
                <li>
                  Mengembangkan sistem operasional yang efisien dan berbasis
                  teknologi informasi
                </li>
                <li>
                  Memberikan pelayanan terbaik kepada pelanggan di seluruh
                  cabang
                </li>
                <li>
                  Membangun ekosistem bisnis yang berkelanjutan dan berdampak
                  positif bagi komunitas lokal
                </li>
                <li>
                  Mengelola sumber daya manusia secara profesional untuk
                  mendukung pertumbuhan perusahaan
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* SCOPE & OBJECTIVE */}
        <section id="scope">
          <h2 className="text-3xl text-[#1A1A2E] mb-6">
            Ruang Lingkup & Tujuan Audit
          </h2>

          {/* Scope Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: Database,
                title: "Sistem ERP Navision",
                desc: "Sistem paling penting untuk mengelola data operasional termasuk data barang, promo, inventaris, dan proses pemusnahan barang (shrinkage/stringkits). Dikelola dan diupdate dari pusat Jakarta.",
              },
              {
                icon: ShoppingCart,
                title: "Sistem POS (Point of Sale)",
                desc: "Sistem kasir yang digunakan untuk transaksi penjualan setiap hari. Sistem paling kritis — operasional toko tidak dapat berjalan jika sistem POS mati. Sering terganggu akibat listrik tidak stabil.",
              },
              {
                icon: Shield,
                title: "Manajemen Keamanan Sistem",
                desc: "Meninjau kebijakan akses pengguna, termasuk penggunaan password yang saat ini hanya 4 digit dan tidak pernah diganti secara berkala. Tidak ada kebijakan keamanan tertulis.",
              },
              {
                icon: Server,
                title: "Infrastruktur & Stabilitas Teknis",
                desc: "Penilaian stabilitas server dan listrik yang sering menyebabkan gangguan sistem, prosedur pemeliharaan (maintenance), serta manajemen update sistem yang dilakukan tiba-tiba dari pusat tanpa jadwal.",
              },
              {
                icon: FileText,
                title: "Tata Kelola & Dokumentasi",
                desc: "Mengevaluasi ketergantungan operasional pada instruksi lisan karena belum adanya SOP tertulis. Semua kebijakan disampaikan secara verbal oleh kepala toko atau tim IT.",
              },
              {
                icon: HardDrive,
                title: "Prosedur Backup Data",
                desc: "Meninjau efektivitas proses pencadangan data yang saat ini dilakukan manual 1 bulan sekali oleh IT shift pagi. Data disimpan di harddisk fisik di ruangan toko tanpa off-site backup.",
              },
            ].map((scope, idx) => {
              const Icon = scope.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="bg-[#22C55E]/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-[#15803D]" />
                    </div>
                    <h3 className="text-[#1A1A2E] flex-1">{scope.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {scope.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              {
                title: "Identifikasi Risiko & Kelemahan",
                desc: "Menemukan celah keamanan atau potensi kegagalan pada sistem informasi yang digunakan saat ini di TruFarm Airmadidi",
              },
              {
                title: "Meningkatkan Keandalan & Stabilitas",
                desc: "Memastikan operasional toko tetap berjalan lancar tanpa terganggu oleh kendala teknis seperti sistem yang lambat, listrik tidak stabil, atau pembaruan mendadak dari pusat",
              },
              {
                title: "Penyusunan Standardisasi Operasional",
                desc: "Menyediakan SOP sistem informasi yang jelas dan tertulis untuk mengurangi ketergantungan pada intervensi manusia secara lisan dan meminimalkan human error",
              },
              {
                title: "Evaluasi Pengendalian Internal",
                desc: "Menilai kecukupan dan efektivitas pengendalian pada proses pengelolaan data usaha, mulai dari input promo, manajemen inventaris, hingga laporan penjualan ke manajemen pusat",
              },
            ].map((obj, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] text-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-lg mb-2">
                  Objective {idx + 1} — {obj.title}
                </h3>
                <p className="text-sm text-blue-50 leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Rumusan Masalah */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm">
            <h3 className="text-lg text-[#1A1A2E] mb-4">Rumusan Masalah</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                Bagaimana kondisi keamanan sistem informasi di TruFarm Airmadidi
                saat ini?
              </li>
              <li>
                Bagaimana penerapan NIST CSF dalam menganalisis keamanan sistem
                di TruFarm Airmadidi?
              </li>
              <li>
                Apa saja kesenjangan (gap) dan rekomendasi peningkatan keamanan
                sistem?
              </li>
            </ol>
          </div>
        </section>

        {/* RISK REGISTER */}
        <section id="risk-register">
          <RiskRegisterTable />
        </section>

        {/* RISK MATRIX */}
        <section id="risk-matrix">
          <h2 className="text-3xl text-[#1A1A2E] mb-2">
            Risk Matrix — TruFarm Airmadidi
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Pemetaan risiko berdasarkan skor Risk Level = Impact × Likelihood
          </p>
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-sm">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full">
                {/* Matrix grid: rows = Likelihood (5→1), cols = Impact (1→5) */}
                <div className="flex gap-4 items-stretch">
                  {/* Y-axis label */}
                  <div className="flex items-center">
                    <div
                      className="text-sm text-gray-600 transform -rotate-90 whitespace-nowrap origin-center"
                      style={{ width: "120px", marginLeft: "-40px" }}
                    >
                      ← Likelihood (1–5) →
                    </div>
                  </div>
                  <div className="flex-1">
                    {/* Column headers */}
                    <div
                      className="grid gap-1 mb-1"
                      style={{ gridTemplateColumns: "60px repeat(5, 1fr)" }}
                    >
                      <div />
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="text-center text-xs text-gray-500 pb-1"
                        >
                          Impact {i}
                        </div>
                      ))}
                    </div>
                    {/* Rows: likelihood 5 → 1 */}
                    {[5, 4, 3, 2, 1].map((lh) => (
                      <div
                        key={lh}
                        className="grid gap-1 mb-1"
                        style={{ gridTemplateColumns: "60px repeat(5, 1fr)" }}
                      >
                        <div className="flex items-center justify-end pr-2 text-xs text-gray-500">
                          L = {lh}
                        </div>
                        {[1, 2, 3, 4, 5].map((imp) => {
                          const score = lh * imp;
                          const info = getRiskInfo(score);
                          // Which risks fall here?
                          const risksHere = [
                            { id: "R-01", l: 3, i: 4 },
                            { id: "R-02", l: 4, i: 3 },
                            { id: "R-03", l: 3, i: 4 },
                            { id: "R-04", l: 3, i: 4 },
                            { id: "R-05", l: 3, i: 3 },
                            { id: "R-06", l: 3, i: 4 },
                            { id: "R-07", l: 4, i: 4 },
                            { id: "R-08", l: 3, i: 4 },
                            { id: "R-09", l: 2, i: 4 },
                            { id: "R-10", l: 3, i: 4 },
                          ]
                            .filter((r) => r.l === lh && r.i === imp)
                            .map((r) => r.id);
                          return (
                            <div
                              key={imp}
                              className={`${info.bgClass} bg-opacity-80 h-16 rounded-lg flex flex-wrap items-center justify-center gap-1 p-1`}
                            >
                              <span className="text-white text-xs opacity-60">
                                {score}
                              </span>
                              {risksHere.map((r) => (
                                <span
                                  key={r}
                                  className="bg-white/90 text-gray-800 text-[10px] px-1.5 py-0.5 rounded font-mono"
                                >
                                  {r}
                                </span>
                              ))}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                    <div className="text-center text-sm text-gray-500 pt-2">
                      ← Impact (1–5) →
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Legend */}
            <div className="flex flex-wrap gap-6 justify-center mt-6 pt-6 border-t border-gray-200">
              {[
                { label: "Critical (15–25)", color: "bg-[#EF4444]" },
                { label: "High (10–14)", color: "bg-[#F59E0B]" },
                { label: "Moderate (5–9)", color: "bg-[#EAB308]" },
                { label: "Low (1–4)", color: "bg-[#22C55E]" },
              ].map(({ label, color }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className={`w-4 h-4 ${color} rounded`} />
                  <span className="text-sm text-gray-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NIST CSF */}
        <section id="nist">
          <h2 className="text-3xl text-[#1A1A2E] mb-3">
            Analisis NIST Cybersecurity Framework 2.0
          </h2>
          <p className="text-gray-600 mb-6">
            Berdasarkan hasil wawancara 10 Maret 2026 dengan Store Manager & IT
            Management
          </p>

          {/* Skor Keseluruhan */}
          <div className="bg-gradient-to-br from-[#EF4444] to-[#DC2626] text-white rounded-xl p-8 mb-8 shadow-lg">
            <div className="text-center">
              <p className="text-lg mb-2">Skor Keseluruhan NIST CSF</p>
              <p className="text-5xl mb-2">1.4/5</p>
              <p className="text-xl">
                Tingkat Maturity:{" "}
                <span className="bg-white/20 px-4 py-2 rounded-lg">
                  INITIAL
                </span>
              </p>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-sm mb-8">
            <div className="space-y-6">
              {nistScores.map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm px-3 py-1 bg-gray-100 rounded">
                        {item.code}
                      </span>
                      <span className="text-[#1A1A2E]">{item.name}</span>
                      <span className="text-xs text-gray-500">
                        ({item.level})
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {item.score}/{item.max}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${(item.score / item.max) * 100}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Maturity Level Legend */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm mb-8">
            <h3 className="text-lg text-[#1A1A2E] mb-4">
              Keterangan Tingkat Maturity
            </h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>1 = Initial:</strong> Ad hoc, tidak terdokumentasi,
                bergantung individu
              </p>
              <p>
                <strong>2 = Developing:</strong> Sebagian diterapkan tapi belum
                konsisten
              </p>
              <p>
                <strong>3 = Defined:</strong> Proses terdokumentasi dan
                diterapkan secara konsisten
              </p>
              <p>
                <strong>4 = Managed:</strong> Diukur dan dimonitor secara aktif
              </p>
              <p>
                <strong>5 = Optimized:</strong> Proses continuous improvement
                berjalan penuh
              </p>
            </div>
          </div>
        </section>

        {/* STRENGTH & WEAKNESS */}
        <section id="swot">
          <h2 className="text-3xl text-[#1A1A2E] mb-6">
            Kekuatan & Area Perbaikan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Strengths */}
            <div>
              <h3 className="text-xl text-[#22C55E] mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Strengths (Kekuatan)
              </h3>
              <div className="space-y-3">
                {strengths.map((str, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-l-4 border-[#22C55E] rounded-lg p-4 shadow-sm"
                  >
                    <p className="text-sm text-gray-700">{str}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Weaknesses */}
            <div>
              <h3 className="text-xl text-[#EF4444] mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6" />
                Weakness (Area Perbaikan)
              </h3>
              <div className="space-y-3">
                {weaknesses.map((weak, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-l-4 border-[#EF4444] rounded-lg p-4 shadow-sm"
                  >
                    <p className="text-sm text-gray-700">{weak}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* REKOMENDASI */}
        <section id="rekomendasi">
          <RecommendationCards />
        </section>

        {/* FOOTER */}
        <footer className="bg-[#1A1A2E] text-white rounded-xl p-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg mb-3">Informasi Audit</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <strong>Auditor:</strong> Mahasiswa Universitas Klabat — Mata
                  Kuliah Information System Audit - A
                </p>
                <p>
                  <strong>Tim:</strong> Brendon Davidson Kulon (Ketua), Aiko
                  Hanako Lasut, Jonathan Reinald Lapian, Carolina Pears Pamela
                  Langi, Fiktor Retno Lobbu
                </p>
                <p>
                  <strong>Tanggal audit lapangan:</strong> 10 Maret 2026
                </p>
                <p>
                  <strong>Lokasi:</strong> TruFarm Airmadidi, Sulawesi Utara
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg mb-3">Metode & Framework</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <strong>Framework:</strong> NIST Cybersecurity Framework (CSF)
                  2.0
                </p>
                <p>
                  <strong>Metode:</strong> Wawancara terstruktur + Observasi
                  langsung + Dokumentasi
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-xs text-gray-400 italic">
              Dashboard ini dibuat berdasarkan hasil wawancara dan observasi
              lapangan. Data bersifat kualitatif dan tidak mencakup implementasi
              teknis secara langsung.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Helper function to determine risk level
function getRiskInfo(score: number) {
  if (score >= 15) return { bgClass: "bg-[#EF4444]" };
  if (score >= 10) return { bgClass: "bg-[#F59E0B]" };
  if (score >= 5) return { bgClass: "bg-[#EAB308]" };
  return { bgClass: "bg-[#22C55E]" };
}
