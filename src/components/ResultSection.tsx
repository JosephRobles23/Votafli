'use client';

import { useEffect, useRef, useState } from 'react';
import { computeMatch, RankedCandidate } from '@/lib/data';

interface ResultSectionProps {
  userScores: Record<string, number>;
  onRestart: () => void;
}

export default function ResultSection({ userScores, onRestart }: ResultSectionProps) {
  const [ranked, setRanked] = useState<RankedCandidate[]>([]);
  const [animatedBars, setAnimatedBars] = useState(false);
  const [toast, setToast] = useState('');
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const result = computeMatch(userScores);
    setRanked(result);
    // Trigger bar animation after mount
    setTimeout(() => setAnimatedBars(true), 100);
  }, [userScores]);

  const winner = ranked[0];

  const shareResult = () => {
    if (!winner) return;
    const text = `🇵🇪 Hice el test de VotaFlix Perú 2026 y tengo ${winner.match}% de compatibilidad con ${winner.name}. ¿Y tú con quién votas? #Peru2026 #VotaFlix`;
    if (typeof window !== 'undefined' && navigator.share) {
      navigator.share({ title: 'VotaFlix Perú 2026', text });
    } else {
      navigator.clipboard.writeText(text).then(() => showToast('¡Texto copiado al portapapeles! 📋'));
    }
  };

  const showToast = (msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 3000);
  };

  if (!winner) return null;

  return (
    <>
      <section className="result-section" id="result">
        <div className="result-container">
          <div className="result-header">
            <p className="result-label">Tu mayor afinidad es con</p>
            <h2 className="result-name" id="result-name">{winner.name}</h2>
            <div className="result-party" id="result-party">{winner.party}</div>
            <div className="result-match" id="result-match">
              <span className="match-pct" style={{ color: winner.color }}>
                {winner.match}%
              </span>{' '}
              de compatibilidad
            </div>
          </div>

          <div className="result-body">
            {/* Perfil del ganador */}
            <div className="result-profile">
              <div
                className="candidate-avatar"
                id="candidate-avatar"
                style={{
                  background: `${winner.color}22`,
                  borderColor: winner.color,
                }}
              >
                {winner.emoji}
              </div>
              <div className="candidate-info">
                <h3>Propuestas clave</h3>
                <ul className="proposals-list" id="proposals-list">
                  {winner.propuestas.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Barras de todos los candidatos */}
            <div className="all-candidates">
              <h3>Compatibilidad con todos los candidatos</h3>
              <div className="candidates-bars" id="candidates-bars">
                {ranked.map((c, i) => (
                  <div
                    key={c.id}
                    className={`bar-row${i === 0 ? ' bar-winner' : ''}`}
                  >
                    <div className="bar-name">{c.emoji} {c.name}</div>
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{
                          width: animatedBars ? `${c.match}%` : '0%',
                          background: c.color,
                        }}
                      />
                    </div>
                    <div className="bar-pct">{c.match}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="result-actions">
            <button className="btn-secondary" onClick={onRestart} id="btn-restart">
              ← Volver a empezar
            </button>
            <button className="btn-primary" onClick={shareResult} id="btn-share">
              Compartir resultado 🔗
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          VotaFlix Perú 2026 · Datos basados en planes de gobierno oficiales del JNE · No tiene afiliación política ·{' '}
          <a href="https://votoinformado.jne.gob.pe" target="_blank" rel="noopener noreferrer">
            Voto Informado JNE
          </a>
        </p>
      </footer>

      {/* TOAST */}
      {toast && <div className="toast">{toast}</div>}
    </>
  );
}
