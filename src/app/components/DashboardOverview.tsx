import { useState } from "react";
import {
  AlertTriangle,
  ShieldCheck,
  Activity,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  BarChart2,
  Target,
  Clock,
} from "lucide-react";

// ─── Risk data ────────────────────────────────────────────────────────────────
const riskItems = [
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
];

const nistScores = [
  { code: "GV", name: "Govern", score: 1.0, max: 5, color: "#EF4444", level: "Initial" },
  { code: "ID", name: "Identify", score: 2.0, max: 5, color: "#F59E0B", level: "Developing" },
  { code: "PR", name: "Protect", score: 1.5, max: 5, color: "#F59E0B", level: "Initial-Dev" },
  { code: "DE", name: "Detect", score: 1.5, max: 5, color: "#F59E0B", level: "Developing" },
  { code: "RS", name: "Respond", score: 1.5, max: 5, color: "#F59E0B", level: "Developing" },
  { code: "RC", name: "Recover", score: 1.0, max: 5, color: "#EF4444", level: "Initial" },
];

const recStats = [
  { label: "CRITICAL", count: 3, color: "#EF4444", bg: "#FEF2F2" },
  { label: "HIGH", count: 6, color: "#F59E0B", bg: "#FFFBEB" },
  { label: "MEDIUM", count: 1, color: "#EAB308", bg: "#FEFCE8" },
];

function getRiskInfo(score: number) {
  if (score >= 15) return { label: "CRITICAL", bg: "#EF4444", text: "#fff" };
  if (score >= 10) return { label: "HIGH", bg: "#F59E0B", text: "#fff" };
  if (score >= 5) return { label: "MODERATE", bg: "#EAB308", text: "#fff" };
  return { label: "LOW", bg: "#22C55E", text: "#fff" };
}

// ─── Mini Donut Chart (SVG) ────────────────────────────────────────────────────
function DonutChart({ segments, size = 120 }: { segments: { value: number; color: string }[]; size?: number }) {
  const cx = size / 2, cy = size / 2, r = size * 0.38, stroke = size * 0.14;
  const total = segments.reduce((s, x) => s + x.value, 0);
  let angle = -Math.PI / 2;
  const arcs = segments.map((seg) => {
    const sweep = (seg.value / total) * 2 * Math.PI;
    const x1 = cx + r * Math.cos(angle);
    const y1 = cy + r * Math.sin(angle);
    angle += sweep;
    const x2 = cx + r * Math.cos(angle);
    const y2 = cy + r * Math.sin(angle);
    const large = sweep > Math.PI ? 1 : 0;
    return { d: `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`, color: seg.color };
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {arcs.map((arc, i) => (
        <path key={i} d={arc.d} fill="none" stroke={arc.color} strokeWidth={stroke} strokeLinecap="butt" />
      ))}
    </svg>
  );
}

// ─── NIST Radar (SVG pentagon) ────────────────────────────────────────────────
function NISTRadar() {
  const cx = 150, cy = 150, maxR = 110;
  const n = nistScores.length;
  const getPoint = (i: number, r: number) => {
    const a = (i / n) * 2 * Math.PI - Math.PI / 2;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as [number, number];
  };
  const levels = [1, 2, 3, 4, 5];
  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-[260px] mx-auto">
      {/* Grid rings */}
      {levels.map((lv) => {
        const pts = nistScores.map((_, i) => getPoint(i, (lv / 5) * maxR));
        const d = pts.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(" ") + " Z";
        return <path key={lv} d={d} fill="none" stroke="#E2E8F0" strokeWidth={1} />;
      })}
      {/* Spokes */}
      {nistScores.map((_, i) => {
        const [x, y] = getPoint(i, maxR);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#E2E8F0" strokeWidth={1} />;
      })}
      {/* Data polygon */}
      {(() => {
        const pts = nistScores.map((s, i) => getPoint(i, (s.score / 5) * maxR));
        const d = pts.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(" ") + " Z";
        return (
          <>
            <path d={d} fill="#3B82F6" fillOpacity={0.2} stroke="#3B82F6" strokeWidth={2} />
            {pts.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={4} fill="#3B82F6" />
            ))}
          </>
        );
      })()}
      {/* Labels */}
      {nistScores.map((s, i) => {
        const [x, y] = getPoint(i, maxR + 22);
        return (
          <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
            fill="#1A1A2E" fontSize={11} fontWeight="600">
            {s.code}
          </text>
        );
      })}
    </svg>
  );
}

