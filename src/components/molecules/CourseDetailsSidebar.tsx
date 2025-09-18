import React from "react";
import { User, ShoppingCart } from "@/assets/icons/icons";
import { laptop } from "@/assets/images/images";
import { useTheme } from "@/hooks/useTheme";

export interface CourseDetailItem {
  icon?: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

interface CourseDetailsSidebarProps {
  courseDetails: string
  priceLabel: string;
  priceValue: string;
  details: CourseDetailItem[];
  addToCartText: string;
  buyNowText: string;
}

const CourseDetailsSidebar: React.FC<CourseDetailsSidebarProps> = ({
  courseDetails,
  priceLabel,
  priceValue,
  details,
  addToCartText,
  buyNowText,
}) => {
  const { theme } = useTheme();

  const classes =
    theme === "dark" ? "bg-dark-800 text-gray-200" : "bg-white text-gray-900";

  return (
    <div className="lg:w-95 lg:flex-shrink-0">
      <div className={`${classes} rounded-xl shadow-lg overflow-hidden`}>
        {/* Course Banner */}
        <div className="relative h-48 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 p-6 text-white overflow-hidden">
          {/* Tech Icons */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={laptop}
              alt="Course Banner"
            />
          </div>
        </div>

        <div className="p-6">
          {/* Course Includes */}
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
            {courseDetails}
          </h4>

          {/* Price */}
          <div className="flex items-center justify-between mb-2 pb-4 border-b border-gray-100 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-300 flex items-center">
              <span className="mx-2">$</span>
              {priceLabel}
            </span>
            <span className="text-lg font-semibold text-red-500">
              {priceValue}
            </span>
          </div>

          {/* Course Details */}
          <div className="space-y-4 mb-8">
            {details.map((detail, index) => {
              const IconComponent = detail.icon ?? User;
              return (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300 flex items-center">
                    <IconComponent className="w-4 h-4 mx-2" />
                    {detail.label}
                  </span>
                  <span className="text-gray-900 dark:text-gray-100 font-medium">
                    {detail.value}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-200 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 mx-2" />
              {addToCartText}
            </button>
            <button className="w-full bg-white dark:bg-transparent text-blue-600 py-3 px-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-200">
              {buyNowText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsSidebar;
