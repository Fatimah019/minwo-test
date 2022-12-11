import styles from "./Loader.module.css";

const Shimmer = () => {
  return (
    <div className={styles.loader_wrapper}>
      <div className={styles.left_loader_product_wrapper}>
        <div className={styles.product_loader_thumbnail_section}>
          <div className={styles.loader_thumbnail}></div>

          <div className={styles.loader_thumbnail_info}>
            <div className={styles.loader_label}></div>
            <p className={styles.loader_thumbnail_title}></p>
            <button></button>
          </div>
        </div>

        <table className={styles.loading_product_info}>
          <tbody>
            <tr>
              <td>Rating</td>
              <td></td>
            </tr>
            <tr>
              <td>Discount Percentage</td>
              <td></td>
            </tr>
            <tr>
              <td>Stock</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <p className={styles.loading_product_description}></p>
      </div>

      <div className={styles.loader_image_wrapper}></div>
    </div>
  );
};

const Loader = () => {
  return (
    <>
      <Shimmer />
      <Shimmer />
    </>
  );
};

export { Loader };
