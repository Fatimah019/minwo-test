import React, { useContext } from "react";
import {
  EmptyProductList,
  Loader,
  Product,
  ProductError,
  Search,
} from "../../components";
import { ProductsContextType } from "../../models/product";
import { ProductsContext } from "../../services/context/Products";
import styles from "./Products.module.css";

const Products = React.memo(() => {
  const { products, isLoading, isError } = useContext(
    ProductsContext
  ) as ProductsContextType;

  return (
    <>
      <div className={styles.search_wrapper}>
        <Search />
      </div>
      <h2 className={styles.heading}>Products</h2>

      <div className={styles.products_container}>
        {isError && <ProductError />}

        {isLoading && <Loader />}

        {products && products.length === 0 && !isLoading ? (
          <EmptyProductList />
        ) : (
          products.map((product, _idx) => {
            return (
              <Product
                key={_idx}
                title={product.title}
                description={product.description}
                price={product.price}
                discountPercentage={product.discountPercentage}
                rating={product.rating}
                stock={product.stock}
                category={product.category}
                thumbnail={product.thumbnail}
                images={product.images}
              />
            );
          })
        )}
      </div>
    </>
  );
});

export { Products };
