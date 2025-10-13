import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SplitTextMotionProps {
  children: ReactNode;
  delay?: number; // default 0
  className?: string;
}

export default function SplitTextMotion({
  children,
  delay = 0,
  className,
}: SplitTextMotionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "0px 0px -20% 0px", once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 90 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
