import { useState } from "react";
import { useTranslation } from "react-i18next";
import { wishlistItems } from "@/utils/Data";
import { X, Star } from "@/assets/icons/icons";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const navigate = useNavigate();
  const [items, setItems] = useState(wishlistItems);

  const handleRemoveItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleAddToCart = () => {
    // Navigate to cart or add to cart logic
    navigate("/cart");
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const starValue = index + 1;
      const isFullStar = starValue <= Math.floor(rating);
      const isHalfStar = starValue === Math.ceil(rating) && rating % 1 !== 0;

      return (
        <Star
          key={index}
          size={16}
          className={`${
            isFullStar
              ? "fill-yellow-400 text-yellow-400"
              : isHalfStar
              ? "fill-yellow-400/50 text-yellow-400"
              : "text-gray-300 dark:text-gray-600"
          } transition-colors duration-200`}
        />
      );
    });
  };

  const formatReviewCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <div className={`w-full ${isRTL ? "rtl" : "ltr"}`}>
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-dark-primary dark:text-light-primary mb-2">
          {t("wishlist.title")}
        </h1>
        <p className="text-base md:text-lg text-text-grayDark dark:text-text-grayLight">
          {t("wishlist.subtitle")}
        </p>
      </div>

      {/* Course Cards List */}
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-light-primary dark:bg-dark-primary rounded-xl border border-neutral-200 dark:border-dark-secondary p-4 md:p-6 flex flex-col md:flex-row gap-4 hover:shadow-lg transition-shadow duration-300 relative"
          >
            {/* Remove Button */}
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="absolute top-4 right-4 p-2 text-text-grayDark dark:text-text-grayLight hover:text-secondary hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200 z-10"
              aria-label="Remove from wishlist"
            >
              <X size={20} />
            </button>

            {/* Course Thumbnail */}
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={t(item.title)}
                className="w-full md:w-40 lg:w-48 h-32 md:h-32 lg:h-36 rounded-lg object-cover"
              />
            </div>

            {/* Course Information */}
            <div className="flex-1 min-w-0 flex flex-col justify-between">
              <div className="space-y-2">
                {/* Category */}
                <p className="text-primary text-sm font-medium">
                  {t(item.category)}
                </p>

                {/* Course Title */}
                <h3 className="text-xl md:text-2xl font-bold text-dark-primary dark:text-light-primary">
                  {t(item.title)}
                </h3>

                {/* Instructor */}
                <p className="text-sm md:text-base text-text-grayDark dark:text-text-grayLight">
                  {t(item.instructor)}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {renderStars(item.rating)}
                  </div>
                  <span className="text-sm text-text-grayDark dark:text-text-grayLight">
                    {item.rating} ({formatReviewCount(item.reviewCount)})
                  </span>
                </div>
              </div>

              {/* Price and Add to Cart Button */}
              <div className="flex items-center justify-between md:justify-end gap-4 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-neutral-200 dark:border-dark-secondary">
                <div className="text-2xl md:text-3xl font-bold text-dark-primary dark:text-light-primary">
                  ${item.price.toFixed(2)}
                </div>
                <button
                  onClick={handleAddToCart}
                  className="bg-primary text-light-primary py-2 px-6 md:px-8 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 text-sm md:text-base whitespace-nowrap"
                >
                  {t("wishlist.addToCart")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
