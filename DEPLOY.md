# Desplegar Chiikawa Test 24/7 gratis

Tu proyecto es una app estática (Vite + React). Puedes subirla gratis a **Vercel** o **Netlify** y estará online 24/7 con HTTPS.

---

## Opción 1: Vercel (recomendada)

1. **Sube el código a GitHub** (si aún no está):
   - Crea un repositorio en [github.com](https://github.com/new).
   - En la carpeta del proyecto ejecuta:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```

2. **Despliega en Vercel**:
   - Entra en [vercel.com](https://vercel.com) y **Sign up** con tu cuenta de GitHub.
   - Clic en **Add New…** → **Project**.
   - Importa el repositorio de GitHub (autoriza a Vercel si te lo pide).
   - Vercel detecta Vite solo. No cambies nada:
     - **Build Command:** `npm run build` (o `vite build`)
     - **Output Directory:** `dist`
   - Clic en **Deploy**.

3. **Listo.** En unos segundos tendrás una URL tipo `https://chiikawatest-xxx.vercel.app`. Cada vez que hagas `git push` a `main`, Vercel volverá a desplegar solo.

---

## Opción 2: Netlify

1. Sube el proyecto a GitHub (igual que arriba).

2. Entra en [netlify.com](https://netlify.com) y **Sign up** con GitHub.

3. **Add new site** → **Import an existing project** → **GitHub** → elige tu repo.

4. Configura el build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

5. **Deploy.** Te dará una URL tipo `https://algo-random.netlify.app`.

---

## Resumen

| Servicio | URL típica        | Límite gratis      |
|----------|-------------------|--------------------|
| Vercel   | `*.vercel.app`    | 100 GB ancho de banda/mes |
| Netlify  | `*.netlify.app`   | 100 GB ancho de banda/mes |

Ambos ofrecen HTTPS, CDN y despliegue automático al hacer push a GitHub. No necesitas tarjeta para el plan gratuito.
