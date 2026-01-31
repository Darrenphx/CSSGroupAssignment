"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./styles.modules.css";

export default function Box() {
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
        The Dybbuk Box
      </h1>


      <Image
        src="/photos/box.jpg"
        alt="Box"
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
        The Dybbuk box, or Dibbuk box, is an antique wine-cabinet claimed to be haunted by a dybbuk, 
        a concept from Jewish mythology. The box drew attention when it was auctioned off on eBay by 
        owner Kevin Mannis, who created a story featuring Jewish Holocaust survivors and paranormal claims 
        as part of his eBay item description. Mannis's story was the inspiration for the 2012 horror film 
        "The Possession". 
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
        In 2003, writer and furniture refinishing business owner Kevin Mannis purchased the cabinet from the 
        yard sale of a local attorney in Portland, Oregon, and began developing a backstory. Mannis's auction 
        description included a story claiming the cabinet was previously owned by a survivor of the Holocaust in 
        Poland, who said it contained the malicious spirit of a dybbuk, and that the box had paranormal powers 
        and was responsible for his bad luck and nightmares. Subsequent owners retold Mannis' story when 
        reselling the item and amplified it with their own claims of 'strange phenomena'.
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
        In 2021, Mannis told Input magazine that the Dybbuk Box story was entirely fictional...
      </p>
    </div>
  );
}