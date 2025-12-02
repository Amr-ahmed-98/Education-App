import { useState } from "react";
import { useTranslation } from "react-i18next";
import { notificationItems } from "@/utils/Data";
import { Check, ChevronRight, User } from "@/assets/icons/icons";

const Notification = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [notifications, setNotifications] = useState(notificationItems);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, isRead: true }))
    );
  };

  const handleMarkAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  const renderIcon = (notification: typeof notificationItems[0]) => {
    const iconClasses = `w-10 h-10 rounded-full flex items-center justify-center ${notification.iconColor}`;

    switch (notification.iconType) {
      case "dollar":
        return (
          <div className={iconClasses}>
            <span className="text-white font-bold text-lg">$</span>
          </div>
        );
      case "alert":
        return (
          <div className={iconClasses}>
            <span className="text-gray-800 font-bold text-lg">!</span>
          </div>
        );
      case "avatar":
      case "user":
      default:
        return (
          <div className={iconClasses}>
            <User size={20} className="text-gray-600" />
          </div>
        );
    }
  };

  const renderContent = (notification: typeof notificationItems[0]) => {
    if (notification.boldText) {
      if (notification.id === 2) {
        // Special handling for payout notification
        return (
          <p className="text-base text-dark-primary dark:text-light-primary">
            {t(notification.content)}{" "}
            <span className="font-bold">{t(notification.boldText)}</span>{" "}
            {t("notification.item2.content2")}
          </p>
        );
      }
      return (
        <p className="text-base text-dark-primary dark:text-light-primary">
          {t(notification.content)}{" "}
          <span className="font-bold">{t(notification.boldText)}</span>
        </p>
      );
    }
    return (
      <p className="text-base text-dark-primary dark:text-light-primary">
        {t(notification.content)}
      </p>
    );
  };

  return (
    <div className={`w-full ${isRTL ? "rtl" : "ltr"}`}>
      {/* Header Section */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-primary dark:text-light-primary mb-2">
            {t("notification.title")}
          </h1>
          <p className="text-base md:text-lg text-text-grayDark dark:text-text-grayLight">
            {t("notification.subtitle").replace("3", unreadCount.toString())}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 flex-shrink-0">
          <button className="px-4 py-2 bg-light-secondary dark:bg-dark-secondary text-text-grayDark dark:text-text-grayLight rounded-lg font-medium hover:bg-light-secondary/80 dark:hover:bg-dark-secondary/80 transition-colors duration-200 text-sm md:text-base">
            {t("notification.allNotifications")}
          </button>
          <button
            onClick={handleMarkAllAsRead}
            className="px-4 py-2 bg-light-primary dark:bg-dark-primary border border-neutral-200 dark:border-dark-secondary text-text-grayDark dark:text-text-grayLight rounded-lg font-medium hover:bg-light-secondary dark:hover:bg-dark-secondary transition-colors duration-200 text-sm md:text-base flex items-center gap-2"
          >
            <Check size={16} className="text-green-500" />
            {t("notification.markAllAsRead")}
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-light-primary dark:bg-dark-primary rounded-xl border border-neutral-200 dark:border-dark-secondary shadow-sm overflow-hidden">
        <div className="divide-y divide-neutral-200 dark:divide-dark-secondary">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => !notification.isRead && handleMarkAsRead(notification.id)}
              className={`p-4 md:p-6 flex items-start gap-4 hover:bg-light-secondary dark:hover:bg-dark-secondary transition-colors duration-200 cursor-pointer ${
                !notification.isRead ? "bg-light-secondary/30 dark:bg-dark-secondary/30" : ""
              }`}
            >
              {/* Unread Indicator */}
              {!notification.isRead && (
                <div className="flex-shrink-0 mt-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              )}
              {notification.isRead && (
                <div className="flex-shrink-0 w-2"></div>
              )}

              {/* Icon */}
              <div className="flex-shrink-0">{renderIcon(notification)}</div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {renderContent(notification)}
                <p className="text-sm text-text-grayDark dark:text-text-grayLight mt-1">
                  {t(notification.timestamp)}
                </p>
              </div>

              {/* Action Button (if exists) and Chevron */}
              <div className="flex-shrink-0 flex items-center gap-3">
                {notification.actionButton && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle view review action
                    }}
                    className="px-4 py-2 bg-light-primary dark:bg-dark-primary border border-neutral-200 dark:border-dark-secondary text-text-grayDark dark:text-text-grayLight rounded-lg font-medium hover:bg-light-secondary dark:hover:bg-dark-secondary transition-colors duration-200 text-sm whitespace-nowrap"
                  >
                    {t(notification.actionButton)}
                  </button>
                )}
                <ChevronRight
                  size={20}
                  className="text-text-grayDark dark:text-text-grayLight flex-shrink-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
