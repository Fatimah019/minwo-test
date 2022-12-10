import { IProduct } from "../../models/product";
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
  return (
    <div className={styles.product_wrapper}>
      <div>
        <div className={styles.product_thumbnail_section}>
          <img src={thumbnail} alt="thumbnail" className={styles.thumbnail} />
          <div className={styles.thumbnail_info}>
            <label>{category.toUpperCase()}</label>
            <p>{title}</p>
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
        <img
          src={images[0]}
          //   key={index}
          alt="products"
          className={styles.product_image}
        />
        {/* {images.map((item, index) => {
          return (
            <img
              src={item}
              key={index}
              alt="products"
              className={styles.product_image}
            />
          );
        })} */}
      </div>
    </div>
  );
};

export { Product };
