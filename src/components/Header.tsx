import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUpRight, Award, Flame, Wallet, Layers, HeartHandshake, Download, FileText } from 'lucide-react';
import { personalInfo } from '../data';
import { motion } from 'motion/react';

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenCVModal: () => void;
}

export default function Header({ onScrollToSection, onOpenCVModal }: HeaderProps) {
  return (
    <header className="border-b border-bento-border bg-bento-bg sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-emerald-700 flex items-center justify-center text-slate-950 font-display font-extrabold text-lg tracking-wider shadow-md shadow-brand-500/20">
              AR
            </div>
            <div>
              <span className="font-display font-bold text-slate-100 text-sm block leading-tight">
                R. Ayu Riska Norcamalia
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-brand-500 block">
                Financial Advisory & Admin
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onScrollToSection('tentang')} 
              className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 hover:text-brand-500 transition-colors cursor-pointer"
            >
              Tentang
            </button>
            <button 
              onClick={() => onScrollToSection('riwayat-kerja')} 
              className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 hover:text-brand-500 transition-colors cursor-pointer"
            >
              Pengalaman
            </button>
            <button 
              onClick={() => onScrollToSection('keahlian')} 
              className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 hover:text-brand-500 transition-colors cursor-pointer"
            >
              Kompetensi
            </button>
            <button 
              onClick={() => onScrollToSection('pendidikan')} 
              className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 hover:text-brand-500 transition-colors cursor-pointer"
            >
              Pendidikan
            </button>
            <button 
              onClick={() => onScrollToSection('simulasi')} 
              className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 hover:text-brand-500 transition-colors cursor-pointer"
            >
              Kalkulator Keuangan
            </button>
          </nav>

          {/* Actions Button Group */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenCVModal}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold font-mono uppercase tracking-wider rounded-xl bg-slate-950 border border-white/5 text-slate-300 hover:text-brand-500 hover:border-brand-500/20 transition-all cursor-pointer"
              title="Unduh / Cetak CV Resmi"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Unduh CV</span>
            </button>
            <button
              onClick={() => onScrollToSection('kontak')}
              className="inline-flex items-center px-4 py-2 text-xs font-bold font-mono uppercase tracking-wider rounded-xl bg-brand-500 text-slate-950 hover:bg-brand-600 transition-all shadow-md shadow-brand-500/10 cursor-pointer"
            >
              Hubungi Saya
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Hero({ onScrollToSection, onOpenCVModal }: HeaderProps) {
  return (
    <section className="relative overflow-hidden bg-bento-bg py-12 sm:py-16 border-b border-bento-border">
      {/* Decorative Dashboard Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141724_1px,transparent_1px),linear-gradient(to_bottom,#141724_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35" />
      <div className="absolute inset-0 bg-radial-gradient from-brand-950/20 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center md:text-left mb-8">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-950 text-brand-500 border border-brand-500/20 mb-4 font-mono uppercase tracking-wider">
            📊 Professional Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-100 tracking-tight">
            Financial & Advisory Dashboard
          </h2>
          <p className="text-xs text-bento-text-muted mt-1 max-w-lg">
            Sistem representasi terstruktur dari riwayat kerja, keahlian akuntansi, penaksiran pajak daerah, dan tata kelola BUM Desa.
          </p>
        </div>

        {/* BENTO GRID HERO LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[180px]">
          
          {/* Main Profile Bento Box (col-span-2 row-span-2) */}
          <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-slate-900 to-bento-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-bento-border shadow-2xl hover:border-bento-border-hover transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-2xl group-hover:bg-brand-500/10 transition-colors pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-tr from-brand-600 to-emerald-800 rounded-2xl flex items-center justify-center text-slate-950 font-display font-black text-2xl shadow-lg shadow-brand-500/20 shrink-0">
                  AR
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-100 tracking-tight leading-none">
                    {personalInfo.name}
                  </h1>
                  <p className="text-brand-500 text-xs sm:text-sm font-mono font-bold tracking-wider mt-1.5 uppercase">
                    {personalInfo.title}
                  </p>
                </div>
              </div>
              <p className="text-bento-text-muted text-xs leading-relaxed max-w-md pt-2">
                Saya seorang sarjana akuntansi UIN Maulana Malik Ibrahim Malang yang memiliki pengalaman bekerja sebagai konsultan keuangan dan manajemen. Sangat termotivasi untuk mendampingi klien mengatasi masalah tata kelola keuangan secara kredibel.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-bento-border mt-4">
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono bg-slate-900 px-2.5 py-1 rounded-md text-brand-500 font-semibold border border-brand-500/10">
                  S1 Akuntansi
                </span>
                <span className="text-[10px] font-mono bg-slate-900 px-2.5 py-1 rounded-md text-brand-500 font-semibold border border-brand-500/10">
                  Cum Laude
                </span>
              </div>
              <button
                onClick={onOpenCVModal}
                className="inline-flex items-center gap-1.5 py-2 px-4 rounded-xl bg-brand-500 text-slate-950 font-mono font-extrabold uppercase text-[10px] hover:bg-brand-400 transition-all cursor-pointer shadow-md shadow-brand-500/10"
              >
                <FileText className="w-3.5 h-3.5" />
                Unduh CV
              </button>
            </div>
          </div>


          {/* Quick Contact Box (col-span-1 row-span-1) */}
          <div className="bg-bento-card rounded-3xl p-5 border border-bento-border flex flex-col justify-between hover:border-bento-border-hover transition-all group">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Fast Connect</span>
            <div className="space-y-2">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-2.5 text-xs text-slate-300 hover:text-brand-500 transition-colors">
                <Mail className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center space-x-2.5 text-xs text-slate-300 hover:text-brand-500 transition-colors">
                <Phone className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
            <div className="text-[10px] text-slate-500 font-mono flex items-center justify-between">
              <span>ayuriskanc88@gmail.com</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-brand-500 transition-colors" />
            </div>
          </div>

          {/* Location & Home Base (col-span-1 row-span-1) */}
          <div className="bg-bento-card rounded-3xl p-5 border border-bento-border flex flex-col justify-between hover:border-bento-border-hover transition-all group">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">DOMISILI / ASAL</span>
            <div className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-200">Malang</h4>
                <p className="text-[10px] text-bento-text-muted mt-0.5">Jawa Timur, Indonesia</p>
              </div>
            </div>
            <span className="text-[9px] font-mono text-slate-500">UIN Malang Alumna</span>
          </div>

          {/* Availability Status (col-span-1 row-span-1) */}
          <div className="bg-brand-500 rounded-3xl p-5 flex flex-col justify-between text-slate-950 hover:bg-brand-400 transition-all group cursor-pointer relative overflow-hidden" onClick={() => onScrollToSection('kontak')}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-900/60 font-bold">WORK AVAILABILITY</span>
              <div className="w-2.5 h-2.5 bg-slate-950 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
              </div>
            </div>
            <div>
              <div className="text-xl font-display font-extrabold tracking-tight leading-tight">Ready for Projects</div>
              <p className="text-[10px] font-semibold tracking-wide uppercase text-slate-900/70 mt-1">Hire R. Ayu Riska</p>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono font-bold pt-2 border-t border-slate-950/10">
              <span>OPEN FOR ADVISORY</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </div>
          </div>

          {/* Social Platforms Block (col-span-1 row-span-1) */}
          <div className="bg-bento-card rounded-3xl p-5 border border-bento-border flex flex-col justify-between hover:border-bento-border-hover transition-all group">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">DIGITAL RAILS</span>
            <div className="flex space-x-3.5">
              <a 
                href="https://linkedin.com/in/ayuriskanc" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-500 hover:text-slate-950 transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/ayuriska_88" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-500 hover:text-slate-950 transition-all shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">@ayuriska_88</span>
          </div>

          {/* Value Pillars Quick Look (col-span-2 row-span-1) */}
          <div className="md:col-span-2 md:row-span-1 bg-bento-card rounded-3xl p-5 border border-bento-border flex flex-col justify-between hover:border-bento-border-hover transition-all group relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Core Advisory Philosophy</span>
              <span className="text-[10px] text-brand-500 font-mono font-bold">03 PILLARS</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-1 bg-slate-900/40 p-2.5 rounded-xl border border-white/5">
                <span className="text-[9px] font-bold text-brand-500 font-mono">01 / INTEGRITAS</span>
                <p className="text-[10px] text-slate-300 leading-tight">Pencatatan bebas anomali & patuh pajak.</p>
              </div>
              <div className="space-y-1 bg-slate-900/40 p-2.5 rounded-xl border border-white/5">
                <span className="text-[9px] font-bold text-brand-500 font-mono">02 / AKUNTABEL</span>
                <p className="text-[10px] text-slate-300 leading-tight">Pendampingan SAAB & BUMDes transparan.</p>
              </div>
              <div className="space-y-1 bg-slate-900/40 p-2.5 rounded-xl border border-white/5">
                <span className="text-[9px] font-bold text-brand-500 font-mono">03 / SISTEMIK</span>
                <p className="text-[10px] text-slate-300 leading-tight">Efisien dengan modul SAP / ERP daerah.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

