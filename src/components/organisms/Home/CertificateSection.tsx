import SectionTitle from "../../molecules/SectionTitle";
import { useTranslation } from "react-i18next";

function CertificateSection() {
    const { t } = useTranslation();
  return (
    <div>
        <SectionTitle 
        heading1={t("certificate.title1")}
        heading2={t("certificate.title2")}
        heading3={t("certificate.title3")}
        heading4={t("certificate.title4")}
        button={t("certificate.btn1")}
        />
    
    </div>
  )
}

export default CertificateSection;