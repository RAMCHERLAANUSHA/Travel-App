import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        placeholder="Search temples..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
    </div>
  );
}
