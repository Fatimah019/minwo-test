import { createContext, ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IProduct, ProductsContextType } from "../../models/product";
import {
  filterProductsByCategory,
  getProducts,
  searchProductsByName,
} from "../queries/product";

const ProductsContext = createContext<ProductsContextType | null>(null);

const ProductsProvider = ({ children }: { children: ReactElement }) => {
  const [products, setProducts] = useState<IProduct[]>();
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");
  const search: string = useLocation().search;
  const productSearch = new URLSearchParams(search).get("search");
  const categorySearch = new URLSearchParams(search).get("category");

  const handleSearchProductByName = async (productName: string) => {
    setIsloading(true);
    searchProductsByName(productName)
      .then((data) => {
        setProducts(data.data.products);
        setIsloading(false);
      })
      .catch(() => {
        setIsloading(false);
        setErrorMessage("");
      });
  };

  const handleFilterProductByCategory = async (category: string) => {
    setIsloading(true);
    filterProductsByCategory(category)
      .then((data) => {
        setProducts(data.data.products);
        setIsloading(false);
      })
      .catch(() => {
        setIsloading(false);
        setErrorMessage("");
      });
  };

  useEffect(() => {
    setIsloading(true);
    if (productSearch) {
      handleSearchProductByName(productSearch);
    } else if (categorySearch) {
      handleFilterProductByCategory(categorySearch);
    } else {
      setIsloading(true);
      getProducts()
        .then((data) => {
          setProducts(data.data.products);
          setIsloading(false);
        })
        .catch(() => {
          setIsloading(false);
          setErrorMessage("");
        });
    }
  }, [categorySearch, productSearch]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        errorMessage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