// ─── Risk Matrix ──────────────────────────────────────────────────────────────
function RiskMatrixMini() {
  return (
    <div className="overflow-x-auto">
      <div style={{ minWidth: 320 }}>
        {/* Column headers */}
        <div className="grid mb-1" style={{ gridTemplateColumns: "48px repeat(5, 1fr)", gap: 4 }}>
          <div />
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="text-center text-[10px] text-gray-400">I={i}</div>
          ))}
        </div>
        {[5, 4, 3, 2, 1].map((lh) => (
          <div key={lh} className="grid mb-1" style={{ gridTemplateColumns: "48px repeat(5, 1fr)", gap: 4 }}>
            <div className="flex items-center justify-end pr-1 text-[10px] text-gray-400">L={lh}</div>
            {[1, 2, 3, 4, 5].map((imp) => {
              const score = lh * imp;
              const info = getRiskInfo(score);
              const here = riskItems.filter((r) => r.l === lh && r.i === imp).map((r) => r.id);
              return (
                <div
                  key={imp}
                  style={{ backgroundColor: info.bg, opacity: 0.85 }}
                  className="h-12 rounded flex flex-col items-center justify-center gap-0.5 p-0.5"
                >
                  <span className="text-white text-[9px] opacity-50">{score}</span>
                  {here.map((r) => (
                    <span key={r} className="bg-white/90 text-gray-800 text-[8px] px-1 rounded font-mono leading-tight">
                      {r}
                    </span>
                  ))}
                </div>
              );
            })}
          </div>
        ))}
        <div className="text-center text-[10px] text-gray-400 mt-1">← Impact →</div>
      </div>
    </div>
  );
}

