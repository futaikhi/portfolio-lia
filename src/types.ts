export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  category: 'Keuangan & Konsultasi' | 'Administrasi & Data';
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  provider: string;
  date: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
