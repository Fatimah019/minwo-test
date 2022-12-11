import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Tabs.module.css";

const categories = [
  "Smartphones",
  "Laptops",
  "Fragrances",
  "Skincare",
  "Groceries",
  "Furniture",
  "Tops",
  "Sunglasses",
  "Automotive",
  "Motorcycle",
  "Lighting",
];

const Tabs = () => {
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
        {categories.map((category: string, _idx: any) => {
          return (
            <li
              key={`${_idx}${category}`}
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
};

export { Tabs };
