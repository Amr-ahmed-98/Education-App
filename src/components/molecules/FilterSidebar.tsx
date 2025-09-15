import React, { useState } from "react";
import { ChevronDown, ChevronUp, X, DollarSign } from "lucide-react";
import type { ICourse } from "./CourseList";
import { useTheme } from "@/hooks/useTheme";
import { t } from "i18next";

interface Filters {
  categories: string[];
  levels: string[];
  priceRange: [number, number];
  searchTerm: string;
}

interface FilterSidebarProps {
  filters: Filters;
  onFilterChange: (filters: Partial<Filters>) => void;
  onReset: () => void;
  courses: ICourse[];
  isHorizontal?: boolean;
  theme: string;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onReset,
  courses,
  isHorizontal = false,
}) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    level: true,
    price: true,
  });
  const { theme } = useTheme();

  const classes =
    theme === "dark"
      ? "bg-dark-900 text-gray-200 shadow-md border"
      : "bg-white text-gray-900";

  // Get unique categories and their counts
  const categoryCounts = courses.reduce((acc, course) => {
    acc[course.category] = (acc[course.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Get unique levels and their counts
  const levelCounts = courses.reduce((acc, course) => {
    acc[course.level] = (acc[course.level] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryChange = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    onFilterChange({ categories: newCategories });
  };

  const handleLevelChange = (level: string) => {
    const newLevels = filters.levels.includes(level)
      ? filters.levels.filter((l) => l !== level)
      : [...filters.levels, level];
    onFilterChange({ levels: newLevels });
  };

  const handlePriceChange = (index: number, value: string) => {
    const newRange = [...filters.priceRange] as [number, number];
    newRange[index] = parseInt(value) || 0;
    onFilterChange({ priceRange: newRange });
  };

  const activeFiltersCount =
    filters.categories.length +
    filters.levels.length +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 100 ? 1 : 0);

  return (
    <div
      className={`${classes} rounded-xl shadow-sm border p-6 ${
        isHorizontal ? "w-full" : "h-fit sticky top-8"
      }`}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between mb-6 ${
          isHorizontal ? "flex-col sm:flex-row gap-4" : ""
        }`}
      >
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {t("FilterSidebar.filters", { defaultValue: "Filters" })}
        </h2>
        {activeFiltersCount > 0 && (
          <button
            onClick={onReset}
            className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            {t("FilterSidebar.reset", { defaultValue: "Reset" })} (
            {activeFiltersCount})
          </button>
        )}
      </div>

      {isHorizontal ? (
        // Horizontal layout for grid mode
        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
          {/* Search */}
          <div className="lg:w-64">
            <input
              type="text"
              placeholder={t("FilterSidebar.searchCourses", {
                defaultValue: "Search courses...",
              })}
              value={filters.searchTerm}
              onChange={(e) => onFilterChange({ searchTerm: e.target.value })}
              className={`w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${classes}`}
            />
          </div>

          {/* Categories */}
          <div className="flex-1 lg:max-w-xs">
            <button
              onClick={() => toggleSection("categories")}
              className="flex items-center justify-between w-full text-left mb-3"
            >
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                {t("FilterSidebar.categories", { defaultValue: "Categories" })}
              </h3>
              {expandedSections.categories ? (
                <ChevronUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              )}
            </button>

            {expandedSections.categories && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                {Object.entries(categoryCounts).map(([category, count]) => (
                  <label
                    key={category}
                    className="flex items-center gap-2 cursor-pointer group text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 truncate">
                      {category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({count})
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Level */}
          <div className="flex-1 lg:max-w-xs">
            <button
              onClick={() => toggleSection("level")}
              className="flex items-center justify-between w-full text-left mb-3"
            >
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                {t("FilterSidebar.level", { defaultValue: "Level" })}
              </h3>
              {expandedSections.level ? (
                <ChevronUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              )}
            </button>

            {expandedSections.level && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                {Object.entries(levelCounts).map(([level, count]) => (
                  <label
                    key={level}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={filters.levels.includes(level)}
                      onChange={() => handleLevelChange(level)}
                      className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                      {level}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({count})
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price Filter */}
          <div className="flex-1 lg:max-w-xs">
            <button
              onClick={() => toggleSection("price")}
              className="flex items-center justify-between w-full text-left mb-3"
            >
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                {t("FilterSidebar.priceRange", { defaultValue: "Price Range" })}
              </h3>
              {expandedSections.price ? (
                <ChevronUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              )}
            </button>

            {expandedSections.price && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                      {t("FilterSidebar.minPrice", {
                        defaultValue: "Min Price",
                      })}
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="number"
                        value={filters.priceRange[0]}
                        onChange={(e) => handlePriceChange(0, e.target.value)}
                        className={`w-full pl-8 pr-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${classes} text-gray-900 dark:text-gray-100`}
                        min="0"
                        max="1000"
                      />
                    </div>
                  </div>
                  <span className="text-gray-400 dark:text-gray-500 mt-5">
                    -
                  </span>
                  <div className="flex-1">
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                      {t("FilterSidebar.maxPrice", {
                        defaultValue: "Max Price",
                      })}
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="number"
                        value={filters.priceRange[1]}
                        onChange={(e) => handlePriceChange(1, e.target.value)}
                        className={`w-full pl-8 pr-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${classes}`}
                        min="0"
                        max="1000"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-600 text-center">
                  ${filters.priceRange[0]} - ${filters.priceRange[1]}
                </div>
              </div>
            )}
          </div>

          {/* Reset Button */}
          <div className="lg:w-32">
            <button
              onClick={onReset}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium mt-7 lg:mt-0"
            >
              {t("FilterSidebar.clearFilters", {
                defaultValue: "Clear Filters",
              })}
            </button>
          </div>
        </div>
      ) : (
        // Vertical layout for list mode
        <div>
          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder={t("FilterSidebar.searchCourses", {
                defaultValue: "Search courses...",
              })}
              value={filters.searchTerm}
              onChange={(e) => onFilterChange({ searchTerm: e.target.value })}
              className={`w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${classes}`}
            />
          </div>

          {/* Categories */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection("categories")}
              className="flex items-center justify-between w-full text-left mb-3"
            >
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                {t("FilterSidebar.categories", { defaultValue: "Categories" })}
              </h3>
              {expandedSections.categories ? (
                <ChevronUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              )}
            </button>

            {expandedSections.categories && (
              <div className="space-y-2">
                {Object.entries(categoryCounts).map(([category, count]) => (
                  <label
                    key={category}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 flex-1">
                      {category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({count})
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Level */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection("level")}
              className="flex items-center justify-between w-full text-left mb-3"
            >
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                {t("FilterSidebar.level", { defaultValue: "Level" })}
              </h3>
              {expandedSections.level ? (
                <ChevronUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              )}
            </button>

            {expandedSections.level && (
              <div className="space-y-2">
                {Object.entries(levelCounts).map(([level, count]) => (
                  <label
                    key={level}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={filters.levels.includes(level)}
                      onChange={() => handleLevelChange(level)}
                      className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 flex-1">
                      {level}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({count})
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection("price")}
              className="flex items-center justify-between w-full text-left mb-3"
            >
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                {t("FilterSidebar.priceRange", { defaultValue: "Price Range" })}
              </h3>
              {expandedSections.price ? (
                <ChevronUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              )}
            </button>

            {expandedSections.price && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                      {t("FilterSidebar.minPrice", {
                        defaultValue: "Min Price",
                      })}
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="number"
                        value={filters.priceRange[0]}
                        onChange={(e) => handlePriceChange(0, e.target.value)}
                        className={`w-full pl-8 pr-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${classes}`}
                        min="0"
                        max="1000"
                      />
                    </div>
                  </div>
                  <span className="text-gray-400 dark:text-gray-500 mt-5">
                    -
                  </span>
                  <div className="flex-1">
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                      {t("FilterSidebar.maxPrice")}
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="number"
                        value={filters.priceRange[1]}
                        onChange={(e) => handlePriceChange(1, e.target.value)}
                        className={`w-full pl-8 pr-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${classes}`}
                        min="0"
                        max="1000"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-600 text-center">
                  ${filters.priceRange[0]} - ${filters.priceRange[1]}
                </div>
              </div>
            )}
          </div>

          {/* Reset Filter Button */}
          <button
            onClick={onReset}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            {t("FilterSidebar.clearFilters", { ClearFilters: "Clear Filters" })}
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterSidebar;
