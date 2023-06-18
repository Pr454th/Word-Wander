import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

export default function Button({ text, href }) {
  return (
    <Link href={href}>
      <button className={styles.works}>{text}</button>
    </Link>
  );
}
