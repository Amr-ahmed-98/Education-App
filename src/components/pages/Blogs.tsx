import { useTranslation } from "react-i18next";
import Button from "../atoms/Button";
import IconDetails from "../molecules/IconDetails";
import * as icons from "@/assets/icons/icons";
import * as images from "@/assets/images/images";
// import Test from "../molecules/test";
import { themes } from "@/contexts/Theme";
import { ThemeContext } from "@/contexts/ThemeContextDefinition";
import { useContext } from "react";
// import Test from "../molecules/test";

const iconDetailsProps = [
  {
    icon: icons.Award,
    title: "Expert Instructors",
    description:
      "Learn from the best industry professionals and get top-quality education",
    iconColor: "text-[#4F39F6]",
    bgColor: "bg-[#FFE4E1]",
  },
  {
    icon: icons.LucideInfinity,
    title: "Lifetime Access",
    description:
      "Enroll once and get unlimited lifetime access to the course materials.",
    iconColor: "text-[#9810FA]",
    bgColor: "bg-[#FFE4E1]",
  },
  {
    icon: icons.ShieldCheck,
    title: "Verified Certificates",
    description:
      "Earn a certificate upon completion to boost your professional profile.",
    iconColor: "text-[#E60076]",
    bgColor: "bg-[#FFE4E1]",
  },
];

function Blogs() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext)!;

  return (
    <div className="w-full flex flex-col gap-50 pt-0 mb-10">
      {/* <Test /> */}
      {/* Section 1 */}
      <div className="flex flex-col justify-center items-center text-center gap-10 pt-0 mt-10">
        <h1 className="font-bold text-6xl leading-[75px] tracking-[-1.5px] text-center">
          {t("Blogs.Section1.title1")}{" "}
          <span className={`${theme === themes.dark && "text-[#EE4A62]"}`}>
            {t("Blogs.Section1.title2")}
          </span>
        </h1>

        <p className="w-[34rem] text-[#45556C]">
          {t("Blogs.Section1.Description")}
        </p>

        <Button>{t("Blogs.Section1.Btn")}</Button>
        <img
          src={images.laptop}
          alt="blog laptop"
          className="rounded-lg max-w-[80%]"
        />
      </div>
      {/* Section 2 */}
      <div className="flex flex-col w-full mx-auto gap-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-bold"> {t("Blogs.Section2.Title")}</h1>
          <p className="flex flex-col text-center text-[#45556C]">
            {t("Blogs.Section2.Description")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row mx-auto justify-around gap-2">
          {iconDetailsProps.map((data) => (
            <div key={data.title} className="">
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
        </div>

        {/*  */}
      </div>
      {/*  Section 3 */}
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-bold">{t("Blogs.Section3.Title")}</h1>
          <p className="flex flex-col text-center text-[#45556C]">
            {t("Blogs.Section3.Description")}
          </p>
        </div>

        {/* 4 cards here w8 the re-usable comp */}

        <div className="flex gap-2 items-center justify-center font-bold text-[#2B7FFF]">
          <a href="#">Browse All Courses</a>
          <span className="relative top-.5">
            <icons.ArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
