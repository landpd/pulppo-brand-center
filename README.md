# Pulppo · Brand Center

Guía de marca navegable: colores, tipografía, espaciado, los siete layouts y las piezas de referencia, con los tokens y los assets descargables en el mismo lugar.

Sitio estático puro. No tiene build, no tiene dependencias y no necesita `npm install`.

**Publicado:** https://landpd.github.io/pulppo-brand-center/

## Correr en local

Desde la raíz del repo:

```bash
python3 -m http.server 8000
```

Abre `http://localhost:8000`. Funciona igual en macOS y Windows (con `py -m http.server 8000`).

## Desplegar en GitHub Pages

```bash
git init -b main
git add .
git commit -m "Brand Center v1.0"
gh repo create pulppo-brand-center --public --source=. --push
git push -u origin main
```

Luego, en GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`**. El sitio queda en `https://<usuario>.github.io/pulppo-brand-center/`.

`.nojekyll` está incluido para que GitHub Pages no ignore `slides/_slide.css` ni `slides/_fit.js`.

## Estructura

```
index.html              todo el contenido y la navegación
styles.css              capa de sitio sobre colors_and_type.css
app.js                  scrollspy y copiar al portapapeles
colors_and_type.css     tokens y utilidades oficiales
DESIGN.md               reglas de marca (fuente de verdad)
slides/                 siete plantillas 1280 × 720 + deck navegable
assets/
  photos/               fotografía del sitio
  examples/             piezas reales de referencia
  thumbnails/           previews de los siete layouts
fonts/                  Nunito Sans (OFL) en tres pesos
```

## Editar contenido

- Cada capítulo es una `<section id="...">` de `index.html`. El sidebar enlaza a esos ids.
- Los colores y tamaños salen de las variables de `colors_and_type.css`. No se agregan colores ni tamaños nuevos.
- Regla dura: sin sombras, sin radio, sin gradientes de dos colores.
- Las plantillas de `slides/` son piezas independientes; conservan sus rutas relativas a `../colors_and_type.css` y `../assets/`.

## Fuentes y licencias

- **Nunito Sans**: auto-hospedada en `fonts/` (Light, Regular, Bold). Licencia OFL en `fonts/OFL-NunitoSans.txt`.
- **EB Garamond**: cargada desde Google Fonts como fallback. Licencia OFL.
- **Heldane Text**: licencia Klim Type Foundry. **No se distribuye en este repo.** `colors_and_type.css` la declara con `local()`: quien la tenga instalada la ve y el resto cae a EB Garamond. Para producir piezas finales, pide la fuente al equipo de marca.

## Versión

Reglas de marca v1.0 (abril 2026). Si una regla no está en `DESIGN.md`, pregunta antes de inventarla.