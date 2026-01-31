"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./styles.modules.css";

export default function Toyol() {
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
        Toyol
      </h1>


      <Image
        src="/photos/toyol.jpg"
        alt="Toyol"
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
        Toyol, or Tuyul, is an undead infant in Indonesian and Malay folklore. It also appears in various 
        parts of Southeast Asia and is typically invoked as a helper by shamans (dukun, pawang, bomoh) by 
        means of black magic. A common use for the toyol includes using it for financial gain, where the creature 
        robs people of their riches, making it similar to the Babi Ngepet, a boar demon in Indonesian mythology. 
        As such, the toyol is popularly known to bring good luck to its host, but mishap to those who are 
        unfortunate enough to encounter them.
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
        There is a distinct lack of research or information that trace the history of the toyol. Yet, according 
        to some blogs, the late academic Mohd Taib Osman suggested that the origins of owning a toyol date as 
        far back as pre-Islamic Arab society. Some have linked this to the prevalence of infanticide that took place 
        during that time.
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
        The toyol is traditionally and commonly described as looking no different from a near-naked toddler. 
        However, regional differences can account for variation in appearance and characteristics. The toyol is claimed 
        to look like a normal child with the exception of sharp teeth and red eyes, but the Indonesian Tuyul 
        has the addition of green skin and pointed ears. Modern depictions often give the toyol a goblin-like appearance 
        with green or grey skin, pointed ears, and clouded eyes. 
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
        In 2006, a fisherman from Kuala Pahang, Malaysia, reportedly found a toyol that has been enclosed in a 
        bottle on coastal shores. The toyol was handed over to the local state museum, where the director noted 
        its red eyes and black clothing.
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
        The toyol has also been used in theft crimes, not in the supernatural sense, but through the exploitation 
        of people's belief in the creature. In 2009, a 77-year-old woman living in Bukit Bandaraya, Malaysia, was 
        tricked into believing that her valuables were being targeted by a toyol through an anonymous phone call. 
        She was advise to hide them following specific instructions but soon found them to be stolen. Her resulting 
        loss amounted to RM700,000 which is nearly 240,000SGD.
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
        Legend says that you must feed the toyol milk and sweet food in order for it to obey you as their master.
      </p>
    </div>
  );
}