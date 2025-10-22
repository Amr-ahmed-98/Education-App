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
import Button from "../atoms/Button";
import { motion } from "framer-motion";
import { fadeIn } from "./../../animation/FadeIn";
import GetX from '../../animation/GetX';
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
          primaryButton={{ text: t("HeroHome.btn"), href: "/register" }}
          image={img.HomeHero}
          imageRight={true} // لو خليتها true هتبدل مكان النص مع الصورة
        
        />
        <div className=" bg-[linear-gradient(210deg,#4775C1_0%,#5184D5_0%,#9BBdF5_40%,#AECDFD_70%,#5184D5_100%)] dark:bg-[linear-gradient(210deg,#002766_0%,#3C5B8C_0%,#002766_40%)]">
          <div 
          className="
          container flex overflow-x-auto space-x-2 px-4 py-2 
    lg:grid lg:grid-cols-4 lg:space-x-0 lg:overflow-visible"
   
    >
            {ItemCard.map((item) => (
              <BannerCard
                key={item.id}
                icon={item.icon}
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
      <div className="bg-[#C4DBFF]  dark:bg-[#020B17] py-[70px]">
        <motion.div className="container"
         variants={fadeIn({ direction: "down", delay: 0.4 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        >
         <TitleCourse
        title1={t("titleCard.title1")} 
        title2={t("titleCard.title2")} 
        title3={t("titleCard.title3")} 
        title4={t("titleCard.title4")} 
        />
        </motion.div>
      <div className="flex flex-col sm:flex-col lg:flex-row container gap-5"
      
      >
     <GetX>
        <Cart className="dark:bg-[#1C242F]"
          course={{
            id: "1",
            title: "Python Course",
            level: "Advanced",
            duration: "6 Weeks",
            image: img.course1,
            rating: 4,
            totalRatings: 21,
            price: 120,
            lessons: 48,
          }}
        />
      </GetX>
        <GetX>
        <Cart className="dark:bg-[#1C242F]"
          course={{
            id: "1",
            title: "Python Course",
            level: "Advanced",
            duration: "6 Weeks",
            image: img.course2,
            rating: 4,
            totalRatings: 21,
            price: 120,
            lessons: 48,
          }}
        
        />
        </GetX>
        <GetX>
        <Cart className="dark:bg-[#1C242F]"
          course={{
            id: "1",
            title: "Python Course",
            level: "Advanced",
            duration: "6 Weeks",
            image: img.course3,
            rating: 4,
            totalRatings: 21,
            price: 120,
            lessons: 48,
          }}
        />
      </GetX>
      </div>
        <Button className="my-[50px]"    
            path="/course"
            size="lg"
            center={true}
        >
          {t("titleCard.btn")}
        </Button>
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
