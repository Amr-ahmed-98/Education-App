import HeadingDashboard from "@/components/molecules/HeadingDashboard";
import HeaderInstroctorProfile from "@/components/molecules/HeaderInstroctorProfile";
import BodyInstructorProfile from "@/components/molecules/BodyInstructorProfile";
import FooterInstructorProfile from "@/components/molecules/FooterInstructorProfile";
import ButtonsInstructor from "@/components/molecules/ButtonsInstrcutor";
import { useTranslation } from "react-i18next";
function EditProfileInstructor() {
  const { t } = useTranslation();
  return (
    <div className="p-5">
      <HeadingDashboard />
      <HeaderInstroctorProfile />
      <BodyInstructorProfile />
      <FooterInstructorProfile />
      <ButtonsInstructor
        btn1={t("ProfileAdmin.footerProfile.btn1")}
        btn2={t("ProfileAdmin.footerProfile.btn2")}
      />
    </div>
  );
}

export default EditProfileInstructor;
