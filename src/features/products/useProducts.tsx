// هوك لإدارة المنتجات باستخدام React Query
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts, createProduct } from "./productsApi";

export const useProducts = () => {
  const queryClient = useQueryClient();

  // fetch all products
  const productsQuery = useQuery(["products"], getProducts);

  // add new product
  const addProduct = useMutation(createProduct, {
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });

  return { productsQuery, addProduct };
};
