document.querySelector('.home-frame8').addEventListener('click', function() {
    // Duration of the confetti animation in milliseconds (2 seconds in this case).
    // Increase or decrease this value to change the overall life of the particles.
    var duration = 2 * 1000;
    var animationEnd = Date.now() + duration;

    // Defaults for the confetti.
    // "startVelocity" is the initial speed of the particles. Change this to modify the speed.
    // "ticks" controls the life of each particle. The higher the value, the longer each particle will exist.
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();
  
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
  
      // particleCount is how many particles are generated each time.
      // Changing this value will not affect the speed or life of the particles, but will change the amount generated.
      var particleCount = 200 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      }));
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      }));
    }, 250);
  });