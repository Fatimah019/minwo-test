import { createContext, ReactElement, useEffect, useState } from "react";
import { getProductsCategories } from "../queries/product";

const CategoriesContext = createContext<any>(null);

const CategoriesProvider = ({ children }: { children: ReactElement }) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    getProductsCategories().then((data) => {
      return setCategories(data.data);
    });
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesContext, CategoriesProvider };
