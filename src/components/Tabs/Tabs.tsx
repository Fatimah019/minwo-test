import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Tabs.module.css";

const categories = [
  "Smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "furniture",
  "tops",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];

const Tabs = React.memo(() => {
  const navigate = useNavigate();

  const search: string = useLocation().search;
  const categorySearch = new URLSearchParams(search).get("category");

  const handleProductFilter = (e: { currentTarget: { id: string } }) => {
    navigate({
      pathname: window.location.pathname,
      search: `?category=${e.currentTarget.id}`,
    });
  };

  return (
    <div className={styles.tab}>
      <ul className={styles.tab_pane}>
        {categories.map((category, _idx) => {
          return (
            <li
              key={_idx}
              id={category}
              onClick={handleProductFilter}
              className={categorySearch === category ? styles.active_tab : ""}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export { Tabs };
