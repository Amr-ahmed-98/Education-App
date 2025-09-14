import { useTranslation } from "react-i18next";
import SectionTitle from "./SectionTitle";
import Button from "../atoms/Button";

const Test = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-5">
      {/* Home */}
      <SectionTitle
        title={
          t("SectionTitle.Home.Title", { returnObjects: true }) as {
            text: string;
            color?: string;
          }[]
        }
        className="" // Change Style if Needed
      >
        <Button>{t("SectionTitle.Home.Btn")}</Button>
      </SectionTitle>

      {/* About */}
      <SectionTitle
        title={
          t("SectionTitle.About.Title", { returnObjects: true }) as {
            text: string;
            color?: string;
          }[]
        }
        description={t("SectionTitle.About.Description")}
        className="" // Change Style if Needed
      >
        <button className="px-6 py-2 mt-4 rounded-lg bg-[#3972FF] text-white font-semibold">
          {t("SectionTitle.Home.Btn")}
        </button>
      </SectionTitle>

      {/* Event */}
      <SectionTitle
        title={
          t("SectionTitle.Event.Title", { returnObjects: true }) as {
            text: string;
            color?: string;
          }[]
        }
        breadcrumbs={
          t("SectionTitle.Event.Breadcrumbs", {
            returnObjects: true,
          }) as string[]
        }
        className="" // Change Style if Needed
      ></SectionTitle>

      {/* Course */}
      <SectionTitle
        title={
          t("SectionTitle.Course.Title", { returnObjects: true }) as {
            text: string;
            color?: string;
          }[]
        }
        breadcrumbs={
          t("SectionTitle.Course.Breadcrumbs", {
            returnObjects: true,
          }) as string[]
        }
        className="" // Change Style if Needed
      ></SectionTitle>

      {/* Contact Me */}
      <SectionTitle
        title={
          t("SectionTitle.ContactMe.Title", { returnObjects: true }) as {
            text: string;
            color?: string;
          }[]
        }
        breadcrumbs={
          t("SectionTitle.ContactMe.Breadcrumbs", {
            returnObjects: true,
          }) as string[]
        }
        className="" // Change Style if Needed
      ></SectionTitle>

      {/* Contact Us */}
      <SectionTitle
        title={
          t("SectionTitle.ContactUs.Title", { returnObjects: true }) as {
            text: string;
            color?: string;
          }[]
        }
        breadcrumbs={
          t("SectionTitle.ContactUs.Breadcrumbs", {
            returnObjects: true,
          }) as string[]
        }
        className="" // Change Style if Needed
      ></SectionTitle>

      {/* FAQS */}
      <SectionTitle
        title={
          t("SectionTitle.FAQS.Title", { returnObjects: true }) as {
            text: string;
            color?: string;
          }[]
        }
        breadcrumbs={
          t("SectionTitle.FAQS.Breadcrumbs", {
            returnObjects: true,
          }) as string[]
        }
        className="" // Change Style if Needed
      ></SectionTitle>
    </div>
  );
};

export default Test;
