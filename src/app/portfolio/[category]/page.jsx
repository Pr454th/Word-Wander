import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import { categories } from "./data";

export default function Category({ params }) {
  const { category } = params;
  const title = category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.items}>
        {categories[category].map((item) => (
          <div className={styles.item} key={item.title}>
            <div className={styles.imgContainer}>
              <Image
                src={item.img}
                fill={true}
                className={styles.img}
                alt="bg"
              />
            </div>
            <div className={styles.itemDetail}>
              <div className={styles.textTitle}>{item.title}</div>
              <div className={styles.textDesc}>
                {item.desc}
                <br />
                <br />
                <Button text="View More" href={"/portfolio"} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
