import { useTranslation } from 'react-i18next';
import SideText from '../../molecules/SideText';
import * as img from '../../../assets/images/images';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../animation/FadeIn';
function InstructorSection() {
    const { t } = useTranslation();
  return (
    <div className='grid container py-[80px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
      <motion.div
       variants={fadeIn({ direction: "down", delay: 0.3 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        <SideText
       title={t("InstructorHome.title")}
        subtitle1={t("InstructorHome.subTitle1")}
        subtitle2={t("InstructorHome.subTitle2")}
        subtitle3={t("InstructorHome.subTitle3")}
        description={t("InstructorHome.description")}    
        button1={t("InstructorHome.btn1")}    
        button2={t("InstructorHome.btn2")}    
            />

     </motion.div>

            <motion.div 
            className='flex flex-wrap gap-5 '
             variants={fadeIn({ direction: "up", delay: 0.3 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
            >
             <img className='w-[45%] ' src={img.intructor1} alt={img.intructor1} />
             <img  className='w-[45%] '  src={img.Instructor2} alt={img.Instructor2} />
             <img  className='w-[45%] ' src={img.Instructor3} alt={img.Instructor3} />
             <img className='w-[45%] '  src={img.Instructor4} alt={img.Instructor4} />
            </motion.div>
    </div>
  )
}

export default InstructorSection