import React from "react";
import { Check } from "@/assets/icons/icons";
import { useTheme } from "@/hooks/useTheme";

interface CourseDetailsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: string[];
  descriptionTitle: string;
  descriptionParagraphs: string[];
  learningTitle: string;
  learningPoints: string[];
}

const CourseDetailsContent: React.FC<CourseDetailsProps> = ({
  activeTab,
  onTabChange,
  tabs,
  descriptionTitle,
  descriptionParagraphs,
  learningTitle,
  learningPoints,
}) => {
  const { theme } = useTheme();

  const classes =
    theme === "dark" ? "bg-dark-800 text-gray-200" : "bg-white text-gray-900";

  return (
    <div
      className={`flex-1 lg:pr-8 ${classes} p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg`}
    >
      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6 lg:mb-8">
        <nav className="flex flex-wrap gap-2 sm:gap-4 lg:gap-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`py-2 px-2 sm:py-3 sm:px-1 border-b-2 font-medium text-xs sm:text-sm transition-colors duration-200 whitespace-nowrap min-w-fit ${
                activeTab === tab
                  ? "border-blue-500 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Course Description */}
      <div className="mb-8 lg:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 lg:mb-6">
          {descriptionTitle}
        </h2>
        <div className="space-y-3 lg:space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
          {descriptionParagraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="mb-8 lg:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 lg:mb-6">
          {learningTitle}
        </h2>
        <div className="space-y-3 lg:space-y-4">
          {learningPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start space-x-2 lg:space-x-3"
            >
              <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsContent;
