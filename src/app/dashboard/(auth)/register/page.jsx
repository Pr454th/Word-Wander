"use client";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      });
      res.status === 201 &&
        router.push(
          "/dashboard/login?success=Account has been created successfully"
        );
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Register</h1>
      </div>
      <div className={styles.item}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
          />
          <button type="submit" className={styles.send}>
            Register
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className={styles.or}>
          <h3>OR</h3>
          <Link href="/dashboard/login" className={styles.link}>
            Login with an existing account
          </Link>
        </div>
      </div>
    </div>
  );
}
