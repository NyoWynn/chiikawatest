import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

app.post('/api/summary', async (req, res) => {
  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'GEMINI_API_KEY no configurada. Crea un archivo .env con GEMINI_API_KEY=tu_clave' });
  }

  const { characterId, characterName, characterDescription, answersSummary } = req.body;
  if (!characterName || !answersSummary) {
    return res.status(400).json({ error: 'Faltan characterName o answersSummary' });
  }

  const prompt = `Eres un experto en el manga/anime Chiikawa (Nanka Chiisakute Kawaii Yatsu). 
Un usuario ha hecho un test de personalidad y el resultado es que es el personaje "${characterName}".
Descripción del personaje: ${characterDescription}

Estas son sus respuestas al test (pregunta → respuesta elegida):
${answersSummary}

Escribe un resumen amigable y personalizado (entre 4 y 6 párrafos, en español) explicando POR QUÉ esta persona es como ${characterName}, basándote en sus respuestas. Sé positivo, divertido y cercano, en el tono de Chiikawa. En cada párrafo conecta una o dos respuestas concretas con los rasgos de ${characterName}. No repitas la descripción genérica del personaje; cuéntale algo que solo aplica a él o ella por sus respuestas. Puedes usar frases cortas y cálidas.`;

  try {
    const response = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          maxOutputTokens: 1024,
          temperature: 0.7,
        },
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(response.status).send(err || 'Error de Gemini');
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
    return res.json({ summary: text, characterId });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: e.message || 'Error al llamar a Gemini' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
