import * as icons from "@/assets/icons/icons";
import * as images from "@/assets/images/images";
import { themes } from "@/contexts/Theme";
import { ThemeContext } from "@/contexts/ThemeContextDefinition";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

function BlogDetails() {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === themes.dark;
  const isRTL = i18n.language === "ar";

  // State for search and categories
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  // Categories data with counts
  const categories = [
    {
      name: t("BlogDetails.categories.businessStudies"),
      count: 12,
      id: "business",
    },
    { name: t("BlogDetails.categories.computerIT"), count: 8, id: "computer" },
    { name: t("BlogDetails.categories.developer"), count: 21, id: "developer" },
    { name: t("BlogDetails.categories.marketing"), count: 5, id: "marketing" },
    {
      name: t("BlogDetails.categories.uncategorized"),
      count: 2,
      id: "uncategorized",
    },
  ];

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // Here you would typically trigger a search API call or filter results
    console.log("Searching for:", e.target.value);
  };

  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to search results page or filter current results
      console.log("Search submitted:", searchTerm);
      // window.location.href = `/blogs?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  // Handle category click
  const handleCategoryClick = (categoryId: string, categoryName: string) => {
    setActiveCategory(activeCategory === categoryId ? "" : categoryId);
    console.log("Category selected:", categoryName);
    // Navigate to category page or filter results
    // window.location.href = `/blogs?category=${categoryId}`;
  };

  return (
    // <div className="w-full mx-auto flex justify-center items-center">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center py-6 sm:py-8 lg:py-10 lg:flex-row gap-4 lg:gap-6">
      {/* Main Content */}
      <section className="flex-1 space-y-4 sm:space-y-6 rounded-lg p-2 sm:p-4 max-md:p-0">
        {/* Blog Title & Info */}
        <div className="flex flex-wrap gap-2 sm:gap-4 relative left-0 mt-3 sm:mt-5 mb-6 sm:mb-10 text-sm sm:text-base">
          <a href="/">
            <span className="text-[#62748E] hover:text-primary hover:font-bold">
              {t("BlogDetails.breadcrumbs.home")}
            </span>
          </a>
          <icons.ChevronRight
            className="text-[#62748E] relative top-1"
            size={20}
          />
          <a href="blogs">
            <span className="text-[#62748E] hover:text-primary hover:font-bold">
              {t("BlogDetails.breadcrumbs.blogs")}
            </span>
          </a>
          <icons.ChevronRight
            className="text-[#62748E] relative top-1"
            size={20}
          />
          <span className="font-semibold text-[#314158]">
            {t("BlogDetails.breadcrumbs.current")}
          </span>
        </div>

        <div
          className={`flex flex-col gap-6 sm:gap-8 lg:gap-10 shadow-md py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6 max-lg:-mx-2 max-lg:px-6 max-lg:rounded-none lg:rounded-xl sm:rounded-2xl ${
            isDark ? `bg-[#1C242F]` : `bg-white max-lg:bg-white`
          }`}
        >
          {/* title */}
          <div className="">
            <div className="mb-5 rounded-full w-fit">
              <span
                className={`w-fit py-1 px-2 rounded-full text-[#0069A8] font-bold text-sm
                    ${isDark ? `bg-[#21324B]` : `bg-[#DFF2FE]`}`}
              >
                {t("BlogDetails.blog.category")}
              </span>
            </div>

            <h1 className="mb-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold -tracking-[.03em] leading-tight">
                {t("BlogDetails.blog.title")}
              </h1>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                {t("BlogDetails.blog.subtitle")}
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mt-6 sm:mt-8">
              <div className="flex items-center gap-2">
                <img
                  src={images.jandoe2}
                  alt={t("BlogDetails.author.aboutTitle")}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                />
                <span className={isDark ? `text-[#64748B]` : `text-[#314158]`}>
                  {t("BlogDetails.blog.author")}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 ml-10 sm:ml-0">
                <p className="flex items-center gap-2">
                  <icons.Calendar size={15} color="#62748E" />{" "}
                  {t("BlogDetails.blog.date")}
                </p>

                <p className="flex items-center gap-2">
                  <icons.Clock size={15} color="#62748E" />
                  {t("BlogDetails.blog.readTime")}
                </p>
              </div>
            </div>
          </div>

          {/* Blog Main Image */}
          <div className="flex ">
            <img
              src={images.ideas}
              alt="blog list main image"
              className="w-full rounded-lg "
            />
          </div>

          {/* Blog Content text > 2 images > text */}
          <div className="prose prose-invert max-w-none text-sm sm:text-base lg:text-lg">
            <p>{t("BlogDetails.content.intro")}</p>
            <br />

            <h2 className="text-base sm:text-lg lg:text-xl font-semibold">
              {t("BlogDetails.content.curriculum.title")}
            </h2>
            <p>{t("BlogDetails.content.curriculum.p1")}</p>
            <p>{t("BlogDetails.content.curriculum.p2")}</p>
            <br />
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold">
              {t("BlogDetails.content.motivation.title")}
            </h2>
            <p>{t("BlogDetails.content.motivation.content")}</p>

            {/* 2 Images Side by Side */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 my-6 sm:my-8 sm:justify-between">
              <img
                src={images.student}
                alt="sub image 1"
                className="w-full sm:w-[48%] rounded-lg"
              />
              <img
                src={images.tablet}
                alt="sub image 2"
                className="w-full sm:w-[48%] rounded-lg"
              />
            </div>

            <h2 className="text-base sm:text-lg lg:text-xl font-semibold">
              {t("BlogDetails.content.calendar.title")}
            </h2>
            <p>
              {t("BlogDetails.content.calendar.p1")} It’s where strategy meets
              execution. Here's a simple framework to get started: <br />
              <strong>
                {t("BlogDetails.content.calendar.monthlyThemes")}
                <br />
                {t("BlogDetails.content.calendar.weeklyTopics")}
                <br />
                {t("BlogDetails.content.calendar.keyDetails")}
              </strong>
              <br />
              date.
            </p>
            <p>
              <strong>
                {t("BlogDetails.content.calendar.promotionChecklist")}
              </strong>
              <br />
              {t("BlogDetails.content.calendar.p2")}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-col gap-3 mt-0">
            <hr className="mb-5" />
            <h2 className="text-[#62748E] font-bold tracking-[.15em]">
              {t("BlogDetails.blog.tags")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {t("BlogDetails.blog.tagsList", { returnObjects: true }).map(
                (tag: string, index: number) => (
                  <span
                    key={index}
                    className={`px-3 rounded-full text-md text-[#45556C] ${
                      isDark && "py-1 bg-[#F1F5F9] text-[#45556C]"
                    }`}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Author Box */}
        <div
          className={`flex flex-col sm:flex-row p-4 sm:p-6 max-lg:-mx-2 max-lg:px-6 max-lg:rounded-none lg:rounded-lg shadow-md gap-4 ${
            isDark ? "bg-[#1C242F]" : "bg-white max-lg:bg-white"
          }`}
        >
          <img
            src={images.janeDoe}
            alt="About Jane Doe"
            className="w-16 h-16 sm:w-[80px] sm:h-[80px] rounded-full sm:rounded-lg mx-auto sm:mx-0"
          />
          <div
            className={`text-center ${
              isRTL ? "sm:text-right" : "sm:text-left"
            }`}
          >
            <h3 className="font-bold text-base sm:text-lg mb-2">
              {t("BlogDetails.author.aboutTitle")}
            </h3>
            <p className={`text-xs sm:text-sm ${isDark && "text-[#BBBBBB]"}`}>
              {t("BlogDetails.author.description")}
            </p>
            <span
              className={`flex gap-6 sm:gap-10 mt-3 sm:mt-4 justify-center ${
                isRTL ? "sm:justify-end" : "sm:justify-start"
              }`}
            >
              <icons.Twitter style={{ color: "#62748E" }} />
              <icons.Globe style={{ color: "#62748E" }} />
            </span>
          </div>
        </div>
      </section>

      {/* Sidebar */}
      <section className="lg:w-80 xl:w-96 space-y-4 sm:space-y-6 mt-4 sm:mt-6 lg:mt-25 max-lg:flex max-lg:flex-col max-lg:w-full max-lg:-mx-4 max-lg:px-4 max-lg:space-y-0">
        {/* Search */}
        <div
          className={`py-4 sm:py-5 px-4 sm:px-6 max-lg:mx-0 max-lg:mb-4 max-lg:rounded-none lg:rounded-xl sm:rounded-2xl shadow-md ${
            isDark ? `bg-[#1C242F]` : `bg-white max-lg:bg-white`
          }`}
        >
          <h3
            className={`font-semibold mb-3 text-lg sm:text-xl text-center ${
              isRTL ? "lg:text-right" : "lg:text-left"
            }`}
          >
            {t("BlogDetails.search.title")}{" "}
            <span className={`${isDark && "text-secondary"}`}>
              {t("BlogDetails.search.blogTitle")}
            </span>
            {searchTerm && (
              <span
                className={`${
                  isRTL ? "mr-2" : "ml-2"
                } text-sm font-normal text-[#3972FF]`}
              >
                ({searchTerm.length} {t("BlogDetails.search.charactersCount")})
              </span>
            )}
          </h3>
          <form
            onSubmit={handleSearchSubmit}
            className="relative w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none lg:w-72"
          >
            <input
              type="text"
              placeholder={t("BlogDetails.search.placeholder")}
              value={searchTerm}
              onChange={handleSearchChange}
              className={`w-full px-4 py-2 ${
                isRTL ? "pl-10 pr-4 text-right" : "pr-10 pl-4"
              } border border-[#CAD5E2] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                isDark ? "bg-[#2A3441] text-white border-[#3A4551]" : "bg-white"
              }`}
            />
            <div
              className={`absolute ${
                isRTL ? "left-3" : "right-3"
              } top-1/2 transform -translate-y-1/2 flex items-center gap-2`}
            >
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="text-[#90A1B9] hover:text-red-500 transition-colors cursor-pointer"
                  title={t("BlogDetails.search.clearSearch")}
                >
                  <icons.X size={16} />
                </button>
              )}
              <button
                type="submit"
                className="text-[#90A1B9] hover:text-blue-500 transition-colors cursor-pointer"
                title={t("BlogDetails.search.searchButton")}
              >
                <icons.Search />
              </button>
            </div>
          </form>
        </div>

        {/* Categories */}
        <div
          className={`py-4 sm:py-5 px-4 sm:px-6 max-lg:mx-0 max-lg:mb-4 max-lg:rounded-none lg:rounded-xl sm:rounded-2xl shadow-md ${
            isDark ? `bg-[#1C242F]` : `bg-white max-lg:bg-white`
          } `}
        >
          <h3
            className={`font-semibold mb-3 text-lg sm:text-xl text-center ${
              isRTL ? "lg:text-right" : "lg:text-left"
            }`}
          >
            {t("BlogDetails.categories.title")}
            {activeCategory && (
              <span
                className={`${
                  isRTL ? "mr-2" : "ml-2"
                } text-sm font-normal text-[#3972FF]`}
              >
                ({categories.find((cat) => cat.id === activeCategory)?.name})
              </span>
            )}
          </h3>
          {activeCategory && (
            <button
              onClick={() => setActiveCategory("")}
              className={`mb-3 text-sm text-[#3972FF] hover:text-red-500 transition-colors flex items-center gap-1 mx-auto ${
                isRTL ? "lg:mr-0" : "lg:mx-0"
              }`}
            >
              <icons.X size={14} />
              {t("BlogDetails.categories.clearFilter")}
            </button>
          )}
          <ul className="space-y-2 text-sm">
            {categories.map((category) => (
              <li
                key={category.id}
                onClick={() => handleCategoryClick(category.id, category.name)}
                className={`flex justify-between items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all duration-200 ${
                  activeCategory === category.id
                    ? "text-[#3972FF] bg-[#F0F4FF] dark:bg-[#21324B]"
                    : "text-[#64748B] hover:text-[#3972FF]"
                }`}
              >
                <span
                  className={`${
                    activeCategory === category.id ? "font-semibold" : ""
                  }`}
                >
                  {category.name}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-bold transition-all ${
                    activeCategory === category.id
                      ? "bg-[#3972FF] text-white"
                      : isDark
                      ? "bg-[#21324B] text-[#64748B]"
                      : "bg-gray-100 text-[#64748B]"
                  }`}
                >
                  {category.count}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Related Courses */}
        <div
          className={`py-4 sm:py-5 px-4 sm:px-6 max-lg:mx-0 max-lg:mb-4 max-lg:rounded-none lg:rounded-xl sm:rounded-2xl shadow-md ${
            isDark ? `bg-[#1C242F]` : `bg-white max-lg:bg-white`
          }`}
        >
          <h3
            className={`font-semibold text-lg sm:text-xl mb-3 text-center ${
              isRTL ? "lg:text-right" : "lg:text-left"
            }`}
          >
            {t("BlogDetails.relatedCourses.title")}{" "}
            <span
              className={`text-xl ${
                isDark ? `text-secondary` : `text-[#1D293D]`
              }`}
            >
              {t("BlogDetails.relatedCourses.courses")}
            </span>
          </h3>
          <div>
            <div className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
              <img src={images.seo} alt="SEO" />
              <ul className={`space-y-0 text-sm ${isRTL ? "text-right" : ""}`}>
                <p className="text-[#314158] font-semibold">
                  {t("BlogDetails.relatedCourses.course1.title")}
                </p>
                <li className={`${isDark && `text-[#314158]`}`}>
                  {t("BlogDetails.relatedCourses.course1.type")}
                </li>
                <li className="text-[#62748E]">
                  {t("BlogDetails.relatedCourses.course1.instructor")}
                </li>
              </ul>
            </div>
            <br />
            <div className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
              <img src={images.copywrite} alt="Copy-Write" />
              <ul className={`space-y-0 text-sm ${isRTL ? "text-right" : ""}`}>
                <p className="text-[#314158] font-semibold">
                  {t("BlogDetails.relatedCourses.course2.title")}
                </p>
                <li className={`${isDark && `text-[#314158]`}`}>
                  {t("BlogDetails.relatedCourses.course2.type")}
                </li>
                <li className="text-[#62748E]">
                  {t("BlogDetails.relatedCourses.course2.instructor")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    // </div>
  );
}
export default BlogDetails;
