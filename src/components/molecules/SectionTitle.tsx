import { ChevronRight, ChevronLeft } from "lucide-react";
import * as images from "@/assets/images/images";
import { themes } from "@/contexts/Theme";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContextDefinition";
import { useTranslation } from "react-i18next";
import Button from "../atoms/Button";

interface TitlePart {
  text: string;
  color?: string;
}

interface SectionTitleProps {
  title?: string | TitlePart[];
  description?: string;
  breadcrumbs?: string[];
  children?: React.ReactNode;
  className?: string;
  button?: string;
  heading1?: string;
  heading2?: string;
  heading3?: string;
  heading4?: string;
}

function SectionTitle({
  title,
  breadcrumbs = [],
  className,
  children,
  description,
  button,
  heading1,
  heading2,
  heading3,
  heading4,
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
        className={`absolute top-18 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full z-10 dark:opacity-5 bg-[#B1CAF2] scale-400
          ${theme === themes.dark && ""}
        `}
      ></div>

      {/* Title */}
      <h1 className="text-4xl relative z-10 btn1max-w-2xl text-center leading-[60px]">
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

      {/* Breadcrumbs */}
      {Array.isArray(breadcrumbs) && breadcrumbs.length > 0 && (
        <div className="flex items-center gap-1 relative z-10">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
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
        <img src={images.green_Dots} alt="dots1" />
      </div>

      <div className="absolute left-5 bottom-2">
        <img src={images.red_Dots} alt="dots2" />
      </div>
      <h2 className="text-[20px]  z-10 sm:text-[20px] md:text-[30px] lg:text-[40px] text-center">
        {heading1} <span className="text-secondary">{heading2}</span> <br />
        {heading3} <span className="text-primary">{heading4}</span>
      </h2>

      {button && (
        <Button className="mt-[20px]  z-10 " variant="primary" size="lg">
          {button}
        </Button>
      )}
    </div>
  );
}

export default SectionTitle;
