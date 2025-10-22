import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HoverScaleEffectProps {
  children: ReactNode;
  scale?: number;
  transitionSpeed?: number;
}

export default function HoverScaleEffect({
  children,
  scale = 1.05,
  transitionSpeed = 0.3,
}: HoverScaleEffectProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: transitionSpeed, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// how to use 

// <HoverScaleEffect scale={1.1}>
//   <button >Hover Me</button>
// </HoverScaleEffect>
