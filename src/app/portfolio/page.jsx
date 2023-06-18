import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Our Works</div>
      <div className={styles.items}>
        <Link href="/portfolio/applications" className={styles.item}>
          <div className={styles.imgContainer}>
            <Image
              src="/images/1.jpg"
              width={300}
              height={300}
              className={styles.img}
              alt="bg"
            />
          </div>
          <div className={styles.itemTitle}>Applications</div>
        </Link>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <div className={styles.imgContainer}>
            <Image
              src="/images/2.jpg"
              width={300}
              height={300}
              className={styles.img}
              alt="bg"
            />
          </div>
          <div className={styles.itemTitle}>Illustrations</div>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <div className={styles.imgContainer}>
            <Image
              src="/images/3.jpg"
              width={300}
              height={300}
              className={styles.img}
              alt="bg"
            />
          </div>
          <div className={styles.itemTitle}>Websites</div>
        </Link>
      </div>
    </div>
  );
}
