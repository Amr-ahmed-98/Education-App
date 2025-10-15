import  React  from "react";
import {motion} from "framer-motion";
import { fadeIn } from "@/animation/FadeIn";
interface BannerCardProbs {
  label?: string;
  icon?: React.ReactNode;
}

const BannerCard: React.FC<BannerCardProbs> = ({ 
    label, 
    icon,
}) => {
  return (
    <div className=" py-[20px] ">
      <div className="flex ">
        <motion.div 
         variants={fadeIn({ direction: "right", delay: 0.2 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="w-[60px] h-[60px] text-white bg-primary rounded-[50%] flex justify-center items-center"
        >{icon} </motion.div>
        <motion.p
         variants={fadeIn({ direction: "left", delay: 0.2 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }} 
        className="font-bold text-[15px] text-white flex justify-center items-center ml-[10px]"
        >{label}</motion.p>
      </div>
    </div>
  );
};

export default BannerCard;