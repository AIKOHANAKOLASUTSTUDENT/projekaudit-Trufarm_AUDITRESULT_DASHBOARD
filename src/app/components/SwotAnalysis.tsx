import { CheckCircle, AlertCircle } from "lucide-react";

export function SwotAnalysis() {
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
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl text-[#1A1A2E] mb-2">
          Kekuatan & Area Perbaikan
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Ringkasan analisis kondisi internal tata kelola IT di TruFarm Airmadidi
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden flex flex-col">
          <div className="bg-[#F0FDF4] border-b border-[#BBF7D0] p-4 flex items-center gap-3">
            <div className="p-2 bg-[#22C55E] text-white rounded-lg">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-[#15803D] text-lg">Strengths</h3>
              <p className="text-xs text-[#166534]">Kekuatan Sistem Saat Ini</p>
            </div>
          </div>
          <div className="p-6 flex-1 bg-white">
            <ul className="space-y-4">
              {strengths.map((str, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-gray-700">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                  </div>
                  <span className="leading-relaxed">{str}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Weaknesses */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden flex flex-col">
          <div className="bg-[#FEF2F2] border-b border-[#FECACA] p-4 flex items-center gap-3">
            <div className="p-2 bg-[#EF4444] text-white rounded-lg">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-[#B91C1C] text-lg">Weaknesses</h3>
              <p className="text-xs text-[#991B1B]">Area yang Perlu Perbaikan</p>
            </div>
          </div>
          <div className="p-6 flex-1 bg-white">
            <ul className="space-y-4">
              {weaknesses.map((weak, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-gray-700">
                  <div className="flex-shrink-0 mt-0.5">
                    <AlertCircle className="w-4 h-4 text-[#EF4444]" />
                  </div>
                  <span className="leading-relaxed">{weak}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
