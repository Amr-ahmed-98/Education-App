import SectionTitle from "../../molecules/SectionTitle";
import { useTranslation } from "react-i18next";

function CertificateSection() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center ">
      <SectionTitle 
        className="text-4xl text-center"
        heading1={t("about.certificates.title1")}
        heading2={t("about.certificates.title2")}
        heading4={t("about.certificates.title3")}
        description={t("about.certificates.description")}
        button={t("about.certificates.btn")}
      />
    </div>
  );
}

export default CertificateSection;