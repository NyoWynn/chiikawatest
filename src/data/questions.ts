import type { CharacterId } from './characters';

export interface QuestionOption {
  text: string;
  character: CharacterId;
  weight: number;
}

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

const w = 2;

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Cuando algo te sale mal, ¿qué es lo que más necesitas?',
    options: [
      { text: 'Que alguien esté ahí, aunque no tenga que decir nada', character: 'chiikawa', weight: w },
      { text: 'Que me recuerden que puedo y que hay salida', character: 'hachiware', weight: w },
      { text: 'Hacer algo que me distraiga o me saque del bucle', character: 'usagi', weight: w },
      { text: 'Un momento a solas con algo que me calme (libro, bebida)', character: 'kurimanju', weight: w },
    ],
  },
  {
    id: 2,
    text: '¿Qué es lo que más valoras en una amistad?',
    options: [
      { text: 'Sentir que no estoy solo y que me aceptan como soy', character: 'chiikawa', weight: w },
      { text: 'Poder animarnos y empujarnos mutuamente', character: 'hachiware', weight: w },
      { text: 'Compartir aventuras y no aburrirnos nunca', character: 'usagi', weight: w },
      { text: 'Que confíen en mí y yo en ellos, sin grandes dramas', character: 'rakko', weight: w },
    ],
  },
  {
    id: 3,
    text: 'En una situación nueva o que te da miedo, ¿cómo sueles reaccionar?',
    options: [
      { text: 'Me bloqueo un poco, pero si alguien me acompaña me animo', character: 'chiikawa', weight: w },
      { text: 'Intento ver el lado bueno y animar a los demás también', character: 'hachiware', weight: w },
      { text: 'Me lanzo, el miedo me motiva más que me paraliza', character: 'usagi', weight: w },
      { text: 'Observo primero y actúo cuando tengo más información', character: 'furuhonya', weight: w },
    ],
  },
  {
    id: 4,
    text: '¿Qué te hace sentir más realizado en el día a día?',
    options: [
      { text: 'Los momentos tranquilos con gente que quiero', character: 'chiikawa', weight: w },
      { text: 'Saber que he ayudado o animado a alguien', character: 'hachiware', weight: w },
      { text: 'Haber hecho algo que me haya emocionado o retado', character: 'usagi', weight: w },
      { text: 'Haber mejorado en algo o haber sido útil de forma concreta', character: 'rakko', weight: w },
    ],
  },
  {
    id: 5,
    text: 'Cuando tienes que tomar una decisión importante, ¿en qué te apoyas más?',
    options: [
      { text: 'En lo que siento y en lo que me dicen las personas de confianza', character: 'chiikawa', weight: w },
      { text: 'En qué opción nos hace mejor a todos o nos une más', character: 'hachiware', weight: w },
      { text: 'En la intuición y en no quedarme con la duda', character: 'usagi', weight: w },
      { text: 'En las normas, los hechos o lo que ya ha funcionado', character: 'shisa', weight: w },
    ],
  },
  {
    id: 6,
    text: '¿Cómo te describirían quienes te conocen bien cuando estás en tu mejor momento?',
    options: [
      { text: 'Dulce, cercano y que da paz', character: 'chiikawa', weight: w },
      { text: 'El que sube el ánimo y ve oportunidades', character: 'hachiware', weight: w },
      { text: 'El que da vida al grupo y no para quieto', character: 'usagi', weight: w },
      { text: 'Tierno pero con carácter; consigo lo que me propongo', character: 'momonga', weight: w },
    ],
  },
  {
    id: 7,
    text: '¿Qué tipo de trabajo o rol te llena más?',
    options: [
      { text: 'Algo estable donde pueda ser yo y aportar poco a poco', character: 'chiikawa', weight: w },
      { text: 'Donde pueda apoyar a otros y crear buen ambiente', character: 'hachiware', weight: w },
      { text: 'Donde haya retos y no me aburra', character: 'usagi', weight: w },
      { text: 'Donde pueda ser el mejor y enseñar o guiar', character: 'rakko', weight: w },
    ],
  },
  {
    id: 8,
    text: 'En un conflicto con alguien cercano, ¿qué sueles hacer?',
    options: [
      { text: 'Evitarlo un tiempo y esperar a calmarme', character: 'chiikawa', weight: w },
      { text: 'Buscar hablar y que nos sintamos mejor los dos', character: 'hachiware', weight: w },
      { text: 'Actuar o decir algo para cortar el mal rollo', character: 'usagi', weight: w },
      { text: 'Intentar que se respeten las reglas o lo acordado', character: 'shisa', weight: w },
    ],
  },
  {
    id: 9,
    text: '¿Qué necesitas para recargar energía de verdad?',
    options: [
      { text: 'Compañía tranquila, buena comida o un rato en casa', character: 'chiikawa', weight: w },
      { text: 'Hacer algo creativo o que tenga sentido para mí', character: 'hachiware', weight: w },
      { text: 'Movimiento, salir o hacer algo distinto', character: 'usagi', weight: w },
      { text: 'Un buen libro, un café o un rato a mi aire', character: 'furuhonya', weight: w },
    ],
  },
  {
    id: 10,
    text: '¿Cuál es tu mayor fortaleza cuando las cosas se ponen difíciles?',
    options: [
      { text: 'No rendirme y confiar en que alguien me va a apoyar', character: 'chiikawa', weight: w },
      { text: 'Recordar que hay salida y poder animar a otros', character: 'hachiware', weight: w },
      { text: 'Actuar y no quedarme parado', character: 'usagi', weight: w },
      { text: 'Ser constante y cumplir con lo que toca', character: 'shisa', weight: w },
    ],
  },
  {
    id: 11,
    text: '¿Qué te define más en tu forma de ser con los demás?',
    options: [
      { text: 'Soy cariñoso y a veces pido más de la cuenta', character: 'momonga', weight: w },
      { text: 'Me gusta que las cosas estén claras y cumplir con mi parte', character: 'shisa', weight: w },
      { text: 'Comparto lo que sé (libros, ideas) y escucho', character: 'furuhonya', weight: w },
      { text: 'Ayudo a otros a mejorar o a practicar', character: 'rakko', weight: w },
    ],
  },
  {
    id: 12,
    text: 'Tu momento ideal para desconectar es...',
    options: [
      { text: 'Una buena comida o algo rico con alguien', character: 'chiikawa', weight: w },
      { text: 'Algo rico para comer o un dulce', character: 'rakko', weight: w },
      { text: 'Una bebida que me guste y algo para picar', character: 'kurimanju', weight: w },
      { text: 'Leer, pasear por una librería o estar en silencio', character: 'furuhonya', weight: w },
    ],
  },
  {
    id: 13,
    text: 'Si tuvieras que describir tu “misión” en la vida en una frase, sería más bien...',
    options: [
      { text: 'Estar ahí para los míos y disfrutar de lo simple', character: 'chiikawa', weight: w },
      { text: 'Ayudar a otros a creer en sí mismos', character: 'hachiware', weight: w },
      { text: 'Vivir con intensidad y no perderme nada', character: 'usagi', weight: w },
      { text: 'Ser el mejor en lo mío y poder enseñar', character: 'rakko', weight: w },
    ],
  },
  {
    id: 14,
    text: 'En un equipo o grupo, ¿cuál es tu papel natural?',
    options: [
      { text: 'El que sigue al líder y no falla', character: 'shisa', weight: w },
      { text: 'El que anima y une al grupo', character: 'hachiware', weight: w },
      { text: 'El que propone y mueve al grupo', character: 'usagi', weight: w },
      { text: 'El que aporta con lo que hace bien', character: 'rakko', weight: w },
    ],
  },
  {
    id: 15,
    text: '¿Qué te hace sentir más tú mismo?',
    options: [
      { text: 'Saber que tengo a mi gente y un rincón seguro', character: 'chiikawa', weight: w },
      { text: 'Poder crear algo (música, arte, ideas)', character: 'hachiware', weight: w },
      { text: 'Dominar algo que me importa y poder enseñar', character: 'rakko', weight: w },
      { text: 'Los pequeños placeres: un dulce, una bebida, compartir', character: 'kurimanju', weight: w },
    ],
  },
];

export const TOTAL_QUESTIONS = QUESTIONS.length;
