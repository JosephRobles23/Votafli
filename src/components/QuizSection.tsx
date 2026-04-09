'use client';

import { TOPICS } from '@/lib/data';

interface QuizSectionProps {
  onFinish: (scores: Record<string, number>) => void;
}

export default function QuizSection({ onFinish }: QuizSectionProps) {
  return (
    <section className="quiz-section" id="quiz">
      <div className="quiz-container">
        <div className="quiz-header">
          <h2>Elige tu prioridad principal</h2>
          <p>Selecciona la categoría que más te importa para descubrir a tu candidato ideal.</p>
        </div>

        <div className="topics-grid">
          {TOPICS.map((topic) => (
            <button
              key={topic.id}
              id={`card-${topic.id}`}
              className="topic-card clickable-card"
              onClick={() => onFinish({ [topic.id]: 5 })}
            >
              <div className="topic-info">
                <div className="topic-label">{topic.label}</div>
                <div className="topic-desc">{topic.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
