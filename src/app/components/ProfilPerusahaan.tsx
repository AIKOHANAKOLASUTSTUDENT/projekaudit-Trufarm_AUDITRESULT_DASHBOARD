import { CheckCircle } from "lucide-react";

export function ProfilPerusahaan() {
  const fotoTeam1 = "/interview1.jpeg";
  const fotoTeam2 = "/interview2.jpeg";

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl text-[#1A1A2E] mb-2">Profil Perusahaan</h2>
        <p className="text-sm text-gray-500 mb-6">Informasi umum mengenai PT TruFarm Indonesia dan operasionalnya</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Nama Perusahaan", value: "PT TruFarm Indonesia" },
          { label: "Jenis Usaha", value: "Retail Supermarket Modern Lokal" },
          { label: "Lokasi HQ", value: "Jakarta" },
          { label: "Tanggal Audit", value: "23 Februari 2026 & 10 Maret 2026" },
          { label: "Jumlah Cabang", value: "4 Cabang" },
          { label: "Total Karyawan", value: "60+ Karyawan" },
          { label: "Sistem Utama", value: "Microsoft Dynamics NAV + Talenta HRD" },
          { label: "Tim Auditor", value: "5 Mahasiswa Universitas Klabat — ISA-A" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-[#E2E8F0] p-4 shadow-sm"
          >
            <p className="text-xs text-gray-500 mb-1">{item.label}</p>
            <p className="text-sm font-medium text-[#1A1A2E]">{item.value}</p>
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
              className="px-4 py-2 bg-[#22C55E]/10 text-[#15803D] font-medium text-sm rounded-lg"
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
            <span key={idx} className="px-3 py-1 bg-gray-100 rounded-lg flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-gray-400" />
              {info}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visi & Misi */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#22C55E] to-[#15803D] text-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl mb-4 font-semibold">VISI</h3>
            <p className="leading-relaxed">
              Menjadi perusahaan retail modern lokal terkemuka di Sulawesi
              Utara yang memberikan kualitas produk terbaik dengan harga
              terjangkau, serta mendukung kemajuan masyarakat dan perekonomian
              lokal.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm">
            <h3 className="text-xl text-[#1A1A2E] mb-4 font-semibold">MISI</h3>
            <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700">
              <li className="pl-2">
                Menyediakan produk-produk berkualitas yang memenuhi kebutuhan
                masyarakat sehari-hari
              </li>
              <li className="pl-2">
                Mengembangkan sistem operasional yang efisien dan berbasis
                teknologi informasi
              </li>
              <li className="pl-2">
                Memberikan pelayanan terbaik kepada pelanggan di seluruh
                cabang
              </li>
              <li className="pl-2">
                Membangun ekosistem bisnis yang berkelanjutan dan berdampak
                positif bagi komunitas lokal
              </li>
              <li className="pl-2">
                Mengelola sumber daya manusia secara profesional untuk
                mendukung pertumbuhan perusahaan
              </li>
            </ol>
          </div>
        </div>

        {/* Struktur Organisasi */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm h-full">
          <h3 className="text-xl text-[#1A1A2E] mb-6 font-semibold text-center">
            Struktur Hierarki Toko
          </h3>
          <div className="flex flex-col items-center gap-3">
            <div className="bg-[#1A1A2E] text-white px-6 py-2.5 rounded-lg text-center w-full max-w-[240px] font-medium shadow-sm">
              AREA HEAD
            </div>
            <div className="w-0.5 h-4 bg-gray-300"></div>
            <div className="bg-[#15803D] text-white px-6 py-2.5 rounded-lg text-center w-full max-w-[240px] font-medium shadow-sm">
              STORE MANAGER
            </div>
            <div className="w-0.5 h-4 bg-gray-300"></div>
            <div className="bg-[#22C55E] text-white px-6 py-2.5 rounded-lg text-center w-full max-w-[240px] font-medium shadow-sm">
              ASISTEN MANAGER
            </div>
            <div className="w-0.5 h-4 bg-gray-300"></div>
            <div className="bg-[#86EFAC] text-[#1A1A2E] px-6 py-2.5 rounded-lg text-center w-full max-w-[240px] font-medium shadow-sm">
              SUPERVISOR
            </div>
            <div className="w-0.5 h-4 bg-gray-300"></div>
            <div className="bg-white border border-[#22C55E] text-[#15803D] px-6 py-2.5 rounded-lg text-center w-full max-w-[240px] font-medium shadow-sm">
              ASSOCIATED
            </div>
            <div className="w-0.5 h-4 bg-gray-300"></div>
            <div className="flex flex-wrap justify-center gap-2 max-w-[320px]">
              {[
                "KASIR",
                "FRESH",
                "GROCERY",
                "ACCOUNTING",
                "IT",
                "SATPAM",
                "LOSS PREV",
              ].map((pos, idx) => (
                <div
                  key={idx}
                  className="bg-[#F0FDF4] border border-[#BBF7D0] text-[#15803D] px-3 py-1.5 rounded-md text-center text-xs font-medium"
                >
                  {pos}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dokumentasi Foto Audit */}
      <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm mb-6">
        <div className="mb-4">
          <h3 className="text-xl text-[#1A1A2E] font-semibold">
            Dokumentasi Audit Lapangan
          </h3>
          <p className="text-sm text-gray-500">
            Lokasi: TruFarm Airmadidi, Sulawesi Utara | Tanggal: 23 Februari 2026 & 10 Maret 2026
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center group">
            <div className="rounded-xl overflow-hidden border border-gray-200 mb-3 relative aspect-video bg-gray-100">
              <img
                src={fotoTeam1}
                alt="Interview Store Manager"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-sm font-medium">Sesi wawancara mendalam</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-800">
              Interview dengan Store Manager
            </p>
          </div>
          <div className="text-center group">
            <div className="rounded-xl overflow-hidden border border-gray-200 mb-3 relative aspect-video bg-gray-100">
              <img
                src={fotoTeam2}
                alt="Interview IT Management"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-sm font-medium">Diskusi teknis infrastruktur</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-800">
              Interview dengan IT Management & Tim Audit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
