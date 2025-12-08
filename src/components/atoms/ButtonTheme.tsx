import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function ButtonTheme() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`  fixed right-4 top-1/2 -translate-y-1/2
        w-12 h-32
        rounded-full
        shadow-lg
        backdrop-blur-md

        flex flex-col items-center justify-center
        transition-all duration-500
        overflow-hidden
          ${isDark ? "bg-gray-700" : "bg-gray-200"}
      `}
    >
      {/* container اللي فيه الاتنين */}
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* الدائرة */}
        <div
          className={`
            w-12 h-12 rounded-full flex items-center justify-center shadow-md
            transition-all duration-500
            absolute 
            ${isDark ? "translate-y-10" : "-translate-y-10"}
            ${isDark ? "bg-primary-200" : "bg-secondary"}
          `}
        >
          {isDark ? (
            <Moon size={22} className="text-white" />
          ) : (
            <Sun size={22} className="text-white" />
          )}
        </div>

        {/* النص العمودي */}
        <span
          className={` 
             dark:text-white text-md font-semibold rotate-90
            absolute
            transition-all duration-500
            ${isDark ? "-translate-y-5" : "translate-y-5"}
          `}
        >
          {isDark ? "Light" : "Dark"}
        </span>
      </div>
    </button>
  );
}
