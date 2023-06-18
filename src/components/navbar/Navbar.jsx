"use client";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about", label: "About" },
  { href: "/Contact", label: "Contact" },
  { href: "/dashboard/login", label: "Login" },
  { href: "/dashboard/register", label: "Register" },
];

export default function Navbar() {
  const session = useSession();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">WordWander</Link>
      </div>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map(({ href, label }) =>
          label === "Login" && session.status === "authenticated" ? null : (
            <Link href={href} key={href} className={styles.link}>
              {label}
            </Link>
          )
        )}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
