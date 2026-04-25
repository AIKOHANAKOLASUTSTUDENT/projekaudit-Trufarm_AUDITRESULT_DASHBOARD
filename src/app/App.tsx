import { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  Target,
  AlertTriangle,
  Lightbulb,
  ShieldCheck,
  BarChart,
  Menu,
  X
} from "lucide-react";

// Import Components
import { DashboardOverview } from "./components/DashboardOverview";
import { ProfilPerusahaan } from "./components/ProfilPerusahaan";
import { ScopeObjective } from "./components/ScopeObjective";
import { RiskRegisterTable } from "./components/RiskRegisterTable";
import { SwotAnalysis } from "./components/SwotAnalysis";
import { RecommendationCards } from "./components/RecommendationCards";
import { NistCsfAssessment } from "./components/NistCsfAssessment";

const logoTrufarm = "/TRUFARM.jpg";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [auditStatus, setAuditStatus] = useState<"In Progress" | "Audit Selesai">("In Progress");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "profil", label: "Profil Perusahaan", icon: Building2 },
    { id: "scope", label: "Scope & Objective", icon: Target },
    { id: "risk", label: "Risk Register", icon: AlertTriangle },
    { id: "swot", label: "Analisis & SWOT", icon: ShieldCheck },
    { id: "nist", label: "NIST CSF Assessment", icon: BarChart },
    { id: "rekomendasi", label: "Rekomendasi", icon: Lightbulb },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard": return <DashboardOverview />;
      case "profil": return <ProfilPerusahaan />;
      case "scope": return <ScopeObjective />;
      case "risk": return <RiskRegisterTable />;
      case "swot": return <SwotAnalysis />;
      case "nist": return <NistCsfAssessment />;
      case "rekomendasi": return <RecommendationCards />;
      default: return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row">
      {/* ─── SIDEBAR ─── */}
      {/* Mobile Header / Hamburger */}
      <div className="md:hidden bg-[#1A1A2E] text-white p-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <div className="bg-white rounded p-1 w-24 h-8 flex items-center justify-center overflow-hidden">
          <img src={logoTrufarm} alt="Logo Trufarm" className="w-full h-full object-cover" />
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Content */}
      <aside className={`
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 
        fixed md:sticky top-0 md:top-0 left-0 z-40 w-64 h-screen 
        bg-[#1A1A2E] text-white transition-transform duration-300 ease-in-out shadow-xl flex flex-col
      `}>
        {/* Logo Area */}
        <div className="p-6 hidden md:block">
          <div className="bg-white rounded-lg p-2 w-full h-14 flex items-center justify-center overflow-hidden mb-2">
            <img src={logoTrufarm} alt="Logo Trufarm" className="w-full h-full object-cover" />
          </div>
          <p className="text-xs text-gray-400 text-center uppercase tracking-wider font-semibold">Audit Dashboard</p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6 md:py-0 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium
                  ${isActive
                    ? "bg-[#3B82F6] text-white shadow-md shadow-blue-900/20"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-400"}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Footer Area in Sidebar */}
        <div className="p-4 border-t border-white/10">
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-xs text-gray-400 mb-2">Status Audit</p>
            <button
              onClick={() => setAuditStatus(auditStatus === "In Progress" ? "Audit Selesai" : "In Progress")}
              className={`w-full py-2 rounded-lg text-xs font-semibold transition-colors ${auditStatus === "In Progress"
                  ? "bg-[#22C55E] text-white hover:bg-[#15803D]"
                  : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
            >
              {auditStatus}
            </button>
          </div>
        </div>
      </aside>

      {/* ─── MAIN CONTENT ─── */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30 hidden md:block">
          <div className="px-8 py-5 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#1A1A2E] leading-tight">Laporan Audit Sistem Informasi</h1>
              <p className="text-sm text-gray-500">Berbasis NIST Cybersecurity Framework 2.0</p>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600">Sistem Active</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-[1400px] mx-auto">
            {/* Smooth transition wrapper */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {renderContent()}
            </div>
          </div>

          {/* Footer */}
          <footer className="max-w-[1400px] mx-auto mt-12 bg-[#1A1A2E] text-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg mb-3 font-semibold text-blue-400">Informasi Audit</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><strong>Auditor:</strong> Mahasiswa Universitas Klabat — ISA-A</p>
                  <p><strong>Tim:</strong> Brendon Davidson Kulon (Ketua), Aiko Hanako Lasut, Jonathan Reinald Lapian, Carolina Pears Pamela Langi, Fiktor Retno Lobbu</p>
                  <p><strong>Tanggal audit lapangan:</strong> 23 Februari 2026 & 10 Maret 2026</p>
                  <p><strong>Lokasi:</strong> TruFarm Airmadidi, Sulawesi Utara</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg mb-3 font-semibold text-blue-400">Metode & Framework</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><strong>Framework:</strong> NIST Cybersecurity Framework (CSF) 2.0</p>
                  <p><strong>Metode:</strong> Wawancara terstruktur + Observasi langsung + Dokumentasi</p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="text-xs text-gray-400 italic">
                Dashboard ini dibuat berdasarkan hasil wawancara dan observasi lapangan. Data bersifat kualitatif dan tidak mencakup implementasi teknis secara langsung.
              </p>
            </div>
          </footer>
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
