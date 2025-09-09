// دوال API للتعامل مع المنتجات
import apiClient from "@/utils/apiClient";

// GET all products
export const getProducts = () => apiClient.get("/products");

// GET single product
export const getProductById = (id) => apiClient.get(`/products/${id}`);

// CREATE new product
export const createProduct = (data) => apiClient.post("/products", data);

// UPDATE product
export const updateProduct = (id, data) => apiClient.put(`/products/${id}`, data);

// DELETE product
export const deleteProduct = (id) => apiClient.delete(`/products/${id}`);
