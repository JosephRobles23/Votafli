'use client';

import { useState } from 'react';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import QuizSection from '@/components/QuizSection';
import ResultSection from '@/components/ResultSection';

type View = 'hero' | 'quiz' | 'result';

export default function Home() {
  const [view, setView] = useState<View>('hero');
  const [userScores, setUserScores] = useState<Record<string, number>>({});

  const handleStart = () => {
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinish = (scores: Record<string, number>) => {
    setUserScores(scores);
    setView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setUserScores({});
    setView('hero');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Navbar flotante estilo píldora */}
      <nav className="navbar">
        <Image
          src="/LOGO.png"
          alt="VotaFlix Perú 2026"
          className="navbar-logo"
          width={220}
          height={52}
          priority
        />
        <div className="navbar-right">
          <button className="nav-lang" aria-label="Cambiar idioma">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></svg>
            Español
          </button>
          <button className="nav-theme" aria-label="Cambiar tema">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 01-4.4 2.26 5.4 5.4 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path></svg>
          </button>
        </div>
      </nav>

      <main>
        {view === 'hero' && <HeroSection onStart={handleStart} />}
        {view === 'quiz' && <QuizSection onFinish={handleFinish} />}
        {view === 'result' && (
          <ResultSection userScores={userScores} onRestart={handleRestart} />
        )}
        {view === 'hero' && (
          <footer className="footer">
            <p>
              VotaFlix Perú 2026 · Datos basados en planes de gobierno oficiales del JNE · No tiene afiliación política ·{' '}
              <a href="https://votoinformado.jne.gob.pe" target="_blank" rel="noopener noreferrer">
                Voto Informado JNE
              </a>
            </p>
          </footer>
        )}
      </main>
    </>
  );
}

