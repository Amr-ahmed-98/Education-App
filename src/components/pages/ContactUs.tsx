import { useTranslation } from 'react-i18next';
import ContactSection from '../molecules/ContactSection';
import SectionTitle from '../molecules/SectionTitle';

function ContactUs() {
  const { t } = useTranslation();
  return (
    <div>
      <SectionTitle
        heading1={t('SectionTitle.ContactUs.heading1')}
        heading2={t('SectionTitle.ContactUs.heading2')}
        breadcrumbs1={t('SectionTitle.ContactUs.breadcrumbs1')}
        breadcrumbs2={t('SectionTitle.ContactUs.breadcrumbs2')}
        breadcrumbs3={t('SectionTitle.ContactUs.breadcrumbs3')}
        breadcrumbs1Path='/'
        breadcrumbs2Path='/pages'
      />
      <ContactSection />
    </div>
  );
}

export default ContactUs;
