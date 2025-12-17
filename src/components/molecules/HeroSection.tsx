import React from "react";
import { Button } from "../atoms/Button";
import { motion } from "framer-motion";
import { fadeIn } from "./../../animation/FadeIn";
import GetX from "./../../animation/GetX";
import { useTranslation } from "react-i18next";

interface TrustBadgeAvatar {
  src: string;
  alt: string;
}

interface HeroSectionProps {
  title1:string,
  title2:string,
  title3:string,
  title4:string,
  description:string,
  primaryButton:{
    text:string,
    onClick : ()=>void
  },
  imageRight:boolean,
  image?: string;
  trustBadgeAvatars?: TrustBadgeAvatar[];
  onButtonClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  image,
  trustBadgeAvatars = [
    {
      src: "https://randomuser.me/api/portraits/men/1.jpg",
      alt: "User 1",
    },
    {
      src: "https://randomuser.me/api/portraits/women/2.jpg",
      alt: "User 2",
    },
    {
      src: "https://randomuser.me/api/portraits/men/3.jpg",
      alt: "User 3",
    },
  ],
  onButtonClick,
}) => {
  const { t } = useTranslation();

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#E8EEFF] via-[#DDE7FF] to-[#C8D5FF] dark:bg-gradient-to-br dark:from-[#112238] dark:via-[#18304E] dark:to-[#1D3B60] py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Title */}
            <motion.h1
              variants={fadeIn({ direction: "up", delay: 0.2 })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight text-dark-primary dark:text-light-primary"
            >
              {t("HeroHome.title1")} {t("HeroHome.title2")}+ <br />
              {t("HeroHome.title3")} <br />
              {t("HeroHome.title4")}
            </motion.h1>

            {/* Description */}
            <GetX>
              <p className="text-base md:text-lg text-text-alt leading-relaxed max-w-lg">
                {t("HeroHome.description")}
              </p>
            </GetX>

            {/* Button */}
            <GetX>
              <Button
                variant="primary"
                size="lg"
                onClick={handleButtonClick}
                className="rounded-full px-8 shadow-md"
              >
                {t("HeroHome.btn")}
              </Button>
            </GetX>

            {/* Trust Badge */}
            <GetX>
              <div className="flex items-center gap-3 pt-4">
                {/* Avatar Group */}
                <div className="flex -space-x-3">
                  {trustBadgeAvatars.map((avatar, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-primary overflow-hidden shadow-sm"
                    >
                      <img
                        src={avatar.src}
                        alt={avatar.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Trust Text - Using footer.students if available */}
                <p className="text-sm font-medium text-text-alt">
                  500k+ {t("footer.students", "People already trusted us")}
                </p>
              </div>
            </GetX>
          </div>

          {/* Right Image */}
          {image && (
            <div className="relative flex justify-center lg:justify-end">
              <GetX>
                <div className="relative w-full max-w-md lg:max-w-lg">
                  {/* Decorative Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/40 to-amber-200/30 dark:from-yellow-900/20 dark:to-amber-800/10 rounded-3xl -rotate-6 scale-105"></div>

                  {/* Main Image */}
                  <img
                    src={image}
                    alt={t("HeroHome.title4")}
                    className="relative w-full h-auto rounded-3xl shadow-xl object-cover"
                  />
                </div>
              </GetX>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
