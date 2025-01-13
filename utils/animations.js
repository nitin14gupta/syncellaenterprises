function initLocomotive() {
  try {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      multiplier: 1,
      lerp: 0.1,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    });

    // Add scroll-based animations
    scroll.on('scroll', (args) => {
      // Fade in animations
      document.querySelectorAll('.fade-in').forEach(element => {
        if (isElementInViewport(element)) {
          element.classList.add('visible');
        }
      });

      // Slide in animations
      document.querySelectorAll('.slide-in-left, .slide-in-right').forEach(element => {
        if (isElementInViewport(element)) {
          element.classList.add('visible');
        }
      });

      // Parallax effects
      document.querySelectorAll('.parallax').forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.5;
        const yPos = -(args.scroll.y * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });

    // Update scroll on page load
    scroll.update();

    return scroll;
  } catch (error) {
    reportError(error);
  }
}

function isElementInViewport(el) {
  try {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  } catch (error) {
    reportError(error);
  }
}

function animateElement(element, animation) {
  try {
    gsap.to(element, {
      ...animation,
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false
      }
    });
  } catch (error) {
    reportError(error);
  }
}

function initParallaxMouseMove() {
  try {
    document.addEventListener('mousemove', (e) => {
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-parallax-speed') || 0.1;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    });
  } catch (error) {
    reportError(error);
  }
}
