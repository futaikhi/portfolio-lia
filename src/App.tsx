/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header, { Hero } from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import FinanceCalculator from './components/FinanceCalculator';
import ContactForm from './components/ContactForm';
import CVModal from './components/CVModal';
import PrintableCV from './components/PrintableCV';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-bento-bg text-slate-100 antialiased font-sans relative">
      {/* Top Navigation Bar */}
      <Header onScrollToSection={scrollToSection} onOpenCVModal={() => setIsCVModalOpen(true)} />

      <main className="print:hidden">
        {/* Hero Section */}
        <Hero onScrollToSection={scrollToSection} onOpenCVModal={() => setIsCVModalOpen(true)} />

        {/* About Section */}
        <About />

        {/* Work Experience Section */}
        <Experience />

        {/* Skills & Certifications Section */}
        <Skills />

        {/* Education Section */}
        <Education />

        {/* Interactive Finance and Tax Calculator Section */}
        <FinanceCalculator />

        {/* Contact Form Section */}
        <ContactForm />
      </main>

      {/* CV Print Preview & Selection Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />

      {/* Invisible on Screen, Visible on Print */}
      <PrintableCV />
    </div>
  );
}


