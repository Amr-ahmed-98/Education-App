import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { useTranslation } from "react-i18next";

export default function HeadingDashboard() {
  const { t } = useTranslation();
  return (
    <div className="mb-5">
      <Title size="lg" variant="primary">
        {t("ProfileAdmin.heading.title")}
      </Title>
      <Text size="lg" variant="secondary">
        {t("ProfileAdmin.heading.text")}
      </Text>
    </div>
  );
}
