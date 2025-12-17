import { useTranslation } from "react-i18next";
import HeroSection from "../molecules/HeroSection";
import * as img from "./../../assets/images/images";
import * as icons from "./../../assets/icons/icons";
import HeroText from "../molecules/HeroText";
import Cart from "../molecules/Card";
import Instructor from "./../organisms/Home/InstructorSection";
import CertificateSection from "../../components/organisms/Home/CertificateSection";
import BannerCard from "../organisms/Home/BannerCard";
import { ItemCard } from "../../utils/Data";
import TestimonialsSec from "../organisms/Home/TestimonialsSection";
import TitleCourse from "./../molecules/TitleCourse";
import {Button} from "../atoms/Button";
import { motion } from "framer-motion";
import { fadeIn } from "./../../animation/FadeIn";
import GetX from '../../animation/GetX';
import { redirect } from "react-router-dom";
function Home() {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <HeroSection
          title1={t("HeroHome.title1")}
          title2={t("HeroHome.title2")}
          title3={t("HeroHome.title3")}
          title4={t("HeroHome.title4")}
          description={t("HeroHome.description")}
          primaryButton={{ text: t("HeroHome.btn"), onClick : ()=>{redirect('/register')} }}
          image={img.HomeHero}
          imageRight={true} // لو خليتها true هتبدل مكان النص مع الصورة
        
        />
      <div className="bg-[var(--gradient-hero)] dark:bg-[linear-gradient(210deg,#002766_0%,#3C5B8C_0%,#002766_40%)]">
  <div
    className="
      container
      flex flex-col gap-3 py-3
      md:grid md:grid-cols-2
      lg:grid-cols-4
    "
  >
    {ItemCard.map((item) => (
      <BannerCard
        key={item.id}
        icon={item.icon}
        value={item.value} 
        label={t(item.labelKey)}
      />
    ))}
  </div>
</div>


      </div>
      <div 
      className="container"
      >
        <HeroText
          title={t("HeroText.title")}
          subtitle1={t("HeroText.subTitle1")}
          subtitle2={t("HeroText.subTitle2")}
          subtitle3={t("HeroText.subTitle3")}
          description={t("HeroText.description")}
          image={img.HomeAbout}
          variant="icons"
          icons={[
            {
              src: (
                <icons.Check className="bg-primary text-white p-[3px] rounded-[50%]" />
              ),
              label: t("HeroText.iconTitle1"),
            },
            {
              src: (
                <icons.Check className="bg-primary text-white p-[3px] rounded-[50%]" />
              ),
              label: t("HeroText.iconTitle2"),
            },
            {
              src: (
                <icons.Check className="bg-primary text-white p-[3px] rounded-[50%]" />
              ),
              label: t("HeroText.iconTitle3"),
            },
          ]}
        />
      </div>
      <div id="courses" className="bg-[#C4DBFF] dark:bg-[#020B17] py-[70px]">
  <div className="container">
    {/* Top Categories Label */}
    <motion.div
      className="text-center mb-4"
      variants={fadeIn({ direction: "down", delay: 0.2 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
    >
      <p className="text-secondary text-sm md:text-base font-medium uppercase tracking-wide">
        {t("titleCard.title1")} {t("titleCard.title2")}
      </p>
    </motion.div>

    {/* Main Heading */}
    <motion.div
      className="mb-8"
      variants={fadeIn({ direction: "down", delay: 0.4 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#272626] dark:text-[#f1f1f3] mb-6">
        {t("titleCard.title3")} <br className="hidden sm:block" />
        {t("titleCard.title4")}
      </h2>
    </motion.div>

    {/* Category Pills */}
    <motion.div
      className="flex flex-wrap justify-center items-center gap-3 mb-12"
      variants={fadeIn({ direction: "up", delay: 0.3 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
    >
      <button className="px-5 py-2.5 bg-white dark:bg-[#1C242F] text-[#272626] dark:text-[#f1f1f3] rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-[#252e3a] transition-all duration-300 shadow-sm">
        Data Science
      </button>
      <button className="px-5 py-2.5 bg-white dark:bg-[#1C242F] text-[#272626] dark:text-[#f1f1f3] rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-[#252e3a] transition-all duration-300 shadow-sm">
        Leadership
      </button>
      <button className="px-5 py-2.5 bg-white dark:bg-[#1C242F] text-[#272626] dark:text-[#f1f1f3] rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-[#252e3a] transition-all duration-300 shadow-sm">
        Web Development
      </button>
      <button className="px-5 py-2.5 bg-white dark:bg-[#1C242F] text-[#272626] dark:text-[#f1f1f3] rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-[#252e3a] transition-all duration-300 shadow-sm">
        Communication
      </button>
      <button className="px-5 py-2.5 bg-[#4a69e2] text-white rounded-full text-sm font-medium hover:bg-[#3958d1] transition-all duration-300 shadow-sm">
        Marketing
      </button>
      <button className="px-5 py-2.5 bg-white dark:bg-[#1C242F] text-[#272626] dark:text-[#f1f1f3] rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-[#252e3a] transition-all duration-300 shadow-sm">
        Intelligence
      </button>
      <button className="w-10 h-10 flex items-center justify-center bg-[#4a69e2] text-white rounded-full hover:bg-[#3958d1] transition-all duration-300 shadow-sm">
        →
      </button>
    </motion.div>

    {/* Course Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <GetX>
        <Cart
          className="bg-white dark:bg-[#1C242F] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          course={{
            id: "1",
            title: "Introduction To Artificial Intelligence and Machine Learning",
            level: "Beginner",
            duration: "5 Hours",
            image: img.course1,
            rating: 4,
            totalRatings: 1234,
            price: 49.99,
            lessons: 29,
            students: "1k Students",
          }}
        />
      </GetX>

      <GetX>
        <Cart
          className="bg-white dark:bg-[#1C242F] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          course={{
            id: "2",
            title: "Introduction To Artificial Intelligence and Machine Learning",
            level: "Intermediate",
            duration: "4 Hours",
            image: img.course2,
            rating: 4,
            totalRatings: 2456,
            price: 54.99,
            lessons: 35,
            students: "2.5k Students",
          }}
        />
      </GetX>

      <GetX>
        <Cart
          className="bg-white dark:bg-[#1C242F] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          course={{
            id: "3",
            title: "Introduction To Artificial Intelligence and Machine Learning",
            level: "Advanced",
            duration: "5 Hours",
            image: img.course3,
            rating: 4,
            totalRatings: 948,
            price: 79.99,
            lessons: 42,
            students: "400 Students",
          }}
        />
      </GetX>
    </div>

    {/* Browse More Button */}
    <Button
      className="bg-[#4a69e2] hover:bg-[#3958d1] text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
      path="/course"
      size="lg"
      center={true}
    >
      {t("titleCard.btn")}
    </Button>
  </div>
</div>

      <Instructor />
      <CertificateSection />
      <TestimonialsSec
        title={t("TestimonialsSection.title")}
        subtitle1={t("TestimonialsSection.subTitle1")}
        subtitle2={t("TestimonialsSection.subTitle2")}
        subtitle3={t("TestimonialsSection.subTitle3")}
        description={t("TestimonialsSection.description")}
        variant="button"
        button1={t("TestimonialsSection.btn1")}
        button2={t("TestimonialsSection.btn2")}
      />
    </>
  );
}

export default Home;
