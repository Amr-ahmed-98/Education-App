import { Outlet } from "react-router-dom";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

export default function PublicTemplate() {
  return (
    <div>
      <Navbar />

      <main className="pt-20">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
