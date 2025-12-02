import { useTranslation } from "react-i18next";
import { courses } from "@/utils/Data";
import { getStatusColor } from "@/utils/Data";


const MyCourses = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  
 

  return (
    <div className={`w-full ${isRTL ? "rtl" : "ltr"}`}>
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-dark-primary dark:text-light-primary mb-2">
          {t("myCourses.title")}
        </h1>
        <p className="text-base md:text-lg text-text-grayDark dark:text-text-grayLight">
          {t("myCourses.subtitle")}
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-light-primary dark:bg-dark-primary rounded-xl shadow-sm border border-neutral-200 dark:border-dark-secondary overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Course Image */}
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              {/* Status Badge */}
              <div className="absolute top-3 right-3">
                <span
                  className={`${getStatusColor(
                    course.status
                  )} text-white px-3 py-1 rounded-full text-xs font-medium`}
                >
                  {t(`myCourses.status.${course.status}`)}
                </span>
              </div>
            </div>

            {/* Course Content */}
            <div className="p-4 md:p-5 space-y-3">
              {/* Category */}
              <p className="text-primary text-sm font-medium">
                {t(course.category)}
              </p>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-dark-primary dark:text-light-primary">
                {t(course.title)}
              </h3>

              {/* Instructor */}
              <p className="text-sm text-text-grayDark dark:text-text-grayLight">
                {t(course.instructor)}
              </p>

              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="w-full bg-light-secondary dark:bg-dark-secondary rounded-full h-2 mr-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-dark-primary dark:text-light-primary whitespace-nowrap">
                    {t(`${course.progress}%`)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button className="flex-1 bg-primary text-light-primary py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 text-sm md:text-base">
                  {t("myCourses.continue")}
                </button>
                <button className="flex-1 bg-primary text-light-primary py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 text-sm md:text-base">
                  {t("myCourses.viewDetails")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
