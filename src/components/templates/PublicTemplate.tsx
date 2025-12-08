import { Outlet } from "react-router-dom";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import ButtonLanguages from "../atoms/ButtonLangauges";
import ButtonTheme from "../atoms/ButtonTheme";

export default function PublicTemplate() {
  return (
    <div>
      <Navbar />

      <main className="pt-20">
        <Outlet />
        <ButtonLanguages />
        <ButtonTheme />
        <Footer />
      </main>
    </div>
  );
}
