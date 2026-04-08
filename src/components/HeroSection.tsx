'use client';

interface HeroSectionProps {
  onStart: () => void;
}

export default function HeroSection({ onStart }: HeroSectionProps) {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="hero-content">
        <div className="badge">🇵🇪 Elecciones Generales · 12 Abril 2026</div>
        <h1 className="hero-title">
          ¿Con quién<br />
          <span className="accent">votas?</span>
        </h1>
        <p className="hero-sub">
          Califica los temas que más te importan y descubre qué candidato
          presidencial se alinea mejor con tus prioridades.
        </p>
        <button className="btn-primary" onClick={onStart} id="btn-start">
          Empezar ahora →
        </button>
      </div>

      <div className="hero-cards">
        <div className="floating-card fc1">🔒 Seguridad</div>
        <div className="floating-card fc2">📚 Educación</div>
        <div className="floating-card fc3">💰 Economía</div>
        <div className="floating-card fc4">🏥 Salud</div>
        <div className="floating-card fc5">⚖️ Justicia</div>
      </div>
    </section>
  );
}
