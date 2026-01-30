import { useState } from 'react';
import { QUESTIONS, TOTAL_QUESTIONS } from './data/questions';
import { CHARACTERS, type CharacterId } from './data/characters';

/** Número máximo de GIFs por personaje en public/personajes/resource/gifs/ */
const CHARACTER_GIF_COUNTS: Record<CharacterId, number> = {
  chiikawa: 8,
  hachiware: 7,
  usagi: 6,
  momonga: 3,
  rakko: 3,
  kurimanju: 3,
  shisa: 3,
  furuhonya: 3,
};
import type { Answer } from './utils/result';
import { calculateResult } from './utils/result';
import styles from './App.module.css';

const STICKERS_BASE = '/personajes/resource/STICKERS';

type Step = 'intro' | 'questions' | 'result';

function CardStickers() {
  return (
    <>
      <img src={`${STICKERS_BASE}/chiikawaSticker.png`} alt="" className={`${styles.sticker} ${styles.stickerTopLeft}`} aria-hidden />
      <img src={`${STICKERS_BASE}/hachiwareSticker.png`} alt="" className={`${styles.sticker} ${styles.stickerTopRight}`} aria-hidden />
      <img src={`${STICKERS_BASE}/usagiSTICKER.png`} alt="" className={`${styles.sticker} ${styles.stickerBottomLeft}`} aria-hidden />
      <img src={`${STICKERS_BASE}/momongaSticker.png`} alt="" className={`${styles.sticker} ${styles.stickerBottomRight}`} aria-hidden />
    </>
  );
}

function FooterContent() {
  return (
    <>
      <a href="https://github.com/NyoWynn" target="_blank" rel="noopener noreferrer" aria-label="GitHub NyoWynn">
        <svg className={styles.githubIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
      <a href="https://github.com/NyoWynn" target="_blank" rel="noopener noreferrer" className={styles.footerDev} aria-label="Dev by NyoWynn">
        <span>Dev by</span>
        <img src="/personajes/resource/wynnDevLogo.png" alt="NyoWynn" className={styles.footerDevLogo} />
      </a>
    </>
  );
}

export default function App() {
  const [step, setStep] = useState<Step>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [resultCharacter, setResultCharacter] = useState<CharacterId | null>(null);
  const [resultGifIndex, setResultGifIndex] = useState<number>(1);

  const question = QUESTIONS[currentQuestion];

  const handleStart = () => setStep('questions');

  const handleAnswer = (character: CharacterId, weight: number) => {
    const newAnswers: Answer[] = [
      ...answers,
      { questionId: question.id, selectedCharacter: character, weight },
    ];
    setAnswers(newAnswers);
    if (currentQuestion + 1 >= TOTAL_QUESTIONS) {
      const characterId = calculateResult(newAnswers);
      setResultCharacter(characterId);
      const max = CHARACTER_GIF_COUNTS[characterId] ?? 1;
      setResultGifIndex(1 + Math.floor(Math.random() * max));
      setStep('result');
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRestart = () => {
    setStep('intro');
    setCurrentQuestion(0);
    setAnswers([]);
    setResultCharacter(null);
    setResultGifIndex(1);
  };

  if (step === 'intro') {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.titleChiikawa}>CHiiKAWA</h1>
        <div className={styles.card}>
          <CardStickers />
          <h2 className={styles.title}>¿Qué personaje de Chiikawa eres?</h2>
          <p className={styles.intro}>
            Responde 15 preguntas y descubre cuál de los 8 personajes de Chiikawa eres (Chiikawa, Hachiware, Usagi, Momonga, Rakko, Kurimanju, Shisa o Furuhonya).
          </p>
          <button type="button" className={styles.primaryButton} onClick={handleStart}>
            Empezar el test
          </button>
        </div>
        <footer className={styles.footer}>
          <FooterContent />
        </footer>
      </div>
    );
  }

  if (step === 'questions') {
    const progress = ((currentQuestion + 1) / TOTAL_QUESTIONS) * 100;
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.titleChiikawa}>CHiiKAWA</h1>
        <div className={styles.card}>
          <CardStickers />
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
          <p className={styles.progressText}>
            Pregunta {currentQuestion + 1} de {TOTAL_QUESTIONS}
          </p>
          <h2 className={styles.questionText}>{question.text}</h2>
          <ul className={styles.options}>
            {question.options.map((opt, i) => (
              <li key={`${question.id}-${i}`}>
                <button
                  type="button"
                  className={styles.optionButton}
                  onClick={() => handleAnswer(opt.character, opt.weight)}
                >
                  {opt.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <footer className={styles.footer}>
          <FooterContent />
        </footer>
      </div>
    );
  }

  // step === 'result'
  const char = resultCharacter ? CHARACTERS[resultCharacter] : null;
  if (!char) return null;

  const imagePath =
    char.image ??
    (char.id === 'furuhonya'
      ? '/personajes/resource/Furuhonya.webp'
      : `/personajes/resource/${char.id}.webp`);

  const gifPath = `/personajes/resource/gifs/${char.id}${resultGifIndex}.gif`;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.titleChiikawa}>CHiiKAWA</h1>
      <div className={styles.card} style={{ borderColor: char.color }}>
        <CardStickers />
        <div className={styles.resultMedia}>
          <img
            src={imagePath}
            alt={char.name}
            className={styles.resultImage}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling;
              if (fallback) (fallback as HTMLElement).style.display = 'block';
            }}
          />
          <span className={styles.resultEmoji} style={{ display: 'none' }} aria-hidden>
            {char.emoji}
          </span>
        </div>
        <h1 className={styles.resultTitle}>¡Eres {char.name}!</h1>
        <p className={styles.resultDescription}>{char.description}</p>
        <div className={styles.traits}>
          {char.traits.map((t) => (
            <span key={t} className={styles.trait}>
              {t}
            </span>
          ))}
        </div>
        <div className={styles.resultGifWrap}>
          <img
            src={gifPath}
            alt={`${char.name} GIF`}
            className={styles.resultGif}
          />
        </div>
        <button type="button" className={styles.primaryButton} onClick={handleRestart}>
          Volver a hacer el test
        </button>
      </div>
      <footer className={styles.footer}>
        <FooterContent />
      </footer>
    </div>
  );
}
