import { createContext, ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IProduct, ProductsContextType } from "../../@types/product";
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
    await searchProductsByName(productName)
      .then((data) => {
        setProducts(data.data.products);
        setIsloading(false);
      })
      .catch((err) => {
        setIsloading(false);
        setErrorMessage(err);
      });
  };

  const handleFilterProductByCategory = async (category: string) => {
    setIsloading(true);
    await filterProductsByCategory(category)
      .then((data) => {
        setProducts(data.data.products);
        setIsloading(false);
      })
      .catch((err) => {
        setIsloading(false);
        setErrorMessage(err);
      });
  };

  useEffect(() => {
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
        .catch((err) => {
          setIsloading(false);
          setErrorMessage(err);
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
