import { useTranslation } from 'react-i18next';
import * as img from '../../../assets/images/images';
import SlideInOnScroll from '@/animation/GetX';

function InstructorSection() {
  const { t } = useTranslation();
  
  return (
    <div className="bg-[#f0f4f5] dark:bg-[#1c242f] py-[80px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="relative">
            {/* Decorative Dots Pattern */}
            <div className="absolute -left-8 top-8 hidden lg:block">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="3" fill="#4a69e2" opacity="0.3"/>
                <circle cx="20" cy="5" r="3" fill="#4a69e2" opacity="0.3"/>
                <circle cx="35" cy="5" r="3" fill="#4a69e2" opacity="0.3"/>
                <circle cx="50" cy="5" r="3" fill="#4a69e2" opacity="0.3"/>
                <circle cx="5" cy="20" r="3" fill="#4a69e2" opacity="0.3"/>
                <circle cx="20" cy="20" r="3" fill="#4a69e2" opacity="0.3"/>
                <circle cx="35" cy="20" r="3" fill="#4a69e2" opacity="0.3"/>
                <circle cx="50" cy="20" r="3" fill="#4a69e2" opacity="0.3"/>
                <circle cx="5" cy="35" r="3" fill="#4a69e2" opacity="0.3"/>
                <circle cx="20" cy="35" r="3" fill="#4a69e2" opacity="0.3"/>
                <circle cx="35" cy="35" r="3" fill="#4a69e2" opacity="0.3"/>
                <circle cx="50" cy="35" r="3" fill="#4a69e2" opacity="0.3"/>
                <circle cx="5" cy="50" r="3" fill="#4a69e2" opacity="0.3"/>
                <circle cx="20" cy="50" r="3" fill="#4a69e2" opacity="0.3"/>
                <circle cx="35" cy="50" r="3" fill="#4a69e2" opacity="0.3"/>
                <circle cx="50" cy="50" r="3" fill="#4a69e2" opacity="0.3"/>
              </svg>
            </div>

            <SlideInOnScroll direction="left">
              {/* Label Badge */}
              <div className="inline-block mb-6">
                <span className="px-5 py-2 border-2 border-[#ee4a62] text-[#ee4a62] rounded-full text-sm font-medium">
                  {t("InstructorHome.title")}
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#272626] dark:text-[#f1f1f3] leading-tight mb-6">
                {t("InstructorHome.subTitle1")} {t("InstructorHome.subTitle2")}{" "}
                <br className="hidden sm:block" />
                {t("InstructorHome.subTitle3")}
              </h2>

              {/* Description */}
              <p className="text-[#6b7280] dark:text-[#d2d2d2] text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                {t("InstructorHome.description")}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3.5 bg-[#4a69e2] hover:bg-[#3958d1] text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300">
                  {t("InstructorHome.btn1")}
                </button>
                <button className="px-8 py-3.5 bg-[#ee4a62] hover:bg-[#d93a52] text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300">
                  {t("InstructorHome.btn2")}
                </button>
              </div>
            </SlideInOnScroll>
          </div>

          {/* Right Side - Instructor Images Grid (3 left + 1 right large) */}
          <div className="grid grid-cols-2 gap-5">
            
            {/* Left Column - 3 Stacked Images */}
            <div className="flex flex-col gap-5">
              {/* Image 1 */}
              <SlideInOnScroll direction="top">
                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <img 
                    className="w-full h-full object-cover" 
                    src={img.intructor1} 
                    alt="Instructor 1" 
                  />
                </div>
              </SlideInOnScroll>

              {/* Image 2 */}
              <SlideInOnScroll direction="top">
                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <img 
                    className="w-full h-full object-cover" 
                    src={img.Instructor3} 
                    alt="Instructor 3" 
                  />
                </div>
              </SlideInOnScroll>

              {/* Image 3 */}
              <SlideInOnScroll direction="top">
                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <img 
                    className="w-full h-full object-cover" 
                    src={img.Instructor4} 
                    alt="Instructor 4" 
                  />
                </div>
              </SlideInOnScroll>
            </div>

            {/* Right Column - 1 Large Image */}
            <div>
              <SlideInOnScroll direction="bottom">
                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <img 
                    className="w-full h-full object-cover" 
                    src={img.Instructor2} 
                    alt="Instructor 2" 
                  />
                </div>
              </SlideInOnScroll>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default InstructorSection;
