"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./styles.modules.css";

export default function La() {
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
          href="/types_of_ghosts"
          style={{
            color: "#ccc",
            textDecoration: "underline",
            fontSize: "1rem",
            marginBottom: "1rem",
            transition: "color 0.3s",
          }}
        >
          ← Back to all the types of supernatural beings
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
        La Llorona
      </h1>


      <Image
        src="/photos/la.jpg"
        alt="La Llorona"
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
        La Llorona, also known as the "Crying Woman" or the "Weeping Woman", is a vengeful ghost 
        in Hispanic American folklore who is said to roam near bodies of water moruning her children 
        whom she drowned in a jealous rage after discovering her husband was unfaithful to her. 
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
        The earliest documentation of La Llorona is traced back to 1550 in Mexico City. But there are theories
        about her story being connected to specific Aztec mythological creation stories. "The Hungry Woman" includes
        a wailing woman constantly crying for food, which has been compared to La Llorona's signature 
        nocturnal wailing for her children. The motherly nature of La Llorona's tragedy has been compared to Cihuacoatl, 
        an Aztec goddess deity of motherhood. Her seeking of children to keep for herself is significantly compared to 
        Coatlicue, known as "Our Lady Mother" or Tonantzin (who is also comparable to the Virgen de Guadalupe, another
        significant mother figure in Mexican culture), also a monster that devours filth or sin.
      </p>

      <h2 style={{ marginTop: "2rem", fontSize: "1.8rem", fontFamily: "'Playfair Display', serif" }}>
        Sightings
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
        In Xochimilco canals, Mexico City, boatmen and tourists reportedly said that they've heard a woman crying at night. 
        Additionally, they saw a white figure standing near the water, who's said to vanish when approached.
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
        Parents use the legend of La Llorona as a warning story for children, telling them to not go near the river 
        at night if not La Llorona would get them. 

        Aside from that, legend says:
        If her cry sounds near, she's actually far.
        If her cry sounds far, she's actually near...
      </p>
    </div>
  );
}