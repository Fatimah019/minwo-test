import { useContext } from "react";
import { WarningMessage, Loader, Product } from "../../components";
import { ProductsContextType } from "../../@types/product";
import { ProductsContext } from "../../services/context/Products";
import styles from "./Products.module.css";

const Products = () => {
  const { products, isLoading, errorMessage } = useContext(
    ProductsContext
  ) as ProductsContextType;

  return (
    <div className={styles.products_container}>
      <h1 className={styles.heading}>Products</h1>
      <WarningMessage message={errorMessage} />

      {isLoading && <Loader />}

      {!isLoading && products && products.length === 0 ? (
        <WarningMessage message="No Product Found" />
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
};

export { Products };
