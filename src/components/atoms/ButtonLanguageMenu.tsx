import { useTranslation } from "react-i18next";

export default function ButtonLanguageMenu() {
  const { i18n } = useTranslation();
  return (
    <button
   
      className="
        flex items-center justify-center
        w-9 h-9
        rounded-full
        text-xs font-semibold
        bg-primary text-white
        transition
        hover:opacity-90
      "
      aria-label="Toggle language"
    >
      {i18n.language === "en" ? "AR" : "EN"}
    </button>
  );
}
