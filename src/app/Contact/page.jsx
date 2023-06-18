"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

// export const metadata = {
//   title: "Contact Page",
//   description: "Created by KP.",
// };

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    res.status === 201 ? alert("Message sent") : alert("Something went wrong");

    e.target.name.value = "";
    e.target.email.value = "";
    e.target.message.value = "";
  };

  return (
    <>
      <div className={styles.pageTitle}>
        <h1>Let&apos;s Keep in touch</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.imgContainer}>
            <Image
              src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=600"
              fill={true}
              className={styles.img}
              alt="bg"
            />
          </div>
        </div>
        <div className={styles.item}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className={styles.input}
              name="name"
            />
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              name="email"
            />
            <textarea
              placeholder="Message"
              className={styles.textarea}
              name="message"
            />
            <button className={styles.send}>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
