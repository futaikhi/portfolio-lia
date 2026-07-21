import { WorkExperience, Education, Certification, SkillCategory } from './types';

export const personalInfo = {
  name: "R. Ayu Riska Norcamalia",
  title: "Konsultan Keuangan & Ahli Administrasi",
  location: "Malang, Jawa Timur",
  email: "ayuriskanc88@gmail.com",
  phone: "085772753371",
  linkedin: "ayuriskanc",
  instagram: "@ayuriska_88",
  bio: "Saya seorang sarjana akuntansi UIN Maulana Malik Ibrahim Malang yang memiliki pengalaman bekerja sebagai konsultan keuangan dan Admin. Dengan pengalaman ini, saya memupuk pengetahuan yang mumpuni dalam mendampingi klien terkhusus masalah keuangan. Saya sangat termotivasi untuk terus belajar dan meningkatkan keahlian saya."
};

export const experiences: WorkExperience[] = [
  {
    id: "exp-1",
    role: "Staff Admin",
    company: "PT. Poci Kreasi Mandiri",
    period: "Juni 2025 - Sekarang",
    category: "Administrasi & Data",
    highlights: [
      "Merekap penjualan harian di excel secara akurat dan tepat waktu.",
      "Memroses orderan mitra harian di aplikasi Pociku.",
      "Memesan order delivery untuk esok harinya sesuai jadwal mitra guna memastikan rantai pasok berjalan lancar.",
      "Menginput penjualan mitra per hari di aplikasi ERP/SAP.",
      "Menangani proses Billing sampai pelunasan penjualan mitra per hari di aplikasi SAP.",
      "Melakukan rekonsiliasi Stok fisik dan pencatatan SAP per hari sesuai stok keluar harian."
    ]
  },
  {
    id: "exp-2",
    role: "Admin",
    company: "CV. Trijaya Sentosa",
    period: "Agustus 2024 - Juni 2025",
    category: "Administrasi & Data",
    highlights: [
      "Membuat sistem monitoring omset dan laporan stock barang (report stock) setiap hari.",
      "Memroses retur produk dari toko ke aplikasi internal perusahaan.",
      "Merekap seluruh retur yang telah diproses secara terstruktur.",
      "Melakukan pemrosesan orderan toko yang telah diinput di aplikasi oleh tim sales lapangan.",
      "Membuat laporan orderan sales setiap hari untuk dianalisis oleh manajemen."
    ]
  },
  {
    id: "exp-3",
    role: "Petugas Pengolahan (Data Processing)",
    company: "BPS (Badan Pusat Statistik) Kabupaten Pamekasan",
    period: "November 2022 - Maret 2024",
    location: "Pamekasan",
    category: "Administrasi & Data",
    highlights: [
      "Melakukan entry dokumen data statistik ke aplikasi khusus BPS pada setiap Kecamatan sesuai dengan target tenggat waktu proyek.",
      "Melakukan pengecekan anomali data (data validation) setelah seluruh dokumen selesai di-entry untuk menjamin keaslian data.",
      "Melakukan verifikasi kesesuaian dokumen fisik dengan data digital di MS Excel yang diberikan oleh koordinator lapangan."
    ]
  },
  {
    id: "exp-4",
    role: "Konsultan Keuangan",
    company: "PT. Syncore Indonesia",
    period: "Oktober 2021 - Oktober 2022",
    category: "Keuangan & Konsultasi",
    highlights: [
      "Melakukan pendampingan intensif ke 15 BUM Desa (Badan Usaha Milik Desa) Pemenang Program Desa Brilian Batch 1, 2, dan 3.",
      "Memberikan pelatihan dan pendampingan implementasi Sistem Aplikasi Akuntansi BUM Desa (SAAB).",
      "Mengoordinasikan, menyusun materi, dan membimbing mahasiswa KKN dalam program e-Magang.",
      "Memberikan pelatihan dan pendampingan komprehensif mengenai tata kelola keuangan BUM Desa secara transparan dan akuntabel.",
      "Membantu penyusunan Rencana Usaha (Business Plan) untuk BUM Desa serta UMKM mitra binaan.",
      "Menyelenggarakan dan menjadi instruktur dalam pelatihan TOT (Training of Trainers) bagi pendamping BUM Desa tingkat daerah."
    ]
  },
  {
    id: "exp-5",
    role: "Asisten Keuangan",
    company: "Badan Keuangan Daerah Kabupaten Pasuruan",
    period: "Mei 2019 - Juni 2019",
    category: "Keuangan & Konsultasi",
    highlights: [
      "Melakukan perhitungan BPHTB (APBH), Hibah, Jual Beli, dan Waris sesuai dengan UU No. 28 Tahun 2009 dan Peraturan Daerah Kabupaten Pasuruan No. 1 Tahun 2018.",
      "Melakukan pengecekan data keabsahan nilai BPHTB (Bea Perolehan Hak atas Tanah dan Bangunan) serta mengentry Surat Setoran Pajak Daerah (SSPD).",
      "Menyusun dan melakukan entry data SPM (Surat Perintah Membayar) dan SP2D (Surat Perintah Pencairan Dana) pada Aplikasi SIMDA Pemkab Pasuruan."
    ]
  }
];

export const educationList: Education[] = [
  {
    institution: "UIN Maulana Malik Ibrahim Malang",
    degree: "S1 Akuntansi (Sarjana Akuntansi)",
    period: "Lulus dengan Predikat Cum Laude",
    highlights: [
      "Fokus pada Akuntansi Sektor Publik, Perpajakan, dan Audit.",
      "Aktif dalam pelatihan praktikum akuntansi berbasis software.",
      "Lulus dengan predikat kehormatan tertinggi (Cum Laude)."
    ]
  }
];

export const certifications: Certification[] = [
  {
    title: "Simulasi Kerja (SiM-K) Auditor & Financial Analyst",
    provider: "Harisenin.com",
    date: "Februari 2024"
  },
  {
    title: "Hari Senin Skill Camp: Audit & Financial Analyst",
    provider: "Harisenin.com",
    date: "November 2022"
  },
  {
    title: "Pelatihan Program Akuntansi MYOB",
    provider: "Laboratorium Akuntansi & Pajak Fakultas Ekonomi UIN Malang",
    date: "April 2019"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Sistem & ERP",
    skills: ["SAP System", "MYOB Accounting", "SIMDA Pemda", "Aplikasi SAAB BUM Desa", "Pociku Retail App"]
  },
  {
    category: "Keahlian Inti Akuntansi",
    skills: ["Sistem Informasi Akuntansi", "Penatausahaan Keuangan", "Pelaporan Keuangan", "Penyusunan Rencana Usaha (Business Plan)", "Pajak Daerah (BPHTB / SSPD)"]
  },
  {
    category: "Administrasi & Pengolahan Data",
    skills: ["Microsoft Excel (Advance Formula & Data Analysis)", "Penyusunan Laporan Omset", "Monitoring Stock Barang", "Verifikasi Dokumen & Audit Trail", "Data Entry & Anomaly Detection"]
  }
];
