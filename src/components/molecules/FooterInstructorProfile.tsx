import Text from "../atoms/Text";
import Title from "../atoms/Title";
import Input from "../atoms/Input";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
export default function FooterInstructorProfile() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-3 gap-6 bg-bg p-6 rounded-lg my-10">
      <div className="col-span-1">
        <Title size="md" variant="primary">
          {t("ProfileAdmin.footerProfile.title")}
        </Title>
        <Text size="md" variant="secondary">
          {t("ProfileAdmin.footerProfile.text")}
        </Text>
      </div>
      <div className="col-span-2  space-y-4">
        <Input
          label={t("ProfileAdmin.footerProfile.label1")}
          icon={<Icon icon="mdi:link" width="22" />}
          placeholder={t("ProfileAdmin.footerProfile.input2")}
        />{" "}
        <Input
          label={t("ProfileAdmin.footerProfile.label2")}
          icon={<Icon icon="mdi:linkedin" width="22" />}
          placeholder={t("ProfileAdmin.footerProfile.input2")}
        />
        <Input
          label={t("ProfileAdmin.footerProfile.label3")}
          icon={<Icon icon="mdi:ْX" width="22" />}
          placeholder={t("ProfileAdmin.footerProfile.input3")}
        />
      </div>
    </div>
  );
}
