import { useState } from "react";
import { IProduct } from "../../@types/product";
import styles from "./Product.module.css";

const Product = ({
  thumbnail,
  category,
  title,
  rating,
  discountPercentage,
  stock,
  description,
  images,
  price,
}: IProduct) => {
  const [productImageIndex, setProductImageIndex] = useState(0);

  const getNextImage = () => {
    setProductImageIndex((newValue) => newValue + 1);
  };

  const getPreviousImage = () => {
    setProductImageIndex((newValue) => newValue - 1);
  };

  return (
    <div className={styles.product_wrapper}>
      <div className={styles.left_product_wrapper}>
        <div className={styles.product_thumbnail_section}>
          <img src={thumbnail} alt="thumbnail" className={styles.thumbnail} />
          <div className={styles.thumbnail_info}>
            <label>{category.toUpperCase()}</label>
            <p className={styles.thumbnail_title}>{title}</p>
            <button>Buy for ${price}</button>
          </div>
        </div>

        <table className={styles.product_info}>
          <tbody>
            <tr>
              <td>Rating</td>
              <td>{rating}</td>
            </tr>
            <tr>
              <td>Discount Percentage</td>
              <td>{discountPercentage}</td>
            </tr>
            <tr>
              <td>Stock</td>
              <td>{stock}</td>
            </tr>
          </tbody>
        </table>

        <p className={styles.product_description}>{description}</p>
      </div>

      <div className={styles.product_image_wrapper}>
        {images.length > 1 && (
          <button
            onClick={getPreviousImage}
            disabled={productImageIndex === 0}
            className={styles.angle_bracket}
          >
            &#x276E;
          </button>
        )}

        <img
          src={images[productImageIndex]}
          alt="products"
          className={styles.product_image}
        />
        {images.length > 1 && (
          <button
            onClick={getNextImage}
            disabled={productImageIndex === images.length - 1}
            className={styles.angle_bracket}
          >
            &#x276F;
          </button>
        )}
      </div>
    </div>
  );
};

export { Product };
