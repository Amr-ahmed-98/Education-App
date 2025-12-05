import HeaderDashboard from "@/components/molecules/HeaderDashboard";
import BodyInstructorProfile from "@/components/molecules/BodyInstructorProfile";
import FooterInstructorProfile from "@/components/molecules/FooterInstructorProfile";
function EditProfileInstructor() {
  return (
    <div className="p-5">
      <HeaderDashboard />
      <BodyInstructorProfile />
      <FooterInstructorProfile/>
    </div>
  );
}

export default EditProfileInstructor;
