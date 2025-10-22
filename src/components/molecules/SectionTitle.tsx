import { ChevronRight, ChevronLeft, Star } from "lucide-react";
import * as images from "@/assets/images/images";
import { themes } from "@/contexts/Theme";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContextDefinition";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import SlideInOnScroll from '../../animation/GetX';
// interface TitlePart {
//   text: string;
//   color?: string;
// }

interface SectionTitleProps {
  // title?: string | TitlePart[];
  // breadcrumbs?: string[];
  detailsHeader?: string | React.ReactNode;
  detailsDescription?: string;
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
  breadcrumbs1Path?: string;
  breadcrumbs2Path?: string;
  breadcrumbs3Path?: string;
  button?: string;
  className?: string;
  children?: React.ReactNode;
  rating?: number;
  ratingCount?: number;
  studentCount?: number;
  ratingsText?: string;
  studentsText?: string;
}

function SectionTitle({
  // title,
  // breadcrumbs = [],
  detailsHeader,
  detailsDescription,
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
  breadcrumbs1Path,
  breadcrumbs2Path,
  breadcrumbs3Path,
  rating,
  ratingCount,
  studentCount,
  ratingsText,
  studentsText,
}: SectionTitleProps) {
  const { theme } = useContext(ThemeContext)!;
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const navigate = useNavigate();

  // Helper function to format numbers with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  // Helper function to handle navigation
  const handleBreadcrumbClick = (path: string) => {
    if (path) {
      navigate(path);
    }
  };

  let breadcrumbsClass: string = "";
  let buttonClass: string = "";

  // Check if this is being used in CourseDetails (it passes text-left/text-right classes)
  const isCourseDetailsUsage =
    className?.includes("md:text-left") || className?.includes("md:text-right");

  if (!className) {
    breadcrumbsClass = "items-center justify-center";
    buttonClass = "items-center justify-center";
  } else if (isCourseDetailsUsage) {
    // For CourseDetails: align button and rating section based on language
    breadcrumbsClass = isArabic
      ? "md:justify-end justify-center flex-row-reverse"
      : "md:justify-start justify-center";
    buttonClass = isArabic
      ? "md:justify-end md:items-start justify-center items-center md:flex-row-reverse"
      : "md:justify-start md:items-start justify-center items-center";
  }

  return (
    
    <div
    
      className={`relative flex w-full flex-col gap-4 py-30 px-4 md:px-30 overflow-hidden ${className}
        ${theme === themes.dark ? "bg-[#020B17]" : "bg-[#BDD3F6]"}
      `}
    >
      {/* Ellipse */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full z-0 dark:opacity-5 bg-[#B1CAF2] scale-400
          ${theme === themes.dark && ""}
        `}
      ></div>

      {/* Title */}
      {(heading1 || heading2 || heading3 || heading4) && (
        
        <h2 className="text-[25px] z-10 sm:text-[20px] md:text-[30px] lg:text-[40px] text-center mx-auto max-w-4xl">
          {heading1} <span className="text-secondary">{heading2}</span>
          {(heading3 || heading4) && <br />}
          {heading3} <span className="text-primary">{heading4}</span>
        </h2>
      )}

      {/* Description */}
      {(description || description1 || description2) && (
        <p
          className={`relative z-10 text-xl max-w-3xl text-center mx-auto ${
            theme === themes.dark ? "text-[#777777]" : "text-[#4A4A4A]"
          }`}
        >
          {description} {description1} {description2}
        </p>
      )}

 
      {/* Breadcrumbs */}
      {breadcrumbs1 && breadcrumbs2 && breadcrumbs3 && (
        <div
          className={`flex text-[20px] z-10 gap-3 items-center ${breadcrumbsClass}`}
        >
          {isArabic && isCourseDetailsUsage ? (
            // Arabic RTL order: breadcrumbs3 < breadcrumbs2 < breadcrumbs1
            <>
              <span
                className={`${theme === themes.dark && "text-primary"} ${
                  breadcrumbs3Path
                    ? "cursor-pointer hover:underline hover:opacity-80 transition-opacity"
                    : ""
                }`}
                onClick={() =>
                  breadcrumbs3Path && handleBreadcrumbClick(breadcrumbs3Path)
                }
              >
                {breadcrumbs3}
              </span>
              <ChevronLeft size={20} className="mt-1.5" />
              <span
                className={`${
                  breadcrumbs2Path
                    ? "cursor-pointer hover:underline hover:opacity-80 transition-opacity"
                    : ""
                }`}
                onClick={() =>
                  breadcrumbs2Path && handleBreadcrumbClick(breadcrumbs2Path)
                }
              >
                {breadcrumbs2}
              </span>
              <ChevronLeft size={20} className="mt-1.5" />
              <span
                className={`${
                  breadcrumbs1Path
                    ? "cursor-pointer hover:underline hover:opacity-80 transition-opacity"
                    : ""
                }`}
                onClick={() =>
                  breadcrumbs1Path && handleBreadcrumbClick(breadcrumbs1Path)
                }
              >
                {breadcrumbs1}
              </span>
            </>
          ) : (
            // Default LTR order: breadcrumbs1 > breadcrumbs2 > breadcrumbs3
            <>
              <span
                className={`${
                  breadcrumbs1Path
                    ? "cursor-pointer hover:underline hover:opacity-80 transition-opacity"
                    : ""
                }`}
                onClick={() =>
                  breadcrumbs1Path && handleBreadcrumbClick(breadcrumbs1Path)
                }
              >
                {breadcrumbs1}
              </span>
              <ChevronRight size={20} className="mt-1.5" />
              <span
                className={`${
                  breadcrumbs2Path
                    ? "cursor-pointer hover:underline hover:opacity-80 transition-opacity"
                    : ""
                }`}
                onClick={() =>
                  breadcrumbs2Path && handleBreadcrumbClick(breadcrumbs2Path)
                }
              >
                {breadcrumbs2}
              </span>
              <ChevronRight size={20} className="mt-1.5" />
              <span
                className={`${theme === themes.dark && "text-primary"} ${
                  breadcrumbs3Path
                    ? "cursor-pointer hover:underline hover:opacity-80 transition-opacity"
                    : ""
                }`}
                onClick={() =>
                  breadcrumbs3Path && handleBreadcrumbClick(breadcrumbs3Path)
                }
              >
                {breadcrumbs3}
              </span>
            </>
          )}
        </div>
      )}

      {/* Children */}
      {children && <div className="relative z-10">{children}</div>}

      {/* Shapes */}
      <div className="absolute  right-5 top-2 w-[20%]">
        <img src={images.green_Dots} alt="dots1" />
      </div>

      <div className="absolute left-5 bottom-2 w-[24%]">
        <img src={images.red_Dots} alt="dots2" />
      </div>

      {/* Details Header & Description */}
      {/* Title */}
      {detailsHeader && (
        <h2 className="text-[25px] z-10 sm:text-[25px] md:text-[30px] lg:text-[40px] font-bold">
          {detailsHeader}
        </h2>
      )}
      {/* Description */}
      {detailsDescription && (
        <p
          className={`relative z-10 text-xl max-w-5xl ${
            theme === themes.dark ? "text-gray-100" : "text-gray-900"
          }`}
        >
          {detailsDescription}
        </p>
      )}

      {/* Button and Rating Section */}
      <div
        className={`flex flex-col md:flex-row items-center gap-4 md:gap-6 z-10 mt-6 ${buttonClass}`}
      >
       {/* Button */}
       <div className=" w-full mx-auto">
         {button && (
           <SlideInOnScroll direction="bottom" >
          <Button
            variant="primary"
            className={`w-fit px-8 my-[20px] ${isCourseDetailsUsage ? "" : "mx-auto"}`}
            path="/sign-in"
            size="lg"
          >
            {button}
          </Button>
          </SlideInOnScroll>
        )}
       </div>

        {/* Rating Section */}
        {rating && ratingCount !== undefined && studentCount !== undefined && (
          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 ${
              isCourseDetailsUsage
                ? isArabic
                  ? "md:items-end items-center sm:flex-row-reverse"
                  : "md:items-start items-center"
                : "items-center"
            }`}
          >
            
            {isArabic && isCourseDetailsUsage ? (
              // Arabic RTL order: Students Count - Ratings Count - Rating with Stars
              <>
                {/* Students Count */}
                <div className={`text-md sm:text-md text-gray-500`}>
                  {formatNumber(studentCount)} {studentsText}
                </div>

                {/* Ratings Count */}
                <div className={`text-md sm:text-md text-blue-500`}>
                  ({formatNumber(ratingCount)} {ratingsText})
                </div>

                {/* Rating with Stars */}
                <div className="flex items-center gap-2 flex-row-reverse">
                  <div className="flex items-center gap-1 flex-row-reverse">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className={`sm:w-4 sm:h-4 ${
                          star <= rating
                            ? "text-yellow-400 fill-yellow-400"
                            : theme === themes.dark
                            ? "text-gray-600"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-base md:text-lg font-semibold text-yellow-500">
                    {rating}
                  </span>
                </div>
              </>
            ) : (
              // Default LTR order: Rating with Stars - Ratings Count - Students Count
              <>
                {/* Rating with Stars */}
                <div className="flex items-center gap-2">
                  <span className="text-base md:text-lg font-semibold text-yellow-500">
                    {rating}
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className={`sm:w-4 sm:h-4 ${
                          star <= rating
                            ? "text-yellow-400 fill-yellow-400"
                            : theme === themes.dark
                            ? "text-gray-600"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Ratings Count */}
                <div className={`text-md sm:text-md text-blue-500`}>
                  ({formatNumber(ratingCount)} {ratingsText})
                </div>

                {/* Students Count */}
                <div className={`text-md sm:text-md text-gray-500`}>
                  {formatNumber(studentCount)} {studentsText}
                </div>
              </>
            )}
          </div>
        )}
        
      </div>
    </div>
  );
}

export default SectionTitle;
