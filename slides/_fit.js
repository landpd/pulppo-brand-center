// Auto-scales a fixed 1280×720 stage to fit the viewport.
(function () {
  const W = 1280, H = 720;
  function fit() {
    const stage = document.querySelector('.stage');
    if (!stage) return;
    const s = Math.min(window.innerWidth / W, window.innerHeight / H);
    stage.style.setProperty('--scale', s.toFixed(4));
  }
  window.addEventListener('resize', fit);
  document.addEventListener('DOMContentLoaded', fit);
  fit();
})();
