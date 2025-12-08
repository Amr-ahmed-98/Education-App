import { useLanguage } from "../../hooks/useLanguage";
import { useTranslation } from "react-i18next";
import type { JSX } from "react";

function ButtonLanguages(): JSX.Element {
  const { i18n } = useTranslation();
  const { changeLanguage } = useLanguage();

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    changeLanguage(newLang);
  };
  return (
    <button
      onClick={toggleLang}
      className="bg-[#3972FF] text-white fixed right-6 bottom-6 h-14 w-14 cursor-pointer justify-center rounded-full text-sm font-medium shadow-md transition-all duration-200 hover:shadow-lg"
    >
      {i18n.language === "en" ? "Ar" : "En"}
    </button>
  );
}

export default ButtonLanguages;
