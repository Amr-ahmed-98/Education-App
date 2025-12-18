import SectionTitle from "../../molecules/SectionTitle";
import { useTranslation } from "react-i18next";

function CertificateSection() {
  const { t } = useTranslation();
  
  return (
    <section className="w-full">
      <SectionTitle
        heading1={t("certificate.title1")}
        heading2={t("certificate.title2")}
        heading3={t("certificate.title3")}
        heading4={t("certificate.title4")}
        button={t("certificate.btn1")}
        buttonPath="/sign-in"
      />
    </section>
  );
}

export default CertificateSection;
