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
  const getOffset = () => {
    switch (direction) {
      case "left":
        return { x: -200, y: 0 };
      case "right":
        return { x: 200, y: 0 };
      case "top":
        return { x: 0, y: -200 };
      case "bottom":
        return { x: 0, y: 200 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: false, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

// how to use 

{/* <SlideInOnScroll direction="top" delay={0.3}>
  <p>أنا جاي من فوق </p>
</SlideInOnScroll> */}