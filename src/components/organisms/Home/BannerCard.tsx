import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/FadeIn";

interface BannerCardProps {
  value?: string;          
  label?: string;            
  icon?: React.ReactNode;
}

const BannerCard: React.FC<BannerCardProps> = ({ value, label, icon }) => {
  return (
    <motion.div
      variants={fadeIn({ direction: "up", delay: 0.1 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="
        flex items-center gap-3
        whitespace-nowrap
        rounded-full
        bg-white/55 dark:bg-white/10
        px-4 py-3
        shadow-sm
      "
    >
      <div
        className="
          grid place-items-center
          size-10 md:size-12
          rounded-full
          bg-primary/10 dark:bg-white/10
          text-primary dark:text-white
        "
      >
        {icon}
      </div>

      <p className="text-sm md:text-base font-semibold text-slate-800 dark:text-white">
        {value && <span className="font-bold">{value} </span>}
        {label}
      </p>
    </motion.div>
  );
};

export default BannerCard;
