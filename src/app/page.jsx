import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design for your Digital Works.</h1>
        <p className={styles.desc}>Turning your ideas into reality.</p>
        <Button text={"See Our Works"} href={"/"} />
      </div>
      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600"
            fill={true}
            className={styles.image}
            alt="bg"
          />
        </div>
      </div>
    </div>
  );
}
