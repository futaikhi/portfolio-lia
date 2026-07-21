import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { educationList } from '../data';

export default function Education() {
  return (
    <section id="pendidikan" className="py-16 bg-bento-bg border-b border-bento-border scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-500 uppercase">
            LATAR PENDIDIKAN
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-100 tracking-tight leading-tight">
            Fondasi Akademik & Keilmuan Akuntansi
          </h2>
          <p className="text-xs text-bento-text-muted leading-relaxed">
            Menempuh pendidikan tinggi akuntansi yang komprehensif, mengintegrasikan teori tata kelola keuangan modern dengan nilai-nilai profesionalisme tinggi.
          </p>
        </div>

        {/* Education Content Card */}
        <div className="max-w-3xl mx-auto">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="bg-bento-card rounded-3xl border border-bento-border p-6 sm:p-10 hover:border-bento-border-hover transition-all relative overflow-hidden"
            >
              {/* Decorative radial background */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/5">
                <div className="flex items-start gap-4">
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-700 text-slate-950 flex items-center justify-center shrink-0 shadow-md shadow-brand-500/20">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-slate-100">
                      {edu.institution}
                    </h3>
                    <p className="text-brand-500 font-semibold text-xs sm:text-sm mt-0.5">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center px-4 py-1.5 rounded-xl text-xs font-mono font-bold bg-slate-900 text-brand-500 border border-brand-500/10 shrink-0 self-start md:self-auto">
                  <Award className="w-3.5 h-3.5 mr-1.5 text-brand-500" />
                  {edu.period}
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-6 space-y-4">
                <h4 className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  Poin Fokus Pembelajaran:
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {edu.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="bg-slate-900/40 p-4 rounded-xl border border-white/5 text-xs text-bento-text-muted leading-relaxed hover:border-brand-500/10 transition-colors"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Footnote */}
              <div className="mt-8 pt-6 border-t border-white/5 text-[10px] text-slate-500 italic">
                * Fakultas Ekonomi UIN Maulana Malik Ibrahim Malang, Program Studi S1 Akuntansi terakreditasi unggul dan membekali lulusan dengan kompetensi akuntansi komersial, akuntansi syariah, dan praktikum digital (MYOB, Excel).
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

