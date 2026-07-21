import { X, Printer, FileText, Download, Check, ClipboardCopy, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';
import { personalInfo, experiences, educationList, certifications, skillCategories } from '../data';
import { toJpeg } from 'html-to-image';
import { jsPDF } from 'jspdf';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateSuccess, setGenerateSuccess] = useState(false);

  if (!isOpen) return null;

  // Function to download the CV directly as a high-quality PDF using client-side rendering
  const generatePDF = async () => {
    setIsGenerating(true);
    setGenerateSuccess(false);
    try {
      const element = document.getElementById('printable-cv');
      if (!element) {
        throw new Error('Elemen CV tidak ditemukan');
      }

      // Capture the offscreen element using html-to-image which handles modern oklch colors perfectly
      const imgData = await toJpeg(element, {
        quality: 0.95,
        pixelRatio: 2, // Crisp 2x scaling for perfect text legibility
        backgroundColor: '#ffffff',
      });

      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      const pdfWidth = pdf.internal.pageSize.getWidth(); // A4: 210mm
      const pdfHeight = pdf.internal.pageSize.getHeight(); // A4: 297mm

      // Add image to cover exactly one A4 page
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      
      pdf.save(`CV_R_Ayu_Riska_Norcamalia.pdf`);
      
      setGenerateSuccess(true);
      setTimeout(() => setGenerateSuccess(false), 3000);
    } catch (error) {
      console.error('Gagal membuat PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  // Function to download the ATS-friendly TXT CV
  const downloadATSText = () => {
    let text = `==================================================
RESUME / CURRICULUM VITAE - ATS FRIENDLY FORMAT
==================================================

PERSONAL DETAILS
----------------
Nama Lengkap    : ${personalInfo.name}
Posisi / Minat  : ${personalInfo.title}
Domisili        : ${personalInfo.location}
Email           : ${personalInfo.email}
Telepon         : ${personalInfo.phone}
LinkedIn        : linkedin.com/in/${personalInfo.linkedin}
Instagram       : instagram.com/${personalInfo.instagram.replace('@', '')}

TENTANG SAYA (BIO SUMMARY)
--------------------------
${personalInfo.bio}


RIWAYAT PENGALAMAN KERJA
------------------------
`;

    experiences.forEach((exp) => {
      text += `
Role/Jabatan    : ${exp.role}
Perusahaan      : ${exp.company}
Periode         : ${exp.period}
Kategori        : ${exp.category}
Detail Kontribusi:
`;
      exp.highlights.forEach((highlight) => {
        text += `  - ${highlight}\n`;
      });
    });

    text += `

PENDIDIKAN RESMI
----------------
`;
    educationList.forEach((edu) => {
      text += `
Institusi       : ${edu.institution}
Gelar           : ${edu.degree}
Periode/Keterangan: ${edu.period}
Fokus Studi & Prestasi:
`;
      edu.highlights.forEach((highlight) => {
        text += `  - ${highlight}\n`;
      });
    });

    text += `

SERTIFIKASI PROFESIONAL
-----------------------
`;
    certifications.forEach((cert) => {
      text += `- ${cert.title} | Oleh: ${cert.provider} (${cert.date})\n`;
    });

    text += `

KEAHLIAN & KOMPETENSI TEKNIS
----------------------------
`;
    skillCategories.forEach((cat) => {
      text += `\n[${cat.category}]\n`;
      cat.skills.forEach((skill) => {
        text += `  * ${skill}\n`;
      });
    });

    text += `
==================================================
CV digenerasikan melalui Portofolio Resmi R. Ayu Riska
==================================================`;

    // Create file blob and download
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV_Ayu_Riska_Norcamalia_ATS.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Function to copy ATS text to clipboard
  const copyToClipboard = () => {
    let clipboardText = `${personalInfo.name}\n${personalInfo.title}\n\nEmail: ${personalInfo.email} | No: ${personalInfo.phone}\nLinkedIn: linkedin.com/in/${personalInfo.linkedin}\n\nEXPERIENCES:\n`;
    experiences.forEach((exp) => {
      clipboardText += `${exp.role} at ${exp.company} (${exp.period})\n`;
      exp.highlights.forEach((h) => {
        clipboardText += `- ${h}\n`;
      });
    });

    navigator.clipboard.writeText(clipboardText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in print:hidden">
      {/* Modal Container */}
      <div className="bg-bento-card border border-bento-border rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative">
        
        {/* Header */}
        <div className="p-6 border-b border-bento-border flex items-center justify-between bg-slate-900/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center border border-brand-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-slate-100 text-base leading-tight">
                Unduh & Cetak CV
              </h3>
              <p className="text-[11px] text-bento-text-muted">
                Pilih format CV premium (PDF Resmi) atau format ramah mesin (ATS Teks).
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body: Split View */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
          
          {/* Left Column: Selector & Export Controls */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-white/5 space-y-2">
                <span className="text-[9px] font-mono font-bold text-brand-500 uppercase tracking-widest block">Metode 1: High-Quality PDF</span>
                <h4 className="text-xs font-bold text-slate-200">Unduh PDF Resmi (Rekomendasi)</h4>
                <p className="text-[11px] text-bento-text-muted leading-relaxed">
                  Konversi otomatis halaman CV ini menjadi file PDF vektor berkualitas tinggi yang siap dikirim langsung ke HRD.
                </p>
                <button
                  onClick={generatePDF}
                  disabled={isGenerating}
                  className="w-full mt-3 py-3 px-4 rounded-xl bg-brand-500 hover:bg-brand-400 disabled:opacity-75 text-slate-950 font-mono font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-brand-500/10 font-bold"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      Membuat PDF...
                    </>
                  ) : generateSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-950 stroke-[3]" />
                      Berhasil Diunduh!
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 shrink-0" />
                      Unduh PDF Sekarang
                    </>
                  )}
                </button>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-2xl border border-white/5 space-y-2">
                <span className="text-[9px] font-mono font-bold text-amber-500 uppercase tracking-widest block">Metode 2: ATS Friendly</span>
                <h4 className="text-xs font-bold text-slate-200">Format Plain-Text (.TXT)</h4>
                <p className="text-[11px] text-bento-text-muted leading-relaxed">
                  Format teks murni yang bebas dari layout grafis, 100% terbaca sempurna oleh mesin pemindai lamaran kerja (ATS).
                </p>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <button
                    onClick={downloadATSText}
                    className="py-2.5 px-3 rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 text-slate-200 font-mono font-bold uppercase text-[10px] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 shrink-0" />
                    Unduh TXT
                  </button>
                  <button
                    onClick={copyToClipboard}
                    className="py-2.5 px-3 rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 text-slate-200 font-mono font-bold uppercase text-[10px] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <ClipboardCopy className="w-3.5 h-3.5 shrink-0" />
                        Salin Teks
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="p-4 bg-brand-500/5 rounded-2xl border border-brand-500/10 text-[10px] text-bento-text-muted leading-relaxed">
              <span className="font-bold text-brand-400 block mb-1">💡 Tips Menyimpan PDF:</span>
              Pada kotak dialog cetak browser, ubah opsi <strong className="text-slate-200">"Tujuan" (Destination)</strong> menjadi <strong className="text-slate-200">"Simpan sebagai PDF" (Save as PDF)</strong>, hilangkan centang opsi header & footer, lalu klik Simpan.
            </div>
          </div>

          {/* Right Column: Visual Preview A4 Card */}
          <div className="lg:col-span-8 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-white/5 overflow-y-auto max-h-[60vh] lg:max-h-none flex flex-col space-y-5">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">PRATINJAU FORMAT PDF</span>
              <span className="text-[10px] font-mono text-slate-500">Standar Ukuran Surat A4</span>
            </div>

            {/* Simulated Sheet of Paper */}
            <div className="bg-white text-slate-900 p-6 rounded-xl shadow-inner font-sans text-[10px] leading-relaxed max-w-[170mm] mx-auto w-full border border-slate-300">
              {/* CV Top Header */}
              <div className="border-b border-slate-800 pb-3 mb-4 flex justify-between items-end">
                <div>
                  <h4 className="text-sm font-extrabold uppercase text-slate-900 tracking-tight font-display">
                    {personalInfo.name}
                  </h4>
                  <p className="text-[9px] font-bold text-brand-600 uppercase tracking-wide">
                    {personalInfo.title}
                  </p>
                </div>
                <div className="text-right text-[7.5px] text-slate-600 font-mono space-y-0.5">
                  <p>{personalInfo.email}</p>
                  <p>{personalInfo.phone}</p>
                  <p>{personalInfo.location}</p>
                </div>
              </div>

              {/* CV Content Split */}
              <div className="grid grid-cols-12 gap-4">
                {/* Experiences & Education column */}
                <div className="col-span-8 space-y-4">
                  <div>
                    <h5 className="font-bold text-[9px] uppercase border-b border-slate-300 pb-0.5 mb-2 text-slate-900 tracking-wider">
                      RIWAYAT KERJA
                    </h5>
                    <div className="space-y-3">
                      {experiences.slice(0, 3).map((exp) => (
                        <div key={exp.id} className="space-y-0.5">
                          <div className="flex justify-between font-bold text-[8.5px]">
                            <span>{exp.role} at {exp.company}</span>
                            <span className="font-mono text-slate-500 font-medium text-[7.5px]">{exp.period}</span>
                          </div>
                          <p className="text-[7.5px] text-slate-600 leading-snug">
                            {exp.highlights[0]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-[9px] uppercase border-b border-slate-300 pb-0.5 mb-2 text-slate-900 tracking-wider">
                      PENDIDIKAN
                    </h5>
                    <div className="space-y-1">
                      <div className="flex justify-between font-bold text-[8.5px]">
                        <span>{educationList[0].institution}</span>
                        <span className="font-mono text-slate-500 font-medium text-[7.5px]">Lulus</span>
                      </div>
                      <p className="text-[8px] text-brand-600 font-semibold">{educationList[0].degree}</p>
                    </div>
                  </div>
                </div>

                {/* Skills & Certifications Column */}
                <div className="col-span-4 space-y-4">
                  <div>
                    <h5 className="font-bold text-[9px] uppercase border-b border-slate-300 pb-0.5 mb-2 text-slate-900 tracking-wider">
                      KEAHLIAN INTI
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {skillCategories[0].skills.slice(0, 4).map((skill, idx) => (
                        <span key={idx} className="bg-slate-100 border border-slate-200 text-slate-800 text-[6.5px] px-1 rounded">
                          {skill}
                        </span>
                      ))}
                      {skillCategories[1].skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="bg-slate-100 border border-slate-200 text-slate-800 text-[6.5px] px-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-[9px] uppercase border-b border-slate-300 pb-0.5 mb-2 text-slate-900 tracking-wider">
                      SERTIFIKASI
                    </h5>
                    <div className="space-y-1 text-[7.5px] text-slate-700">
                      {certifications.slice(0, 2).map((cert, idx) => (
                        <div key={idx} className="font-medium">
                          <span className="font-bold text-slate-900">{cert.title}</span>
                          <span className="block text-slate-500 text-[6.5px] font-mono">{cert.provider}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}