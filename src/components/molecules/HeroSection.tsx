import React from "react";
import Button from "../atoms/Button";
import * as img from "../../assets/images/images";
import {motion} from "framer-motion";
import { fadeIn } from "./../../animation/FadeIn";
import  GetX  from "./../../animation/GetX";

interface HeroSectionProps {
  title1?: string;
  title2?: string;
  title3?: string;
  title4?: string;
  description?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  image?: string;
  imageRight?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title1,
  title2,
  title3,
  title4,
  description = "Default description here",
  primaryButton = { text: "Get Started", href: "/register" },
  image,
  imageRight = true,
}) => {
  return (
    <section
      className={`  bg-[linear-gradient(210deg,#4775C1_0%,#5184D5_0%,#9BBdF5_40%,#AECDFD_70%,#5184D5_100%)] dark:bg-[linear-gradient(210deg,#112238_0%,#18304E_0%,#1D3B60_40%,#0D234E_70%)] `}
    >
      <div className="">
       
       <div
        className="flex justify-center items-center flex-wrap sm:flex-col md:flex-col lg:flex-row">
          {/* Content */}
          <div className="mb-[50px] pt-[30px] text-center sm:text-center lg:text-left">

            <motion.h1 
         variants={fadeIn({ direction: "up", delay: 0.2 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
            className="text-[30px]  lg:text-5xl  font-bold text-primary leading-tight mb-6">
              {title1} <span className="text-secondary"> {title2}</span> <br />{" "}
              <span className="text-dark-secondary dark:text-light-secondary">
                {title3}
              </span>
              <br /> {title4}
            </motion.h1>
           <GetX>

            <p
            className="text-lg  text-gray mb-8 leading-relaxed">
              {description}
            </p>
            </GetX>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryButton && (
                <GetX>
                <Button 
                variant="primary" size="lg">
                  {primaryButton.text}
                </Button>
                </GetX>
              )}
            </div>
          </div>

          {/* Image */}
          {image && (
            <div className={imageRight ? "lg:col-start-2" : "lg:col-start-1"}>
              <div className="relative ">
                 <GetX>
                <img
                  className="w-[75%]  absolute left-[10%] sm:top-[-40px] lg:top-[30px]  "
                  src={img.Ellipse}
                  alt="error1"
                />
               
                <img
                  src={image}
                  alt={title1}
                  className="w-full h-auto rounded-lg relative top-[0px]"
                />
                </GetX>
                {/* Optional decorative elements */}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
