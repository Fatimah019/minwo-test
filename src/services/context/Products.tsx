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
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isError, setIsError] = useState(false);
  const search: string = useLocation().search;
  const productSearch = new URLSearchParams(search).get("search");
  const categorySearch = new URLSearchParams(search).get("category");

  const handleSearchProductByName = (productName: string) => {
    searchProductsByName(productName)
      .then((data) => {
        if (data.status !== 200) {
          setIsError(true);
        }
        setProducts(data.data.products);
      })
      .catch(() => {
        setIsloading(false);
      });
  };

  const handleFilterProductByCategory = (category: string) => {
    filterProductsByCategory(category)
      .then((data) => {
        if (data.status !== 200) {
          setIsError(true);
        }
        setProducts(data.data.products);
      })
      .catch(() => {
        setIsloading(false);
      });
  };

  useEffect(() => {
    // setIsloading(true);
    if (productSearch) {
      handleSearchProductByName(productSearch);
      setIsloading(false);
    } else if (categorySearch) {
      handleFilterProductByCategory(categorySearch);
      setIsloading(false);
    } else {
      setIsloading(true);
      getProducts()
        .then((data) => {
          if (data.status !== 200) {
            setIsError(true);
            setIsloading(false);
          }
          setProducts(data.data.products);
          setIsloading(false);
        })
        .catch(() => {
          setIsloading(false);
        });
    }
  }, [categorySearch, productSearch]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        isError,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
