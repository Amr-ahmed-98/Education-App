import SectionTitle from "../molecules/SectionTitle"
import { useTranslation } from 'react-i18next';
import EventGrid from "../organisms/EventGrid"

function Event() {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle title={t("SectionTitle.Event.Title", { returnObjects: true }) as {
        text: string;
        color?: string;
      }[]} trail={t("SectionTitle.Event.Trail", { returnObjects: true }) as string[]} />
    <EventGrid />
    </>
  )
}

export default Event