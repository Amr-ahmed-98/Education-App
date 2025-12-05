import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { useTranslation } from "react-i18next";

export default function HeaderDashboard() {
  const { t } = useTranslation();
  return (
    <>
      <Title size="lg" variant="black">
        {t("instructorProfile.title")}
      </Title>
      <Text size="lg" variant="gray">
        {t("instructorProfile.text")}
      </Text>
    </>
  );
}
