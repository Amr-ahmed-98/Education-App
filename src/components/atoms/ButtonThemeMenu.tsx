import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function ButtonThemeMenu() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className="
        flex items-center justify-center
        w-9 h-9
        rounded-full        
      "
    >
      {isDark ? (
        <Moon className="w-5 h-5 text-white" />
      ) : (
        <Sun className="w-5 h-5 text-black" />
      )}
    </button>
  );
}
