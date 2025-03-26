document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    var header = document.getElementById('header');
    var sig = document.getElementById('sig');

    // Ensure header is the bouncing container.
    header.style.position = 'relative';
    header.style.overflow = 'hidden';

    // Calculate header dimensions and center .net initially.
    var containerWidth = header.clientWidth;
    var containerHeight = header.clientHeight;
    var elementWidth = sig.offsetWidth;
    var elementHeight = sig.offsetHeight;

    var posX = (containerWidth - elementWidth) / 2;
    var posY = (containerHeight - elementHeight) / 2;

    sig.style.position = 'absolute';
    sig.style.left = posX + 'px';
    sig.style.top = posY + 'px';
  }, 500);
    // Delay the bounce start by 4 seconds (4000 ms).
    setTimeout(function(){
      startBouncing(sig, header);
    }, 4000);
  });

  function startBouncing(element, container) {
    var containerWidth = container.clientWidth;
    var containerHeight = container.clientHeight;
    var elementWidth = element.offsetWidth;
    var elementHeight = element.offsetHeight;

    var posX = parseFloat(element.style.left) || 0;
    var posY = parseFloat(element.style.top) || 0;
    var dx = 2;
    var dy = 2;

    function animate() {
      posX += dx;
      posY += dy;

      // Bounce off horizontal edges.
      if (posX + elementWidth > containerWidth || posX < 0) {
        dx = -dx;
      }
      // Bounce off vertical edges.
      if (posY + elementHeight > containerHeight || posY < 0) {
        dy = -dy;
      }

      element.style.left = posX + 'px';
      element.style.top = posY + 'px';

      requestAnimationFrame(animate);
    }
    animate();
}
