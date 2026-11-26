# Pulppo — Design System

> Versión consolidada para Claude Design.
> Basado en *Pulppo · Reglas de marca v1.0* (abril 2026) + System Prompt v1.0.
> Fuente única de verdad. Si algo no está aquí, **preguntar antes de inventar**.

---

## 1 · Brand context

**Pulppo** es una proptech latinoamericana que profesionaliza inmobiliarias con tecnología. No vende real estate: vende *infraestructura para brokers*.

### Posicionamiento
Aceleradora de inmobiliarias con cinco pilares: **Tecnología, Comunidad, Consultoría, Marketing, Legal**. Mercados activos: México, Argentina.

### Personalidad de marca
**Directa · Profesional · Clara · Moderna · Funcional.**

**NO somos:** decorativos, emocionales, juguetones, "startup colorida", sentimentales.
**Sí somos:** densos en datos, austeros en forma, generosos en respiración.

### Principio rector visual
> La jerarquía se construye con **tamaño, peso, espacio y color**.
> **Nunca con profundidad.**

Si una pieza usa sombras, gradientes mezclados, elevación falsa o efectos 3D para "verse mejor", es un defecto, no un estilo.

---

## 2 · Design Tokens

Sistema de dos capas: **primitivos** (valores físicos) → **semánticos** (intención).
Los componentes deben referenciar siempre tokens semánticos, nunca primitivos.

### 2.1 Color · Primitivos

Los siete colores oficiales. **Todo lo que no esté aquí está prohibido.**

| Token | Hex | Nombre |
|---|---|---|
| `--color-soft-black` | `#212322` | Soft Black |
| `--color-white` | `#FFFFFF` | Blanco |
| `--color-yellow` | `#F6BE00` | Yellow |
| `--color-gray` | `#B7B7B7` | Gray |
| `--color-light-gray` | `#F3F3F3` | Light Gray |
| `--color-red` | `#A52003` | Red |
| `--color-sea-green` | `#529999` | Sea Green |

**Prohibiciones explícitas:**
- Cualquier otro negro: `#000000`, `#020202`, `#1F1F1F`, `#202322`.
- Cualquier otro gris: `#D0D3D4`, `#EFEFEF`, `#CCCCCC`.
- Cualquier color fuera de los 7 oficiales.

### 2.2 Color · Semántico

```css
/* Texto */
--text-primary:        var(--color-soft-black);   /* Texto principal */
--text-on-dark:        var(--color-white);        /* Texto sobre fondos oscuros */
--text-secondary:      var(--color-gray);         /* Texto auxiliar, captions, footnotes */

/* Superficies */
--surface-default:     var(--color-white);        /* Fondo base de pieza */
--surface-dark:        var(--color-soft-black);   /* Section dividers, closings, hero overlays */
--surface-card:        var(--color-light-gray);   /* Fondo de cards y áreas de descanso */

/* Acento */
--accent:              var(--color-yellow);       /* Líneas, key data, barras de gráficas. Máx 10% de superficie */

/* Divisores */
--divider-accent:      var(--color-yellow);       /* Línea acento 1pt, opcional */
--divider-neutral:     var(--color-gray);         /* Separadores entre stats / columnas */

/* Feedback funcional — SOLO con significado, nunca decorativos */
--feedback-success:    var(--color-sea-green);    /* Éxito, KPI positivo, etapa de funnel ganadora */
--feedback-error:      var(--color-red);          /* Error, alerta, descarte de funnel, KPI negativo */

/* Iconos */
--icon-default:        var(--color-soft-black);   /* Sobre fondos claros */
--icon-on-dark:        var(--color-white);        /* Sobre fondos oscuros */

/* Overlays */
--overlay-dark-70:     rgba(33, 35, 34, 0.7);     /* Hero photo overlay sobre fotografía */
```

### 2.3 Color · Reglas de uso

- **Amarillo** (`--accent`): nunca ocupa más del **10% de la superficie**. Nunca fondo principal.
- **Rojo / Verde** (`--feedback-*`): solo aparecen cuando hay **significado funcional** (bueno/malo, éxito/error, ganado/descartado). Nunca decorativos.
- **Gradientes:** solo de un color oficial **a transparente** (o al mismo color con menor opacidad). Nunca mezclar dos colores distintos en un mismo gradiente. Dirección consistente dentro de una misma pieza.

---

### 2.4 Typography · Primitivos

