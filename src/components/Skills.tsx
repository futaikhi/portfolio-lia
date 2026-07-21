import { Award, Layers, Terminal, BookOpen, Check } from 'lucide-react';
import { skillCategories, certifications } from '../data';

export default function Skills() {
  return (
    <section id="keahlian" className="py-16 bg-bento-bg border-b border-bento-border scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Competencies & Systems (col-span-7) */}
          <div className="lg:col-span-7 bg-bento-card p-6 sm:p-8 rounded-3xl border border-bento-border space-y-6 flex flex-col justify-between hover:border-bento-border-hover transition-all">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-brand-500 uppercase">
                KEAHLIAN & KOMPETENSI
              </span>
              <h2 className="text-2xl font-display font-extrabold text-slate-100 tracking-tight leading-tight">
                Kombinasi Akuntansi Teknis & Pengolahan Data Modern
              </h2>
              <p className="text-xs text-bento-text-muted leading-relaxed">
                Keahlian mendalam dalam analisis laporan keuangan, perancangan rencana bisnis strategis, serta efisiensi administratif menggunakan software akuntansi terstandar.
              </p>
            </div>

            {/* Skill categories loop */}
            <div className="space-y-4 pt-2">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="bg-slate-900/60 p-4.5 rounded-2xl border border-white/5 space-y-3.5 hover:border-brand-500/10 transition-colors">
                  <div className="flex items-center space-x-2.5">
                    {idx === 0 ? (
                      <Terminal className="w-4 h-4 text-brand-500" />
                    ) : idx === 1 ? (
                      <Layers className="w-4 h-4 text-brand-500" />
                    ) : (
                      <BookOpen className="w-4 h-4 text-brand-500" />
                    )}
                    <h3 className="font-display font-bold text-slate-200 text-sm">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center px-2.5 py-1.5 rounded-xl text-xs font-mono font-semibold bg-slate-950 text-slate-300 border border-white/5 shadow-xs"
                      >
                        <Check className="w-3.5 h-3.5 mr-1.5 text-brand-500 shrink-0" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certifications & Training (col-span-5) */}
          <div className="lg:col-span-5 bg-bento-card p-6 sm:p-8 rounded-3xl border border-bento-border space-y-6 flex flex-col justify-between hover:border-bento-border-hover transition-all">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-brand-500 uppercase">
                SERTIFIKASI & PELATIHAN
              </span>
              <h2 className="text-2xl font-display font-extrabold text-slate-100 tracking-tight leading-tight">
                Sertifikasi Terverifikasi
              </h2>
              <p className="text-xs text-bento-text-muted leading-relaxed">
                Komitmen berkelanjutan untuk terus memperdalam ilmu di bidang audit, analisis keuangan, dan penguasaan aplikasi perpajakan/akuntansi.
              </p>
            </div>

            {/* Certifications list */}
            <div className="space-y-3.5 pt-2">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="relative p-4 rounded-2xl border border-white/5 bg-slate-900/60 hover:border-brand-500/10 transition-all flex gap-4"
                >
                  {/* Icon Box */}
                  <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-brand-500 shrink-0 border border-white/5">
                    <Award className="w-5 h-5" />
                  </div>

                  {/* Info details */}
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-200 leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-[11px] text-bento-text-muted">
                      {cert.provider}
                    </p>
                    <div className="text-[9px] font-mono text-brand-500 font-bold uppercase tracking-wider pt-1">
                      {cert.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

