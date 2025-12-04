import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { SidebarMenuItemsInstructor } from "../../utils/Data";
import { useLotout } from "@/features/auth/hooks/useLogout";

const SidebarInstructor = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const logout = useLotout();
  const isRTL = i18n.language === "ar";

  const topSectionItems = SidebarMenuItemsInstructor.filter((item) => item.section === "top");
  const bottomSectionItems = SidebarMenuItemsInstructor.filter((item) => item.section === "bottom");

  const handleItemClick = (item: typeof SidebarMenuItemsInstructor[0], e: React.MouseEvent) => {
    if (item.isLogout) {
      e.preventDefault();
      logout();
    }
  };

  const isActive = (path: string) => {
    // Check if current path matches or starts with the item path
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  return (
    <div
      className={`
        flex flex-col h-full
        w-16 md:w-64 lg:w-72
        flex-shrink-0
        bg-light-primary dark:bg-dark-primary
        border-r border-neutral-200 dark:border-dark-secondary
        ${isRTL ? "rtl" : "ltr"}
      `}
    >
      {/* Top Section */}
      <div className="flex-1 py-6 px-2 md:px-4 space-y-2">
        {topSectionItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.id}
              to={item.path}
              onClick={(e) => handleItemClick(item, e)}
              className={`
                flex items-center justify-center md:justify-start gap-3 px-3 md:px-4 py-3 rounded-lg
                transition-all duration-200
                ${
                  active
                    ? "bg-primary text-light-primary"
                    : "text-text-grayDark dark:text-text-grayLight hover:bg-light-secondary dark:hover:bg-dark-secondary"
                }
              `}
              title={t(item.labelKey)}
            >
              <Icon
                size={20}
                className={`
                  flex-shrink-0
                  ${active ? "text-light-primary" : ""}
                `}
              />
              <span
                className={`
                  font-medium
                  hidden md:block
                  ${active ? "text-light-primary" : ""}
                `}
              >
                {t(item.labelKey)}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Divider */}
      <div className="border-t border-neutral-200 dark:border-dark-secondary mx-4"></div>

      {/* Bottom Section */}
      <div className="py-6 px-2 md:px-4 space-y-2">
        {bottomSectionItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          const isLogoutItem = item.isLogout;

          return (
            <Link
              key={item.id}
              to={item.path}
              onClick={(e) => handleItemClick(item, e)}
              className={`
                flex items-center justify-center md:justify-start gap-3 px-3 md:px-4 py-3 rounded-lg
                transition-all duration-200
                ${
                  isLogoutItem
                    ? "text-secondary hover:bg-red-50 dark:hover:bg-red-900/20"
                    : active
                    ? "bg-primary text-light-primary"
                    : "text-text-grayDark dark:text-text-grayLight hover:bg-light-secondary dark:hover:bg-dark-secondary"
                }
              `}
              title={t(item.labelKey)}
            >
              <Icon
                size={20}
                className={`
                  flex-shrink-0
                  ${isLogoutItem ? "text-secondary" : active ? "text-light-primary" : ""}
                `}
              />
              <span
                className={`
                  font-medium
                  hidden md:block
                  ${isLogoutItem ? "text-secondary" : active ? "text-light-primary" : ""}
                `}
              >
                {t(item.labelKey)}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarInstructor;