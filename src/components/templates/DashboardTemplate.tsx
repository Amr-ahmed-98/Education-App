import { Outlet } from "react-router-dom";
import Navbar from "../organisms/Navbar";
import SidebarInstructor from "../organisms/SidebarInstructor";

export default function DashboardTemplate() {
  return (
    <div>
      <Navbar />
      <main className="md:px-16 sm:px-10 px-4 pt-20">
        <div className="flex gap-6">
          <SidebarInstructor />
          <div className="flex-1 min-w-0">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
