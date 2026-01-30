/**
 * Personajes basados en la web oficial: https://www.chiikawaofficial.com/characters
 */
export type CharacterId =
  | 'chiikawa'
  | 'hachiware'
  | 'usagi'
  | 'momonga'
  | 'rakko'
  | 'kurimanju'
  | 'shisa'
  | 'furuhonya';

export interface Character {
  id: CharacterId;
  name: string;
  shortName: string;
  nameJa?: string;
  description: string;
  traits: string[];
  emoji: string;
  color: string;
  /** Ruta a imagen (ej: /personajes/resource/chiikawa.webp). Si no existe, se usa el emoji. */
  image?: string;
}

export const CHARACTERS: Record<CharacterId, Character> = {
  chiikawa: {
    id: 'chiikawa',
    name: 'Chiikawa',
    shortName: 'Chiikawa',
    nameJa: 'ちいかわ',
    description:
      'Eres como Chiikawa: dulce, amable y tierno. Te cuesta salir de tu zona de confort y eres un poco tímido; a veces los nervios te ganan, pero tus mejores amigos siempre están ahí para apoyarte.',
    traits: ['Dulce', 'Amable', 'Tímido', 'Cauteloso', 'Leal a sus amigos'],
    emoji: '🐣',
    color: '#FFE4B5',
  },
  hachiware: {
    id: 'hachiware',
    name: 'Hachiware',
    shortName: 'Hachiware',
    nameJa: 'ハチワレ',
    description:
      'Eres como Hachiware: tienes un gran corazón y una actitud de "sí se puede". Siempre ves el lado positivo y eres un verdadero mejor amigo: ayudas a los demás a superar sus miedos y les haces sentir seguros.',
    traits: ['Gran corazón', 'Actitud positiva', 'Mejor amigo', 'Animador', 'Optimista'],
    emoji: '🐝',
    color: '#FFFACD',
  },
  usagi: {
    id: 'usagi',
    name: 'Usagi',
    shortName: 'Usagi',
    nameJa: 'うさぎ',
    description:
      'Eres como Usagi: el más energético del grupo y siempre encuentras la diversión. Vivaz y sin miedo, te conocen por tu actitud y por tus gritos de guerra: ¡Yaha! y ¡Ura! (y nadie sabe muy bien dónde vives).',
    traits: ['Energético', 'Vivaz', 'Sin miedo', 'Divertido', 'Misterioso'],
    emoji: '🐰',
    color: '#E6E6FA',
  },
  momonga: {
    id: 'momonga',
    name: 'Momonga',
    shortName: 'Momonga',
    nameJa: 'モモンガ',
    description:
      'Eres como Momonga: super tierno y no te da vergüenza usarlo. A veces pides cosas imposibles o armas un poco de lío, pero tu energía y tu carisma hacen que la gente te siga el juego. ¡Y además puedes volar!',
    traits: ['Tierno', 'Travieso', 'Carismático', 'Energético', 'Persuasivo'],
    emoji: '🐿️',
    color: '#D2B48C',
  },
  rakko: {
    id: 'rakko',
    name: 'Rakko',
    shortName: 'Rakko',
    nameJa: 'ラッコ',
    description:
      'Eres como Rakko: el cazador número uno y un referente por tu valentía. Eres generoso y amable, te gusta ayudar a los demás a mejorar y, además, te encantan los dulces.',
    traits: ['Valiente', 'Generoso', 'Líder', 'Hábil', 'Goloso'],
    emoji: '🦦',
    color: '#B0C4DE',
  },
  kurimanju: {
    id: 'kurimanju',
    name: 'Kurimanju',
    shortName: 'Kurimanju',
    nameJa: 'くりまんじゅう',
    description:
      'Eres como Kurimanju: tienes debilidad por las bebidas (sobre todo las fuertes) y sueles ir con snacks y algo para tomar. Aunque eres tranquilo por naturaleza, eres amable y te gusta compartir comida con tus amigos.',
    traits: ['Tranquilo', 'Amable', 'Comparte', 'Snacks y bebidas', 'Relajado'],
    emoji: '🥟',
    color: '#DEB887',
  },
  shisa: {
    id: 'shisa',
    name: 'Shisa',
    shortName: 'Shisa',
    nameJa: 'シーサー',
    description:
      'Eres como Shisa: trabajador de verdad. Después de aprobar el difícil examen de "super trabajador a tiempo parcial", trabajas como asistente del chef en Rou. Admiras mucho a tu jefe y lo consideras un maestro.',
    traits: ['Trabajador', 'Esforzado', 'Leal', 'Asistente', 'Respetuoso'],
    emoji: '🦁',
    color: '#F4A460',
  },
  furuhonya: {
    id: 'furuhonya',
    name: 'Furuhonya',
    shortName: 'Furuhonya',
    nameJa: '古本屋',
    description:
      'Eres como Furuhonya: un ratón de biblioteca amable y considerado. Compras y vendes libros de segunda mano, eres amigo de Momonga (¡tu diadema de cangrejo fue un regalo suyo!) y te conocen como Kani-chan.',
    traits: ['Amante de los libros', 'Amable', 'Considerado', 'Amigo fiel', 'Tierno'],
    emoji: '📚',
    color: '#FFB6C1',
  },
};
