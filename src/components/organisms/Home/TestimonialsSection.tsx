
import Button from "../../atoms/Button";
import CardSec from './CardSec';
import { useTranslation } from "react-i18next";
import { Students } from "../../../utils/Data";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/FadeIn";
interface TestimonialsSecProps{
    title?: string,
    subtitle1?: string ,
    subtitle2?: string ,
    subtitle3?: string ,
    variant: "icons" | "button";
    icons?: { src: React.ReactNode; label: string }[];
    button1?: string;
    button2?: string;
    description?: string;
    
}


const TestimonialsSec: React.FC<TestimonialsSecProps> = ({
  title = "Default Title",
  variant,
  subtitle1,
  subtitle2,
  subtitle3,
  icons,
  button1,
  button2,
  description
}) => {
    const { t } = useTranslation();
    return (
      <section className="grid container py-[100px] grid-cols-1 lg:grid-cols-3 gap-7 items-center">
        {/* Student Cards */}

        {Students.map((student) => (

          <motion.div
            variants={fadeIn({ direction: "down", delay: 0.4 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        >
          <CardSec
            key={student.id}
            image={t(student.img)}
            icons={student.icons}
            name={t(student.name)}
            track={t(student.track)}
            description={t(student.description)}
          />
          </motion.div>
        ))}
      
        <motion.div
        variants={fadeIn({ direction: "up", delay: 0.4 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        >
          <Button variant="outline1" size="lg">{title}</Button>
          <h1 className="mb-6 mt-[10px] text-b text-[40px] font-bold leading-[70px]">
            <span className="text-primary">{subtitle1}</span> {subtitle2} <span className="text-secondary">{subtitle3}</span>
          </h1>
          <p className="mb-[30px]"> {description}</p>
          {/* icons variant */}
          {variant === "icons" && icons && (
            <div className="flex gap-3 flex-col">
              {icons.map((icon, i) => (
                <div key={i} className="flex flex-row gap-2">
                  <>
                    {typeof icon.src === "string" ? (
                      <img src={icon.src} alt={icon.label} className="w-10 h-10 bg-white" />
                    ) : (
                      icon.src
                    )}
                    <span>{icon.label}</span>
                  </>
                </div>
              ))}
            </div>
          )}
          {/* button variant */}
          {variant === "button" && button1 && (
            <div className="flex gap-5">
              <Button variant="primary" size="lg" path="/contact-us">{button1}</Button>
              <Button variant="secondary" size="lg" path="/course">{button2}</Button>
            </div>
          )}
        </motion.div>
      </section>
    );
}

export default TestimonialsSec;