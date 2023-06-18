"use client";
import React from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [error, setError] = useState(false);
  const session = useSession();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    signIn("credentials", {
      email: e.target.email.value,
      password: e.target.password.value,
    });
  };

  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Login</h1>
      </div>
      <div className={styles.item}>
        <form className={styles.form} onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className={styles.or}>
          <h3>OR</h3>
          <button
            className={styles.button}
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/dashboard",
              })
            }
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}
