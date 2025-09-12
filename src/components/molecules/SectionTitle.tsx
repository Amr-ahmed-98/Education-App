import { ChevronRight, ChevronLeft } from "lucide-react";
import { dots1, dots2 } from "@/assets/images/SectionTitle";
import { themes } from "@/contexts/Theme";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContextDefinition";
import { useTranslation } from "react-i18next";

interface TitlePart {
  text: string;
  color?: string;
}

interface SectionTitleProps {
  title: string | TitlePart[];
  description?: string;
  trail?: string[];
  children?: React.ReactNode;
  className?: string;
}

function SectionTitle({
  title,
  trail = [],
  className,
  children,
  description,
}: SectionTitleProps) {
  const { theme } = useContext(ThemeContext)!;
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div
      className={`relative flex w-full flex-col items-center gap-4 py-30 overflow-hidden ${className}
        ${theme === themes.dark ? "bg-[#020B17]" : "bg-[#BDD3F6]"}
      `}
    >
      {/* Ellipse */}
      <div
        className={`absolute top-18 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-[#B1CAF2] scale-400
          ${theme === themes.dark && "opacity-5"}
        `}
      ></div>

      {/* Title */}
      <h1 className="text-4xl relative z-10 max-w-2xl text-center leading-[60px]">
        {Array.isArray(title)
          ? title.map((part, index) => (
              <span key={index} style={{ color: part.color || "inherit" }}>
                {part.text + " "}
              </span>
            ))
          : title}
      </h1>

      {/* Description */}
      {description && (
        <p className="relative z-10 text-xl max-w-3xl text-center">
          {description}
        </p>
      )}

      {/* Trail */}
      {trail.length > 0 && (
        <div className="flex items-center gap-1 relative z-10">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <span
                key={index}
                className={`flex items-center gap-1 font-semibold ${
                  isLast && theme === themes.dark && "text-[#3972FF]"
                }`}
              >
                {item}
                {!isLast &&
                  (isArabic ? (
                    <ChevronLeft size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  ))}
              </span>
            );
          })}
        </div>
      )}

      {/* Children */}
      {children && <div className="relative z-10">{children}</div>}

      {/* Shapes */}
      <div className="absolute right-4 top-2">
        <img src={dots1} alt="dots1" />
      </div>

      <div className="absolute left-5 bottom-2">
        <img src={dots2} alt="dots2" />
      </div>
    </div>
  );
}

export default SectionTitle;
