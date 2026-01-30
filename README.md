# ¿Qué personaje de Chiikawa eres?

Test de personalidad con 10 preguntas. Al final descubres si eres **Chiikawa**, **Hachiware**, **Usagi** o **Momonga**, y recibes un resumen personalizado generado con la API de Gemini.

## Cómo ejecutar

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Configurar la API de Gemini**  
   Crea un archivo `.env` en la raíz con tu clave:
   ```
   GEMINI_API_KEY=tu_clave_de_google_ai_studio
   ```
   (Puedes obtener una en [Google AI Studio](https://aistudio.google.com/apikey).)

3. **Arrancar el servidor** (puerto 3001, para que Gemini genere el resumen)
   ```bash
   npm run server
   ```

4. **En otra terminal, arrancar la web**
   ```bash
   npm run dev
   ```

5. Abre en el navegador la URL que muestra Vite (por ejemplo `http://localhost:5173`).

## Tecnologías

- **Frontend:** React + TypeScript + Vite + CSS Modules
- **Backend:** Node.js + Express (endpoint `/api/summary`)
- **IA:** Google Gemini (modelo `gemini-1.5-flash`) para el resumen personalizado

## Personajes

- **Chiikawa** – Resiliente, trabajador, disfruta la comida y los pequeños momentos.
- **Hachiware** – Extrovertido, optimista, creativo, apoyo del grupo.
- **Usagi** – Energético, valiente, aventurero, travieso.
- **Momonga** – Tranquilo, analítico, observador.
