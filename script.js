// First, add GSAP to your HTML file:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations
const heroAnimation = () => {
  const tl = gsap.timeline();
  
  tl.from('.main-title', {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
  })
  .from('.subtitle', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.5')
  .from('.hero-icons i', {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'back.out(1.7)'
  }, '-=0.3');

  // Floating animation for hero SVG
  gsap.to('.zone-svg', {
    y: 20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  });
};

// About Section Animations
const aboutAnimation = () => {
  gsap.from('.about-text', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top center',
      toggleActions: 'play none none reverse'
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from('.goals-svg', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top center',
      toggleActions: 'play none none reverse'
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });
};

// Skills Section Floating Cards
const skillsAnimation = () => {
  const cards = document.querySelectorAll('.skill-category');
  
  cards.forEach((card, index) => {
    gsap.to(card, {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: index * 0.2
    });
  });

  // Drone SVG rotation animation
  gsap.to('.drone-svg', {
    rotation: 5,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    transformOrigin: 'center center'
  });
};

// Timeline Animation
const timelineAnimation = () => {
  gsap.from('.timeline-item', {
    scrollTrigger: {
      trigger: '.timeline',
      start: 'top center',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: index => index % 2 === 0 ? 100 : -100,
    duration: 1,
    stagger: 0.3,
    ease: 'power3.out'
  });
};

// Projects Hover Effect
const projectsAnimation = () => {
  const projects = document.querySelectorAll('.project-card');
  
  projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
      gsap.to(project, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    project.addEventListener('mouseleave', () => {
      gsap.to(project, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
};

// Add these CSS animations to your existing CSS file
const newStyles = `
/* Floating Animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Add this class to elements you want to float */
.floating {
  animation: float 3s ease-in-out infinite;
}

/* Gradient Animation */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Add to elements for gradient animation */
.gradient-bg {
  background: linear-gradient(-45deg, var(--gold-dark), var(--gold), var(--gold-light));
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}

/* Glow Effect */
.glow {
  position: relative;
}

.glow::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 30px var(--gold);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.glow:hover::after {
  opacity: 0.5;
}

/* Parallax Effect */
.parallax {
  transform: translateZ(0);
  transition: transform 0.3s ease;
}

/* Typing Effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

.typing-effect {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid var(--gold);
  animation: 
    typing 3.5s steps(40, end),
    blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: var(--gold) }
}
`;

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
  heroAnimation();
  aboutAnimation();
  skillsAnimation();
  timelineAnimation();
  projectsAnimation();
});


document.addEventListener('DOMContentLoaded', () => {
    // Create a master timeline for better organization and control
    const masterTL = gsap.timeline();

    // Enhanced gradient rotation with subtle scale variation
    masterTL.to('.background-svg rect:first-child', {
        duration: 30,
        rotation: 360,
        scale: 1.1,
        transformOrigin: 'center center',
        repeat: -1,
        ease: "sine.inOut",
        yoyo: true
    });

    // Create a more natural, organic movement for shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        // Calculate unique movement patterns based on index
        const direction = index % 2 === 0 ? 1 : -1;
        const baseDelay = index * 0.5;
        
        // Create individual timelines for each shape
        const shapeTL = gsap.timeline({
            repeat: -1,
            defaults: {
                ease: "power1.inOut"
            }
        });

        // Complex movement pattern
        shapeTL.to(shape, {
            duration: gsap.utils.random(8, 12),
            x: `${direction * gsap.utils.random(15, 25)}`,
            y: gsap.utils.random(-20, 20),
            rotation: gsap.utils.random(-90, 90),
            scale: gsap.utils.random(0.8, 1.2),
            opacity: gsap.utils.random(0.1, 0.3),
            stagger: {
                each: 0.2,
                from: "random"
            }
        })
        .to(shape, {
            duration: gsap.utils.random(8, 12),
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            opacity: shape.getAttribute('opacity') || 0.2
        });

        // Add smooth floating effect
        const floatTL = gsap.timeline({
            repeat: -1,
            yoyo: true
        });

        floatTL.to(shape, {
            duration: 3,
            y: "+=10",
            ease: "sine.inOut"
        });

        // Control animation timing
        masterTL.add(shapeTL, baseDelay);
        masterTL.add(floatTL, baseDelay);
    });

    // Add subtle pulse effect to the noise layer
    // gsap.to('.noise-layer', {
    //     duration: 2,
    //     opacity: 0.08,
    //     repeat: -1,
    //     yoyo: true,
    //     ease: "sine.inOut"
    // });

    // Performance optimization
    gsap.ticker.fps(24);
    gsap.ticker.lagSmoothing(0);
});



  // nav bar 

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
      }
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
      });
  });