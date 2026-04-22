import { useState } from 'react';
import { Plus, X, Edit2, Check, Info } from 'lucide-react';

interface Risk {
  id: string;
  asset: string;
  threat: string;
  vulnerability: string;
  impactDesc: string;
  impactScore: number;    // 1–5
  likelihoodScore: number; // 1–5
  mitigation: string;
}

// Risk Score = impactScore × likelihoodScore
// 1–4   → LOW
// 5–9   → MODERATE
// 10–14 → HIGH
// 15–25 → CRITICAL
function getRiskInfo(score: number): { label: string; bgClass: string; textClass: string; borderClass: string } {
  if (score >= 15) return { label: 'CRITICAL', bgClass: 'bg-[#EF4444]', textClass: 'text-white', borderClass: 'border-[#EF4444]' };
  if (score >= 10) return { label: 'HIGH',     bgClass: 'bg-[#F59E0B]', textClass: 'text-white', borderClass: 'border-[#F59E0B]' };
  if (score >= 5)  return { label: 'MODERATE', bgClass: 'bg-[#EAB308]', textClass: 'text-white', borderClass: 'border-[#EAB308]' };
  return               { label: 'LOW',      bgClass: 'bg-[#22C55E]', textClass: 'text-white', borderClass: 'border-[#22C55E]' };
}

function getLikelihoodLabel(score: number): string {
  if (score >= 5) return 'Almost Certain';
  if (score >= 4) return 'Likely';
  if (score >= 3) return 'Possible';
  if (score >= 2) return 'Unlikely';
  return 'Rare';
}

function getImpactLabel(score: number): string {
  if (score >= 5) return 'Catastrophic';
  if (score >= 4) return 'Major';
  if (score >= 3) return 'Moderate';
  if (score >= 2) return 'Minor';
  return 'Insignificant';
}

