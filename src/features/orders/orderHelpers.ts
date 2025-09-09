// دوال مساعدة للطلبات
export const filterOrdersByStatus = (orders, status) => {
  return orders.filter((o) => o.status === status);
};

export const formatOrderDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString();
};
