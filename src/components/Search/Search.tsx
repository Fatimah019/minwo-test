import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Search.module.css";
const Search = React.memo(() => {
  const [searchVal, setSearchVal] = useState("");

  const navigate = useNavigate();

  console.log("search");

  return (
    <div className={styles.search_wrapper}>
      <input
        type="text"
        placeholder="Search..."
        value={searchVal}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchVal(e.target.value)
        }
      />
      {searchVal.length > 0 && (
        <button
          onClick={() => {
            navigate({
              pathname: window.location.pathname,
              search: `?search=${searchVal}`,
            });
            setSearchVal("");
          }}
          type="button"
        >
          search
        </button>
      )}
    </div>
  );
});

export { Search };
