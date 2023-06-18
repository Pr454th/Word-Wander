import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Discover Our Vision</h1>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/images/2.jpg"
          fill={true}
          className={styles.img}
          alt="bg"
        />
        <h1 className={styles.imgTitle}>Nature</h1>
        <h2 className={styles.imgDesc}>
          Immerse yourself in the breathtaking beauty of nature&apos;s tapestry,
          as we showcase stunning pictures of trees that will transport you to
          serene and captivating landscapes.
        </h2>
      </div>
      <div className={styles.item}>
        <div className={styles.part}>
          <h1 className={styles.textTitle}>
            What is the purpose of this blog?
          </h1>
          <p className={styles.testDesc} style={{ textAlign: "justify" }}>
            This blog aims to provide insightful and engaging content on various
            topics such as technology, lifestyle, and personal development. Our
            goal is to share valuable information, tips, and perspectives that
            can inspire and empower our readers to lead a more informed and
            fulfilling life.
          </p>
        </div>
        <div className={styles.part}>
          <h1 className={styles.textTitle}>
            {" "}
            Who are the authors behind this blog?
          </h1>
          <p className={styles.testDesc} style={{ textAlign: "justify" }}>
            Our blog is authored by a team of passionate individuals who have
            expertise in different fields. We have professionals from the
            technology industry, seasoned writers, and subject matter experts
            who bring diverse perspectives and knowledge to our content.
            Collectively, we strive to deliver well-researched and
            thought-provoking articles that cater to the interests of our
            readers.
          </p>
          <br />
          <Button text={"Contact"} href={"/"} />
        </div>
      </div>
    </div>
  );
}
