import Text from "../atoms/Text";
import Title from "../atoms/Title";
import Input from "../atoms/Input";
import { useTranslation } from "react-i18next";

export default function BodyInstructorProfile() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-3 gap-6 bg-bg p-6 rounded-lg">
      <div className="col-span-1">
        <Title size="md" variant="primary">
          {t("ProfileAdmin.bodyProfile.title")}
        </Title>
        <Text size="md" variant="secondary">
          {t("ProfileAdmin.bodyProfile.text")}
        </Text>
      </div>
      <div className="col-span-2  space-y-4">
        <Input
          label={t("ProfileAdmin.bodyProfile.label1")}
          placeholder={t("ProfileAdmin.bodyProfile.input1")}
        />{" "}
        <Input
          label={t("ProfileAdmin.bodyProfile.label2")}
          placeholder={t("ProfileAdmin.bodyProfile.input2")}
        />
        <Input
          label={t("ProfileAdmin.bodyProfile.label3")}
          placeholder={t("ProfileAdmin.bodyProfile.input3")}
        />
      </div>
    </div>
  );
}
