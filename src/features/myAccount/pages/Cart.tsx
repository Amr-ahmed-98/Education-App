import { useState } from "react";
import { useTranslation } from "react-i18next";
import { cartItems } from "@/utils/Data";
import { Trash2 } from "@/assets/icons/icons";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const navigate = useNavigate();
  const [items, setItems] = useState(cartItems);

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const discount = 80;
  const total = subtotal - discount;

  const handleRemoveItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className={`w-full ${isRTL ? "rtl" : "ltr"}`}>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-dark-primary dark:text-light-primary mb-2">
          {t("cart.title")}
        </h1>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section - Course List */}
        <div className="flex-1 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-light-primary dark:bg-dark-primary rounded-xl border border-neutral-200 dark:border-dark-secondary p-4 md:p-5 flex gap-4 hover:shadow-md transition-shadow duration-300"
            >
              {/* Course Thumbnail */}
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={t(item.title)}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover"
                />
              </div>

              {/* Course Details */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-dark-primary dark:text-light-primary mb-1">
                  {t(item.title)}
                </h3>
                <p className="text-sm md:text-base text-text-grayDark dark:text-text-grayLight mb-2">
                  {t(item.instructor)} - {t(item.instructorTitle)}
                </p>
                <p className="text-primary text-lg md:text-xl font-semibold">
                  ${item.price}
                </p>
              </div>

              {/* Delete Button */}
              <div className="flex-shrink-0 flex items-start">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="p-2 text-secondary hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200"
                  aria-label="Remove item"
                >
                  <Trash2 size={20} className="text-secondary" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Order Summary */}
        <div className="lg:w-96 flex-shrink-0">
          <div className="bg-light-primary dark:bg-dark-primary rounded-xl border border-neutral-200 dark:border-dark-secondary p-6 sticky top-24">
            {/* Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-dark-primary dark:text-light-primary mb-6">
              {t("cart.orderSummary")}{" "}
              <span className="text-secondary">
                {t("cart.summary")}
              </span>
            </h2>

            {/* Summary Details */}
            <div className="space-y-4 mb-6">
              {/* Subtotal */}
              <div className="flex justify-between items-center">
                <span className="text-base md:text-lg text-text-grayDark dark:text-text-grayLight">
                  {t("cart.subtotal")}
                </span>
                <span className="text-base md:text-lg font-semibold text-secondary">
                  ${subtotal}
                </span>
              </div>

              {/* Discount */}
              <div className="flex justify-between items-center">
                <span className="text-base md:text-lg text-text-grayDark dark:text-text-grayLight">
                  {t("cart.discount")}
                </span>
                <span className="text-base md:text-lg font-semibold text-green-500">
                  -${discount}
                </span>
              </div>

              {/* Divider */}
              <div className="border-t border-neutral-200 dark:border-dark-secondary"></div>

              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="text-lg md:text-xl font-bold text-dark-primary dark:text-light-primary">
                  {t("cart.total")}
                </span>
                <span className="text-lg md:text-xl font-bold text-primary">
                  ${total}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-primary text-light-primary py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 text-base md:text-lg"
              >
                {t("cart.checkout")}
              </button>
              <button
                onClick={() => navigate("/course")}
                className="w-full bg-light-primary dark:bg-dark-primary text-primary border-2 border-primary py-3 px-6 rounded-lg font-medium hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-200 text-base md:text-lg"
              >
                {t("cart.continueShopping")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
