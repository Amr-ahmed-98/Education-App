import React, { useState, useMemo } from "react";
import {
  Grid,
  List,
  Filter,
  BookOpen,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Card from "./Card";
import FilterSidebar from "./FilterSidebar";
import { themes } from "@/contexts/Theme";
import { ThemeContext } from "@/contexts/ThemeContextDefinition";
import { useContext } from "react";
import { t } from "i18next";

export interface ICourse {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  lessons: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  image: string;
  instructor: string;
}

interface Filters {
  categories: string[];
  levels: string[];
  priceRange: [number, number];
  searchTerm: string;
}

interface CourseListProps {
  courses: ICourse[];
  className?: string;
}

const CourseList: React.FC<CourseListProps> = ({ courses, className = "" }) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedItemsCount, setLoadedItemsCount] = useState(8); // For grid mode load more
  const { theme } = useContext(ThemeContext)!;
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    levels: [],
    priceRange: [0, 100],
    searchTerm: "",
  });

  const itemsPerPageList = 6; // Items per page for list mode (pagination)
  const itemsPerLoadGrid = 8; // Items to load more in grid mode

  // Filter courses based on current filters
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        filters.categories.length === 0 ||
        filters.categories.includes(course.category);

      const matchesLevel =
        filters.levels.length === 0 || filters.levels.includes(course.level);

      const matchesPrice =
        course.price >= filters.priceRange[0] &&
        course.price <= filters.priceRange[1];

      const matchesSearch =
        filters.searchTerm === "" ||
        course.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        course.description
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase());

      return matchesCategory && matchesLevel && matchesPrice && matchesSearch;
    });
  }, [courses, filters]);

  // Display courses based on view mode
  const displayedCourses = useMemo(() => {
    if (viewMode === "list") {
      // Pagination for list mode
      const startIndex = (currentPage - 1) * itemsPerPageList;
      return filteredCourses.slice(startIndex, startIndex + itemsPerPageList);
    } else {
      // Load more for grid mode
      return filteredCourses.slice(0, loadedItemsCount);
    }
  }, [
    filteredCourses,
    currentPage,
    itemsPerPageList,
    loadedItemsCount,
    viewMode,
  ]);

  const totalPagesForList = Math.ceil(
    filteredCourses.length / itemsPerPageList
  );
  const hasMoreItemsForGrid = loadedItemsCount < filteredCourses.length;

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
    setCurrentPage(1);
    setLoadedItemsCount(itemsPerLoadGrid); // Reset loaded items for grid mode
  };

  const resetFilters = () => {
    setFilters({
      categories: [],
      levels: [],
      priceRange: [0, 100],
      searchTerm: "",
    });
    setCurrentPage(1);
    setLoadedItemsCount(itemsPerLoadGrid);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLoadMore = () => {
    setLoadedItemsCount((prev) => prev + itemsPerLoadGrid);
  };

  const handleViewModeChange = (mode: "grid" | "list") => {
    setViewMode(mode);
    setCurrentPage(1);
    setLoadedItemsCount(itemsPerLoadGrid);
  };

  return (
    <div
      className={`min-h-screen ${className} relative ${
        theme === themes.dark ? "bg-dark-700" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className={`${viewMode === "grid" ? "space-y-6" : "flex gap-8"}`}>
          {/* Vertical Sidebar for List Mode */}
          {viewMode === "list" && (
            <div
              className={`transition-all duration-300 hidden lg:block ${
                showFilters ? "w-80" : "w-0"
              }`}
            >
              {showFilters && (
                <FilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onReset={resetFilters}
                  courses={courses}
                  isHorizontal={false}
                  theme={theme}
                />
              )}
            </div>
          )}

          {/* Main Content */}
          <div className={`${viewMode === "grid" ? "w-full" : "flex-1"}`}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`${
                    viewMode === "list" ? "lg:hidden" : ""
                  } p-2 rounded-lg shadow-sm border hover:shadow-md transition-shadow sm:hidden ${
                    theme === themes.dark
                      ? "bg-dark-800 border-dark-700 text-gray-300 hover:bg-dark-700 hover:text-gray-100"
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Filter className="w-5 h-5" />
                </button>
                <div>
                  <h1
                    className={`text-xl sm:text-2xl font-bold ${
                      theme === themes.dark ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {viewMode === "list"
                      ? `${t("FilterSidebar.showing", {
                          defaultValue: "Showing",
                        })} ${displayedCourses.length} ${t("FilterSidebar.of", {
                          defaultValue: "of",
                        })} ${filteredCourses.length} ${t(
                          "FilterSidebar.courses",
                          { defaultValue: "courses" }
                        )}`
                      : `${t("FilterSidebar.showing", {
                          defaultValue: "Showing",
                        })} ${displayedCourses.length} ${t("FilterSidebar.of", {
                          defaultValue: "of",
                        })} ${filteredCourses.length} ${t(
                          "FilterSidebar.courses",
                          { defaultValue: "courses" }
                        )}`}
                  </h1>
                  {viewMode === "list" && totalPagesForList > 1 && (
                    <p
                      className={`text-sm mt-1 ${
                        theme === themes.dark
                          ? "text-gray-200"
                          : "text-gray-800"
                      }`}
                    >
                      {t("FilterSidebar.page", { page: "Page" })} {currentPage}{" "}
                      {t("FilterSidebar.of", { of: "of" })} {totalPagesForList}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* View Toggle */}
                <div
                  className={`flex rounded-lg p-1 shadow-sm border ${
                    theme === themes.dark
                      ? "bg-dark-800 border-dark-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => handleViewModeChange("grid")}
                    className={`flex items-center gap-2 px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      viewMode === "grid"
                        ? "bg-blue-500 text-white shadow-sm"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-dark-700"
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                    <span className="hidden sm:inline">
                      {t("FilterSidebar.grid", { grid: "Grid" })}
                    </span>
                  </button>
                  <button
                    onClick={() => handleViewModeChange("list")}
                    className={`flex items-center gap-2 px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      viewMode === "list"
                        ? "bg-blue-500 text-white shadow-sm"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-dark-700"
                    }`}
                  >
                    <List className="w-4 h-4" />
                    <span className="hidden sm:inline">
                      {t("FilterSidebar.list", { list: "List" })}
                    </span>
                  </button>
                </div>

                {/* Filters Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`bg-blue-500 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-sm`}
                >
                  <Filter className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {t("FilterSidebar.filters", { filters: "Filters" })}
                  </span>
                </button>
              </div>
            </div>

            {/* Horizontal Filters for Grid Mode (below header) */}
            {viewMode === "grid" && showFilters && (
              <div className="mb-8">
                <FilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onReset={resetFilters}
                  courses={courses}
                  isHorizontal={true}
                  theme={theme}
                />
              </div>
            )}

            {/* Course Grid/List */}
            <div
              className={`grid gap-4 sm:gap-6 transition-all duration-300 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1"
              }`}
            >
              {displayedCourses.map((course) => (
                <Card key={course.id} course={course} viewMode={viewMode} />
              ))}
            </div>

            {/* No Results */}
            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <div
                  className={`text-6xl mb-4 ${
                    theme === themes.dark ? "text-gray-400" : "text-gray-300"
                  }`}
                >
                  <BookOpen className="w-24 h-24 mx-auto" />
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    theme === themes.dark ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {t("FilterSidebar.noCoursesFound", {
                    noCoursesFound: "No Courses Found",
                  })}
                </h3>
                <p
                  className={`mb-4 ${
                    theme === themes.dark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {t("FilterSidebar.tryAdjustingFilters", {
                    tryAdjustingFilters:
                      "Try adjusting your filters or search term.",
                  })}
                </p>
                <button
                  onClick={resetFilters}
                  className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm ${
                    theme === themes.dark ? "bg-blue-600 hover:bg-blue-700" : ""
                  }`}
                >
                  {t("FilterSidebar.clearFilters")}
                </button>
              </div>
            )}

            {/* List Mode - Pagination */}
            {viewMode === "list" && totalPagesForList > 1 && (
              <div className="flex justify-center mt-8 sm:mt-12">
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Previous Button */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === 1
                        ? "bg-gray-100 dark:bg-dark-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                        : "bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700 border dark:border-dark-700 shadow-sm"
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">
                      {t("FilterSidebar.previous", { Previous: "Previous" })}{" "}
                    </span>
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1 overflow-x-auto">
                    {Array.from(
                      { length: Math.min(totalPagesForList, 7) },
                      (_, i) => {
                        let page: number;
                        if (totalPagesForList <= 7) {
                          page = i + 1;
                        } else if (currentPage <= 4) {
                          page = i + 1;
                        } else if (currentPage >= totalPagesForList - 3) {
                          page = totalPagesForList - 6 + i;
                        } else {
                          page = currentPage - 3 + i;
                        }

                        return (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-colors flex-shrink-0 ${
                              currentPage === page
                                ? "bg-blue-500 text-white shadow-sm"
                                : "bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700 border dark:border-dark-700"
                            }`}
                          >
                            {page}
                          </button>
                        );
                      }
                    )}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPagesForList}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === totalPagesForList
                        ? "bg-gray-100 dark:bg-dark-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                        : "bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700 border dark:border-dark-700 shadow-sm"
                    }`}
                  >
                    <span className="hidden sm:inline">
                      {t("FilterSidebar.next", { Next: "Next" })}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Grid Mode - Load More Button */}
            {viewMode === "grid" && hasMoreItemsForGrid && (
              <div className="flex justify-center mt-8 sm:mt-12">
                <button
                  onClick={handleLoadMore}
                  className="bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm sm:text-base shadow-sm flex items-center gap-2"
                >
                  {t("FilterSidebar.loadMore", { LoadMore: "Load More" })}
                  <span className="text-xs bg-blue-600 px-2 py-1 rounded-full">
                    +
                    {Math.min(
                      itemsPerLoadGrid,
                      filteredCourses.length - loadedItemsCount
                    )}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filter Modal for List Mode */}
        {viewMode === "list" && showFilters && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-16">
            <div
              className={`rounded-t-2xl w-full max-w-lg mx-4 max-h-[80vh] overflow-y-auto ${
                theme === themes.dark ? "bg-dark-800" : "bg-white"
              }`}
            >
              <div
                className={`flex items-center justify-between p-4 border-b ${
                  theme === themes.dark ? "border-dark-700" : "border-gray-200"
                }`}
              >
                <h2
                  className={`text-lg font-semibold ${
                    theme === themes.dark ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {t("FilterSidebar.filters", { FilterSidebar: "Filters" })}
                </h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className={`p-2 rounded-full transition-colors ${
                    theme === themes.dark
                      ? "text-gray-300 hover:bg-dark-700 hover:text-gray-100"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4">
                <FilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onReset={resetFilters}
                  courses={courses}
                  isHorizontal={false}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseList;
