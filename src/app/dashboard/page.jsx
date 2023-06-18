"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useState } from "react";

export default function Dashboard() {
  const session = useSession();
  const router = useRouter();
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `http://localhost:3000/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  if (session.status === "loading") return <div>Loading...</div>;

  if (session.status === "unauthenticated") router?.push("/dashboard/login");
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title: e.target.title.value,
      img: e.target.img.value,
      content: e.target.content.value,
      desc: e.target.desc.value,
      username: session?.data?.user?.name,
    };
    const res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    res.status === 201
      ? ((e.target.title.value = ""),
        (e.target.img.value = ""),
        (e.target.content.value = ""),
        (e.target.desc.value = ""),
        setErr(false),
        mutate())
      : setErrMsg("Something went wrong");
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/api/posts/${id}`, {
      method: "DELETE",
    });
    mutate();
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Dashboard</h1>
        </div>
        <div className={styles.items}>
          <div className={styles.item1}>
            <h2>Your Posts</h2>
            {data?.length === 0 && (
              <div className={styles.noPost}>
                You have not posted anything yet
              </div>
            )}
            {data ? (
              data.map((item) => (
                <div className={styles.post} key={item._id}>
                  <div className={styles.postImg}>
                    <Image
                      src={item.img}
                      fill={true}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.postInfo}>
                    <h3 className={styles.postTitle}>{item.title}</h3>
                    <p className={styles.postDesc}>{item.desc}</p>
                    <span
                      className={styles.postBtn}
                      onClick={() => handleDelete(item._id)}
                    >
                      Remove
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
          <div className={styles.item}>
            <h2>Create Post</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Title"
                name="title"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Image link"
                name="img"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Content"
                name="content"
                className={styles.input}
              />
              <textarea
                type="text"
                placeholder="Description"
                name="desc"
                className={styles.textarea}
              />
              <button type="submit" className={styles.send}>
                Post
              </button>
            </form>
            {err ? <div className={styles.err}>{errMsg}</div> : null}
          </div>
        </div>
      </div>
    );
  }

  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, error, isLoading } = useSWR(
  //   "https://jsonplaceholder.typicode.com/posts",
  //   fetcher
  //   );
  //   if (isLoading) return <div>Loading...</div>;
  //   if (error) return <div>Error...</div>;
  //   if (!data) return <div>No data...</div>;
  // return (
  //   <div>
  //     <h1>Dashboard</h1>
  //     <ul>
  //       {data.map((item) => (
  //         <li key={item.id}>{item.title}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}
