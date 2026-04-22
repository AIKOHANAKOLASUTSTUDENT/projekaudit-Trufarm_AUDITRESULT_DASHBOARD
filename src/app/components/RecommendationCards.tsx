import { useState } from 'react';
import { Plus, X, FileText, Database, Lock, Server, Shield, Users, Activity, AlertTriangle } from 'lucide-react';

interface Recommendation {
  id: string;
  title: string;
  category: string;
  priority: string;
  description: string;
  responsible: string;
  target: string;
}

const initialRecommendations: Recommendation[] = [
  {
    id: 'REC-01',
    title: 'Digitalisasi SOP',
    category: 'Governance',
    priority: 'CRITICAL',
    description: 'Segera buat buku panduan tertulis (SOP digital) untuk seluruh prosedur operasional sistem informasi, termasuk prosedur penggunaan Navision, POS, backup, dan penanganan insiden. Kurangi ketergantungan pada instruksi lisan.',
    responsible: 'Store Manager + IT Pusat',
    target: '30 hari'
  },
  {
    id: 'REC-02',
    title: 'Otomatisasi Backup Harian',
    category: 'Data Security',
    priority: 'CRITICAL',
    description: 'Ubah sistem backup dari manual (bergantung shift pagi) menjadi otomatis terjadwal setiap hari. Implementasi cloud backup atau scheduled task di malam hari. Tambahkan off-site backup. Lakukan uji restore minimal 1x per kuartal untuk memastikan data dapat dipulihkan.',
    responsible: 'IT Toko + IT Pusat',
    target: '30 hari'
  },
  {
    id: 'REC-03',
    title: 'Penguatan Kebijakan Password',
    category: 'Access Control',
    priority: 'CRITICAL',
    description: 'Ubah kebijakan password dari 4 digit menjadi minimal 8 karakter alfanumerik (kombinasi huruf dan angka). Wajibkan pergantian password minimal setiap 90 hari. Aktifkan audit log untuk mencatat waktu login terakhir setiap akun.',
    responsible: 'IT Pusat + Store Manager',
    target: '14 hari'
  },
  {
    id: 'REC-04',
    title: 'Penjadwalan Update Sistem',
    category: 'Infrastructure',
    priority: 'HIGH',
    description: 'Koordinasikan dengan IT Pusat Jakarta agar semua update sistem Navision dan POS dijadwalkan di luar jam operasional toko (misalnya pukul 02.00–05.00 dini hari). Buat kalender update bulanan yang dikomunikasikan ke semua kepala toko minimal 3 hari sebelumnya.',
    responsible: 'IT Pusat Jakarta',
    target: '14 hari'
  },
  {
    id: 'REC-05',
    title: 'Implementasi Monitoring Otomatis',
    category: 'Monitoring',
    priority: 'HIGH',
    description: 'Implementasi sistem monitoring otomatis dengan notifikasi alert untuk mendeteksi gangguan sistem, anomali aktivitas pengguna, dan masalah jaringan. Integrasikan monitoring ke dashboard IT sehingga dapat diakses real-time oleh IT toko dan pusat.',
    responsible: 'IT Pusat + IT Toko',
    target: '60 hari'
  },
  {
    id: 'REC-06',
    title: 'Pembuatan Risk Register Formal',
    category: 'Governance',
    priority: 'HIGH',
    description: 'Buat dan dokumentasikan risk register formal berdasarkan hasil audit ini. Lakukan evaluasi risk register minimal setiap 6 bulan. Tunjuk penanggung jawab manajemen risiko IT di setiap toko.',
    responsible: 'Store Manager + Area Head',
    target: '30 hari'
  },
  {
    id: 'REC-07',
    title: 'Penyusunan DRP & BCP',
    category: 'Recovery',
    priority: 'HIGH',
    description: 'Susun Disaster Recovery Plan (DRP) dan Business Continuity Plan (BCP) formal yang mencakup: prosedur pemulihan data, target waktu pemulihan (RTO), daftar kontak darurat, prosedur operasional manual jika sistem mati. Uji DRP minimal 1x per tahun.',
    responsible: 'IT Pusat + Store Manager',
    target: '60 hari'
  },
  {
    id: 'REC-08',
    title: 'Pelatihan Keamanan Siber',
    category: 'Training',
    priority: 'HIGH',
    description: 'Buat program pelatihan keamanan dasar untuk semua karyawan (bukan hanya IT dan manager). Materi meliputi: kesadaran keamanan password, pengenalan phishing, prosedur penanganan data sensitif, dan cara melaporkan insiden. Lakukan pelatihan minimal 1x per tahun.',
    responsible: 'Store Manager + IT Toko',
    target: '45 hari'
  },
  {
    id: 'REC-09',
    title: 'Dokumentasi Inventory Aset IT',
    category: 'Governance',
    priority: 'MEDIUM',
    description: 'Buat inventaris lengkap semua aset IT per toko: hardware (komputer kasir, server, UPS, CCTV, perangkat jaringan), software (Navision versi, Talenta, OS), dan lisensi. Update inventaris setiap ada perubahan aset.',
    responsible: 'IT Toko + IT Pusat',
    target: '30 hari'
  },
  {
    id: 'REC-10',
    title: 'SOP Penanganan Insiden Tertulis',
    category: 'Incident Response',
    priority: 'HIGH',
    description: 'Buat SOP tertulis untuk penanganan insiden yang mencakup: prosedur shutdown server darurat, langkah pertama saat POS mati, prosedur eskalasi (IT toko → Store Manager → IT Pusat), template laporan insiden, dan prosedur pasca-insiden. Pastikan SOP tersedia di setiap toko dan mudah diakses.',
    responsible: 'IT Pusat + Store Manager',
    target: '30 hari'
  }
];

