"use client";

import Link from "next/link";
import Image from "next/image";

export default function Tomb() {
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
        Tomb of Tutankhuamun
      </h1>


      <Image
        src="/photos/tomb.jpg"
        alt="Tomb"
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
        The Tomb of Tutankhamun (reigned 1332-1323 BC), a pharaoh of Eighteenth Dynasty of ancient Egypt, 
        is located in the Valley of the Kings. Like other pharaohs, Tutankhamun was buried with a wide variety 
        of funerary objects and personal possessions, such as coffins, furniture, clothing, and jewelry, though in 
        the unusually limited space these goods had to be densely packed. 
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
        The spectacular nature of the tomb goods inspired a media frenzy, dubbed "Tutmania", that made Tutankhamun into 
        one of the most famous pharaohs, often known by the nickname "King Tut". In the Western world, the publicity inspired a 
        fad for ancient Egyptian-inspired design motifs. In Egypt, it reinforced the ideology of pharaonism, which emphasized modern 
        Egypt's connection to its ancient past and had risen to prominence during Egypt's struggle for independence from British rule from 
        1919 to 1922. The publicity increased when Carnarvon died of an infection in April 1923, inspiring rumours that he had been 
        killed by a curse on the tomb. Other deaths or strange events connected with the tomb came to be attributed to the curse as well.
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
        The tomb of Tutankhamun was the only royal burial found intact in modern times!
      </p>
    </div>
  );
}