import { useState } from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'Semua' | 'Keuangan & Konsultasi' | 'Administrasi & Data'>('Semua');

  const filteredExperiences = activeTab === 'Semua' 
    ? experiences 
    : experiences.filter(exp => exp.category === activeTab);

  const tabs: ('Semua' | 'Keuangan & Konsultasi' | 'Administrasi & Data')[] = [
    'Semua', 'Keuangan & Konsultasi', 'Administrasi & Data'
  ];

  return (
    <section id="riwayat-kerja" className="py-16 bg-bento-bg border-b border-bento-border scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-500 uppercase">
            RIWAYAT KERJA
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-100 tracking-tight leading-tight">
            Perjalanan Profesional & Kontribusi Riil
          </h2>
          <p className="text-xs text-bento-text-muted leading-relaxed">
            Berpengalaman di sektor publik, perusahaan swasta, dan badan usaha desa dalam mengelola transaksi keuangan, penyusunan rencana usaha, serta integrasi data administratif.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-950 p-1.5 rounded-2xl border border-bento-border">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-brand-500 text-slate-950 shadow-md shadow-brand-500/10'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline / Experience Grid */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-bento-card p-6 sm:p-8 rounded-3xl border border-bento-border hover:border-bento-border-hover transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[9px] font-mono font-bold bg-slate-900 text-brand-500 border border-brand-500/10">
                        {exp.category}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center text-slate-500 text-xs font-mono">
                          <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-display font-bold text-slate-200 group-hover:text-brand-500 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-semibold text-bento-text-muted">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center text-slate-300 font-mono text-xs sm:text-right bg-slate-900 px-3 py-1.5 rounded-xl border border-white/5 shrink-0">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-brand-500" />
                    {exp.period}
                  </div>
                </div>

                {/* Highlights List */}
                <div className="mt-5 border-t border-white/5 pt-4">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-3">Tanggung Jawab & Kontribusi:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-bento-text-muted text-xs leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

