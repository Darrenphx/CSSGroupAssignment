"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./styles.modules.css";

export default function Terracotta() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "3rem",
        background: "linear-gradient(to bottom, #0f0d1e, #1a142e)",
        color: "white",
        fontFamily: "'Arial', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >

      <div style={{ alignSelf: "flex-start" }}>
        <Link
          href="/haunted_objects"
          style={{
            color: "#ccc",
            textDecoration: "underline",
            fontSize: "1rem",
            marginBottom: "1rem",
            transition: "color 0.3s",
          }}
        >
          ← Back to all haunted objects
        </Link>
      </div>

      <h1
        style={{
          marginTop: "1.5rem",
          fontSize: "2.5rem",
          fontWeight: "700",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        The Terracotta Army 
      </h1>


      <Image
        src="/photos/terracotta.jpg"
        alt="Terracotta"
        width={700}
        height={450}
        style={{
          marginTop: "2rem",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
          transition: "transform 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />


      <p
        style={{
          marginTop: "2rem",
          lineHeight: "1.8",
          maxWidth: "1100px",
          fontSize: "1.15rem",
          color: "#eee",
        }}
      >
        The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi 
        Huang, the first emperor of China. It is a form of funerary art buried with the emperor in 210-209 BCE 
        with the purpose of protecting him in the afterlife. 
      </p>

      <h2 style={{ marginTop: "2.5rem", fontSize: "1.8rem", fontFamily: "'Playfair Display', serif" }}>
        Backstory
      </h2>
      <p
        style={{
          marginTop: "1rem",
          lineHeight: "2",
          maxWidth: "900px",
          fontSize: "1.15rem",
          color: "#eee",
          padding: "0 1rem",
          textAlign: "justify",
        }}
      >
        The figures, dating from approximately the late 200s BCE, were discovered in 1974 by local 
        farmers in Lintong County, outside Xi'an, Shaanxi, China. The figures vary in height according to their 
        rank, the tallest being the generals. The figures include warriors, chariots and horses. Estimates from 2007 were 
        that the three pits containing the Terracotta Army hold more than 80,000 soldiers, 130 chariots with 520 
        horses, and 150 cavalry horses, the majority of which remain in situ in the pits near Qin Shi Huang's mausoleum. 
        Other, non-military terracotta figures have since been found in other pits, including those of officials, acrobats, strongmen, 
        and musicians.
      </p>

      <p
        style={{
          marginTop: "1rem",
          lineHeight: "2",
          maxWidth: "900px",
          fontSize: "1.15rem",
          color: "#eee",
          padding: "0 1rem",
          textAlign: "justify",
        }}
      >
        Fear surrounded the site due to the immense death toll during construction, reports of lethal booby traps, the discovery of 
        mercury, and a "curse" upon the farmers who found it.
      </p>

      <h2 style={{ marginTop: "2rem", fontSize: "1.8rem", fontFamily: "'Playfair Display', serif" }}>
        Fun Fact
      </h2>
      <p
        style={{
          marginTop: "1rem",
          lineHeight: "2",
          maxWidth: "900px",
          fontSize: "1.15rem",
          color: "#eee",
          padding: "0 1rem",
          textAlign: "justify",
        }}
      >
        No two are alike - Each of the thousands of soldiers has a unique face and expression, likely modeled after real soldiers in the Qin dynasty.
      </p>
    </div>
  );
}