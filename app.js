/* Pulppo Brand Center — scrollspy, copiar tokens, nav móvil. */

const nav = document.querySelector('.nav');
const links = [...nav.querySelectorAll('a')];
const sections = links
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

let ticking = false;

function setActive() {
  ticking = false;
  const probe = window.scrollY + 120;
  const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;

  const current = atBottom
    ? sections.at(-1)
    : sections.reduce((last, s) => (s.offsetTop <= probe ? s : last), sections[0]);

  for (const a of links) {
    const on = a.getAttribute('href') === `#${current.id}`;
    if (on) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');

    if (on && nav.scrollWidth > nav.clientWidth) {
      const left = a.getBoundingClientRect().left - nav.getBoundingClientRect().left;
      nav.scrollTo({ left: nav.scrollLeft + left - 24, behavior: 'smooth' });
    }
  }
}

function onScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(setActive);
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
setActive();

document.addEventListener('click', async (event) => {
  const button = event.target.closest('[data-copy]');
  if (!button) return;

  const label = button.textContent;
  const finish = (ok) => {
    button.textContent = ok ? 'Copiado' : 'No se pudo copiar';
    button.classList.toggle('copied', ok);
    clearTimeout(button.copyTimer);
    button.copyTimer = setTimeout(() => {
      button.textContent = label;
      button.classList.remove('copied');
    }, 1600);
  };

  try {
    await navigator.clipboard.writeText(button.dataset.copy);
    finish(true);
  } catch {
    finish(false);
  }
});