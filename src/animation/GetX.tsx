import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Direction = "left" | "right" | "top" | "bottom";

interface SlideInOnScrollProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
}

export default function SlideInOnScroll({
  children,
  direction = "left",
  delay = 0,
}: SlideInOnScrollProps) {
  const getX = (): number => {
    switch (direction) {
      case "left":
        return -200;
      case "right":
        return 100;
      case "top":
        return -100;
      case "bottom":
        return 50;
      default:
        return 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: getX() }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: false, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}