// ─── Bar Chart: NIST ─────────────────────────────────────────────────────────
function NISTBarChart() {
  return (
    <div className="space-y-3">
      {nistScores.map((s) => (
        <div key={s.code}>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-[#1A1A2E] font-medium">{s.code} – {s.name}</span>
            <span style={{ color: s.color }} className="font-bold">{s.score}/5</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${(s.score / 5) * 100}%`, backgroundColor: s.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── KPI Cards ────────────────────────────────────────────────────────────────
const kpis = [
  {
    label: "Total Risiko",
    value: "10",
    sub: "diidentifikasi",
    icon: AlertTriangle,
    color: "#EF4444",
    bg: "#FEF2F2",
  },
  {
    label: "Skor NIST",
    value: "1.4/5",
    sub: "INITIAL level",
    icon: ShieldCheck,
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    label: "Rekomendasi",
    value: "10",
    sub: "action items",
    icon: CheckCircle,
    color: "#22C55E",
    bg: "#F0FDF4",
  },
  {
    label: "Risiko Kritis",
    value: "1",
    sub: "score ≥ 15",
    icon: XCircle,
    color: "#EF4444",
    bg: "#FEF2F2",
  },
  {
    label: "Risiko High",
    value: "2",
    sub: "score 10–14",
    icon: TrendingUp,
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    label: "Risiko Moderate",
    value: "7",
    sub: "score 5–9",
    icon: TrendingDown,
    color: "#EAB308",
    bg: "#FEFCE8",
  },
  {
    label: "Cabang Diaudit",
    value: "1",
    sub: "Airmadidi",
    icon: Target,
    color: "#8B5CF6",
    bg: "#F5F3FF",
  },
  {
    label: "Tanggal Audit",
    value: "10 Mar",
    sub: "2026",
    icon: Clock,
    color: "#0EA5E9",
    bg: "#F0F9FF",
  },
];

// ─── Risk distribution for donut ──────────────────────────────────────────────
const riskDist = riskItems.reduce(
  (acc, r) => {
    const s = r.l * r.i;
    const info = getRiskInfo(s);
    const key = info.label;
    if (!acc[key]) acc[key] = { count: 0, color: info.bg };
    acc[key].count += 1;
    return acc;
  },
  {} as Record<string, { count: number; color: string }>
);

const donutSegments = Object.entries(riskDist).map(([, v]) => ({
  value: v.count,
  color: v.color,
}));

// ─── Timeline milestones ──────────────────────────────────────────────────────
const milestones = [
  { date: "Feb 2026", label: "Persiapan Audit", done: true },
  { date: "10 Mar 2026", label: "Audit Lapangan (Wawancara + Observasi)", done: true },
  { date: "Mar 2026", label: "Analisis & Risk Register", done: true },
  { date: "Apr 2026", label: "Penyusunan Rekomendasi", done: true },
  { date: "Mei 2026", label: "Implementasi Rekomendasi", done: false },
  { date: "Jun 2026", label: "Follow-up Audit", done: false },
];

export function DashboardOverview() {
  const [activeTab, setActiveTab] = useState<"matrix" | "radar">("matrix");

  return (
    <div className="space-y-8">
      {/* ── Page title ── */}
      <div>
        <h2 className="text-3xl text-[#1A1A2E] mb-1">Dashboard Visualisasi Audit</h2>
        <p className="text-gray-500 text-sm">
          Master ringkasan hasil audit sistem informasi TruFarm Airmadidi — NIST CSF 2.0
        </p>
      </div>

      {/* ── KPI Grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {kpis.map((k, idx) => {
          const Icon = k.icon;
          return (
            <div
              key={idx}
              className="rounded-xl p-4 shadow-sm border border-transparent hover:shadow-md transition-shadow"
              style={{ backgroundColor: k.bg }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">{k.label}</span>
                <Icon style={{ color: k.color }} className="w-4 h-4" />
              </div>
              <p className="text-2xl font-bold" style={{ color: k.color }}>{k.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{k.sub}</p>
            </div>
          );
        })}
      </div>

      {/* ── Main visualisations row ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Risk Matrix + Radar toggle */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg text-[#1A1A2E]">Peta Risiko</h3>
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab("matrix")}
                className={`px-3 py-1 rounded-md text-xs transition-colors ${activeTab === "matrix" ? "bg-white shadow text-[#1A1A2E]" : "text-gray-400"}`}
              >
                Risk Matrix
              </button>
              <button
                onClick={() => setActiveTab("radar")}
                className={`px-3 py-1 rounded-md text-xs transition-colors ${activeTab === "radar" ? "bg-white shadow text-[#1A1A2E]" : "text-gray-400"}`}
              >
                NIST Radar
              </button>
            </div>
          </div>

          {activeTab === "matrix" ? (
            <>
              <RiskMatrixMini />
              <div className="flex flex-wrap gap-4 justify-center mt-4 pt-4 border-t border-gray-100">
                {[
                  { label: "Critical (≥15)", color: "#EF4444" },
                  { label: "High (10–14)", color: "#F59E0B" },
                  { label: "Moderate (5–9)", color: "#EAB308" },
                  { label: "Low (1–4)", color: "#22C55E" },
                ].map(({ label, color }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: color }} />
                    <span className="text-xs text-gray-500">{label}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <NISTRadar />
              <p className="text-center text-xs text-gray-400 mt-2">Skor maturity per domain NIST CSF (skala 0–5)</p>
            </>
          )}
        </div>

        {/* Risk donut + distribution */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col">
          <h3 className="text-lg text-[#1A1A2E] mb-4">Distribusi Risiko</h3>
          <div className="flex items-center justify-center flex-1 relative">
            <DonutChart segments={donutSegments} size={140} />
            <div className="absolute text-center pointer-events-none">
              <p className="text-2xl font-bold text-[#1A1A2E]">10</p>
              <p className="text-xs text-gray-400">Risiko</p>
            </div>
          </div>
          <div className="space-y-2 mt-4">
            {Object.entries(riskDist).map(([label, v]) => (
              <div key={label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: v.color }} />
                  <span className="text-xs text-gray-600">{label}</span>
                </div>
                <span className="text-xs font-bold text-gray-800">{v.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── NIST Scores Bar + Rekomendasi Summary ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* NIST bars */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg text-[#1A1A2E]">Skor per Domain NIST CSF</h3>
          </div>
          <div className="bg-gradient-to-r from-[#EF4444] to-[#DC2626] rounded-xl p-4 mb-5 text-white text-center">
            <p className="text-sm mb-1">Skor Rata-rata</p>
            <p className="text-4xl font-bold">1.4 / 5</p>
            <span className="inline-block mt-1 bg-white/20 px-3 py-0.5 rounded-full text-xs">INITIAL</span>
          </div>
          <NISTBarChart />
        </div>

        {/* Rekomendasi summary */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-green-500" />
            <h3 className="text-lg text-[#1A1A2E]">Ringkasan Rekomendasi</h3>
          </div>
          <div className="space-y-3 mb-5">
            {recStats.map((r) => (
              <div key={r.label} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: r.bg }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg font-bold" style={{ backgroundColor: r.color }}>
                  {r.count}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: r.color }}>{r.label}</p>
                  <p className="text-xs text-gray-500">rekomendasi prioritas {r.label.toLowerCase()}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Kekuatan vs Kelemahan mini */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#F0FDF4] rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-[#22C55E]">7</p>
              <p className="text-xs text-green-700">Kekuatan (Strengths)</p>
            </div>
            <div className="bg-[#FEF2F2] rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-[#EF4444]">10</p>
              <p className="text-xs text-red-700">Area Perbaikan (Weakness)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
