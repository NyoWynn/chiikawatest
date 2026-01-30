import type { Answer } from '../utils/result';
import { answersToSummary } from '../utils/result';
import type { CharacterId } from '../data/characters';
import { CHARACTERS } from '../data/characters';

export async function fetchGeminiSummary(
  characterId: CharacterId,
  answers: Answer[]
): Promise<string> {
  const char = CHARACTERS[characterId];
  const summary = answersToSummary(answers);
  const res = await fetch('/api/summary', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      characterId,
      characterName: char.name,
      characterDescription: char.description,
      answersSummary: summary,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || `Error ${res.status}`);
  }
  const data = await res.json();
  return data.summary ?? data.text ?? '';
}
