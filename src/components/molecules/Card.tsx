import React from "react";
import { Clock, BookOpen, Star, Users } from "../../assets/icons/icons";
import { t } from "i18next";
import { useTheme } from "@/hooks/useTheme";

export interface Course {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration?: string;
  image: string;
  rating: number;
  price: number;
  originalPrice?: number;
  lessons?: number;
  instructor?: string;
  description?: string;
  category?: string;
  reviewCount?: number;
  totalRatings?: number;
}

export interface CourseCardProps {
  course: Course;
  className?: string;
  viewMode?: "grid" | "list";
}

const Card: React.FC<CourseCardProps> = ({
  course,
  className = "",
  viewMode = "grid",
}) => {
  const { theme } = useTheme();

  const classes =
    theme === "dark" ? "bg-dark-800 text-gray-200" : "bg-white text-gray-900";

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={18}
        className={`${
          index < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : index < rating
            ? "fill-yellow-400/50 text-yellow-400"
            : "text-gray-300 dark:text-gray-600"
        } transition-colors duration-200`}
      />
    ));
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-dark-primary dark:bg-green-900 dark:text-green-200";
      case "Intermediate":
        return "bg-blue-100 text-dark-primary dark:bg-blue-900 dark:text-blue-200";
      case "Advanced":
        return "bg-[#CCDDFF] text-dark-primary dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-dark-primary dark:bg-gray-700 dark:text-gray-200";
    }
  };

  return (
    <div
      className={`group rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 ${classes} ${className} ${
        viewMode === "list"
          ? "flex flex-col md:flex-row max-w-full min-h-[280px] md:min-h-[200px] lg:min-h-[240px]"
          : "max-w-sm mx-auto w-full"
      }`}
    >
      {/* Header Image with Badge */}
      <div
        className={`relative overflow-hidden ${
          viewMode === "list"
            ? "w-full h-48 md:w-64 lg:w-80 md:h-full flex-shrink-0 order-1"
            : "h-48"
        }`}
      >
        <img
          src={course.image}
          alt={course.title}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            viewMode === "list" ? "object-center" : ""
          }`}
        />

        <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
          <div className="bg-blue-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
            <Clock size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">
              {t("HomeCard.Duration", { duration: course.duration })}
            </span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Content */}
      <div
        className={`${
          viewMode === "list"
            ? "p-4 sm:p-6 flex-1 flex flex-col justify-between order-2"
            : "p-3 sm:p-4 space-y-3 sm:space-y-4"
        }`}
      >
        {viewMode === "list" ? (
          <>
            {/* Top Section - Level Badge, Title, Rating */}
            <div className="flex-grow">
              {/* Level Badge */}
              <div className="flex items-start justify-start mb-2 md:mb-3">
                {course.level && (
                  <span
                    className={`py-1 md:py-2 px-3 md:px-4 text-xs md:text-sm font-medium ${t(
                      getLevelColor(course.level)
                    )} rounded-full`}
                  >
                    {t("HomeCard.Level", { level: course.level })}
                  </span>
                )}
              </div>

              {/* Title */}
              <div>
                <h3 className="text-sm md:text-base lg:text-lg font-bold line-clamp-2 min-h-[2rem] md:min-h-[2.5rem]">
                  {t("HomeCard.Title", { title: course.title })}
                </h3>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-1 mb-2">
                <div className="flex items-center gap-1">
                  {renderStars(course.rating)}
                </div>
                <span className="text-xs md:text-sm font-normal">
                  (
                  {t("HomeCard.Rating", {
                    totalRatings:
                      course.totalRatings || course.reviewCount || 0,
                  })}
                  )
                </span>
              </div>
            </div>

            {/* Bottom Section - Price and Details */}
            <div className="space-y-2 md:space-y-3 flex-shrink-0">
              {/* Price */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-xl lg:text-2xl text-red-400 font-semibold">
                    ${t("HomeCard.Price", { price: course.price.toFixed(2) })}
                  </span>
                  {course.originalPrice &&
                    course.originalPrice > course.price && (
                      <span className="text-sm md:text-base text-gray-500 line-through">
                        ${course.originalPrice.toFixed(2)}
                      </span>
                    )}
                </div>
              </div>

              {/* Course Details */}
              <div className="flex items-center gap-4 pt-2 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-1">
                  <BookOpen size={14} className="md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm font-medium">
                    {t("HomeCard.Lessons", { lessons: course.lessons })}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={14} className="md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm font-medium">
                    {t("HomeCard.Lessons", { students: course.lessons })}
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Grid Mode Layout */}
            {/* Level Badge */}
            <div className="flex items-start justify-start px-2 sm:px-3">
              <span
                className={`py-1 sm:py-2 px-3 sm:px-4 text-sm sm:text-md font-medium ${t(
                  getLevelColor(course.level)
                )} rounded-full`}
              >
                {t("HomeCard.Level", { level: course.level })}
              </span>
            </div>

            {/* Title */}
            <div className="px-2 sm:px-3">
              <h3 className="text-sm sm:text-md font-bold line-clamp-2 min-h-[2.5rem] sm:min-h-[3.5rem]">
                {t("HomeCard.Title", { title: course.title })}
              </h3>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 px-2 sm:px-3 mb-3 sm:mb-4">
              <div className="flex items-center gap-1">
                {renderStars(course.rating)}
              </div>
              <span className="text-sm sm:text-md font-normal">
                (
                {t("HomeCard.Rating", {
                  totalRatings: course.totalRatings || course.reviewCount || 0,
                })}
                )
              </span>
            </div>

            {/* Price */}
            <div className="mb-3 sm:mb-4 px-2 sm:px-3">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl text-red-400">
                  ${t("HomeCard.Price", { price: course.price.toFixed(2) })}
                </span>
                {course.originalPrice &&
                  course.originalPrice > course.price && (
                    <span className="text-sm sm:text-md text-gray-500 line-through">
                      ${course.originalPrice.toFixed(2)}
                    </span>
                  )}
              </div>
            </div>

            {/* Course Details */}
            <div className="flex justify-around items-center gap-3 sm:gap-6 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-1 sm:gap-2">
                <BookOpen size={14} className="sm:w-4 sm:h-4" />
                <span className="text-sm sm:text-md font-medium">
                  {t("HomeCard.Lessons", { lessons: course.lessons })}
                </span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Users size={14} className="sm:w-4 sm:h-4" />
                <span className="text-sm sm:text-md font-medium">
                  {t("HomeCard.Lessons", { students: course.lessons })}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
