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
      {/* Navbar fijo con logo */}
      <nav className="navbar">
        <Image
          src="/LOGO.png"
          alt="VotaFlix Perú 2026"
          className="navbar-logo"
          width={160}
          height={40}
          priority
        />
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

