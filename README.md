# La Téquería Bubble Tea — web

Sitio estático (GitHub Pages, dominio en `CNAME`). Sin dependencias ni build: se edita el HTML/CSS/JS directamente.

```
index.html                 Home en español
en/index.html              Home en inglés
legal/                     Cookies, privacidad y términos
assets/
  css/styles.css           Todos los estilos (mobile-first), por secciones comentadas
  js/main.js               Menú, animaciones de scroll y "Crea tu bubble tea"
  fonts/                   Jua y Lilita One (solo caracteres latinos, woff2) + licencias
  img/{hero,cups,fruits,ui,icons}/   Imágenes en WebP, con versión pequeña y grande (srcset)
  cookie-banner/           Banner de cookies opcional (NO enlazado)
manifest.json · robots.txt · sitemap.xml · CNAME
```

## Modo noche
- Interruptor en la cabecera (`#theme-toggle`, `role="switch"`). **Por defecto la web siempre es clara**, aunque el dispositivo esté en modo oscuro (`color-scheme: only light`).
- Al activarlo se añade `data-tq-theme="dark"` al `<html>`; solo se recuerda durante la sesión (sessionStorage), así que una visita nueva vuelve a empezar en claro.
- Los colores del tema oscuro están al final de `assets/css/styles.css` (sección 13). Los claros no se tocan.
- El logo tiene versión oscura: `assets/img/icons/logo-dark-*.webp`.

## Preguntas frecuentes, SEO e IA
- La sección `#faq` está en `index.html` y `en/index.html` (entre "Top Especiales" y "Encuéntranos"). Son elementos `<details>`: el texto está siempre en el HTML, sin necesitar JavaScript.
- Los mismos textos están repetidos como datos estructurados (JSON-LD `FAQPage`, junto a `CafeOrCoffeeShop` y `WebSite`) en el `<head>`. **Si cambias una pregunta o una respuesta, cámbiala también ahí** (deben coincidir con lo visible).
- `robots.txt` permite explícitamente a los rastreadores de buscadores y de asistentes de IA.
- `llms.txt` y `llms-full.txt` resumen el negocio (datos, precios, carta, horario y FAQ) en texto plano para que las IA lo lean de un vistazo.
- **Cuando cambien los precios, el horario o el teléfono**, actualízalos en: la carta y la FAQ de `index.html` y `en/index.html`, el JSON-LD de cada uno, `llms.txt`, `llms-full.txt` y los textos legales.

## Cosas a tener en cuenta
- **Idiomas:** cada cambio de texto hay que hacerlo en `index.html` y en `en/index.html`.
- **Imágenes:** cada una tiene dos tamaños (`-480`/`-960`, etc.). Mantén los atributos `width`/`height` del HTML: evitan saltos de diseño.
- **Constructor de bebidas:** las opciones son los `<input>` del HTML (`data-label`, `data-price`, `data-color`). Para cambiar un precio o añadir un sirope, edita solo el HTML.
- **Banner de cookies (opcional):** enlaza `assets/cookie-banner/cookie-banner.css` y `.js` (con `defer`) y añade antes de `</body>`:

```html
<div id="cookie-banner" class="cookie-banner hidden" role="dialog" aria-label="Cookies">
  <div class="cookie-content">
    <p>Utilizamos cookies para mejorar tu experiencia y analizar el tráfico de la web. Puedes leer más en nuestra <a href="/legal/cookies.html">Política de Cookies</a>.</p>
    <div class="cookie-buttons">
      <button id="cookie-deny" class="cookie-btn btn-secondary" type="button">Rechazar</button>
      <button id="cookie-accept" class="cookie-btn btn-primary" type="button">Aceptar</button>
    </div>
  </div>
</div>
```