const categoryIcons: { [key: string]: any } = {
  'Governance': FileText,
  'Data Security': Database,
  'Access Control': Lock,
  'Infrastructure': Server,
  'Monitoring': Activity,
  'Recovery': Shield,
  'Training': Users,
  'Incident Response': AlertTriangle
};

export function RecommendationCards() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>(initialRecommendations);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Governance',
    priority: 'HIGH',
    description: '',
    responsible: '',
    target: ''
  });

  const getPriorityColor = (priority: string) => {
    if (priority === 'CRITICAL') return 'bg-[#EF4444] text-white';
    if (priority === 'HIGH') return 'bg-[#F59E0B] text-white';
    if (priority === 'MEDIUM') return 'bg-[#EAB308] text-white';
    return 'bg-[#22C55E] text-white';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRec: Recommendation = {
      id: `REC-${String(recommendations.length + 1).padStart(2, '0')}`,
      ...formData
    };
    setRecommendations([...recommendations, newRec]);
    setFormData({
      title: '',
      category: 'Governance',
      priority: 'HIGH',
      description: '',
      responsible: '',
      target: ''
    });
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl text-[#1A1A2E] mb-2">Rekomendasi Perbaikan Pasca-Audit</h2>
          <p className="text-sm text-gray-600">Disusun berdasarkan temuan audit NIST CSF — TruFarm Airmadidi</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-[#22C55E] hover:bg-[#15803D] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Tambah Rekomendasi
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl border-2 border-[#22C55E] p-6 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg text-[#1A1A2E]">Tambah Rekomendasi Baru</h3>
            <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Judul Rekomendasi</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22C55E]"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Kategori</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22C55E]"
                >
                  <option>Governance</option>
                  <option>Access Control</option>
                  <option>Data Security</option>
                  <option>Monitoring</option>
                  <option>Incident Response</option>
                  <option>Recovery</option>
                  <option>Training</option>
                  <option>Infrastructure</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Prioritas</label>
                <select
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22C55E]"
                >
                  <option>LOW</option>
                  <option>MEDIUM</option>
                  <option>HIGH</option>
                  <option>CRITICAL</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Target Waktu</label>
                <input
                  type="text"
                  required
                  placeholder="contoh: 30 hari"
                  value={formData.target}
                  onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22C55E]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Deskripsi Detail</label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22C55E]"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Pihak yang Bertanggung Jawab</label>
              <input
                type="text"
                required
                value={formData.responsible}
                onChange={(e) => setFormData({ ...formData, responsible: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22C55E]"
              />
            </div>
            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#22C55E] hover:bg-[#15803D] text-white rounded-lg transition-colors"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((rec) => {
          const Icon = categoryIcons[rec.category] || FileText;
          return (
            <div key={rec.id} className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-[#22C55E]/10 p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-[#15803D]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-[#1A1A2E]">{rec.id} — {rec.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-lg ${getPriorityColor(rec.priority)}`}>
                      {rec.priority}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#F8FAFC] text-[#15803D] text-xs rounded-lg mb-3">
                    {rec.category}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">{rec.description}</p>
              <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-100">
                <div>
                  <p className="text-gray-500 text-xs mb-1">Tanggung Jawab</p>
                  <p className="text-gray-900">{rec.responsible}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-xs mb-1">Target</p>
                  <p className="text-[#22C55E]">{rec.target}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
