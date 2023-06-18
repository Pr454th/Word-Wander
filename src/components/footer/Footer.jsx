import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>@2023 wordwander. All rights reserved.</div>
      <div>
        <Image
          src="/images/facebook.png"
          width={22}
          height={22}
          className={styles.icon}
        />
        <Image
          src="/images/twitter.png"
          width={24}
          height={24}
          className={styles.icon}
        />
        <Image
          src="/images/instagram.png"
          width={24}
          height={24}
          className={styles.icon}
        />
      </div>
    </div>
  );
}
