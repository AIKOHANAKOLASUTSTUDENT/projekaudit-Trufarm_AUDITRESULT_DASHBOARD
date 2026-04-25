import React from 'react';
import { BarChart } from 'lucide-react';

const assessmentData = [
  {
    domain: 'Govern (GV)',
    survey: [
      'Peran IT Toko dan koordinasi dengan IT Pusat sudah jelas.',
      'Ada arahan lisan terkait penggunaan sistem POS.',
      'Tidak ada kebijakan keamanan tertulis atau SK formal.'
    ],
    assessment: 'Perlu Perbaikan (Skor: 1.75/5)',
    score: 1.75,
    keterangan: 'Governance berjalan secara informal, tetapi belum terdokumentasi dan belum memiliki kebijakan formal.'
  },
  {
    domain: 'Identify (ID)',
    survey: [
      'Inventaris perangkat keras (komputer, UPS) tersedia.',
      'Identifikasi risiko dilakukan secara reaktif saat kendala muncul.',
      'Inventaris perangkat lunak belum terdokumentasi lengkap.'
    ],
    assessment: 'Perlu Perbaikan (Skor: 1.67/5)',
    score: 1.67,
    keterangan: 'Identifikasi aset fisik baik, namun manajemen risiko dan aset digital belum terstruktur.'
  },
  {
    domain: 'Protect (PR)',
    survey: [
      'Penggunaan UPS untuk stabilitas daya listrik.',
      'Pembatasan akses kasir sudah diterapkan.',
      'Kebijakan kata sandi lemah (4 digit)',
      'Tidak ada pelatihan keamanan.'
    ],
    assessment: 'Perlu Perbaikan (Skor: 2.0/5)',
    score: 2.0,
    keterangan: 'Kontrol akses dasar sudah ada, namun proteksi data dan kesadaran pengguna masih rendah.'
  },
  {
    domain: 'Detect (DE)',
    survey: [
      'Pemantauan transaksi melalui log manual pada POS/Navision.',
      'Tidak ada peringatan otomatis.',
      'Belum ada log aktivitas sistem yang terpusat.'
    ],
    assessment: 'Kurang (Skor: 2.0/5)',
    score: 2.0,
    keterangan: 'Deteksi anomali sepenuhnya bergantung pada pengawasan manual staf IT.'
  },
  {
    domain: 'Respond (RS)',
    survey: [
      'Tim IT responsif menangani kendala jaringan/input data.',
      'Belum memiliki SOP penanganan insiden tertulis.',
      'Tidak ada templat pelaporan kronologi insiden formal.'
    ],
    assessment: 'Perlu Perbaikan (Skor: 2.0/5)',
    score: 2.0,
    keterangan: 'Respon terhadap gangguan cepat, namun prosesnya tidak terstandarisasi.'
  },
  {
    domain: 'Recover (RC)',
    survey: [
      'Pencadangan data dilakukan sebulan sekali ke media eksternal.',
      'Tidak ada Disaster Recovery Plan (DRP). Belum pernah dilakukan uji pemulihan (restore test).'
    ],
    assessment: 'Kurang (Skor: 2.0/5)',
    score: 2.0,
    keterangan: 'Strategi pemulihan sangat berisiko karena minimnya frekuensi cadangan dan rencana darurat.'
  }
];

export function NistCsfAssessment() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl text-[#1A1A2E] mb-2">Penilaian Keseluruhan (Overall Assessment)</h2>
          <p className="text-sm text-gray-600">Tabel 6.1 — Berdasarkan Framework NIST CSF 2.0</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-[#1A1A2E] text-white">
              <tr>
                <th className="px-4 py-3 font-medium whitespace-nowrap">Domain Keamanan (NIST CSF 2.0)</th>
                <th className="px-4 py-3 font-medium min-w-[250px]">Survey / Point (Temuan Lapangan)</th>
                <th className="px-4 py-3 font-medium min-w-[200px]">Assessment</th>
                <th className="px-4 py-3 font-medium min-w-[250px]">Keterangan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {assessmentData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 font-semibold align-top text-[#1A1A2E] whitespace-nowrap">
                    {item.domain}
                  </td>
                  <td className="px-4 py-4 align-top text-gray-600">
                    <ul className="list-disc pl-5 space-y-1">
                      {item.survey.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-4 align-top">
                    <div className="font-semibold text-gray-800 mb-2">{item.assessment.split(' (')[0]}</div>
                    <span className="inline-flex items-center justify-center px-2 py-1 rounded bg-blue-50 text-blue-700 text-xs font-medium border border-blue-200">
                      Skor: {item.score}/5
                    </span>
                  </td>
                  <td className="px-4 py-4 align-top text-gray-600">
                    {item.keterangan}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50 border-t-2 border-gray-200 font-semibold text-gray-800">
              <tr>
                <td colSpan={2} className="px-4 py-4 text-right">
                  Total Rata-Rata Skor
                </td>
                <td colSpan={2} className="px-4 py-4">
                  <div className="flex items-center gap-3 text-lg">
                    <span className="text-[#1A1A2E] font-bold">1.89</span>
                    <span className="text-sm font-semibold px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full border border-yellow-200">
                      Kategori : Partial
                    </span>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg shadow-sm flex gap-4 items-start">
        <div className="bg-blue-100 p-2 rounded-full shrink-0">
          <BarChart className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Kesimpulan Tingkat Kematangan</h3>
          <p className="text-sm text-blue-800 leading-relaxed text-justify">
            Tingkat kematangan keamanan sistem informasi TrueFarm Airmadidi berdasarkan NIST CSF 2.0 adalah <strong>1,89</strong> (antara Level 1: Partial dan Level 2: Risk Informed). Kesadaran risiko sudah ada, namun hampir seluruh fungsi (terutama Govern, Identify, Detect, dan Recover) belum terdokumentasi secara formal, belum terstandarisasi, dan masih bersifat reaktif. TrueFarm memerlukan peningkatan sistematis pada kebijakan tertulis, manajemen risiko, monitoring otomatis, SOP insiden, serta uji pemulihan data agar dapat mencapai tingkat kematangan yang lebih matang dan berkelanjutan.
          </p>
        </div>
      </div>
    </div>
  );
}