const initialRisks: Risk[] = [
  {
    id: 'R-01',
    asset: 'Data Transaksi',
    threat: 'Kesalahan input data',
    vulnerability: 'Tidak ada SOP tertulis dan pelatihan karyawan terbatas (hanya 3 hari untuk kasir)',
    impactDesc: 'Data tidak akurat — kesalahan data promo pernah terjadi dan berjalan terus tanpa terdeteksi',
    impactScore: 4,
    likelihoodScore: 3,
    mitigation: 'Buat SOP input data tertulis; tingkatkan durasi dan materi pelatihan karyawan; tambahkan validasi input di sistem'
  },
  {
    id: 'R-02',
    asset: 'Sistem POS/Kasir',
    threat: 'Gangguan sistem operasional',
    vulnerability: 'Monitoring masih manual melalui log; tidak ada sistem alert otomatis; listrik tidak stabil',
    impactDesc: 'Transaksi terganggu — sistem POS adalah sistem paling kritis dan operasional berhenti total jika mati',
    impactScore: 3,
    likelihoodScore: 4,
    mitigation: 'Implementasi monitoring otomatis dan alert sistem; optimalkan UPS; buat prosedur shutdown darurat tertulis'
  },
  {
    id: 'R-03',
    asset: 'Sistem Navision (ERP)',
    threat: 'Kegagalan sistem akibat update mendadak',
    vulnerability: 'Update sistem dari pusat dilakukan tiba-tiba tanpa jadwal; tidak ada koordinasi sebelumnya',
    impactDesc: 'Operasional terganggu — sistem Navision tidak dapat diakses selama proses update berlangsung',
    impactScore: 4,
    likelihoodScore: 3,
    mitigation: 'Jadwalkan update sistem secara terstruktur di luar jam operasional; koordinasikan dengan pusat Jakarta'
  },
  {
    id: 'R-04',
    asset: 'Jaringan LAN',
    threat: 'Gangguan jaringan',
    vulnerability: 'Tidak ada sistem monitoring jaringan; hanya menggunakan kabel LAN tanpa backup koneksi',
    impactDesc: 'Sistem tidak dapat diakses; seluruh operasional berbasis sistem terhenti',
    impactScore: 4,
    likelihoodScore: 3,
    mitigation: 'Tambahkan monitoring jaringan real-time; sediakan backup koneksi internet (misalnya koneksi mobile/LTE sebagai failover)'
  },
  {
    id: 'R-05',
    asset: 'Infrastruktur Listrik',
    threat: 'Gangguan listrik',
    vulnerability: 'Ketergantungan pada listrik PLN; server harus dimatikan manual sebelum UPS habis; bergantung pada kehadiran IT shift pagi',
    impactDesc: 'Sistem mati; server berisiko rusak jika tidak dimatikan tepat waktu sebelum UPS habis',
    impactScore: 3,
    likelihoodScore: 3,
    mitigation: 'Optimalkan prosedur shutdown server otomatis sebelum UPS habis; tambah kapasitas UPS; kurangi ketergantungan pada kehadiran IT pagi'
  },
  {
    id: 'R-06',
    asset: 'Data Backup',
    threat: 'Kehilangan data',
    vulnerability: 'Backup tidak konsisten (bergantung shift IT); hanya 1x per bulan; disimpan di harddisk fisik di ruangan toko; tidak ada off-site backup',
    impactDesc: 'Kehilangan data penting jika terjadi pencurian, kebakaran, atau kerusakan fisik di toko',
    impactScore: 4,
    likelihoodScore: 3,
    mitigation: 'Jadwalkan backup harian secara otomatis; implementasi cloud backup; simpan salinan off-site; uji restore backup secara berkala minimal 1x/kuartal'
  },
  {
    id: 'R-07',
    asset: 'Sistem Akses / Akun Pengguna',
    threat: 'Akses tidak sah ke sistem',
    vulnerability: 'Password hanya 4 digit bebas untuk crew/kasir; tidak pernah diganti; tidak ada audit login; tidak ada informasi kapan terakhir login',
    impactDesc: 'Penyalahgunaan akun; akses tidak sah ke data transaksi dan inventaris; potensi credential stuffing sangat tinggi',
    impactScore: 4,
    likelihoodScore: 4,
    mitigation: 'Wajibkan password minimal 8 karakter alfanumerik; rotasi password minimal tiap 90 hari; aktifkan audit log login; nonaktifkan akun secara otomatis setelah tidak aktif'
  },
  {
    id: 'R-08',
    asset: 'SDM (Sumber Daya Manusia IT)',
    threat: 'Human error / Single point of failure',
    vulnerability: 'Tim IT hanya 1 orang per toko; pelatihan keamanan tidak menyeluruh (hanya manager yang dilatih IT, kasir hanya 3 hari); tidak ada buku panduan tertulis',
    impactDesc: 'Jika IT berhalangan, operasional teknis toko dapat lumpuh total; kesalahan operasional meningkat',
    impactScore: 4,
    likelihoodScore: 3,
    mitigation: 'Buat buku panduan (runbook) tertulis untuk troubleshoot dasar; latih asisten atau supervisor sebagai backup IT; koordinasi antar IT toko tetap dipertahankan'
  },
  {
    id: 'R-09',
    asset: 'Server Lokal',
    threat: 'Kerusakan server',
    vulnerability: 'Tidak ada Disaster Recovery Plan (DRP) formal; pernah terjadi masalah server di Manado',
    impactDesc: 'Sistem tidak dapat digunakan; data tidak dapat diakses; seluruh operasional berhenti',
    impactScore: 4,
    likelihoodScore: 2,
    mitigation: 'Susun Disaster Recovery Plan (DRP) formal; lakukan maintenance server berkala; uji pemulihan sistem secara periodik'
  },
  {
    id: 'R-10',
    asset: 'Sistem Informasi Keseluruhan',
    threat: 'Tidak ada audit sistem',
    vulnerability: 'Tidak ada risk assessment formal; tidak ada risk register; tidak ada evaluasi berkala',
    impactDesc: 'Risiko tidak teridentifikasi dan tidak tertangani; potensi gangguan besar tidak terdeteksi sejak dini',
    impactScore: 4,
    likelihoodScore: 3,
    mitigation: 'Lakukan audit sistem informasi secara berkala (minimal 1x/tahun); bentuk risk register dan evaluasi berkala; tunjuk penanggung jawab manajemen risiko IT'
  }
];

interface FormState {
  asset: string;
  threat: string;
  vulnerability: string;
  impactDesc: string;
  impactScore: number;
  likelihoodScore: number;
  mitigation: string;
}

const emptyForm: FormState = {
  asset: '',
  threat: '',
  vulnerability: '',
  impactDesc: '',
  impactScore: 3,
  likelihoodScore: 3,
  mitigation: ''
};

