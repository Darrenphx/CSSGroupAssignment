import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.body}>
      <div className={styles.headerimage}>
        <Image
          src="/photos/103125-lifestance-fear.webp"
          alt="header photo"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <h1 className={styles.headertitle}>Paranormal</h1>
        <div className={styles.scrolldown}>Scroll down</div>
      </div>
    </main>
  );
}