**Heldane Text** (Klim Type Foundry) es la fuente oficial de Pulppo para headings, en peso **Regular**. **EB Garamond** (Google Fonts) es el fallback documentado: se usa automáticamente cuando Heldane Text no está disponible en el entorno (navegadores, plataformas o equipos sin la licencia). La cascada de `font-family` resuelve esto en orden — Heldane Text primero, EB Garamond como red de seguridad, Georgia como último recurso del sistema.

Ambas comparten la misma personalidad serif refinada, así que la jerarquía visual se mantiene incluso cuando se cae al fallback.

```css
/* Familias */
--font-display:  'Heldane Text', 'EB Garamond', Georgia, serif;  /* Headings — Heldane Text oficial, EB Garamond fallback */
--font-body:     'Nunito Sans', system-ui, sans-serif;            /* Body, tags, captions */

/* Pesos */
--weight-light:    300;
--weight-regular:  400;
--weight-bold:     700;

/* Tamaños — siempre enteros, nunca decimales.
   Sistema nativo en puntos (pt) por su origen presentacional;
   se incluyen equivalencias en px para uso digital. */
--size-9:   9pt;   /*  ≈ 12px */
--size-11:  11pt;  /*  ≈ 15px */
--size-12:  12pt;  /*  ≈ 16px */
--size-20:  20pt;  /*  ≈ 27px */
--size-28:  28pt;  /*  ≈ 37px */
--size-40:  40pt;  /*  ≈ 53px */
--size-56:  56pt;  /*  ≈ 75px — solo para Stat Row */

/* Interlineado */
--leading-headings:  1.2;
--leading-body:      1.4;
```

**Prohibido:** Open Sans, Arial, Helvetica, Calibri, Times, o cualquier fuente fuera del stack oficial (Heldane Text / EB Garamond para headings · Nunito Sans para todo lo demás).

### 2.5 Typography · Semántico

```css
/* Headings — EB Garamond SIEMPRE Regular. Nunca Bold/Semibold/Black. Nunca itálica. */
--text-h1: var(--weight-regular) var(--size-40) / var(--leading-headings) var(--font-display);
--text-h2: var(--weight-regular) var(--size-28) / var(--leading-headings) var(--font-display);
--text-h3: var(--weight-regular) var(--size-20) / var(--leading-headings) var(--font-display);

/* Stat — número grande de Stat Row */
--text-stat: var(--weight-regular) var(--size-56) / var(--leading-headings) var(--font-display);

/* Tag / Eyebrow — único caso de Bold + UPPERCASE en todo el sistema */
--text-tag: var(--weight-bold) var(--size-11) / var(--leading-headings) var(--font-body);
/* uso: text-transform: uppercase; letter-spacing: leve */

/* Body */
--text-body:        var(--weight-regular) var(--size-12) / var(--leading-body) var(--font-body);
--text-body-list:   var(--weight-regular) var(--size-11) / var(--leading-body) var(--font-body);

/* Caption / Footnote — siempre en --text-secondary */
--text-caption: var(--weight-light) var(--size-9) / var(--leading-body) var(--font-body);
```

### 2.6 Typography · Reglas de uso

- **Heldane Text / EB Garamond:** SIEMPRE Regular. Si un título "se ve débil", subir tamaño — nunca pasar a Bold. Nunca itálica para títulos. Aplica indistintamente a la fuente oficial (Heldane Text) y al fallback (EB Garamond).
- **Nunito Sans:** tres pesos según rol — Light (captions), Regular (body), Bold (solo tags UPPERCASE).
- **Mayúsculas:** solo en tags/eyebrows. Nunca en H1/H2/H3, body o captions.
- **Alineación:** body siempre a la izquierda. Nunca centrado, nunca justificado. Solo H1 hero admite centrado.
- **Un solo nivel jerárquico por línea.** No mezclar pesos ni tamaños dentro del mismo bloque.
- **Tamaños enteros.** Nunca 8.94pt, 10.5pt, 13.33pt.

---

### 2.7 Spacing · Valores observados

**Nota:** Pulppo no define una escala formal de spacing (4pt / 8pt / etc.). En su lugar, las reglas oficiales documentan valores absolutos derivados del contexto. Listados aquí para referencia. **Mantener estos valores; no inferir una escala.**

