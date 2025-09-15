import { ChevronRight, ChevronLeft } from "lucide-react";
import * as images from "@/assets/images/images";
import { themes } from "@/contexts/Theme";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContextDefinition";
import { useTranslation } from "react-i18next";
import Button from "../atoms/Button";

// interface TitlePart {
//   text: string;
//   color?: string;
// }

interface SectionTitleProps {
  // title?: string | TitlePart[];
  // breadcrumbs?: string[];
  heading1?: string | React.ReactNode;
  heading2?: string | React.ReactNode;
  heading3?: string | React.ReactNode;
  heading4?: string | React.ReactNode;
  description?: string;
  description1?: string;
  description2?: string;
  breadcrumbs1?: string;
  breadcrumbs2?: string;
  breadcrumbs3?: string;
  button?: string;
  className?: string;
  children?: React.ReactNode;
}

function SectionTitle({
  // title,
  // breadcrumbs = [],
  className,
  children,
  description,
  description1,
  description2,
  button,
  heading1,
  heading2,
  heading3,
  heading4,
  breadcrumbs1,
  breadcrumbs2,
  breadcrumbs3,
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
      {(heading1 || heading2 || heading3 || heading4) && (
        <h2 className="text-[20px]  z-10 sm:text-[20px] md:text-[30px] lg:text-[40px] text-center">
          {heading1} <span className="text-secondary">{heading2}</span> <br />
          {heading3} <span className="text-primary">{heading4}</span>
        </h2>
      )}

      {/* Description */}
      {(description || description1 || description2) && (
        <p
          className={`relative z-10 text-xl max-w-3xl text-center ${
            theme === themes.dark ? "text-[#777777]" : "text-[#4A4A4A]"
          }`}
        >
          {description} {description1} {description2}
        </p>
      )}

      {/* Breadcrumbs */}
      {breadcrumbs1 && breadcrumbs2 && breadcrumbs3 && (
        <div className="flex text-[20px] z-10 gap-3">
          <span>{breadcrumbs1}</span>
          {isArabic ? (
            <ChevronLeft size={20} className="mt-1.5" />
          ) : (
            <ChevronRight size={20} className="mt-1.5" />
          )}
          <span>{breadcrumbs2}</span>
          {isArabic ? (
            <ChevronLeft size={20} className="mt-1.5" />
          ) : (
            <ChevronRight size={20} className="mt-1.5" />
          )}
          <span className={`${theme === themes.dark && "text-[#3972FF]"}`}>
            {breadcrumbs3}
          </span>
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

      {button && (
        <Button className="mt-[20px]  z-10 " variant="primary" size="lg">
          {button}
        </Button>
      )}
    </div>
  );
}

export default SectionTitle;
