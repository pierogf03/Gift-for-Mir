# Guía paso a paso para desplegar esta app GRATIS

Este proyecto es una web estática (`index.html`, `styles.css`, `script.js`), así que se puede hostear gratis muy fácil.

---

## Antes de empezar (recomendado)

1. Verifica que tu proyecto funcione localmente.
2. Sube el proyecto a un repositorio de GitHub (si aún no lo tienes).
3. Asegúrate de tener estos archivos en la raíz:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `RECURSOS.md`

> Si vas a usar GIFs/canción local, crea carpeta `assets/` y súbela también.

---

## Opción 1 (la más simple): GitHub Pages

### ¿Cuándo conviene?
- Si quieres algo rápido, gratis y conectado a tu repo.
- Ideal para sitios estáticos personales.

### Pasos
1. Sube tu proyecto a GitHub.
2. Entra al repositorio en GitHub.
3. Ve a **Settings**.
4. En el menú lateral, entra a **Pages**.
5. En **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: selecciona `main` (o la rama que uses)
   - **Folder**: `/ (root)`
6. Guarda.
7. Espera 1–3 minutos.
8. GitHub te dará una URL tipo:
   - `https://tu-usuario.github.io/nombre-del-repo/`

### Notas importantes
- Si no carga estilos o scripts, revisa rutas relativas.
- Cada push nuevo se despliega automáticamente.

---

## Opción 2: Netlify (muy amigable)

### ¿Cuándo conviene?
- Si quieres interfaz visual muy simple.
- Excelente para drag-and-drop o conexión con GitHub.

### Método A: arrastrar carpeta (rápido)
1. Entra a [https://app.netlify.com/](https://app.netlify.com/).
2. Crea cuenta (puede ser con GitHub).
3. En el dashboard, arrastra tu carpeta del proyecto a la zona de deploy.
4. Listo: tendrás una URL gratis (`*.netlify.app`).

### Método B: conectado a GitHub (recomendado)
1. En Netlify: **Add new site** → **Import an existing project**.
2. Conecta GitHub y autoriza.
3. Selecciona tu repositorio.
4. Configura:
   - **Build command**: (vacío)
   - **Publish directory**: `.`
5. Click en **Deploy site**.
6. Listo, con URL gratuita.

### Ventajas
- HTTPS gratis.
- Deploy automático con cada commit.
- Dominio personalizado opcional.

---

## Opción 3: Vercel

### ¿Cuándo conviene?
- Si quieres CI/CD simple y buen rendimiento.
- Muy buena integración con GitHub.

### Pasos
1. Entra a [https://vercel.com/](https://vercel.com/).
2. Inicia sesión con GitHub.
3. Click en **Add New...** → **Project**.
4. Elige tu repo.
5. Framework preset: **Other** (o sin framework).
6. Build settings para estático:
   - **Build Command**: vacío
   - **Output Directory**: vacío (o `.`)
7. Click **Deploy**.
8. Obtendrás URL tipo `*.vercel.app`.

### Ventajas
- Deploy automático por push.
- URL preview por cada rama/PR.

---

## Opción 4: Cloudflare Pages

### ¿Cuándo conviene?
- Si quieres red global muy rápida + plan gratis sólido.

### Pasos
1. Ve a [https://dash.cloudflare.com/](https://dash.cloudflare.com/).
2. Entra a **Workers & Pages** → **Create application** → **Pages**.
3. Conecta GitHub.
4. Selecciona tu repositorio.
5. Configura:
   - **Build command**: vacío
   - **Build output directory**: `.`
6. Deploy.
7. Tendrás URL gratuita `*.pages.dev`.

---

## ¿Cuál te recomiendo?

- **Más fácil total**: GitHub Pages.
- **Más amigable visualmente**: Netlify.
- **Muy pro para flujos con ramas**: Vercel.
- **Excelente performance global**: Cloudflare Pages.

---

## Actualizar tu web después del primer deploy

En todas estas opciones (si conectaste GitHub):
1. Editas archivos en local.
2. `git add .`
3. `git commit -m "Actualización"`
4. `git push`
5. La plataforma redeploya automáticamente.

---

## Problemas comunes y solución rápida

### 1) No se ven GIFs o música
- Revisa `RECURSOS.md`.
- Asegúrate de haber puesto bien `src="..."`.
- Si son archivos locales, confirma que existan y estén subidos.

### 2) Error 404 en archivos
- Verifica nombres exactos (mayúsculas/minúsculas importan).
- Revisa rutas relativas (`./assets/...`).

### 3) Cambié algo y no se actualiza
- Fuerza recarga del navegador (`Ctrl+F5`).
- Espera 1-2 minutos por cache/CDN.

---

## Extra: dominio personalizado (opcional)

Todas las plataformas anteriores permiten usar dominio propio (`tudominio.com`).
En general:
1. Compras dominio (Namecheap, Cloudflare Registrar, etc.).
2. Lo agregas en la plataforma de hosting.
3. Configuras DNS (CNAME/A) según instrucciones.
4. Esperas propagación.

---

Si quieres, en el siguiente paso te digo **cuál elegir según tu caso** y te doy una guía exacta solo para esa plataforma con capturas/orden recomendado.
