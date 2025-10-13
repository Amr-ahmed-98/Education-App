import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { Variants  } from "framer-motion";

interface SplitTextMotionProps {
  children: ReactNode;
}
const slideUpLine: Variants = {
  hidden: { opacity: 0, y: 70 },
  visible: (i :number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function SlideUpSplitTextMotion({ children }: SplitTextMotionProps) {
  if (typeof children !== "string") return null;

  const lines = children.split("\n");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col gap-10"
    >
      {lines.map((line, i) => (
        <motion.p
          key={i}
          variants={slideUpLine}
          custom={i}
          className="leading-relaxed"
        >
          {line}
        </motion.p>
      ))}
    </motion.div>
  );
}
