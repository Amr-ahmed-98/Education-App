
// components/SlideUpSplitTextMotion.tsx
import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SlideUpSplitTextMotionProps {
  children: ReactNode;
  delayPerItem?: number; // default 0.05
  className?: string;
  splitBy?: "word" | "char"; // default word
}

export default function SlideUpSplitTextMotion({
  children,
  delayPerItem = 0.05,
  className,
  splitBy = "word",
}: SlideUpSplitTextMotionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "0px 0px -30% 0px", once: false });

  const processText = (node: ReactNode): ReactNode => {
    if (typeof node === "string") {
      const parts = splitBy === "word" ? node.split(" ") : node.split("");
      return parts.map((part, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: "1.2em" }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: index * delayPerItem,
          }}
  className="inline-block leading-tight"
    >
          {part}
         {splitBy === "word" && "\u00A0"}
        </motion.span>
      ));
    }

    if (Array.isArray(node)) {
      return node.map((child, index) => <span key={index}>{processText(child)}</span>);
    }

    if (typeof node === "object" && "props" in (node as any)) {
      const element = node as any;
      return (
        <element.type {...element.props}>
          {processText(element.props.children)}
        </element.type>
      );
    }

    return node;
  };

  return (
    <div ref={ref} className={className}>
      {processText(children)}
    </div>
  );
}
