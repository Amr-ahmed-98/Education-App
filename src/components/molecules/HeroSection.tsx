
import React from "react";
import Button from "../atoms/Button";
import * as img from '../../assets/images/images';
interface HeroSectionProps {
    title1?: string,
    title2?: string,
    title3?: string,
    title4?: string,
    description?: string,
    primaryButton?:{
      text:string;
      href:string;};
    secondaryButton ?:{
      text:string;
      href:string;};
    image?:string ,
    imageRight?: boolean; 
    className?:string;
}

const HeroSection : React.FC<HeroSectionProps> = ({ 
    title1,
    title2,
    title3,
    title4,
    description = 'Default description here',
    primaryButton = { text: "Get Started", href:"/register"},
    image,
    imageRight = true,
    className = ""

})=> {
  
  return(
       <section className={`py-16 h-[90vh] lg:py-5 bg-[linear-gradient(210deg,#4775C1_0%,#5184D5_0%,#9BBdF5_40%,#AECDFD_70%,#5184D5_100%)] dark:bg-[linear-gradient(210deg,#112238_0%,#18304E_0%,#1D3B60_40%,#0D234E_70%)] ${className}`}>
      <div className="max-w-7xl  container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center `}>
          {/* Content */}
          <div >
            <h1 className="text-3xl mt-[120px] lg:text-5xl font-bold text-primary leading-tight mb-6">
              {title1} <span className="text-secondary"> {title2}</span> <br/> <span className="text-dark-secondary dark:text-light-secondary">{title3}</span><br/> {title4}
            </h1>
         
              <p className="text-lg text-gray mb-8 leading-relaxed">
                {description}
              </p>
           
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryButton && (
               
                  <Button variant="primary" size="lg">
                    {primaryButton.text}
                  </Button>
          
              )}
            
            </div>
          </div>

          {/* Image */}
          {image && (
            <div className={imageRight ? "lg:col-start-2" : "lg:col-start-1"}>
              <div className="relative ">
                <img className="w-[80%] absolute left-[7%] top-[14.1px]  " src={img.Ellipse} alt="error1" />
                <img
                  src={image}
                  alt={title1}
                  className="w-full h-auto rounded-lg relative top-[20px]"
                />
                
                {/* Optional decorative elements */}
               
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroSection;