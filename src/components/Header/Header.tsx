import { useState } from "react";
import { Search } from "../Search/Search";
import { Categories } from "../Categories/Categories";
import styles from "./Header.module.css";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  return (
    <header className={styles.header}>
      <h2>MINWO</h2>

      <div className={styles.search_section}>
        <Search />
      </div>

      <button
        onClick={() => setShowCategories(!showCategories)}
        className={styles.categories_button}
      >
        All categories
        {showCategories ? (
          <i className="fa fa-angle-up" />
        ) : (
          <i className="fa fa-angle-down" />
        )}
        {showCategories && <Categories />}
      </button>
    </header>
  );
};

export { Header };
