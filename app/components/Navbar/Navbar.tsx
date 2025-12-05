"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
    <div className={styles.dot} />

    <Link href="/" className={styles.item}>
        Home
    </Link>
    <div className={styles.dot} />

      <Link href="/projects" className={styles.item}>
        Projects
      </Link>

      <div className={styles.dot} />

      <Link href="/resume" className={styles.item}>
        Resume
      </Link>

      <div className={styles.dot} />

      <Link href="/contact" className={styles.item}>
        Contact
      </Link>
      <div className={styles.dot} />

      
    </nav>
  );
}
