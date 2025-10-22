import { useTranslation } from 'react-i18next';
import SideText from '../../molecules/SideText';
import * as img from '../../../assets/images/images';
import SlideInOnScroll from '@/animation/GetX';
function InstructorSection() {
    const { t } = useTranslation();
  return (
    <div className='grid container py-[80px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
      <div
      
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

     </div>
    


            <div 
            className='grid grid-cols-2 md:grid-cols-2 gap-5 justify-items-center'>
          <SlideInOnScroll direction="top">
             <img className='w-full ' src={img.intructor1} alt={img.intructor1} />
               </SlideInOnScroll>
                    <SlideInOnScroll direction="bottom">
             <img  className='w-full'  src={img.Instructor2} alt={img.Instructor2} />
             </SlideInOnScroll>
              <SlideInOnScroll direction="top">
                
             <img  className='w-full' src={img.Instructor3} alt={img.Instructor3} />
             </SlideInOnScroll>
                  <SlideInOnScroll direction="bottom">
             <img className='w-full'  src={img.Instructor4} alt={img.Instructor4} />
             </SlideInOnScroll>
           
            </div>
    </div>
  )
}

export default InstructorSection