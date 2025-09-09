import { Outlet } from "react-router-dom";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
export default function PublicTemplate() {
  return (
    <div>
   
      <Navbar />
      <main className="md:px-16 sm:px-10 px-4 pt-20">
        <Outlet /> {/* هنا بيتغير المحتوي: Home , About , ... */}
        <Footer />
      </main>
           
    </div>
  );
}
