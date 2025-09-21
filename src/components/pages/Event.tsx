import SectionTitle from "../molecules/SectionTitle"
import { useTranslation } from 'react-i18next';
import EventGrid from "../organisms/EventGrid"

function Event() {
  const { t } = useTranslation();

  return (
    <>
        <SectionTitle
        heading1={t('SectionTitle.Event.heading1')}
        heading2={t('SectionTitle.Event.heading2')}
        breadcrumbs1={t('SectionTitle.Event.breadcrumbs1')}
        breadcrumbs2={t('SectionTitle.Event.breadcrumbs2')}
        breadcrumbs3={t('SectionTitle.Event.breadcrumbs3')}
        breadcrumbs1Path='/'
        breadcrumbs2Path='/pages'
      />
    <EventGrid />
    </>
  )
}

export default Event