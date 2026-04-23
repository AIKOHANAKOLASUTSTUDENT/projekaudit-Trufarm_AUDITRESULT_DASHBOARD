import {
  Database,
  Server,
  Shield,
  FileText,
  HardDrive,
  ShoppingCart,
} from "lucide-react";

export function ScopeObjective() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl text-[#1A1A2E] mb-2">
          Ruang Lingkup & Tujuan Audit
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Area yang dicakup dalam penilaian dan target yang ingin dicapai
        </p>
      </div>

      {/* Scope Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: Database,
            title: "Sistem ERP Navision",
            desc: "Sistem paling penting untuk mengelola data operasional termasuk data barang, promo, inventaris, dan proses pemusnahan barang. Dikelola dari pusat Jakarta.",
          },
          {
            icon: ShoppingCart,
            title: "Sistem POS (Point of Sale)",
            desc: "Sistem kasir untuk transaksi harian. Sistem paling kritis — operasional toko tidak dapat berjalan jika sistem POS mati. Rentan terhadap listrik tidak stabil.",
          },
          {
            icon: Shield,
            title: "Manajemen Keamanan Sistem",
            desc: "Meninjau kebijakan akses pengguna, termasuk password yang saat ini hanya 4 digit. Belum ada kebijakan keamanan tertulis yang mengatur otorisasi.",
          },
          {
            icon: Server,
            title: "Infrastruktur & Stabilitas",
            desc: "Penilaian server dan listrik yang sering memicu gangguan, prosedur maintenance, serta manajemen update sistem yang terkadang dilakukan tiba-tiba dari pusat.",
          },
          {
            icon: FileText,
            title: "Tata Kelola & Dokumentasi",
            desc: "Mengevaluasi ketergantungan operasional pada instruksi lisan karena minimnya SOP tertulis. Kebijakan seringkali hanya verbal dari kepala toko/IT.",
          },
          {
            icon: HardDrive,
            title: "Prosedur Backup Data",
            desc: "Meninjau efektivitas pencadangan data yang saat ini manual 1 bulan sekali. Data disimpan di harddisk fisik di ruangan toko tanpa perlindungan off-site.",
          },
        ].map((scope, idx) => {
          const Icon = scope.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-50 group-hover:bg-blue-100 transition-colors p-3 rounded-xl text-blue-600">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-[#1A1A2E] font-semibold text-lg flex-1 leading-tight mt-1">
                  {scope.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {scope.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Objectives */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm">
          <h3 className="text-xl text-[#1A1A2E] mb-6 font-semibold">Tujuan Audit (Objectives)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Identifikasi Risiko & Kelemahan",
                desc: "Menemukan celah keamanan atau potensi kegagalan pada sistem informasi yang digunakan saat ini.",
              },
              {
                title: "Meningkatkan Keandalan & Stabilitas",
                desc: "Memastikan operasional toko tetap berjalan lancar tanpa terganggu kendala teknis atau update mendadak.",
              },
              {
                title: "Penyusunan Standardisasi",
                desc: "Mendorong pembuatan SOP tertulis untuk mengurangi ketergantungan instruksi lisan & human error.",
              },
              {
                title: "Evaluasi Pengendalian Internal",
                desc: "Menilai kecukupan kontrol pada pengelolaan data, dari input promo hingga laporan ke manajemen.",
              },
            ].map((obj, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-5 border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                  <h4 className="font-medium text-[#1A1A2E] text-sm">
                    {obj.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-9">
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Rumusan Masalah */}
        <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2D4A] text-white rounded-xl p-6 shadow-sm">
          <h3 className="text-xl mb-6 font-semibold">Rumusan Masalah</h3>
          <div className="space-y-4">
            {[
              "Bagaimana kondisi keamanan sistem informasi di TruFarm Airmadidi saat ini?",
              "Bagaimana penerapan NIST CSF dalam menganalisis keamanan sistem?",
              "Apa saja kesenjangan (gap) dan rekomendasi peningkatan keamanan sistem yang optimal?",
            ].map((text, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
                  {idx + 1}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
