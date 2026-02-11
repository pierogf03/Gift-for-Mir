# Guía para personalizar recursos (GIFs y canción)

Este proyecto deja espacios vacíos para que tú pongas tus propios recursos.

## 1) GIF de celebración (cuando responde "Sí")
- Archivo: `index.html`
- Elemento: `<img id="yesGif" ... />`
- Línea actual: busca esta parte:

```html
<img class="hero-img" id="yesGif" src="" alt="Aquí irá el gif de Chiikawa bailando" />
```

- Qué cambiar: reemplaza `src=""` por la URL o ruta de tu GIF.
- Ejemplo:

```html
<img class="hero-img" id="yesGif" src="./assets/chiikawa-bailando.gif" alt="Chiikawa bailando" />
```

## 2) GIF/imagen triste (cuando responde "No")
- Archivo: `index.html`
- Elemento: `<img id="noGif" ... />`
- Línea actual:

```html
<img class="hero-img" id="noGif" src="" alt="Aquí irá el gif o imagen triste" />
```

- Qué cambiar: reemplaza `src=""` por la URL o ruta de tu GIF/imagen triste.
- Ejemplo:

```html
<img class="hero-img" id="noGif" src="./assets/gatito-triste.gif" alt="Gatito triste" />
```

## 3) Canción triste
- Archivo: `index.html`
- Elemento: `<audio id="sadAudio" ...></audio>`
- Línea actual:

```html
<audio id="sadAudio" src="" preload="auto" loop></audio>
```

- Qué cambiar: reemplaza `src=""` por la URL o ruta de tu audio (`.mp3`, `.ogg`, etc.).
- Ejemplo:

```html
<audio id="sadAudio" src="./assets/cancion-triste.mp3" preload="auto" loop></audio>
```

## Nota
Si usas archivos locales, crea una carpeta `assets/` dentro del proyecto y guarda allí los GIFs y la canción.
