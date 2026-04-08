'use client';

import { useState } from 'react';
import { TOPICS, LABELS } from '@/lib/data';

interface QuizSectionProps {
  onFinish: (scores: Record<string, number>) => void;
}

export default function QuizSection({ onFinish }: QuizSectionProps) {
  const [scores, setScores] = useState<Record<string, number>>({});

  const rate = (topicId: string, value: number) => {
    setScores((prev) => ({ ...prev, [topicId]: value }));
  };

  const ratedCount = Object.keys(scores).length;
  const total = TOPICS.length;
  const allRated = ratedCount === total;

  return (
    <section className="quiz-section" id="quiz">
      <div className="quiz-container">
        <div className="quiz-header">
          <h2>Califica cada tema</h2>
          <p>¿Qué tan importante es para ti? (1 = poco, 5 = muy importante)</p>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(ratedCount / total) * 100}%` }}
            />
          </div>
          <span className="progress-text">
            {ratedCount} / {total} temas
          </span>
        </div>

        <div className="topics-grid">
          {TOPICS.map((topic) => {
            const currentVal = scores[topic.id] || 0;
            const isRated = currentVal > 0;
            return (
              <div
                key={topic.id}
                id={`card-${topic.id}`}
                className={`topic-card${isRated ? ' rated' : ''}`}
              >
                <div className="topic-info">
                  <div className="topic-label">{topic.label}</div>
                  <div className="topic-desc">{topic.desc}</div>
                </div>
                <div className="stars-row" id={`stars-${topic.id}`}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      className={`star${currentVal >= n ? ' active' : ''}`}
                      data-topic={topic.id}
                      data-val={n}
                      onClick={() => rate(topic.id, n)}
                      aria-label={`Calificar ${topic.label} con ${n}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <div className="rating-label">
                  {LABELS[currentVal] ?? 'Sin calificar'}
                </div>
              </div>
            );
          })}
        </div>

        {allRated && (
          <button
            className="btn-primary btn-result"
            id="btn-result"
            onClick={() => onFinish(scores)}
          >
            Ver mi candidato →
          </button>
        )}
      </div>
    </section>
  );
}
