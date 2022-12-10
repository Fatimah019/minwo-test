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
  const { products, isLoading, errorMessage } = useContext(
    ProductsContext
  ) as ProductsContextType;

  return (
    <div className={styles.products_container}>
      <ProductError message={errorMessage} />

      {isLoading && <Loader />}

      {!isLoading && products && products.length === 0 ? (
        <EmptyProductList />
      ) : (
        !isLoading &&
        products?.map((product, _idx) => {
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
  );
});

export { Products };
