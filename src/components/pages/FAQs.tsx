import { useTranslation } from "react-i18next";
import FAQsSection from "../molecules/FAQsSection";
import SectionTitle from "../molecules/SectionTitle";

function FAQ() {
  const { t } = useTranslation();
  return (
    <div>
      <SectionTitle title={t("SectionTitle.FAQS.Title", { returnObjects: true }) as {
        text: string;
        color?: string;
      }[]} trail={t("SectionTitle.FAQS.Trail", { returnObjects: true }) as string[]} 
      description={t("SectionTitle.FAQS.Description")}
      />
      <FAQsSection />
    </div>
  )
}

export default FAQ