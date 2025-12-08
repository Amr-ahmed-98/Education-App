import Text from "../atoms/Text";
import Title from "../atoms/Title";
import Input from "../atoms/Input";
import ProfilePhotoUploader from "./ProfilePhotoUploader";
import { useTranslation } from "react-i18next";
export default function FooterInstructorProfile() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-3 gap-6 bg-bg p-6 rounded-lg my-10">
      <div className="col-span-1 flex flex-col justify-center">
        <Title size="md" variant="primary">
          {t("ProfileAdmin.headerProfile.title")}
        </Title>
        <Text size="md" variant="secondary">
          {t("ProfileAdmin.headerProfile.text")}
        </Text>
      </div>
      <div className="col-span-2  space-y-4">
        <ProfilePhotoUploader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            label={t("ProfileAdmin.headerProfile.label1")}
            placeholder={t("ProfileAdmin.headerProfile.input1")}
          />
          <Input
            label={t("ProfileAdmin.headerProfile.label2")}
            placeholder={t("ProfileAdmin.headerProfile.input2")}
          />
        </div>
      </div>
    </div>
  );
}