// Spinner component for score input
function ScoreInput({
  value,
  onChange,
  label,
}: {
  value: number;
  onChange: (v: number) => void;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xs text-gray-400">{label}</span>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => onChange(Math.max(1, value - 1))}
          className="w-6 h-6 rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
        >
          −
        </button>
        <input
          type="number"
          min={1}
          max={5}
          value={value}
          onChange={(e) => {
            const v = parseInt(e.target.value);
            if (!isNaN(v) && v >= 1 && v <= 5) onChange(v);
          }}
          className="w-10 h-7 text-center border border-gray-300 rounded text-sm focus:outline-none focus:border-[#1D9E75] font-bold"
        />
        <button
          type="button"
          onClick={() => onChange(Math.min(5, value + 1))}
          className="w-6 h-6 rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}

export function RiskRegisterTable() {
  const [risks, setRisks] = useState<Risk[]>(initialRisks);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormState>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const updateRiskScore = (id: string, field: 'likelihoodScore' | 'impactScore', value: number) => {
    setRisks(risks.map(r => r.id === id ? { ...r, [field]: value } : r));
  };

  const deleteRisk = (id: string) => {
    setRisks(risks.filter(r => r.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRisk: Risk = {
      id: `R-${String(risks.length + 1).padStart(2, '0')}`,
      ...formData
    };
    setRisks([...risks, newRisk]);
    setFormData(emptyForm);
    setShowForm(false);
  };

  // Summary counts
  const summary = risks.reduce((acc, r) => {
    const score = r.impactScore * r.likelihoodScore;
    const { label } = getRiskInfo(score);
    acc[label] = (acc[label] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div>
      {/* Header */}
      <div className="flex items-start justify-between mb-6 gap-4 flex-wrap">
        <div>
          <h2 className="text-3xl text-[#1A1A2E] mb-1">Risk Register — Identifikasi Risiko Sistem Informasi TruFarm</h2>
          <p className="text-sm text-gray-500">
            Risk Score = <strong>Impact (1–5)</strong> × <strong>Likelihood (1–5)</strong>&nbsp;|&nbsp;
            <span className="text-[#22C55E]">Low: 1–4</span>&nbsp;·&nbsp;
            <span className="text-[#EAB308]">Moderate: 5–9</span>&nbsp;·&nbsp;
            <span className="text-[#F59E0B]">High: 10–14</span>&nbsp;·&nbsp;
            <span className="text-[#EF4444]">Critical: 15–25</span>
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-[#1D9E75] hover:bg-[#15805E] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors flex-shrink-0"
        >
          <Plus className="w-5 h-5" />
          Tambah Risiko
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'CRITICAL', count: summary['CRITICAL'] || 0, bg: 'bg-[#FEF2F2]', border: 'border-[#EF4444]', text: 'text-[#EF4444]', dot: 'bg-[#EF4444]' },
          { label: 'HIGH',     count: summary['HIGH'] || 0,     bg: 'bg-[#FFFBEB]', border: 'border-[#F59E0B]', text: 'text-[#F59E0B]', dot: 'bg-[#F59E0B]' },
          { label: 'MODERATE', count: summary['MODERATE'] || 0, bg: 'bg-[#FEFCE8]', border: 'border-[#EAB308]', text: 'text-[#CA8A04]', dot: 'bg-[#EAB308]' },
          { label: 'LOW',      count: summary['LOW'] || 0,      bg: 'bg-[#F0FDF4]', border: 'border-[#22C55E]', text: 'text-[#15803D]', dot: 'bg-[#22C55E]' },
        ].map(({ label, count, bg, border, text, dot }) => (
          <div key={label} className={`${bg} border ${border} rounded-xl p-4 flex items-center gap-3`}>
            <div className={`w-3 h-3 rounded-full ${dot}`} />
            <div>
              <p className={`text-2xl font-bold ${text}`}>{count}</p>
              <p className={`text-xs ${text}`}>{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Form */}
      {showForm && (
        <div className="bg-white rounded-xl border-2 border-[#1D9E75] p-6 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg text-[#1A1A2E]">Tambah Risiko Baru</h3>
            <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Aset</label>
                <input
                  type="text" required
                  value={formData.asset}
                  onChange={(e) => setFormData({ ...formData, asset: e.target.value })}
                  placeholder="Contoh: Sistem POS"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1D9E75] text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Ancaman (Threat)</label>
                <input
                  type="text" required
                  value={formData.threat}
                  onChange={(e) => setFormData({ ...formData, threat: e.target.value })}
                  placeholder="Contoh: Gangguan sistem"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1D9E75] text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Kerentanan (Vulnerability)</label>
              <textarea
                required
                value={formData.vulnerability}
                onChange={(e) => setFormData({ ...formData, vulnerability: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1D9E75] text-sm"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Deskripsi Dampak (Impact Description)</label>
              <textarea
                required
                value={formData.impactDesc}
                onChange={(e) => setFormData({ ...formData, impactDesc: e.target.value })}
                placeholder="Jelaskan dampak yang ditimbulkan..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1D9E75] text-sm"
                rows={2}
              />
            </div>

            {/* Score inputs + preview */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <p className="text-sm text-gray-600 mb-4">Tentukan Nilai Skor (1 = terendah, 5 = tertinggi)</p>
              <div className="flex flex-wrap items-center gap-8">
                <div>
                  <p className="text-xs text-gray-500 mb-2 text-center">Likelihood (Kemungkinan)</p>
                  <ScoreInput
                    value={formData.likelihoodScore}
                    onChange={(v) => setFormData({ ...formData, likelihoodScore: v })}
                    label={getLikelihoodLabel(formData.likelihoodScore)}
                  />
                </div>
                <div className="text-2xl text-gray-400 mt-4">×</div>
                <div>
                  <p className="text-xs text-gray-500 mb-2 text-center">Impact (Dampak)</p>
                  <ScoreInput
                    value={formData.impactScore}
                    onChange={(v) => setFormData({ ...formData, impactScore: v })}
                    label={getImpactLabel(formData.impactScore)}
                  />
                </div>
                <div className="text-2xl text-gray-400 mt-4">=</div>
                <div className="mt-4">
                  {(() => {
                    const score = formData.impactScore * formData.likelihoodScore;
                    const info = getRiskInfo(score);
                    return (
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-3xl font-bold text-[#0C447C]">{score}</span>
                        <span className={`px-4 py-1 rounded-full text-xs ${info.bgClass} ${info.textClass}`}>
                          {info.label}
                        </span>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Usulan Kontrol / Mitigasi</label>
              <textarea
                required
                value={formData.mitigation}
                onChange={(e) => setFormData({ ...formData, mitigation: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1D9E75] text-sm"
                rows={2}
              />
            </div>

            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#1D9E75] hover:bg-[#15805E] text-white rounded-lg transition-colors text-sm"
              >
                Simpan Risiko
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0C447C] text-white">
                <th className="px-4 py-3 text-left text-xs whitespace-nowrap">Risk ID</th>
                <th className="px-4 py-3 text-left text-xs whitespace-nowrap">Aset</th>
                <th className="px-4 py-3 text-left text-xs whitespace-nowrap">Ancaman (Threat)</th>
                <th className="px-4 py-3 text-left text-xs whitespace-nowrap">Kerentanan (Vulnerability)</th>
                <th className="px-4 py-3 text-left text-xs whitespace-nowrap">
                  <div>Dampak (Impact)</div>
                  <div className="text-[10px] text-blue-200 font-normal">Deskripsi + Nilai</div>
                </th>
                <th className="px-4 py-3 text-center text-xs whitespace-nowrap">
                  <div>Likelihood</div>
                  <div className="text-[10px] text-blue-200 font-normal">Frekuensi (1–5)</div>
                </th>
                <th className="px-4 py-3 text-center text-xs whitespace-nowrap">
                  <div className="flex items-center gap-1 justify-center">
                    Risk Level
                    <button
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                      className="text-blue-200 hover:text-white relative"
                    >
                      <Info className="w-3 h-3" />
                      {showTooltip && (
                        <div className="absolute right-0 top-5 bg-[#1A1A2E] text-white text-xs rounded-lg p-3 w-44 z-10 shadow-xl text-left">
                          <p className="mb-1">Score = Impact × Likelihood</p>
                          <p>1–4 → LOW</p>
                          <p>5–9 → MODERATE</p>
                          <p>10–14 → HIGH</p>
                          <p>15–25 → CRITICAL</p>
                        </div>
                      )}
                    </button>
                  </div>
                  <div className="text-[10px] text-blue-200 font-normal">Score = I × L</div>
                </th>
                <th className="px-4 py-3 text-left text-xs whitespace-nowrap">Usulan Mitigasi</th>
                <th className="px-4 py-3 text-center text-xs whitespace-nowrap">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {risks.map((risk, idx) => {
                const riskScore = risk.impactScore * risk.likelihoodScore;
                const riskInfo = getRiskInfo(riskScore);
                const isEven = idx % 2 === 0;

                return (
                  <tr key={risk.id} className={`${isEven ? 'bg-white' : 'bg-[#F8FAFC]'} hover:bg-[#EFF8F4] transition-colors`}>
                    {/* Risk ID */}
                    <td className="px-4 py-4">
                      <span className="bg-[#0C447C] text-white text-xs px-2 py-1 rounded font-mono">{risk.id}</span>
                    </td>

                    {/* Aset */}
                    <td className="px-4 py-4">
                      <span className="text-[#1A1A2E] text-xs whitespace-nowrap">{risk.asset}</span>
                    </td>

                    {/* Threat */}
                    <td className="px-4 py-4 text-gray-600 text-xs max-w-[140px]">{risk.threat}</td>

                    {/* Vulnerability */}
                    <td className="px-4 py-4 text-gray-600 text-xs max-w-[200px] leading-relaxed">{risk.vulnerability}</td>

                    {/* Impact = Description + Score */}
                    <td className="px-4 py-4 max-w-[200px]">
                      <p className="text-gray-600 text-xs leading-relaxed mb-2">{risk.impactDesc}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-400">Nilai Impact:</span>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => updateRiskScore(risk.id, 'impactScore', Math.max(1, risk.impactScore - 1))}
                            className="w-5 h-5 rounded bg-gray-100 hover:bg-[#1D9E75] hover:text-white flex items-center justify-center text-gray-600 text-xs transition-colors"
                          >−</button>
                          <span className="w-7 h-6 flex items-center justify-center bg-[#0C447C] text-white text-xs rounded font-bold">
                            {risk.impactScore}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateRiskScore(risk.id, 'impactScore', Math.min(5, risk.impactScore + 1))}
                            className="w-5 h-5 rounded bg-gray-100 hover:bg-[#1D9E75] hover:text-white flex items-center justify-center text-gray-600 text-xs transition-colors"
                          >+</button>
                        </div>
                        <span className="text-[10px] text-gray-400 italic">{getImpactLabel(risk.impactScore)}</span>
                      </div>
                    </td>

                    {/* Likelihood Score */}
                    <td className="px-4 py-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => updateRiskScore(risk.id, 'likelihoodScore', Math.max(1, risk.likelihoodScore - 1))}
                            className="w-5 h-5 rounded bg-gray-100 hover:bg-[#1D9E75] hover:text-white flex items-center justify-center text-gray-600 text-xs transition-colors"
                          >−</button>
                          <span className="w-8 h-7 flex items-center justify-center bg-[#1D9E75] text-white text-sm rounded font-bold">
                            {risk.likelihoodScore}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateRiskScore(risk.id, 'likelihoodScore', Math.min(5, risk.likelihoodScore + 1))}
                            className="w-5 h-5 rounded bg-gray-100 hover:bg-[#1D9E75] hover:text-white flex items-center justify-center text-gray-600 text-xs transition-colors"
                          >+</button>
                        </div>
                        <span className="text-[10px] text-gray-400 italic text-center">
                          {getLikelihoodLabel(risk.likelihoodScore)}
                        </span>
                      </div>
                    </td>

                    {/* Risk Level */}
                    <td className="px-4 py-4">
                      <div className="flex flex-col items-center gap-2">
                        {/* Score badge */}
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] text-gray-400">{risk.impactScore}</span>
                          <span className="text-[10px] text-gray-400">×</span>
                          <span className="text-[10px] text-gray-400">{risk.likelihoodScore}</span>
                          <span className="text-[10px] text-gray-400">=</span>
                          <span className={`text-base font-bold ${
                            riskInfo.label === 'CRITICAL' ? 'text-[#EF4444]' :
                            riskInfo.label === 'HIGH'     ? 'text-[#F59E0B]' :
                            riskInfo.label === 'MODERATE' ? 'text-[#CA8A04]' :
                            'text-[#15803D]'
                          }`}>
                            {riskScore}
                          </span>
                        </div>
                        {/* Level badge */}
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${riskInfo.bgClass} ${riskInfo.textClass}`}>
                          {riskInfo.label}
                        </span>
                      </div>
                    </td>

                    {/* Mitigation */}
                    <td className="px-4 py-4 text-gray-600 text-xs max-w-[220px] leading-relaxed">{risk.mitigation}</td>

                    {/* Actions */}
                    <td className="px-4 py-4 text-center">
                      <button
                        onClick={() => deleteRisk(risk.id)}
                        className="text-gray-300 hover:text-[#EF4444] transition-colors"
                        title="Hapus risiko"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer legend */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-xs text-gray-500">Risk Level Legend:</span>
            {[
              { label: 'CRITICAL', range: '15–25', bg: 'bg-[#EF4444]' },
              { label: 'HIGH',     range: '10–14', bg: 'bg-[#F59E0B]' },
              { label: 'MODERATE', range: '5–9',   bg: 'bg-[#EAB308]' },
              { label: 'LOW',      range: '1–4',   bg: 'bg-[#22C55E]' },
            ].map(({ label, range, bg }) => (
              <div key={label} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${bg}`} />
                <span className="text-xs text-gray-600">{label} <span className="text-gray-400">({range})</span></span>
              </div>
            ))}
            <span className="text-xs text-gray-400 ml-auto italic">Klik +/− untuk mengubah nilai Likelihood dan Impact</span>
          </div>
        </div>
      </div>
    </div>
  );
}
