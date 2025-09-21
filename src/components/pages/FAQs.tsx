import { useTranslation } from "react-i18next";
import FAQsSection from "../molecules/FAQsSection";
import SectionTitle from "../molecules/SectionTitle";

function FAQ() {
  const { t } = useTranslation();
  return (
    <div>
      <SectionTitle
        heading1={t('SectionTitle.FAQS.heading1')}
        heading2={t('SectionTitle.FAQS.heading2')}
        description={t('SectionTitle.FAQS.description')}
        breadcrumbs1={t('SectionTitle.FAQS.breadcrumbs1')}
        breadcrumbs2={t('SectionTitle.FAQS.breadcrumbs2')}
        breadcrumbs3={t('SectionTitle.FAQS.breadcrumbs3')}
        breadcrumbs1Path='/'
        breadcrumbs2Path='/pages'
      />
      <FAQsSection />
    </div>
  )
}

export default FAQ