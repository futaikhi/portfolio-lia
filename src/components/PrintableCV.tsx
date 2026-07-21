import { Mail, Phone, MapPin, Linkedin, Instagram, FileText } from 'lucide-react';
import { personalInfo, experiences, educationList, certifications, skillCategories } from '../data';

export default function PrintableCV() {
  return (
    <div className="fixed top-0 left-0 w-0 h-0 overflow-hidden pointer-events-none z-[-100] print:static print:w-auto print:h-auto print:overflow-visible">
      <div 
        id="printable-cv" 
        className="bg-white text-slate-900 p-10 font-sans w-[210mm] min-h-[297mm] text-xs leading-relaxed"
        style={{ boxSizing: 'border-box' }}
      >
      {/* Header section */}
      <div className="border-b-2 border-slate-900 pb-5 mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold uppercase tracking-tight text-slate-900 font-display">
            {personalInfo.name}
          </h1>
          <p className="text-sm font-semibold text-brand-700 uppercase tracking-wider mt-0.5">
            {personalInfo.title}
          </p>
          <p className="text-[10px] text-slate-500 max-w-lg mt-2 italic leading-normal">
            "{personalInfo.bio}"
          </p>
        </div>
        <div className="text-right space-y-1 font-mono text-[9px] text-slate-700">
          <div className="flex items-center justify-end gap-1.5">
            <span>{personalInfo.email}</span>
            <Mail className="w-3 h-3 text-slate-600" />
          </div>
          <div className="flex items-center justify-end gap-1.5">
            <span>{personalInfo.phone}</span>
            <Phone className="w-3 h-3 text-slate-600" />
          </div>
          <div className="flex items-center justify-end gap-1.5">
            <span>{personalInfo.location}</span>
            <MapPin className="w-3 h-3 text-slate-600" />
          </div>
          <div className="flex items-center justify-end gap-1.5">
            <span>linkedin.com/in/{personalInfo.linkedin}</span>
            <Linkedin className="w-3 h-3 text-slate-600" />
          </div>
          <div className="flex items-center justify-end gap-1.5">
            <span>instagram.com/{personalInfo.instagram.replace('@', '')}</span>
            <Instagram className="w-3 h-3 text-slate-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left column: Experience & Education */}
        <div className="col-span-8 space-y-6">
          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3 font-display flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-brand-600" />
              RIWAYAT PENGALAMAN KERJA
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-[11px] text-slate-900">
                      {exp.role} &mdash; <span className="text-slate-700 font-medium">{exp.company}</span>
                    </h3>
                    <span className="text-[9px] font-mono font-medium text-slate-500">{exp.period}</span>
                  </div>
                  <p className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider">
                    Bidang: {exp.category}
                  </p>
                  <ul className="list-disc pl-4 text-[9px] text-slate-600 space-y-1 mt-1">
                    {exp.highlights.map((highlight, index) => (
                      <li key={index} className="leading-relaxed">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3 font-display">
              PENDIDIKAN
            </h2>
            <div className="space-y-3">
              {educationList.map((edu, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-[11px] text-slate-900">{edu.institution}</h3>
                    <span className="text-[9px] font-mono font-medium text-slate-500">{edu.period}</span>
                  </div>
                  <p className="text-[9px] font-semibold text-brand-700 uppercase tracking-wider">
                    {edu.degree}
                  </p>
                  <ul className="list-disc pl-4 text-[9px] text-slate-600 space-y-0.5">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Skills, Certifications & Footer Info */}
        <div className="col-span-4 space-y-6">
          {/* Skills Area */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3 font-display">
              KEAHLIAN & KOMPETENSI
            </h2>
            <div className="space-y-3.5">
              {skillCategories.map((cat, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="font-bold text-[10px] text-slate-800 uppercase tracking-wide">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="bg-slate-100 text-slate-800 text-[8px] font-medium px-1.5 py-0.5 rounded border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3 font-display">
              SERTIFIKASI PROFESIONAL
            </h2>
            <div className="space-y-2.5">
              {certifications.map((cert, index) => (
                <div key={index} className="space-y-0.5">
                  <h3 className="font-bold text-[9px] text-slate-900 leading-tight">
                    {cert.title}
                  </h3>
                  <div className="flex justify-between items-center text-[8px] text-slate-500 font-mono">
                    <span>{cert.provider}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Box */}
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
            <h3 className="text-[9px] font-bold text-slate-800 uppercase tracking-wider">
              Keterangan Dokumen
            </h3>
            <p className="text-[8px] text-slate-500 leading-relaxed">
              CV ini digenerasikan secara digital melalui platform portofolio interaktif resmi yang dirancang sebagai instrumen verifikasi data profesional.
            </p>
            <div className="pt-2 border-t border-slate-200 text-[8px] font-mono text-slate-400">
              Validitas Terbuka &copy; 2026
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
