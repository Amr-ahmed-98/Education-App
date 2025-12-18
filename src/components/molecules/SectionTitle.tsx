import { ChevronRight, ChevronLeft } from "lucide-react";
import * as images from "@/assets/images/images";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContextDefinition";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "../atoms/Button";

interface SectionTitleProps {
  heading1?: string | React.ReactNode;
  heading2?: string | React.ReactNode;
  heading3?: string | React.ReactNode;
  heading4?: string | React.ReactNode;
  description?: string;
  button?: string;
  buttonPath?: string;
  className?: string;
  breadcrumbs1?: string;
  breadcrumbs2?: string;
  breadcrumbs3?: string;
  breadcrumbs1Path?: string;
  breadcrumbs2Path?: string;
  breadcrumbs3Path?: string;
}

function SectionTitle({
  heading1,
  heading2,
  heading3,
  heading4,
  description,
  button,
  buttonPath = "/sign-in",
  className = "",
  breadcrumbs1,
  breadcrumbs2,
  breadcrumbs3,
  breadcrumbs1Path,
  breadcrumbs2Path,
  breadcrumbs3Path,
}: SectionTitleProps) {
  const { theme } = useContext(ThemeContext)!;
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const navigate = useNavigate();

  const handleBreadcrumbClick = (path: string) => {
    if (path) {
      navigate(path);
    }
  };

  const isCourseDetailsUsage =
    className?.includes("md:text-left") || className?.includes("md:text-right");

  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center gap-6 py-16 px-4 md:px-8 lg:px-16 overflow-hidden ${className}`}
      style={{
        backgroundColor: theme === "dark" ? "var(--color-bg-dark)" : "var(--color-bg-alt)",
      }}
    >
      {/* Background Ellipse */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-0 opacity-30"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(57, 114, 255, 0.15) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(177, 202, 242, 0.6) 0%, transparent 70%)",
        }}
      ></div>

      {/* Decorative Dots - Top Right */}
      <div className="absolute right-2 top-2 w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] opacity-70 z-0">
        <img src={images.green_Dots} alt="decorative dots" className="w-full h-auto" />
      </div>

      {/* Decorative Dots - Bottom Left */}
      <div className="absolute left-2 bottom-2 w-[100px] sm:w-[120px] md:w-[140px] lg:w-[180px] opacity-70 z-0">
        <img src={images.red_Dots} alt="decorative dots" className="w-full h-auto" />
      </div>

      {/* Breadcrumbs */}
      {breadcrumbs1 && breadcrumbs2 && breadcrumbs3 && (
        <div
          className={`flex text-base md:text-lg z-10 gap-2 md:gap-3 items-center ${
            isCourseDetailsUsage
              ? isArabic
                ? "md:justify-end justify-center flex-row-reverse w-full"
                : "md:justify-start justify-center w-full"
              : "justify-center"
          }`}
          style={{ color: "var(--color-text-secondary)" }}
        >
          {isArabic && isCourseDetailsUsage ? (
            <>
              <span
                className={`${
                  breadcrumbs3Path ? "cursor-pointer hover:underline hover:opacity-80 transition-opacity" : ""
                }`}
                style={{ color: theme === "dark" ? "var(--color-primary)" : "var(--color-primary)" }}
                onClick={() => breadcrumbs3Path && handleBreadcrumbClick(breadcrumbs3Path)}
              >
                {breadcrumbs3}
              </span>
              <ChevronLeft size={18} className="mt-0.5" />
              <span
                className={`${
                  breadcrumbs2Path ? "cursor-pointer hover:underline hover:opacity-80 transition-opacity" : ""
                }`}
                onClick={() => breadcrumbs2Path && handleBreadcrumbClick(breadcrumbs2Path)}
              >
                {breadcrumbs2}
              </span>
              <ChevronLeft size={18} className="mt-0.5" />
              <span
                className={`${
                  breadcrumbs1Path ? "cursor-pointer hover:underline hover:opacity-80 transition-opacity" : ""
                }`}
                onClick={() => breadcrumbs1Path && handleBreadcrumbClick(breadcrumbs1Path)}
              >
                {breadcrumbs1}
              </span>
            </>
          ) : (
            <>
              <span
                className={`${
                  breadcrumbs1Path ? "cursor-pointer hover:underline hover:opacity-80 transition-opacity" : ""
                }`}
                onClick={() => breadcrumbs1Path && handleBreadcrumbClick(breadcrumbs1Path)}
              >
                {breadcrumbs1}
              </span>
              <ChevronRight size={18} className="mt-0.5" />
              <span
                className={`${
                  breadcrumbs2Path ? "cursor-pointer hover:underline hover:opacity-80 transition-opacity" : ""
                }`}
                onClick={() => breadcrumbs2Path && handleBreadcrumbClick(breadcrumbs2Path)}
              >
                {breadcrumbs2}
              </span>
              <ChevronRight size={18} className="mt-0.5" />
              <span
                className={`${
                  breadcrumbs3Path ? "cursor-pointer hover:underline hover:opacity-80 transition-opacity" : ""
                }`}
                style={{ color: theme === "dark" ? "var(--color-primary)" : "var(--color-primary)" }}
                onClick={() => breadcrumbs3Path && handleBreadcrumbClick(breadcrumbs3Path)}
              >
                {breadcrumbs3}
              </span>
            </>
          )}
        </div>
      )}

      {/* Main Heading */}
      {(heading1 || heading2 || heading3 || heading4) && (
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-4xl z-10 leading-tight"
          style={{ color: "var(--color-text-primary)" }}
        >
          {heading1} <span style={{ color: "var(--color-secondary)" }}>{heading2}</span>
          {(heading3 || heading4) && <br className="hidden sm:block" />}
          {heading3} <span style={{ color: "var(--color-primary)" }}>{heading4}</span>
        </h1>
      )}

      {/* Description */}
      {description && (
        <p
          className="text-base sm:text-lg md:text-xl max-w-2xl text-center z-10 leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {description}
        </p>
      )}

      {/* Button */}
      {button && (
        <div className="z-10 mt-2">
          <Button variant="primary" className="px-6 py-3 md:px-8 md:py-4" path={buttonPath} size="lg">
            {button}
          </Button>
        </div>
      )}
    </div>
  );
}

export default SectionTitle;
