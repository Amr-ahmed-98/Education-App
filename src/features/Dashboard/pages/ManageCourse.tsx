import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { instructorCourses } from "@/utils/Data";
import * as icons from "@/assets/icons/icons";
import { useTheme } from "@/hooks/useTheme";
import { themes } from "@/contexts/Theme";

function ManageCourse() {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === themes.dark;
  const isRTL = i18n.language === "ar";

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Filter and sort courses
  let filteredCourses = instructorCourses.filter((course) => {
    const matchesSearch =
      searchTerm === "" ||
      t(course.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
      t(course.category).toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ||
      course.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Sort courses
  filteredCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.id - a.id; // Assuming higher ID = newer
      case "oldest":
        return a.id - b.id;
      case "title":
        return t(a.title).localeCompare(t(b.title));
      case "enrollments":
        return b.enrollments - a.enrollments;
      default:
        return 0;
    }
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-500 text-white";
      case "draft":
        return "bg-orange-500 text-white";
      case "pending":
        return "bg-blue-400 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getStatusText = (status: string) => {
    return t(`manageCourse.status.${status}`);
  };

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-dark-primary" : "bg-light-secondary"
      } py-6 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <h1
              className={`text-2xl md:text-3xl font-bold mb-2 ${
                isDark ? "text-light-primary" : "text-dark-primary"
              }`}
            >
              {t("manageCourse.title")}
            </h1>
            <p
              className={`text-sm md:text-base ${
                isDark ? "text-text-grayLight" : "text-text-grayDark"
              }`}
            >
              {t("manageCourse.subtitle")}
            </p>
          </div>
          <Link
            to="/add-course"
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-light-primary hover:bg-primary/90 transition-colors duration-200 font-medium text-sm md:text-base whitespace-nowrap ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <icons.CirclePlus size={20} />
            {t("manageCourse.addNewCourse")}
          </Link>
        </div>

        {/* Search and Filter Bar */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mb-6 p-4 rounded-lg ${
            isDark ? "bg-dark-secondary" : "bg-light-primary"
          }`}
        >
          {/* Search Input */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder={t("manageCourse.searchPlaceholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full ${
                isRTL ? "pl-10 pr-4 text-right" : "pr-10 pl-4"
              } py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                isDark
                  ? "bg-dark-primary border-dark-secondary text-light-primary focus:border-primary"
                  : "bg-light-primary border-neutral-200 text-dark-primary focus:border-primary"
              }`}
            />
            <div
              className={`absolute ${
                isRTL ? "left-3" : "right-3"
              } top-1/2 transform -translate-y-1/2`}
            >
              <icons.Search
                size={18}
                className={
                  isDark ? "text-text-grayLight" : "text-text-grayDark"
                }
              />
            </div>
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={`${
                isRTL ? "text-right" : "text-left"
              } py-2 px-4 pr-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer transition-colors ${
                isDark
                  ? "bg-dark-primary border-dark-secondary text-light-primary focus:border-primary"
                  : "bg-light-primary border-neutral-200 text-dark-primary focus:border-primary"
              }`}
            >
              <option value="all">{t("manageCourse.status.all")}</option>
              <option value="published">
                {t("manageCourse.status.published")}
              </option>
              <option value="draft">{t("manageCourse.status.draft")}</option>
              <option value="pending">
                {t("manageCourse.status.pending")}
              </option>
            </select>
            <div
              className={`absolute ${
                isRTL ? "left-2" : "right-2"
              } top-1/2 transform -translate-y-1/2 pointer-events-none`}
            >
              <icons.ChevronDown
                size={18}
                className={
                  isDark ? "text-text-grayLight" : "text-text-grayDark"
                }
              />
            </div>
          </div>

          {/* Sort Filter */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`${
                isRTL ? "text-right" : "text-left"
              } py-2 px-4 pr-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer transition-colors ${
                isDark
                  ? "bg-dark-primary border-dark-secondary text-light-primary focus:border-primary"
                  : "bg-light-primary border-neutral-200 text-dark-primary focus:border-primary"
              }`}
            >
              <option value="newest">{t("manageCourse.sort.newest")}</option>
              <option value="oldest">{t("manageCourse.sort.oldest")}</option>
              <option value="title">{t("manageCourse.sort.title")}</option>
              <option value="enrollments">
                {t("manageCourse.sort.enrollments")}
              </option>
            </select>
            <div
              className={`absolute ${
                isRTL ? "left-2" : "right-2"
              } top-1/2 transform -translate-y-1/2 pointer-events-none`}
            >
              <icons.ChevronDown
                size={18}
                className={
                  isDark ? "text-text-grayLight" : "text-text-grayDark"
                }
              />
            </div>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                isDark ? "bg-dark-secondary" : "bg-light-primary"
              }`}
            >
              {/* Course Image with Status Badge */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={t(course.title)}
                  className="w-full h-full object-cover"
                />
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                      course.status
                    )}`}
                  >
                    {getStatusText(course.status)}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-4">
                {/* Category */}
                <p
                  className={`text-sm mb-2 ${
                    isDark ? "text-primary" : "text-primary"
                  }`}
                >
                  {t(course.category)}
                </p>

                {/* Title */}
                <h3
                  className={`text-lg font-bold mb-4 line-clamp-2 ${
                    isDark ? "text-light-primary" : "text-dark-primary"
                  }`}
                >
                  {t(course.title)}
                </h3>

                {/* Stats Row */}
                <div className="flex items-center justify-between mb-4">
                  {/* Enrollments */}
                  <div className="flex items-center gap-2">
                    <icons.Users
                      size={18}
                      className={
                        isDark ? "text-text-grayLight" : "text-text-grayDark"
                      }
                    />
                    <span
                      className={`text-sm ${
                        isDark ? "text-text-grayLight" : "text-text-grayDark"
                      }`}
                    >
                      {course.enrollments.toLocaleString()}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    {course.rating !== null ? (
                      <>
                        <icons.Star
                          size={18}
                          className="text-yellow-400 fill-yellow-400"
                        />
                        <span
                          className={`text-sm font-medium ${
                            isDark ? "text-light-primary" : "text-dark-primary"
                          }`}
                        >
                          {course.rating}
                        </span>
                      </>
                    ) : (
                      <>
                        <icons.Star
                          size={18}
                          className={
                            isDark ? "text-text-grayLight" : "text-text-grayDark"
                          }
                        />
                        <span
                          className={`text-sm ${
                            isDark ? "text-text-grayLight" : "text-text-grayDark"
                          }`}
                        >
                          N/A
                        </span>
                      </>
                    )}
                  </div>

                  {/* Price */}
                  <span
                    className={`text-lg font-bold ${
                      isDark ? "text-light-primary" : "text-dark-primary"
                    }`}
                  >
                    ${course.price.toFixed(2)}
                  </span>
                </div>

                {/* Action Button */}
                <Link
                  to={
                    course.status === "draft"
                      ? "/add-course"
                      : "/manage-courses"
                  }
                  className={`block w-full text-center py-2 px-4 rounded-lg bg-primary text-light-primary hover:bg-primary/90 transition-colors duration-200 font-medium text-sm ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {t(course.actionButton)}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p
              className={`text-lg ${
                isDark ? "text-text-grayLight" : "text-text-grayDark"
              }`}
            >
              {t("manageCourse.noCourses")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageCourse;
