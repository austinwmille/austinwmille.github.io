// dvd.js
document.addEventListener('DOMContentLoaded', () => {
  const sig       = document.getElementById('sig');
  const container = document.getElementById('header');

  // Float the sig absolutely in viewport space:
  sig.style.position = 'fixed';  

  // state vars:
  let x = 0, y = 0,
      dx = 2, dy = 2,
      sW, sH, cW, cH,
      headerRect;

  function measure() {
    headerRect = container.getBoundingClientRect();  
    cW = headerRect.width;
    cH = headerRect.height;
    sW = sig.offsetWidth;
    sH = sig.offsetHeight;

    // On first run, center it:
    if (x === 0 && y === 0) {
      x = (cW - sW) / 2;
      y = (cH - sH) / 2;
    }
  }

  // initial measurement + catch window resizes
  measure();
  window.addEventListener('resize', measure);

  function loop() {
    // move
    x += dx;
    y += dy;

    // bounce X
    if (x <= 0 || x + sW >= cW) {
      dx = -dx;
      x = Math.max(0, Math.min(x, cW - sW));
    }
    // bounce Y
    if (y <= 0 || y + sH >= cH) {
      dy = -dy;
      y = Math.max(0, Math.min(y, cH - sH));
    }

    // place the sig in viewport coords:
    sig.style.left = `${headerRect.left + x}px`;
    sig.style.top  = `${headerRect.top  + y}px`;

    requestAnimationFrame(loop);
  }

  loop();
});
