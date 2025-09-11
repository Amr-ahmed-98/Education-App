
import React from "react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";

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
       <section className={`py-16 lg:py-5 bg-hero-blue dark:bg-[#112238] ${className}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-9 lg:px-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center `}>
          {/* Content */}
          <div >
            <h1 className="text-3xl  lg:text-4xl font-bold text-primary leading-tight mb-6">
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
              <div className="relative">
                <img
                  src={image}
                  alt={title1}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                {/* Optional decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#AECDFD] rounded-full opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#AECDFD] rounded-full opacity-50"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroSection;