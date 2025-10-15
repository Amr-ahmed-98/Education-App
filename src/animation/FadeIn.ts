// src/animation/FadeIn.ts

interface FadeInOptions {
  direction?: "up" | "down" | "left" | "right";
  type?: "tween" | "spring";
  delay?: number;
  duration?: number;
}

export const fadeIn = ({
  direction = "up",
  type = "tween",
  delay = 0,
  duration = 0.4,
}: FadeInOptions) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type,
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75] as [number, number, number, number] ,
      },
    },
  };
};
