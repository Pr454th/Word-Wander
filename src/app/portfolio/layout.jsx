import React from "react";
import styles from "./page.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <div className={styles.heading}>
        <h1>Portfolio</h1>
      </div>
      {children}
    </div>
  );
}
