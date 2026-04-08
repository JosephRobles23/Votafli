import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VotaFlix Perú 2026 — Descubre tu candidato',
  description: 'Califica los temas que más te importan y descubre qué candidato presidencial se alinea mejor con tus prioridades. Elecciones Generales Perú 12 Abril 2026.',
  keywords: 'elecciones peru 2026, candidatos presidenciales, voto informado, quiz electoral peru',
  openGraph: {
    title: 'VotaFlix Perú 2026',
    description: '¿Con quién votas? Descubre tu candidato ideal en segundos.',
    type: 'website',
    locale: 'es_PE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
