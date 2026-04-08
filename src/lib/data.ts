// VotaFlix Perú 2026 — Datos tipados con TypeScript
// Basado en planes de gobierno publicados en el JNE

export interface Topic {
  id: string;
  label: string;
  desc: string;
}

export interface Candidate {
  id: string;
  name: string;
  party: string;
  color: string;
  emoji: string;
  perfil: string;
  scores: Record<string, number>;
  propuestas: string[];
}

export interface RankedCandidate extends Candidate {
  match: number;
}

export const TOPICS: Topic[] = [
  { id: 'seguridad',       label: '🔒 Seguridad ciudadana',   desc: 'Reducir la delincuencia y el crimen organizado' },
  { id: 'economia',        label: '💰 Economía y empleo',      desc: 'Crecimiento, inversión y generación de trabajo' },
  { id: 'educacion',       label: '📚 Educación',              desc: 'Calidad educativa, acceso y reforma del sistema' },
  { id: 'salud',           label: '🏥 Salud pública',          desc: 'Acceso universal, hospitales y medicina preventiva' },
  { id: 'corrupcion',      label: '⚖️ Lucha anticorrupción',   desc: 'Transparencia, instituciones fuertes e independientes' },
  { id: 'infraestructura', label: '🏗️ Infraestructura',       desc: 'Carreteras, agua, luz y conectividad' },
  { id: 'medioambiente',   label: '🌿 Medio ambiente',         desc: 'Protección ambiental, minería responsable, cambio climático' },
];

export const CANDIDATES: Candidate[] = [
  {
    id: 'keiko',
    name: 'Keiko Fujimori',
    party: 'Fuerza Popular',
    color: '#E05C5C',
    emoji: '🟥',
    perfil: 'Derecha · Ex candidata presidencial 2011, 2016, 2021',
    scores: { seguridad: 5, economia: 4, educacion: 3, salud: 3, corrupcion: 2, infraestructura: 4, medioambiente: 2 },
    propuestas: [
      'Reducir la impunidad en robos del 90% al 50% hacia 2031',
      'Fortalecer la Policía Nacional y modernizar el sistema judicial',
      'Reducir la pobreza monetaria en un 15% durante su mandato',
      'Atraer inversión privada para dinamizar la economía',
      'Ampliar cobertura de salud en zonas vulnerables',
    ],
  },
  {
    id: 'alvarez',
    name: 'Carlos Álvarez',
    party: 'Independiente / Renovación Popular',
    color: '#5C8EE0',
    emoji: '🟦',
    perfil: 'Centro-derecha · Comediante y comunicador social',
    scores: { seguridad: 4, economia: 5, educacion: 3, salud: 3, corrupcion: 4, infraestructura: 3, medioambiente: 2 },
    propuestas: [
      'Reducción del aparato estatal y gasto público ineficiente',
      'Fomentar emprendimiento y pequeña empresa',
      'Lucha frontal contra la corrupción en el poder judicial',
      'Mayor transparencia en el uso de recursos del Estado',
      'Reformas educativas centradas en habilidades prácticas',
    ],
  },
  {
    id: 'lopezaliaga',
    name: 'Rafael López Aliaga',
    party: 'Renovación Popular',
    color: '#E07A5C',
    emoji: '🟧',
    perfil: 'Derecha liberal · Empresario y exalcalde de Lima',
    scores: { seguridad: 5, economia: 5, educacion: 2, salud: 2, corrupcion: 3, infraestructura: 4, medioambiente: 1 },
    propuestas: [
      'Privatización de empresas estatales ineficientes',
      'Mano dura contra la delincuencia y el terrorismo',
      'Eliminación de trabas burocráticas a la inversión',
      'Reducción de impuestos a empresas y trabajadores',
      'Construcción de infraestructura vial en Lima',
    ],
  },
  {
    id: 'belmont',
    name: 'Ricardo Belmont',
    party: 'Partido Cívico Obras',
    color: '#F2C94C',
    emoji: '🟨',
    perfil: 'Centro · Periodista y exalcalde de Lima',
    scores: { seguridad: 3, economia: 3, educacion: 4, salud: 4, corrupcion: 3, infraestructura: 5, medioambiente: 3 },
    propuestas: [
      'Intervenir 10,000 km de caminos rurales y vecinales',
      'Conectar 500 centros poblados aislados',
      'Reestructurar el sistema de justicia completo',
      'Ampliar cobertura de salud en zonas rurales al 85%',
      'Programa de vivienda social para sectores populares',
    ],
  },
  {
    id: 'sanchez',
    name: 'Roberto Sánchez',
    party: 'Juntos por el Perú',
    color: '#6FCF97',
    emoji: '🟩',
    perfil: 'Izquierda · Congresista y exministro de Comercio',
    scores: { seguridad: 3, economia: 3, educacion: 5, salud: 5, corrupcion: 4, infraestructura: 3, medioambiente: 5 },
    propuestas: [
      'Reforma constitucional vía Asamblea Constituyente',
      'Nueva economía solidaria y equitativa',
      'Ampliar exportaciones con valor agregado en 40%',
      'Reforma estructural de la Policía Nacional',
      'Protección ambiental y derechos de comunidades',
    ],
  },
  {
    id: 'acuna',
    name: 'César Acuña',
    party: 'Alianza para el Progreso',
    color: '#9B51E0',
    emoji: '🟪',
    perfil: 'Centro · Empresario educativo y exgobernador regional',
    scores: { seguridad: 3, economia: 4, educacion: 5, salud: 3, corrupcion: 2, infraestructura: 4, medioambiente: 2 },
    propuestas: [
      'Revolución educativa con tecnología en las aulas',
      'Impulso a la inversión y empleo formal',
      'Red de hospitales regionales modernos',
      'Conectividad digital para todo el Perú',
      'Apoyo a la agricultura y economías regionales',
    ],
  },
  {
    id: 'williams',
    name: 'José Williams',
    party: 'Avanza País',
    color: '#56CCF2',
    emoji: '🔵',
    perfil: 'Derecha · General retirado y ex presidente del Congreso',
    scores: { seguridad: 5, economia: 3, educacion: 3, salud: 3, corrupcion: 4, infraestructura: 3, medioambiente: 2 },
    propuestas: [
      'Estado de emergencia en zonas de alto crimen',
      'Fortalecimiento de las Fuerzas Armadas',
      'Lucha anticorrupción con fiscalía independiente',
      'Inversión en defensa y seguridad nacional',
      'Reducción de burocracia en el Estado',
    ],
  },
];

export const LABELS: Record<number, string> = {
  0: 'Sin calificar',
  1: 'Poco importante',
  2: 'Algo importante',
  3: 'Importante',
  4: 'Muy importante',
  5: 'Esencial',
};

export function computeMatch(userScores: Record<string, number>): RankedCandidate[] {
  return CANDIDATES.map((c) => {
    let score = 0;
    let total = 0;
    TOPICS.forEach((t) => {
      const u = userScores[t.id] || 0;
      const cScore = c.scores[t.id] || 0;
      score += u * cScore;
      total += u * 5;
    });
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    return { ...c, match: pct };
  }).sort((a, b) => b.match - a.match);
}
