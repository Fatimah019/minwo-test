import React, { useState } from "react";
import { Search } from "../Search/Search";
import { Tabs } from "../Tabs/Tabs";
import styles from "./Header.module.css";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  return (
    <header className={styles.header}>
      <h2>MINWO</h2>

      <Search />

      <button onClick={() => setShowCategories(!showCategories)}>
        All categories
        {showCategories && <Tabs />}
      </button>
    </header>
  );
};

export { Header };
