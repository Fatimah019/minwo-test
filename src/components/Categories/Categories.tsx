import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Categories.module.css";

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

const Categories = () => {
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
              data-testid={category}
              key={`${_idx}${category}`}
              id={category}
              className={categorySearch === category ? styles.active_tab : ""}
              onClick={handleProductFilter}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Categories };
