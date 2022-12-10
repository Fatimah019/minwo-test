import { ProductsContextType } from "../../models/product";
import { api } from "../api";

const getProducts = async () => {
  const data = await api.get<ProductsContextType>("products");
  return data;
};

const getProductsCategories = async () => {
  const data = await api.get<string[]>("products/categories");
  return data;
};

const searchProductsByName = async (productName: string) => {
  const data = await api.get<ProductsContextType>(
    `products/search?q=${productName}`
  );
  return data;
};

const filterProductsByCategory = async (productCategory: string) => {
  const data = await api.get<ProductsContextType>(
    `products/category/${productCategory}`
  );
  return data;
};

export {
  getProducts,
  getProductsCategories,
  searchProductsByName,
  filterProductsByCategory,
};
