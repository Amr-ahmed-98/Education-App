import { useTranslation } from 'react-i18next';
import ContactSection from '../molecules/ContactSection';
import SectionTitle from '../molecules/SectionTitle';

function ContactUs() {
  const { t } = useTranslation();
  return (
    <div>
      <SectionTitle title={t("SectionTitle.ContactUs.Title", { returnObjects: true }) as {
        text: string;
        color?: string;
      }[]} trail={t("SectionTitle.ContactUs.Trail", { returnObjects: true }) as string[]} />
      <ContactSection />
    </div>
  );
}

export default ContactUs;
