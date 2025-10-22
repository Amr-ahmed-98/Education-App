import { useTranslation } from "react-i18next";
import Button from "../atoms/Button";
import IconDetails from "../molecules/IconDetails";
import * as icons from "@/assets/icons/icons";
import * as images from "@/assets/images/images";
import { themes } from "@/contexts/Theme";
import { ThemeContext } from "@/contexts/ThemeContextDefinition";
import { useContext } from "react";
import GetX from '@/animation/GetX';
import SplitTextMotion from "@/animation/SplitTextMotion";

function Blogs() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === themes.dark;

  const iconDetailsProps = [
    {
      icon: icons.Award,
      title: t("Blogs.IconDetails.expertInstructors.title"),
      description: t("Blogs.IconDetails.expertInstructors.description"),
      iconColor: "text-[#4F39F6]",
      bgColor: "bg-[#FFE4E1]",
    },
    {
      icon: icons.LucideInfinity,
      title: t("Blogs.IconDetails.lifetimeAccess.title"),
      description: t("Blogs.IconDetails.lifetimeAccess.description"),
      iconColor: "text-[#9810FA]",
      bgColor: "bg-[#FFE4E1]",
    },
    {
      icon: icons.ShieldCheck,
      title: t("Blogs.IconDetails.verifiedCertificates.title"),
      description: t("Blogs.IconDetails.verifiedCertificates.description"),
      iconColor: "text-[#E60076]",
      bgColor: "bg-[#FFE4E1]",
    },
  ];

  return (
    <div className=" flex flex-col gap-30 pt-0 mb-10">
      {/* Section 1 */}
      <div className="flex flex-col justify-center items-center text-center gap-10 pt-0 mt-10">
        <GetX direction="top">
        <h1 className="font-bold text-6xl leading-[75px] tracking-[-1.5px] text-center">
          {t("Blogs.Section1.title1")}{" "}
          <span className={`${theme === themes.dark && "text-[#EE4A62]"}`}>
            {t("Blogs.Section1.title2")}
          </span>
        </h1>
        </GetX>
  <GetX direction="left">
        <p className="text-center text-[#45556C]">
          {t("Blogs.Section1.Description")}
        </p>
</GetX>
  <GetX direction="bottom">
        <Button size="lg">{t("Blogs.Section1.Btn")}</Button>
        </GetX>
          <GetX direction="bottom">

        <img
          src={images.laptop}
          alt="blog laptop"
          className="rounded-lg max-w-[80%] mx-auto" 
        />
            </GetX>
      </div>

      {/* Section 2 */}
      <div
        className={`flex flex-col gap-20 py-20 w-full ${
          isDark && `bg-[#1C242F]`
        }`}
      >
        {/* text */}
        <div className="flex flex-col items-center justify-center text-center gap-4">

          <h1 className="text-3xl font-bold flex text-center">
            {" "}
             <SplitTextMotion >
            {t("Blogs.Section2.Title")}
            </SplitTextMotion>
          </h1>
            <GetX direction="left">
          <p className="text-center text-[#45556C]">
            {t("Blogs.Section2.Description")}
          </p>
          </GetX>
        </div>
        {/* 3 cards */}
        <div
          className={`flex justify-center gap-8 max-lg:flex-col max-lg:items-center max-lg:gap-8`}
        >
          {/* <div className={`flex flex-col md:flex-row`}> */}
          {iconDetailsProps.map((data) => (
            <div key={data.title}>
              <IconDetails
                icon={data.icon}
                title={data.title}
                description={data.description}
                iconColor={data.iconColor}
                bgColor={data.bgColor}
                isCircle={true}
                size="lg"
              />
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>

      {/*  Section 3 */}
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
           <GetX direction="top">
          <h1 className="text-3xl font-bold flex text-center">
            {t("Blogs.Section3.Title")}
          </h1>
          </GetX>
            <GetX direction="left">
          <p className="flex flex-col text-center text-[#45556C]">
            {t("Blogs.Section3.Description")}
          </p>
           </GetX>
        </div>

        {/* Cards */}
        <div className="flex gap-6 max-lg:flex-wrap max-lg:justify-center max-lg:items-center max-lg:gap-8">
          {/* CARD 1 */}
          <GetX direction="right">
          <div
            className={`w-[280px] h-[368px] rounded-2xl shadow-lg overflow-hidden 
            ${isDark && `bg-[#1C242F] text-white`}`}
          >
            {/* image */}
            <div className="w-full h-48">
              <img
                src={images.card1}
                alt="Data Science with Python A-Z"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Course Details */}
            <div className="flex flex-col justify-center h-[176px] py-4 px-6">
              <h3 className="text-lg font-bold">
                Modern Web <p className="font-semibold">Development Bootcamp</p>
              </h3>
              <p className="text-sm text-[#62748E] mt-2">Angela Yu</p>

              {/* Rating + Price */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-1 text-sm">
                  <icons.Star className="w-4 h-4 text-[#FD9A00] fill-[#FD9A00]" />
                  <span className="font-medium text-[#FD9A00]">4.9</span>
                  <span className="text-[#A4A4A4] ">(2,250)</span>
                </div>

                <span className="text-lg font-bold text-[#2B7FFF]">$79.99</span>
              </div>
            </div>
          </div>
</GetX>
  <GetX direction="bottom">
          {/* CARD 2 */}
          <div
            className={`w-[280px] h-[368px]  rounded-2xl shadow-lg overflow-hidden 
            ${isDark && `bg-[#1C242F] text-white`}`}
          >
            {/* image */}
            <div className="w-full h-48">
              <img
                src={images.card2}
                alt="Data Science with Python A-Z"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Course Details */}
            <div className="flex flex-col justify-center h-[176px] py-4 px-6">
              <h3 className="text-lg font-bold">
                Data Science with Python <p className="font-semibold">A-Z</p>
              </h3>
              <p className="text-sm text-[#62748E] mt-2">Jose Portilla</p>

              {/* Rating + Price */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-1 text-sm">
                  <icons.Star className="w-4 h-4 text-[#FD9A00] fill-[#FD9A00]" />
                  <span className="font-medium text-[#FD9A00]">4.9</span>
                  <span className="text-[#A4A4A4] ">(2,250)</span>
                </div>

                <span className="text-lg font-bold text-[#2B7FFF]">$79.99</span>
              </div>
            </div>
          </div>
</GetX>
  <GetX direction="top">
 
          {/* CARD 3 */}
          <div
            className={`w-[280px] h-[368px]  rounded-2xl shadow-lg overflow-hidden 
            ${isDark && `bg-[#1C242F] text-white`}`}
          >
            {/* image */}
            <div className="w-full h-48">
              <img
                src={images.card3}
                alt="Data Science with Python A-Z"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Course Details */}
            <div className="flex flex-col justify-center h-[176px] py-4 px-6">
              <h3 className="text-lg font-bold">
                The Complete Graphic
                <p className="font-semibold">Design Theory</p>
              </h3>
              <p className="text-sm text-[#62748E] mt-2">Lindsay Marsh</p>

              {/* Rating + Price */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-1 text-sm">
                  <icons.Star className="w-4 h-4 text-[#FD9A00] fill-[#FD9A00]" />
                  <span className="font-medium text-[#FD9A00]">4.9</span>
                  <span className="text-[#A4A4A4] ">(2,250)</span>
                </div>

                <span className="text-lg font-bold text-[#2B7FFF]">$79.99</span>
              </div>
            </div>
          </div>
</GetX>


          {/* CARD 4 */}
            <GetX direction="left">
          <div

            className={`w-[280px] h-[368px]  rounded-2xl shadow-lg overflow-hidden 
            ${isDark && `bg-[#1C242F] text-white`}`}
          >
            {/* image */}
            <div className="w-full h-48">
              <img
                src={images.card4}
                alt="Data Science with Python A-Z"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Course Details */}
            <div className="flex flex-col justify-center h-[176px] py-4 px-6">
              <h3 className="text-lg font-bold">
                Modern Web <p className="font-semibold">The Complete Digital</p>
              </h3>
              <p className="text-sm text-[#62748E] mt-2">Rob Percival</p>

              {/* Rating + Price */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-1 text-sm">
                  <icons.Star className="w-4 h-4 text-[#FD9A00] fill-[#FD9A00]" />
                  <span className="font-medium text-[#FD9A00]">4.9</span>
                  <span className="text-[#A4A4A4] ">(2,250)</span>
                </div>

                <span className="text-lg font-bold text-[#2B7FFF]">$79.99</span>
              </div>
            </div>
          </div>
          </GetX>
        </div>

        <div className="flex gap-2 items-center justify-center font-bold text-[#2B7FFF]">
          <Button path="/course">
         Browse All Courses
          <span className="relative top-.5">
            <icons.ArrowRight />
          </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
