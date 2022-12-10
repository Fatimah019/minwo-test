import { ProductsContextType } from "../../models/product";
import { api } from "../api";

const getProducts = (): Promise<any> => {
  return api.get<ProductsContextType>("products");
};

const getProductsCategories = (): Promise<any> => {
  return api.get<string[]>("products/categories");
};

const searchProductsByName = (productName: string): Promise<any> => {
  return api.get<ProductsContextType>(`products/search?q=${productName}`);
};

const filterProductsByCategory = (productCategory: string): Promise<any> => {
  return api.get<ProductsContextType>(`products/category/${productCategory}`);
};

export {
  getProducts,
  getProductsCategories,
  searchProductsByName,
  filterProductsByCategory,
};
