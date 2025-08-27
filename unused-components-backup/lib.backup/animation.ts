// Utility for staggered animations
export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
};

// Utility for staggered animations from different directions
export const directions = {
  up: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
  down: { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 } },
};

// Utility for animating background colors
export const backgroundAnimation = {
  initial: { backgroundPosition: "0% 0%" },
  animate: {
    backgroundPosition: ["0% 0%", "100% 100%"],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
      ease: "linear",
    },
  },
};

// Utility for animating cards on hover
export const cardHoverAnimation = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
  tap: { scale: 0.98 },
};

// Simple smooth fade-in animation
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  },
};

// Parallax scroll animation
export const parallaxScroll = (strength: number = 0.5) => ({
  initial: { y: 0 },
  animate: {
    y: [`${-10 * strength}%`, `${10 * strength}%`],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
      ease: "linear",
    },
  },
});
