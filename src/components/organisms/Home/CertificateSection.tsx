import SectionTitle from "../../molecules/SectionTitle";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/FadeIn";
function CertificateSection() {
  const { t } = useTranslation();
  return (
    <motion.div 
    className="flex justify-center items-center "
     variants={fadeIn({ direction: "up", delay: 0.3 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}>
      <SectionTitle 
        className="text-4xl text-center"
        heading1={t("about.certificates.title1")}
        heading2={t("about.certificates.title2")}
        heading4={t("about.certificates.title3")}
        description={t("about.certificates.description")}
        button={t("about.certificates.btn")}
      />
    </motion.div>
  );
}

export default CertificateSection;