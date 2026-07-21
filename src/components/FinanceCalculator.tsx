import { useState } from 'react';
import { Calculator, DollarSign, Percent, TrendingUp, HelpCircle, FileSpreadsheet, Scale } from 'lucide-react';

export default function FinanceCalculator() {
  const [activeCalculator, setActiveCalculator] = useState<'business' | 'bphtb'>('business');

  // Business Feasibility Calculator States
  const [initialInvestment, setInitialInvestment] = useState<number>(50000000);
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(15000000);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(9000000);
  const [periodYears, setPeriodYears] = useState<number>(3);

  // BPHTB Calculator States
  const [npop, setNpop] = useState<number>(250000000); // Nilai Perolehan Objek Pajak
  const [npoptkp, setNpoptkp] = useState<number>(60000000); // Nilai Perolehan Objek Pajak Tidak Kena Pajak (Standard Jual Beli Rp 60jt)
  const [transactionType, setTransactionType] = useState<'jualbeli' | 'waris' | 'hibah'>('jualbeli');

  // Business calculations
  const monthlyNetProfit = monthlyRevenue - monthlyExpenses;
  const yearlyNetProfit = monthlyNetProfit * 12;
  const netProfitMargin = monthlyRevenue > 0 ? (monthlyNetProfit / monthlyRevenue) * 100 : 0;
  
  // Payback period in months
  const paybackPeriodMonths = monthlyNetProfit > 0 ? initialInvestment / monthlyNetProfit : 0;
  const paybackPeriodYears = paybackPeriodMonths / 12;
  
  // Return on Investment (ROI) total over the period
  const totalNetProfitOverPeriod = yearlyNetProfit * periodYears;
  const roiPercentage = initialInvestment > 0 ? (totalNetProfitOverPeriod / initialInvestment) * 100 : 0;

  // Feasibility assessment
  let feasibilityStatus = "Perlu Evaluasi Ulang";
  let feasibilityBadgeColor = "bg-rose-950/40 text-rose-400 border-rose-500/20";
  let advisoryText = "Laba bulanan terlalu tipis atau negatif untuk mengembalikan modal investasi dalam jangka waktu yang wajar. Evaluasi kembali struktur biaya (pengeluaran) atau tingkatkan target penjualan.";

  if (monthlyNetProfit > 0) {
    if (paybackPeriodYears <= 1.5 && netProfitMargin >= 25) {
      feasibilityStatus = "Sangat Layak (Prospektif Tinggi)";
      feasibilityBadgeColor = "bg-brand-950/40 text-brand-400 border-brand-500/25";
      advisoryText = "Usaha memiliki profit margin yang sangat sehat dan tingkat pengembalian modal yang sangat cepat (di bawah 18 bulan). BUM Desa / UMKM direkomendasikan kuat untuk melanjutkan rencana bisnis ini.";
    } else if (paybackPeriodYears <= 3 && netProfitMargin >= 15) {
      feasibilityStatus = "Layak Dijalankan";
      feasibilityBadgeColor = "bg-emerald-950/40 text-emerald-400 border-emerald-500/20";
      advisoryText = "Proyeksi menunjukkan arus kas positif yang stabil. Payback period berkisar antara 1.5 hingga 3 tahun, yang merupakan standar industri yang aman untuk usaha mikro/menengah.";
    } else {
      feasibilityStatus = "Cukup Layak (Risiko Sedang)";
      feasibilityBadgeColor = "bg-amber-950/40 text-amber-400 border-amber-500/20";
      advisoryText = "Bisnis tetap menghasilkan keuntungan, namun waktu pengembalian modal cukup lama. Pastikan ketersediaan modal kerja (cash reserve) yang cukup untuk mendukung operasional jangka panjang.";
    }
  }

  // BPHTB calculations
  const handleTransactionTypeChange = (type: 'jualbeli' | 'waris' | 'hibah') => {
    setTransactionType(type);
    if (type === 'waris' || type === 'hibah') {
      setNpoptkp(300000000);
    } else {
      setNpoptkp(60000000);
    }
  };

  const npopkp = Math.max(0, npop - npoptkp); // Nilai Perolehan Objek Pajak Kena Pajak
  const bphtbTax = npopkp * 0.05; // BPHTB Tarif 5%

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <section id="simulasi" className="py-16 bg-bento-bg border-b border-bento-border scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-500 uppercase">
            STUDI KASUS & SIMULASI INTERAKTIF
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-100 tracking-tight leading-tight">
            Kalkulator Analisis Finansial Profesional
          </h2>
          <p className="text-xs text-bento-text-muted leading-relaxed">
            Sebagai wujud kompetensi praktis saya di bidang konsultasi usaha desa (Syncore) dan penaksiran pajak daerah (Badan Keuangan Daerah), silakan gunakan simulator keuangan berikut.
          </p>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex justify-center mb-10">
          <div className="grid grid-cols-2 p-1.5 bg-slate-950 rounded-2xl border border-bento-border max-w-md w-full">
            <button
              onClick={() => setActiveCalculator('business')}
              className={`flex items-center justify-center gap-2 py-3 px-4 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                activeCalculator === 'business'
                  ? 'bg-brand-500 text-slate-950 shadow-md shadow-brand-500/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4 shrink-0" />
              Kelayakan BUMDes
            </button>
            <button
              onClick={() => setActiveCalculator('bphtb')}
              className={`flex items-center justify-center gap-2 py-3 px-4 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                activeCalculator === 'bphtb'
                  ? 'bg-brand-500 text-slate-950 shadow-md shadow-brand-500/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Scale className="w-4 h-4 shrink-0" />
              Pajak BPHTB
            </button>
          </div>
        </div>

        {/* Calculator Widget Canvas */}
        <div className="bg-bento-card rounded-3xl border border-bento-border p-6 sm:p-10 hover:border-bento-border-hover transition-all max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
          
          {activeCalculator === 'business' ? (
            /* Business Feasibility Calculator */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
              
              {/* Inputs Form */}
              <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-display font-bold text-slate-200 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-brand-500 rounded-xs" />
                    Input Asumsi Rencana Bisnis
                  </h3>
                  <p className="text-[11px] text-bento-text-muted">Sesuaikan parameter investasi dan proyeksi kas operasional.</p>
                </div>

                <div className="space-y-5 pt-4">
                  {/* Modal Awal */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase font-bold text-slate-400 flex justify-between">
                      <span>Modal Awal (Investasi)</span>
                      <span className="text-brand-500 font-bold">{formatRupiah(initialInvestment)}</span>
                    </label>
                    <input
                      type="range"
                      min={5000000}
                      max={250000000}
                      step={5000000}
                      value={initialInvestment}
                      onChange={(e) => setInitialInvestment(Number(e.target.value))}
                      className="w-full accent-brand-500 h-1.5 bg-slate-950 rounded-lg cursor-pointer border border-white/5"
                    />
                    <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                      <span>Rp 5 Juta</span>
                      <span>Rp 250 Juta</span>
                    </div>
                  </div>

                  {/* Pendapatan Bulanan */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase font-bold text-slate-400 flex justify-between">
                      <span>Estimasi Pendapatan / Bulan</span>
                      <span className="text-brand-500 font-bold">{formatRupiah(monthlyRevenue)}</span>
                    </label>
                    <input
                      type="range"
                      min={1000000}
                      max={50000000}
                      step={1000000}
                      value={monthlyRevenue}
                      onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                      className="w-full accent-brand-500 h-1.5 bg-slate-950 rounded-lg cursor-pointer border border-white/5"
                    />
                    <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                      <span>Rp 1 Juta</span>
                      <span>Rp 50 Juta</span>
                    </div>
                  </div>

                  {/* Pengeluaran Bulanan */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase font-bold text-slate-400 flex justify-between">
                      <span>Estimasi Biaya Operasional / Bulan</span>
                      <span className="text-brand-500 font-bold">{formatRupiah(monthlyExpenses)}</span>
                    </label>
                    <input
                      type="range"
                      min={500000}
                      max={40000000}
                      step={500000}
                      value={monthlyExpenses}
                      onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                      className="w-full accent-brand-500 h-1.5 bg-slate-950 rounded-lg cursor-pointer border border-white/5"
                    />
                    <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                      <span>Rp 500 Ribu</span>
                      <span>Rp 40 Juta</span>
                    </div>
                  </div>

                  {/* Jangka Waktu Analisis */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase font-bold text-slate-400 flex justify-between">
                      <span>Jangka Waktu Evaluasi</span>
                      <span className="text-brand-500 font-bold">{periodYears} Tahun</span>
                    </label>
                    <select
                      value={periodYears}
                      onChange={(e) => setPeriodYears(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl border border-white/5 bg-slate-950 text-xs font-mono font-bold text-slate-300 outline-hidden focus:border-brand-500/50"
                    >
                      <option value={1}>1 Tahun</option>
                      <option value={2}>2 Tahun</option>
                      <option value={3}>3 Tahun</option>
                      <option value={4}>4 Tahun</option>
                      <option value={5}>5 Tahun</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Outputs Summary Dashboard */}
              <div className="lg:col-span-6 bg-slate-900/60 p-6 rounded-2xl border border-white/5 space-y-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-display font-bold text-slate-200 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-brand-500 rounded-xs" />
                    Indikator Keuangan Utama (KPI)
                  </h3>
                  <p className="text-[11px] text-bento-text-muted">Hasil proyeksi kelayakan berdasarkan analisis kelayakan.</p>
                </div>

                <div className="grid grid-cols-2 gap-3.5 my-2">
                  <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
                    <span className="text-[9px] font-mono text-slate-500 block uppercase">LABA BERSIH / BULAN</span>
                    <span className={`text-xs sm:text-sm font-mono font-bold block mt-1 ${monthlyNetProfit >= 0 ? 'text-brand-500' : 'text-rose-500'}`}>
                      {formatRupiah(monthlyNetProfit)}
                    </span>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
                    <span className="text-[9px] font-mono text-slate-500 block uppercase">PROFIT MARGIN</span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-slate-200 block mt-1">
                      {netProfitMargin.toFixed(1)}%
                    </span>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
                    <span className="text-[9px] font-mono text-slate-500 block uppercase">ROI ({periodYears} THN TOTAL)</span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-slate-200 block mt-1">
                      {roiPercentage.toFixed(1)}%
                    </span>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
                    <span className="text-[9px] font-mono text-slate-500 block uppercase">PAYBACK PERIOD</span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-slate-200 block mt-1">
                      {monthlyNetProfit > 0 
                        ? `${paybackPeriodYears.toFixed(1)} Thn (${Math.round(paybackPeriodMonths)} Bln)`
                        : "∞ (Laba ≤ 0)"
                      }
                    </span>
                  </div>
                </div>

                {/* Feasibility Alert Block */}
                <div className={`p-4 rounded-xl border ${feasibilityBadgeColor} space-y-1.5`}>
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="text-[9px] font-mono uppercase font-bold opacity-80">STATUS KELAYAKAN:</span>
                    <span className="text-xs font-mono font-extrabold uppercase">{feasibilityStatus}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed opacity-90">{advisoryText}</p>
                </div>

                <div className="text-[9px] text-slate-500 font-mono italic pt-2">
                  *Metode perhitungan menggunakan standard Simple Payback Period & Return on Investment (ROI) kualitatif untuk rencana bisnis UMKM / BUM Desa.
                </div>
              </div>

            </div>
          ) : (
            /* BPHTB Tax Simulator */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
              
              {/* Input Form for Tax */}
              <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-display font-bold text-slate-200 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-brand-500 rounded-xs" />
                    Detail Transaksi Tanah/Bangunan
                  </h3>
                  <p className="text-[11px] text-bento-text-muted">Pilih jenis perolehan hak dan sesuaikan nilai transaksi objek pajak.</p>
                </div>

                <div className="space-y-4 pt-4">
                  {/* Jenis Transaksi */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase font-bold text-slate-400">Jenis Perolehan Hak</label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['jualbeli', 'waris', 'hibah'] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleTransactionTypeChange(type)}
                          className={`py-2 px-3 text-xs font-mono font-bold uppercase rounded-xl border text-center transition-all cursor-pointer ${
                            transactionType === type
                              ? 'bg-brand-500 border-brand-500 text-slate-950'
                              : 'bg-slate-950 border-white/5 text-slate-400 hover:bg-slate-900'
                          }`}
                        >
                          {type === 'jualbeli' ? 'Jual Beli' : type === 'waris' ? 'Waris' : 'Hibah'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* NPOP Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase font-bold text-slate-400 flex justify-between">
                      <span>Nilai Objek Transaksi (NPOP)</span>
                      <span className="text-brand-500 font-bold">{formatRupiah(npop)}</span>
                    </label>
                    <input
                      type="range"
                      min={50000000}
                      max={1000000000}
                      step={25000000}
                      value={npop}
                      onChange={(e) => setNpop(Number(e.target.value))}
                      className="w-full accent-brand-500 h-1.5 bg-slate-950 rounded-lg cursor-pointer border border-white/5"
                    />
                    <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                      <span>Rp 50 Juta</span>
                      <span>Rp 1 Miliar</span>
                    </div>
                  </div>

                  {/* NPOPTKP Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase font-bold text-slate-400 flex justify-between">
                      <span>Nilai Pengurang Bebas Pajak (NPOPTKP)</span>
                      <span className="text-slate-200">{formatRupiah(npoptkp)}</span>
                    </label>
                    <input
                      type="number"
                      value={npoptkp}
                      onChange={(e) => setNpoptkp(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl border border-white/5 bg-slate-950 text-xs font-mono font-bold text-slate-300 outline-hidden focus:border-brand-500/50"
                      placeholder="Masukkan NPOPTKP daerah..."
                    />
                    <p className="text-[9px] text-slate-500 italic">
                      *Standar daerah Jual Beli: Rp 60Jt. Waris/Hibah Wasiat: Rp 300Jt (UU No. 1/2022 HKPD).
                    </p>
                  </div>
                </div>
              </div>

              {/* Tax Calculations Outputs */}
              <div className="lg:col-span-6 bg-slate-900/60 p-6 rounded-2xl border border-white/5 space-y-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-display font-bold text-slate-200 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-brand-500 rounded-xs" />
                    Lembar Penghitungan BPHTB
                  </h3>
                  <p className="text-[11px] text-bento-text-muted">Struktur penaksiran setoran pajak daerah yang wajib dibayarkan.</p>
                </div>

                <div className="space-y-3.5 text-xs pt-2">
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400 font-medium">Nilai Transaksi (NPOP):</span>
                    <span className="font-mono font-bold text-slate-200">{formatRupiah(npop)}</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400 font-medium">Pengurang (NPOPTKP):</span>
                    <span className="font-mono font-bold text-rose-400">-{formatRupiah(npoptkp)}</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-white/5 bg-slate-950/50 px-2 rounded-lg">
                    <span className="text-slate-300 font-semibold">Nilai Kena Pajak (NPOPKP):</span>
                    <span className="font-mono font-bold text-slate-100">{formatRupiah(npopkp)}</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400 font-medium">Tarif Pajak Terutang:</span>
                    <span className="font-mono font-bold text-brand-500">5.0%</span>
                  </div>

                  {/* BPHTB Final Tax Result */}
                  <div className="bg-brand-500/10 p-4 rounded-xl border border-brand-500/20 flex items-center justify-between mt-4">
                    <div>
                      <span className="text-[9px] font-mono uppercase font-bold text-brand-500 block">ESTIMASI TOTAL BPHTB</span>
                      <span className="text-base sm:text-lg font-mono font-extrabold text-slate-100 block mt-0.5">
                        {formatRupiah(bphtbTax)}
                      </span>
                    </div>
                    <div className="text-[10px] font-mono bg-brand-500 text-slate-950 px-2.5 py-1 rounded-md font-bold">
                      SSPD READY
                    </div>
                  </div>
                </div>

                <div className="text-[9px] text-slate-500 font-mono italic leading-relaxed pt-2">
                  *Perhitungan di atas mensimulasikan sistem penilaian yang digunakan pada aplikasi SIMDA Keuangan Daerah Kabupaten Pasuruan sesuai Peraturan Daerah yang berlaku.
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}

