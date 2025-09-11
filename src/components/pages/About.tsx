import { useTranslation } from "react-i18next";
import IconDetails from "../molecules/IconDetails";
import * as icon from "../../assets/icons/icons";
import * as image from './../../assets/images/images';
import HeroText from "../molecules/HeroText";
function About() {
        const { t } = useTranslation(); 
  
   const message: string = "Hello TypeScript 🚀";

  console.log(message); // يطبع في الـ console
  return (
    <div className="container">
             <HeroText
          title={t("HeroTextAbout.title")}
  subtitle1={t("HeroTextAbout.subTitle1")}
  subtitle2={t("HeroTextAbout.subTitle2")}
  subtitle3={t("HeroTextAbout.subTitle3")}
  description={t("HeroTextAbout.description")}
  image={image.HomeAbout}
  variant="button"
  button= {t("HeroTextAbout.btn")} />
      <h1>
        {/* this Example to how to use this component */}
        <IconDetails
          icon={icon.Angry}
          title={"About Us"}
          description="Learn more about our mission and values."
          isCircle={true}
          iconColor="text-green-500"
          bgColor="bg-green-100"
          size="md"
        />
      </h1>
 
    </div>
  )
}

export default About