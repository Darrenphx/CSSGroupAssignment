"use client";

import Link from "next/link";
import Image from "next/image";

export default function Diamond() {
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
        The Hope Diamond
      </h1>


      <Image
        src="/photos/hopediamond.jpg"
        alt="Diamond"
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
        The Hope Diamond, also known as Le Bijou du Roi ("the King's Jewel"), is by far one of the most notorious diamonds of all time, shrouded 
        in mystery with legends as multifaceted as the diamond itself. It is a magnificent deep-blue 
        colour and weighs 45.52 carats. As beautiful as it is, you probably would not want to wear or own it, 
        as it is supposedly cursed...
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
        The story goes that the curse began with the Tarvenier Blue, which was the precursor to several large 
        diamonds, including the Hope Diamond. Jean-Baptiste Tavernier, a 17th century French merchant who 
        traded gems, allegedly stole the 115.16-carat blue diamond from a Hindu statue, where it was serving as one 
        of the eyes. Upon discovering it was missing, the priests put a curse on whoever was in possession of the gem. 
        It is said that Tavernier came down with a raging fever soon after stealing the 
        diamond and soon after passed away. However, other reports show that he lived until the old age of 84.
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
        After King Louis XIV's death, Louis XVI and his spouse, Marie Antoinette, inherited the French Blue Diamond. 
        Louis XVI was guillotined during France's turbulent political era and his wife met the same fate nine months later. 
        Some say that their death was the result of the Hope Diamond's curse.
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
        While it appears blue, its phosphorescence is a "strong red"!
      </p>
    </div>
  );
}