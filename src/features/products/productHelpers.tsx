// دوال مساعدة للمنتجات
export const filterProductsByCategory = (products, category) => {
  return products.filter((p) => p.category === category);
};

export const formatPrice = (price) => `$${price.toFixed(2)}`;
