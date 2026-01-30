import type { CharacterId } from '../data/characters';
import { QUESTIONS } from '../data/questions';

export interface Answer {
  questionId: number;
  selectedCharacter: CharacterId;
  weight: number;
}

/** Cuántas preguntas tienen a cada personaje como opción (para normalizar) */
function getAppearanceCounts(): Record<CharacterId, number> {
  const counts: Partial<Record<CharacterId, number>> = {};
  for (const q of QUESTIONS) {
    for (const opt of q.options) {
      counts[opt.character] = (counts[opt.character] ?? 0) + 1;
    }
  }
  return counts as Record<CharacterId, number>;
}

const APPEARANCE_COUNTS = getAppearanceCounts();

/**
 * Calcula el personaje ganador con puntuación normalizada:
 * cada personaje se divide por las veces que aparece en el test,
 * así quien aparece menos no queda penalizado y todos pueden ganar.
 */
export function calculateResult(answers: Answer[]): CharacterId {
  const scores: Partial<Record<CharacterId, number>> = {};
  for (const a of answers) {
    scores[a.selectedCharacter] = (scores[a.selectedCharacter] ?? 0) + a.weight;
  }
  const entries = Object.entries(scores) as [CharacterId, number][];
  if (entries.length === 0) return 'chiikawa';

  let best: CharacterId = entries[0][0];
  let bestNormalized = 0;

  for (const [char, total] of entries) {
    const appearances = APPEARANCE_COUNTS[char] ?? 1;
    const normalized = total / appearances;
    if (normalized > bestNormalized) {
      bestNormalized = normalized;
      best = char;
    }
  }

  return best;
}

export function answersToSummary(answers: Answer[]): string {
  return answers
    .map((a) => {
      const q = QUESTIONS.find((q) => q.id === a.questionId);
      const opt = q?.options.find((o) => o.character === a.selectedCharacter);
      return `P${a.questionId}: ${q?.text} → ${opt?.text ?? a.selectedCharacter}`;
    })
    .join('\n');
}
