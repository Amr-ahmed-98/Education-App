import { useTranslation } from "react-i18next";
import HeroSection from "../molecules/HeroSection";
import * as img from './../../assets/images/images';
import * as icons from './../../assets/icons/icons';
import HeroText from "../molecules/HeroText";
function Home() {
      const { t } = useTranslation(); 
  return (
   <div>
     <HeroSection      
        title1={t("HeroHome.title1")}
        title2={t("HeroHome.title2")}
        title3={t("HeroHome.title3")}
        title4={t("HeroHome.title4")}
        description={t("HeroHome.description")}
        primaryButton={{ text:t("HeroHome.btn"), href: "/register" }}

        image={img.HomeHero}
        imageRight={true} // لو خليتها true هتبدل مكان النص مع الصورة
        className="bg-gray-50"/>
    
    <div className="md:px-16 sm:px-10 px-4">
        <HeroText
          title={t("HeroText.title")}
  subtitle1={t("HeroText.subTitle1")}
  subtitle2={t("HeroText.subTitle2")}
  subtitle3={t("HeroText.subTitle3")}
  description={t("HeroText.description")}
  image={img.HomeAbout}
  variant="icons"
  icons={[
    { src: <icons.Check className="bg-primary text-white p-[3px] rounded-[50%]"  />, label: t("HeroText.iconTitle1")  },
    { src: <icons.Check className="bg-primary text-white p-[3px] rounded-[50%]" />, label: t("HeroText.iconTitle2") },
    { src: <icons.Check className="bg-primary text-white p-[3px] rounded-[50%]" />, label: t("HeroText.iconTitle3") },
  ]} />
  </div>
   </div>
  )
}

export default Home