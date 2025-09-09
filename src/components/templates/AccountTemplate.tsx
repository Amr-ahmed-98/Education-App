import { Outlet } from "react-router-dom";
import Navbar from "../organisms/Navbar";
import Sidebar from "../organisms/Sidebar";

export default function AccountTemplate() {
  return (
    <div>
      
      <Navbar />
      <main className="md:px-16 sm:px-10 px-4 pt-20">
          <Sidebar />
        <Outlet /> {/* هنا بيتغير المحتوي: Login , Signup , Otp */}
      </main>
    </div>
  );
}
