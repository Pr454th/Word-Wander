import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "Item title",
    img: "/images/1.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien ut libero venenatis faucibus. Nullam qu",
  },
  {
    title: "Item title",
    img: "/images/2.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien ut libero venenatis faucibus. Nullam qu",
  },
  {
    title: "Item title",
    img: "/images/3.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien ut libero venenatis faucibus. Nullam qu",
  },
  {
    title: "Item title",
    img: "/images/1.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien ut libero venenatis faucibus. Nullam qu",
  },
  {
    title: "Item title",
    img: "/images/2.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien ut libero venenatis faucibus. Nullam qu",
  },
];

export default async function Blog() {
  async function getData() {
    const res = await fetch("http://127.0.0.1:3000/api/posts", {
      next: { revalidate: 10 },
    });
    if (!res.ok) {
      console.log(res);
      throw new Error(res.status);
    }
    console.log(res);
    return res.json();
  }
  const title = "Blogs";
  const data = (await getData()) || null;
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>
      <div className={styles.items}>
        {data.map((item) => (
          <Link href={`/blog/${item._id}`} key={item._id}>
            <div className={styles.item}>
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
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
