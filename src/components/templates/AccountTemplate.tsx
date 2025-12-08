import { Outlet } from "react-router-dom";
import Navbar from "../organisms/Navbar";
import Sidebar from "../organisms/SidebarStudent";
import ButtonLanguages from "../atoms/ButtonLangauges";
import ButtonTheme from "../atoms/ButtonTheme";
export default function AccountTemplate() {
  return (
    <div>
      <Navbar />
      <main className="md:px-16 sm:px-10 px-4 pt-20">
        <div className="flex gap-6">
          <ButtonLanguages />
          <ButtonTheme />
          <Sidebar />
          <div className="flex-1 min-w-0">
            <Outlet /> {/* هنا بيتغير المحتوي: Login , Signup , Otp */}
          </div>
        </div>
      </main>
    </div>
  );
}
