import { Shield, TrendingUp, Cpu, Award } from 'lucide-react';
import { personalInfo } from '../data';

export default function About() {
  const values = [
    {
      icon: <Shield className="w-5 h-5 text-brand-500" />,
      title: "Integritas & Akurasi",
      desc: "Menjamin pencatatan laporan keuangan dan perpajakan yang bebas dari anomali, patuh pada regulasi, serta terdokumentasi dengan rapi."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-brand-500" />,
      title: "Pendampingan Strategis",
      desc: "Mampu menyusun Business Plan (Rencana Usaha) taktis untuk membantu UMKM dan BUM Desa memetakan prospek bisnis secara konkret."
    },
    {
      icon: <Cpu className="w-5 h-5 text-brand-500" />,
      title: "Efisiensi Berbasis Sistem",
      desc: "Familiar dengan berbagai modul ERP seperti SAP, software MYOB, hingga sistem pemerintahan daerah seperti SIMDA."
    }
  ];

  return (
    <section id="tentang" className="py-16 bg-bento-bg border-b border-bento-border scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Section Heading & Academic Spotlight (col-span-5) */}
          <div className="lg:col-span-5 bg-bento-card p-6 sm:p-8 rounded-3xl border border-bento-border flex flex-col justify-between hover:border-bento-border-hover transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold tracking-widest text-brand-500 uppercase">
                TENTANG SAYA
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-100 tracking-tight leading-tight">
                Konsultan Keuangan dengan Latar Belakang Akuntansi
              </h2>
              <p className="text-bento-text-muted text-xs leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            <div className="p-4 bg-slate-900/60 rounded-2xl border border-white/5 flex items-start gap-4 mt-6">
              <div className="p-2 bg-brand-500/10 rounded-xl text-brand-500 border border-brand-500/15 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wide">Pendidikan Cum Laude</h4>
                <p className="text-[11px] text-bento-text-muted mt-0.5">Lulusan S1 Akuntansi UIN Maulana Malik Ibrahim Malang dengan prestasi akademik luar biasa.</p>
              </div>
            </div>
          </div>

          {/* Right: Core Values & Statistics Grid (col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((item, index) => (
              <div key={index} className="bg-bento-card p-6 rounded-3xl border border-bento-border space-y-4 hover:border-bento-border-hover transition-all group">
                <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center group-hover:bg-brand-500/10 transition-colors">
                  {item.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-slate-200 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-bento-text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Statistics Card */}
            <div className="bg-gradient-to-br from-brand-950/40 to-slate-950 p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[160px] border border-brand-500/20 shadow-lg shadow-brand-500/5 group hover:border-bento-border-hover transition-all">
              {/* Abstract pattern decoration */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-35" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-mono tracking-widest text-brand-500 block uppercase font-bold">
                  KLIEN BINAAN
                </span>
                <span className="text-4xl font-display font-black block mt-2 text-slate-100">
                  15+
                </span>
              </div>
              <p className="text-xs text-bento-text-muted relative z-10 leading-relaxed pt-2 border-t border-white/5">
                BUM Desa & UMKM sukses mendapatkan pendampingan tata kelola keuangan dan rencana bisnis strategis.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

