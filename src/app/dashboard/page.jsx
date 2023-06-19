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
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `https://word-wander-five.vercel.app/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  if (session.status === "loading") return <div>Loading...</div>;

  if (session.status === "unauthenticated") router?.push("/dashboard/login");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title: e.target.title.value,
      img: e.target.img.value,
      content: e.target.content.value,
      desc: e.target.desc.value,
      username: session?.data?.user?.name,
    };
    const res = await fetch("https://word-wander-five.vercel.app/api/posts", {
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
    await fetch(`https://word-wander-five.vercel.app/api/posts/${id}`, {
      method: "DELETE",
    });
    mutate();
  };

  const Edit = async (item) => {
    document.querySelector("input[name=title]").value = item.title;
    document.querySelector("input[name=img]").value = item.img;
    document.querySelector("input[name=content]").value = item.content;
    document.querySelector("textarea[name=desc]").value = item.desc;
    setId(item._id);
    setEdit(true);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const body = {
      title: document.querySelector("input[name=title]").value,
      img: document.querySelector("input[name=img]").value,
      content: document.querySelector("input[name=content]").value,
      desc: document.querySelector("textarea[name=desc]").value,
      username: session?.data?.user?.name,
    };
    console.log(body);
    const res = await fetch(
      `https://word-wander-five.vercel.app/api/posts/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    res.status === 201
      ? ((document.querySelector("input[name=title]").value = ""),
        (document.querySelector("input[name=img]").value = ""),
        (document.querySelector("input[name=content]").value = ""),
        (document.querySelector("textarea[name=desc]").value = ""),
        setEdit(false),
        mutate())
      : setErrMsg("Something went wrong");
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
                      alt="bg"
                    />
                  </div>
                  <div className={styles.postInfo}>
                    <h3 className={styles.postTitle}>{item.title}</h3>
                    <p
                      className={styles.postDesc}
                      style={{ textAlign: "justify" }}
                    >
                      {item.desc}
                    </p>
                    <div className={styles.controls}>
                      <span
                        className={styles.editBtn}
                        onClick={() => Edit(item)}
                      >
                        Edit
                      </span>
                      <span
                        className={styles.postBtn}
                        onClick={() => handleDelete(item._id)}
                      >
                        Remove
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
          <div className={styles.item}>
            {edit ? <h2>Edit Post</h2> : <h2>Create Post</h2>}
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Title"
                name="title"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Image link (only from pexels.com)"
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
              {edit ? (
                <button
                  type="submit"
                  className={styles.send}
                  onClick={handleEdit}
                >
                  Edit
                </button>
              ) : (
                <button type="submit" className={styles.send}>
                  Post
                </button>
              )}
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
