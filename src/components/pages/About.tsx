import { useTranslation } from "react-i18next";
import IconDetails from "../molecules/IconDetails";
import * as icon from "../../assets/icons/icons";
import HeroText from "../molecules/HeroText";
import CertificateSection from "../organisms/Home/CertificateSection";
import AboutHero from "../../assets/images/about.jpg";
import * as img from "./../../assets/images/images";
function About() {
  const { t } = useTranslation();
  const message: string = "Hello TypeScript 🚀";
  console.log(message); 
  return (
    <div >
          <div className="relative h-screen mb-10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${AboutHero})` }}
        />
        <div className="absolute inset-0 bg-blue-600/70" />
        <div className="container relative z-10 h-full flex flex-col justify-center items-center text-white"> 
         <div className="text-center max-w-4xl">
  <h1 className="text-4xl font-bold mb-6">
    {t("about.hero.titleStart")} <span className="text-red-400">{t("about.hero.highlight")}</span>
  </h1>
  <p className="text-xl max-w-2xl mx-auto leading-relaxed">
    {t("about.hero.description")}
  </p>
</div>
        </div>
         
         
          </div>
      
      
      <div className="container">
    <HeroText
        title={t("HeroTextAbout.title")}
        subtitle1={t("HeroTextAbout.subTitle1")}
        subtitle2={t("HeroTextAbout.subTitle2")}
        subtitle3={t("HeroTextAbout.subTitle3")}
        description={t("HeroTextAbout.description")}
        image= {img.Aboutpic} 
        variant="button"
        button={t("HeroTextAbout.btn")}
      />
      </div>
  

     <div className="bg-blue-100 dark:bg-black relative ">
      
        <img 
    src={img.green_Dots} 
    alt="decoration" 
    className="absolute top-10 left-10 w-32 opacity-50"
  />

  <h1 className="text-4xl font-bold text-center pt-16 mb-20">
    <span className="text-red-500">{t("about.visionMission.ourText")}</span> 
    {t("about.visionMission.title")} 
    <span className="text-blue-600">{t("about.visionMission.missionText")}</span>
  </h1>
  <div className="container my-20 py-[40px] flex gap-12 justify-center flex-wrap">
    <IconDetails
      icon={icon.IoPeople}
      title={t("about.vision.title")}
      description={t("about.vision.description")}
      isCircle={false}
      iconColor="text-red-500"
      bgColor="bg-red-100"
      size="lg"
    />
    <IconDetails
      icon={icon.MdLightbulbOutline}
      title={t("about.mission.title")}
      description={t("about.mission.description")}
      isCircle={false}
      iconColor="text-blue-500"
      bgColor="bg-blue-100"
      size="lg"
    />
  </div>
    <img 
    src={img.red_Dots} 
    alt="decoration" 
    className="absolute bottom-10 right-10 w-32 opacity-50"
  />

     </div>


     <div>
      <h1 className="text-4xl font-bold text-center pt-16 mb-20">
      {t("about.coreValues.title")}
      <span className="text-red-500 px-2">
        {t("about.coreValues.valuesText")}
      </span>
      </h1>
      <div className="container  my-20 py-[40px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 justify-center">
      <IconDetails
      icon={icon.IoPeople}
      title=""
      description={t("about.coreValues.value1.title")}
      isCircle={false}
      iconColor="text-blue-500"
      bgColor="bg-blue-100"
      size="sm"
    />
    <IconDetails
      icon={icon.MdLightbulbOutline}
      title=""
      description={t("about.coreValues.value2.title")}
      isCircle={false}
      iconColor="text-green-500"
      bgColor="bg-green-100"
      size="sm"
    />
    <IconDetails
      icon={icon.IoShieldCheckmarkSharp}
      title=""
      description={t("about.coreValues.value3.title")}
    isCircle={false}
      iconColor="text-pink-500"
      bgColor="bg-pink-100"
      size="sm"
    />
    <IconDetails
      icon={icon.BiSmile}
      title=""
     description={t("about.coreValues.value4.title")}
      isCircle={false}
      iconColor="text-yellow-500"
      bgColor="bg-yellow-100"
      size="sm"
    />
    <IconDetails
      icon={icon.IoMdTrendingUp}
      title=""
       description={t("about.coreValues.value5.title")}
      isCircle={false}
      iconColor="text-purple-500"
      bgColor="bg-purple-100"
      size="sm"
    />
    <IconDetails
      icon={icon.SiNextra}
      title=""
      description={t("about.coreValues.value6.title")}
      isCircle={false}
      iconColor="text-red-500"
      bgColor="bg-red-100"
      size="sm"
    />
          </div>
      </div>



      <div>
      <h1 className="text-4xl font-bold text-center pt-16 mb-20">
      {t("about.offers.title")}
      <span className="text-red-500 px-2">
        {t("about.offers.offersText")}
      </span>
      </h1>
      <div className="container  my-20 py-[40px] grid grid-cols-1 md:grid-cols-3 gap-12 justify-center items-center">
      <IconDetails
      icon={icon.FaBookOpen}
      title={t("about.offers.feature1.title")}
      description={t("about.offers.feature1.description")}
      isCircle={false}
      iconColor="text-blue-500"
      bgColor="bg-blue-100"
      size="lg"
    />
    <IconDetails
      icon={icon.IoCheckmarkCircleOutline}
       title={t("about.offers.feature2.title")}
      description={t("about.offers.feature2.description")}
      isCircle={false}
      iconColor="text-yellow-500"
      bgColor="bg-yellow-100"
      size="lg"
    />
    <IconDetails
      icon={icon.FaChartLine}
      title={t("about.offers.feature3.title")}
      description={t("about.offers.feature3.description")}
    isCircle={false}
      iconColor="text-red-500"
      bgColor="bg-red-100"
      size="lg"
    />
 
          </div>
      </div>

        <CertificateSection/>


      {/*    <div>
      <h1 className="text-4xl font-bold text-center pt-16 mb-20">
      {t("about.offers.title")}
      <span className="text-red-500 px-2">
        {t("about.offers.offersText")}
      </span>
      </h1>
      <div className="container  my-20 py-[40px] flex gap-12 justify-center">
      <IconDetails
      icon={icon.FaBookOpen}
      title={t("about.offers.feature1.title")}
      description={t("about.offers.feature1.description")}
      isCircle={false}
      iconColor="text-blue-500"
      bgColor="bg-blue-100"
      size="lg"
    />
    <IconDetails
      icon={icon.IoCheckmarkCircleOutline}
       title={t("about.offers.feature2.title")}
      description={t("about.offers.feature2.description")}
      isCircle={false}
      iconColor="text-yellow-500"
      bgColor="bg-yellow-100"
      size="lg"
    />
     </div>

     <div className="container  my-20 py-[40px] flex gap-12 justify-center">
         <IconDetails
      icon={icon.FaChartLine}
      title={t("about.offers.feature3.title")}
      description={t("about.offers.feature3.description")}
    isCircle={false}
      iconColor="text-red-500"
      bgColor="bg-red-100"
      size="lg"
    />
      </div>
 
 
         
      </div> */}
      
    </div>
  );
}

export default About;
