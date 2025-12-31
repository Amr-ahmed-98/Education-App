import { useTranslation } from "react-i18next";
import SectionTitle from "./SectionTitle";
import { ThemeContext } from "@/contexts/ThemeContextDefinition";
import { useContext } from "react";
import { themes } from "@/contexts/Theme";

const Test = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext)!;
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div className="flex flex-col gap-5">
      {/* Home */}
      <SectionTitle
        heading1={t("SectionTitle.Home.title1")}
        heading2={t("SectionTitle.Home.title2")}
        heading3={t("SectionTitle.Home.title3")}
        heading4={t("SectionTitle.Home.title4")}
        button={t("SectionTitle.Home.btn")}
        className="" // Change Style if Needed
      ></SectionTitle>

      {/* About */}
      <SectionTitle
        heading1={t("SectionTitle.About.title1")}
        heading2={
          <span className="text-[#EE4A62]">
            {t("SectionTitle.About.title2")}
          </span>
        }
        heading3={
          isArabic && theme === themes.dark ? (
            <span className="text-[#FFFFFF]">
              {t("SectionTitle.About.title3")}
            </span>
          ) : isArabic && theme === themes.light ? (
            <span className="text-[#272626]">
              {t("SectionTitle.About.title3")}
            </span>
          ) : !isArabic && theme === themes.dark ? (
            <span className="text-[#3972FF]">
              {t("SectionTitle.About.title3")}
            </span>
          ) : theme === themes.light ? (
            <span className="text-[#3972FF]">
              {t("SectionTitle.About.title3")}
            </span>
          ) : null
        }
        heading4={
          isArabic ? (
            <span className="text-[#3972FF]">
              {t("SectionTitle.About.title4")}
            </span>
          ) : null
        }
        description={t("SectionTitle.About.description")}
        button={t("SectionTitle.About.btn")}
        className="h-[450px]" // Change Style if Needed
      ></SectionTitle>

      {/* Event */}
      <SectionTitle
        heading1={t("SectionTitle.Event.title1")}
        heading2={t("SectionTitle.Event.title2")}
        breadcrumbs1={t("SectionTitle.Event.breadcrumbs1")}
        breadcrumbs2={t("SectionTitle.Event.breadcrumbs2")}
        breadcrumbs3={t("SectionTitle.Event.breadcrumbs3")}
        className="" // Change Style if Needed
      ></SectionTitle>

      {/* Course */}
      <SectionTitle
        heading1={t("SectionTitle.Course.title1")}
        heading2={t("SectionTitle.Course.title2")}
        breadcrumbs1={t("SectionTitle.Course.breadcrumbs1")}
        breadcrumbs2={t("SectionTitle.Course.breadcrumbs2")}
        breadcrumbs3={t("SectionTitle.Course.breadcrumbs3")}
        className="" // Change Style if Needed
      ></SectionTitle>

      {/* Contact Me */}
      <SectionTitle
        heading1={t("SectionTitle.ContactMe.title1")}
        heading2={t("SectionTitle.ContactMe.title2")}
        breadcrumbs1={t("SectionTitle.ContactMe.breadcrumbs1")}
        breadcrumbs2={t("SectionTitle.ContactMe.breadcrumbs2")}
        breadcrumbs3={t("SectionTitle.ContactMe.breadcrumbs3")}
        className="" // Change Style if Needed
      ></SectionTitle>

      {/* Contact Us */}
      <SectionTitle
        heading1={t("SectionTitle.ContactUs.title1")}
        heading2={t("SectionTitle.ContactUs.title2")}
        breadcrumbs1={t("SectionTitle.ContactUs.breadcrumbs1")}
        breadcrumbs2={t("SectionTitle.ContactUs.breadcrumbs2")}
        breadcrumbs3={t("SectionTitle.ContactUs.breadcrumbs3")}
        className="" // Change Style if Needed
      ></SectionTitle>

      {/* FAQS */}
      <SectionTitle
        heading1={t("SectionTitle.FAQS.title1")}
        heading2={t("SectionTitle.FAQS.title2")}
        breadcrumbs1={t("SectionTitle.FAQS.breadcrumbs1")}
        breadcrumbs2={t("SectionTitle.FAQS.breadcrumbs2")}
        breadcrumbs3={t("SectionTitle.FAQS.breadcrumbs3")}
        description={t("SectionTitle.FAQS.description")}
        className="" // Change Style if Needed
      ></SectionTitle>
    </div>
  );
};

export default Test;
