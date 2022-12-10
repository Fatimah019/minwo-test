import React from "react";
import styles from "./EmptyProductList.module.css";

const EmptyProductList = () => {
  return <div className={styles.empty_product_container}>No Product Found</div>;
};

export { EmptyProductList };
