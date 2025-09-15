import { useTranslation } from "react-i18next";
import IconDetails from "../molecules/IconDetails";
import * as icon from "../../assets/icons/icons";
import * as image from "./../../assets/images/images";
import HeroText from "../molecules/HeroText";
import CertificateSection from "../organisms/Home/CertificateSection";
function About() {
  const { t } = useTranslation();
  const message: string = "Hello TypeScript 🚀";
  console.log(message); // يطبع في الـ console
  return (
    <div >
      <div className="container">
    <HeroText
        title={t("HeroTextAbout.title")}
        subtitle1={t("HeroTextAbout.subTitle1")}
        subtitle2={t("HeroTextAbout.subTitle2")}
        subtitle3={t("HeroTextAbout.subTitle3")}
        description={t("HeroTextAbout.description")}
        image={image.HomeAbout}
        variant="button"
        button={t("HeroTextAbout.btn")}
      />
      </div>
  

      <div>
        {/* this Example to how to use this component */}
        <div  className="container py-[40px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
   <IconDetails
          icon={icon.Check}
          title={"About Us"}
          description="Learn more about our mission and values."
          isCircle={true}
          iconColor="text-green-500"
          bgColor="bg-green-100"
          size="lg"
        />
        <IconDetails
          icon={icon.Check}
          title={"About Us"}
          description="Learn more about our mission and values."
          isCircle={true}
          iconColor="text-green-500"
          bgColor="bg-green-100"
          size="lg"
        />
        <IconDetails
          icon={icon.Check}
          title={"About Us"}
          description="Learn more about our mission and values."
          isCircle={true}
          iconColor="text-green-500"
          bgColor="bg-green-100"
          size="lg"
        />
        </div>
     
        <CertificateSection/>
      </div>
    </div>
  );
}

export default About;
