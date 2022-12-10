import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CategoriesContext } from "../../services/context/Categories";
import styles from "./Tabs.module.css";

const Tabs = React.memo(() => {
  const categories = useContext(CategoriesContext);

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
        {categories?.categories.map((category: string, _idx: string) => {
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