| Contexto | Valor | Origen |
|---|---|---|
| Margen mínimo desde borde de pieza | `0.5"` | §4.2 — aplica a todo elemento excepto foto a sangre |
| Gap entre cards en Card Grid | `0.10"` | §3-F |
| Logo símbolo — distancia al borde | `0.14"` superior · cálculo desde `x=9.30"` en slide 16:9 (10"×5.625") | §4.1 |
| Logo símbolo — margen mínimo en otros formatos | `0.4"` desde bordes superior y derecho | §4.1 |
| Logo símbolo — tamaño | `0.5" × 0.5"` (slide 16:9) | §4.1 |
| Línea amarilla acento — peso | `1pt` | §4.3 |
| Línea amarilla acento — largo sugerido | `0.7"` | §4.3 |
| Iconos — tamaño en Icon List | `32px` | §3-D |
| Iconos — peso de stroke | `1.5pt` | §4.4 |
| Gráficas — peso de ejes/grid | `0.5pt` | §4.6 |
| Hero Photo — opacidad de overlay | `70%` sobre `--surface-dark` | §3-E |
| Espaciado vertical en Icon List | uniforme entre ítems (valor no fijado) | §3-D |

---

## 3 · Componentes

Todos los componentes referencian **tokens semánticos**, nunca primitivos directamente.

### 3.1 Tag / Eyebrow
- Tipografía: `--text-tag`, `text-transform: uppercase`.
- Color: `--text-primary` sobre claro, `--text-on-dark` sobre oscuro.
- Sin fondo, sin borde, sin sombra. Es solo texto.

### 3.2 Stat
Bloque para Stat Row (layout C).
- Número: `--text-stat`, color `--text-primary`.
- Caption debajo: `--text-body-list`, color `--text-secondary`.
- Sin fondo, sin borde.

### 3.3 Card
Para Card Grid (layout F).
- Fondo: `--surface-card`.
- Título: `--text-h3`, color `--text-primary`.
- Body: `--text-body`, color `--text-primary`.
- Gap entre cards: `0.10"`.
- **Sin sombra, sin borde, sin radius elevado.** Si necesita borde, usar 1pt `--divider-neutral`.
- Cards del mismo tamaño exacto dentro de un mismo grid.

### 3.4 Icon List Item
Para Icon List (layout D).
- Icono `32px`, stroke `1.5pt`, color `--icon-default`.
- Tag UPPERCASE encima del título: `--text-tag`.
- Body de 1-2 líneas debajo: `--text-body`.
- Alineación izquierda.

### 3.5 Divider Line — Accent
- Peso: `1pt`. Color: `--divider-accent`. Largo sugerido: `0.7"`.
- Uso: divisor entre bloques, bajo título cuando necesite jerarquía visual, puntuación al final de sección.
- **No es obligatoria bajo todos los títulos.** Se usa cuando aporta.

### 3.6 Divider Line — Neutral
- Peso: `0.5–1pt`. Color: `--divider-neutral`.
- Uso: separador vertical entre stats, líneas de tabla, ejes de gráficas (en 0.5pt).

