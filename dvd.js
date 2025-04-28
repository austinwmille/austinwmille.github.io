// dvd.js
document.addEventListener('DOMContentLoaded', () => {
  const sig       = document.getElementById('sig');
  const container = document.getElementById('header');
  sig.style.position = 'fixed';

  let x = 0, y = 0, dx = 2, dy = 2;
  let sW, sH, cW, cH, headerRect;

  function measure() {
    headerRect = container.getBoundingClientRect();
    cW = headerRect.width;   cH = headerRect.height;
    sW = sig.offsetWidth;    sH = sig.offsetHeight;
    if (x === 0 && y === 0) {
      x = (cW - sW)/2;
      y = (cH - sH)/2;
    }
  }

  window.addEventListener('resize', measure);
  measure();

  // clean up the pulse class after animation ends
  sig.addEventListener('animationend', () => {
    sig.classList.remove('pulse');
  });

  function loop() {
    x += dx; y += dy;
    let bounced = false;

    if (x <= 0 || x + sW >= cW) {
      dx = -dx;
      x  = Math.min(Math.max(0, x), cW - sW);
      bounced = true;
    }
    if (y <= 0 || y + sH >= cH) {
      dy = -dy;
      y  = Math.min(Math.max(0, y), cH - sH);
      bounced = true;
    }

    if (bounced) {
      sig.classList.add('pulse');
    }

    sig.style.left = `${headerRect.left + x}px`;
    sig.style.top  = `${headerRect.top  + y}px`;

    requestAnimationFrame(loop);
  }

  loop();
});
