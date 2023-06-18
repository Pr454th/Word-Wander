import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return notFound();
  return res.json();
};

//Modifying metadata dynamically for each blog post-can't be done in react
export async function generateMetadata({ params }) {
  const data = await getData(params.id);
  return {
    title: data.title,
    description: data.desc,
  };
}

export default async function BlogPost({ params }) {
  const data = await getData(params.id);
  console.log(data);

  return (
    <div className="container">
      <div className={styles.title}>
        <h1>{data.title}</h1>
      </div>
      <div className={styles.item1}>
        <div className={styles.text}>
          <p style={{ textAlign: "justify" }}>{data.desc}</p>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={data.img}
            alt="Picture of the author"
            width={500}
            height={500}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item2}>
        <br />
        <hr />
        <span className={styles.field}>ID</span>
        <span className={styles.value}>{data._id}</span>
        <br />
        <hr />
        <span className={styles.field}>Username</span>
        <span className={styles.value}>{data.username}</span>
        <br />
        <hr />
        <span className={styles.field}>Content</span>
        <span className={styles.value}>{data.content}</span>
        <hr />
        <br />
      </div>
    </div>
  );
}