### 3.7 Logo (símbolo)
- Versión `--icon-default` (#212322) sobre fondos claros.
- Versión `--icon-on-dark` (#FFFFFF) sobre fondos dark.
- **Posición fija:** top-right en toda pieza.
- Prohibido moverlo, rotarlo, recolorarlo, agregarle efectos, o usarlo bajo tamaño mínimo legible.

---

## 4 · Layout Patterns — los 7 oficiales

Cubren el 95% de los casos. Cualquier pieza debe ser asignable a uno de estos siete.

### A · Section Divider
Apertura de sección o capítulo.
- Fondo: `--surface-dark`.
- Título: `--text-h1`, color `--text-on-dark`.
- Subtítulo opcional: `--text-body`, color `--text-on-dark`.
- Logo símbolo blanco top-right. Sin foto.

### B · Title + Body + Foto
Slide explicativo principal. *El más usado del sistema.*
- Fondo: `--surface-default`.
- Estructura 50/50 vertical: contenido izquierda, foto derecha.
- Título: `--text-h1` izquierda. Body: `--text-body` debajo.

### C · Stat Row
3–5 estadísticas en fila.
- Fondo claro (`--surface-default` o `--surface-card`).
- Cada stat usa el componente §3.2.
- Separadores verticales `--divider-neutral` opcionales.

### D · Icon List
Lista vertical de 3–5 ítems.
- Cada ítem usa el componente §3.4.
- Espaciado vertical uniforme entre ítems.

### E · Hero Photo
- Foto half-bleed (cubre 50–100% del slide).
- Título `--text-h1` sobre overlay `--overlay-dark-70`.
- Tag opcional encima del título.
- Logo símbolo blanco top-right.

### F · Card Grid
- 2×2, 2×3, 3×2 o 3×3.
- Cards usan componente §3.3.
- Gap uniforme `0.10"`.

### G · Closing Dark
Cierre de pieza. Idéntico estilo a (A).
- Mensaje H1 + CTA o datos de contacto en Nunito Sans.

### Excepción · Infografías
Pueden romper "una idea por slide" y mostrar más densidad. Mantienen paleta, tipografía y márgenes oficiales. Sin layout fijo.

---

## 5 · Data Visualization

- **Barras y áreas:** `--accent` (yellow).
- **Líneas:** color funcional (`--feedback-success` / `--feedback-error`) o `--text-primary`.
- **Ejes y grid:** `--divider-neutral`, peso `0.5pt`.
- **Etiquetas y leyendas:** `--text-caption`.
- **Sin sombras, sin 3D, sin texturas.**
- **Funnels:** etapa ganadora en `--feedback-success`, etapa de descarte en `--feedback-error`.

---

## 6 · Voice & Tone

### Cómo escribe Pulppo
- **Frases cortas.** Subject + verb + object. Sin subordinadas innecesarias.
- **Datos concretos.** "+640 MDP colocados", "9.15% desde", "24-48 hrs". Cifras ganan sobre adjetivos.
- **Sin jerga startup.** Nada de "revolucionamos", "disrumpimos", "transformamos vidas".
- **Sin emoji decorativo.** Si hay un icono, es funcional.
- **Tú/usted:** según mercado. En México y Argentina mayoritariamente "tú" en B2B inmobiliario.

### Naming interno
- "Pulppo" siempre con doble P. Nunca "Pulpo".
- Producto: "la plataforma", "el sistema", no "la app".
- Usuarios: **brokers, asesores inmobiliarios, inmobiliarias**. No "agentes", no "vendedores".

---

## 7 · Do / Don't — prohibiciones explícitas

### Prohibido en cualquier elemento
- ❌ Drop shadow, inner shadow, glow, outer glow, bevel, emboss.
- ❌ Elevación falsa, profundidad simulada, 3D.
- ❌ Text shadow.
- ❌ Cualquier efecto que simule volumen.

> La jerarquía se construye con **tamaño, peso, espacio y color.** Nunca con profundidad.

### Prohibido en color
- ❌ Cualquier color fuera de los 7 oficiales.
- ❌ Negros distintos a `#212322`.
- ❌ Grises distintos a `#B7B7B7` y `#F3F3F3`.
- ❌ Amarillo como fondo principal o cubriendo >10% de la superficie.
- ❌ Rojo o verde con uso decorativo (sin significado funcional).
- ❌ Gradientes que mezclen dos colores distintos.

### Prohibido en tipografía
- ❌ Fuentes fuera del stack oficial (Heldane Text / EB Garamond para headings · Nunito Sans para body, tags, captions).
- ❌ Heldane Text o EB Garamond en Bold, Medium, Semibold, Black o itálica.
- ❌ UPPERCASE fuera de tags/eyebrows.
- ❌ Body centrado o justificado.
- ❌ Tamaños con decimales.

### Prohibido en iconografía
- ❌ Iconos con color, gradiente o saturación.
- ❌ Mezcla de familias de iconos en una misma pieza.
- ❌ Iconos 3D, emojis decorativos.

### Prohibido en densidad
- ❌ Más de una idea por slide (excepto infografías).
- ❌ Más de 5 bullets por slide.

---

## 8 · Resumen operativo

1. Solo **7 colores** oficiales · solo **2 tipografías** · solo **7 layouts**.
2. Soft black es `#212322`. Yellow es `#F6BE00`. Sin variantes.
3. Logo símbolo siempre **top-right**.
4. Margen mínimo **0.5"** en todos los bordes.
5. Línea amarilla **1pt**, no obligatoria.
6. Iconos flat, una sola familia, sin color.
7. **Sin sombras. Nunca.**
8. Body alineado a izquierda. Tamaños enteros.
9. Una idea por slide (excepto infografías).
10. Degradados solo de color oficial a transparente.

---

*Pulppo · DESIGN.md · derivado de Reglas de marca v1.0 (abril 2026)*
*Si no está escrito aquí, preguntar antes de inventar.*
