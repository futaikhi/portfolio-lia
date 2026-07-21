import { Mail, Phone, Linkedin, Instagram, MapPin } from 'lucide-react';
import { personalInfo } from '../data';

export default function ContactForm() {
  return (
    <section id="kontak" className="py-20 bg-bento-bg text-slate-100 border-b border-bento-border scroll-mt-16 relative overflow-hidden">
      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-500 uppercase">
            HUBUNGI SAYA
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-slate-100 leading-tight">
            Mari Terhubung secara Profesional
          </h2>
          <p className="text-xs text-bento-text-muted leading-relaxed">
            Apakah Anda pemilik UMKM, pengurus BUM Desa, atau perwakilan instansi yang membutuhkan tenaga ahli akuntansi & keuangan? Silakan hubungi saya melalui jalur resmi di bawah ini.
          </p>
        </div>

        {/* Bento Grid of Contact Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Email Card */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group block bg-bento-card border border-bento-border hover:border-brand-500/30 rounded-3xl p-6 transition-all hover:-translate-y-1 duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/5 rounded-full blur-2xl group-hover:bg-brand-500/10 transition-all pointer-events-none" />
            <div className="w-11 h-11 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center border border-brand-500/10 group-hover:bg-brand-500 group-hover:text-slate-950 transition-all mb-5">
              <Mail className="w-5 h-5 shrink-0" />
            </div>
            <span className="text-[9px] font-mono tracking-widest text-slate-500 block uppercase font-bold mb-1">EMAIL UTAMA</span>
            <h3 className="text-sm font-semibold text-slate-200 group-hover:text-brand-400 transition-colors truncate">
              {personalInfo.email}
            </h3>
            <p className="text-[11px] text-bento-text-muted mt-2">
              Kirimkan dokumen kerjasama atau penawaran proyek konsultasi.
            </p>
          </a>

          {/* WhatsApp Card */}
          <a
            href={`tel:${personalInfo.phone}`}
            className="group block bg-bento-card border border-bento-border hover:border-brand-500/30 rounded-3xl p-6 transition-all hover:-translate-y-1 duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/5 rounded-full blur-2xl group-hover:bg-brand-500/10 transition-all pointer-events-none" />
            <div className="w-11 h-11 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center border border-brand-500/10 group-hover:bg-brand-500 group-hover:text-slate-950 transition-all mb-5">
              <Phone className="w-5 h-5 shrink-0" />
            </div>
            <span className="text-[9px] font-mono tracking-widest text-slate-500 block uppercase font-bold mb-1">TELEPON / WA</span>
            <h3 className="text-sm font-semibold text-slate-200 group-hover:text-brand-400 transition-colors">
              {personalInfo.phone}
            </h3>
            <p className="text-[11px] text-bento-text-muted mt-2">
              Hubungi saya secara langsung untuk diskusi instan dan konsultasi cepat.
            </p>
          </a>

          {/* Location Card */}
          <div className="group bg-bento-card border border-bento-border rounded-3xl p-6 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="w-11 h-11 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center border border-brand-500/10 mb-5">
              <MapPin className="w-5 h-5 shrink-0" />
            </div>
            <span className="text-[9px] font-mono tracking-widest text-slate-500 block uppercase font-bold mb-1">DOMISILI SEKARANG</span>
            <h3 className="text-sm font-semibold text-slate-200">
              {personalInfo.location}
            </h3>
            <p className="text-[11px] text-bento-text-muted mt-2">
              Siap berkolaborasi baik secara daring maupun luring di wilayah Jawa Timur.
            </p>
          </div>

        </div>

        {/* Social Media Link bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 pt-6 border-t border-bento-border/50">
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">Digital Footprints:</span>
          <div className="flex items-center space-x-3">
            <a
              href={`https://linkedin.com/in/ayuriskanc`}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center gap-2 py-2 px-4 rounded-xl bg-bento-card border border-bento-border text-xs text-slate-400 hover:text-brand-500 hover:border-brand-500/30 hover:bg-slate-900 transition-all cursor-pointer"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 shrink-0" />
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">LinkedIn Profile</span>
            </a>
            <a
              href={`https://instagram.com/ayuriska_88`}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center gap-2 py-2 px-4 rounded-xl bg-bento-card border border-bento-border text-xs text-slate-400 hover:text-brand-500 hover:border-brand-500/30 hover:bg-slate-900 transition-all cursor-pointer"
              title="Instagram"
            >
              <Instagram className="w-4 h-4 shrink-0" />
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">Instagram Profile</span>
            </a>
          </div>
        </div>

        {/* Footer legalities */}
        <div className="mt-20 pt-8 border-t border-bento-border text-center text-[10px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>&copy; 2026 R. Ayu Riska Norcamalia. All Rights Reserved.</span>
          <span>Desain Portofolio Keuangan Akuntansi • Vercel-Ready Serverless Layout</span>
        </div>
      </div>
    </section>
  );
}
