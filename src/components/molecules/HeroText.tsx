
import {Button} from "../atoms/Button";
import { fadeIn } from "@/animation/FadeIn";
import GetX from '@/animation/GetX';
import {motion} from "framer-motion";

interface HeroTextProps{
    title?: string,
    subtitle1?: string ,
    subtitle2?: string ,
    subtitle3?: string ,
    description?:string,
    image?:string,
    variant: "icons" | "button";
    icons?: { src: React.ReactNode; label: string }[];
    button?: string;
}

const HeroText : React.FC<HeroTextProps> = ({
    title = "Default Title",
    variant,
    subtitle1,
    subtitle2,
    subtitle3,
    description,
    image,
    icons,
    button,
}) =>{
    return(
        <section className="grid py-[100px] grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* الصورة */}
      <div>

        <GetX direction="left">
        <img src={image} alt={title} className="rounded-lg shadow-2xl w-[100%] sm:w-[100%] lg:w-[85%]" />
        </GetX>
      </div>
      {/* النص */}
      <div >
       <GetX>
        <Button variant="outline1" size="lg">{title}</Button>
      </GetX>
    
        <motion.h1 
         variants={fadeIn({ direction: "down", delay: 0.2 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="mb-6 mt-[10px] text-b text-[40px] font-bold leading-[70px]"
        ><span className="text-primary">{subtitle1}</span> {subtitle2} <span className="text-secondary">{subtitle3} </span></motion.h1>
         <GetX>
        <p className="text-text-grayDark dark:text-text-grayLight mb-[20px]">{description}</p>
        </GetX>
       {/* icons variant */}
        {variant === "icons" && icons && (
          <div className="flex gap-3  flex-col">
            {icons.map((icon, i) => (
              <motion.div 
              key={i}
               className="flex flex-row  gap-2"
                        variants={fadeIn({ direction: "left", delay: 0.2 })}
                       initial="hidden"
                       whileInView="show"
                       viewport={{ once: false, amount: 0.7 }}
               >
              <>
                  {typeof icon.src === "string" ? (
                   
                 <img src={icon.src} alt={icon.label} className="w-10 h-10 bg-white" />
                ) : (
                 
               icon.src
                )}
                <span>{icon.label}</span>
              </>
              </motion.div>
            ))}
          </div>
        )}

  {/* button variant */}
        {variant === "button" && button && (
            <Button variant="primary" size="lg" path="/contact-us">{button}</Button>
        )}
      </div>

    
    </section>
    )
}

export default HeroText;