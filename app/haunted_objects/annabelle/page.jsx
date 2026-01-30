"use client";

import Link from "next/link";
import Image from "next/image";

export default function Annabelle() {
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
        The Annabelle Doll
      </h1>


      <Image
        src="/photos/annabelle.jpg"
        alt="Annabelle"
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
        The Annabelle Doll is a Raggedy Ann doll that is claimed to be haunted. According to Ed and Lorraine 
        Warren, the doll frightened its owner, so it was moved to their (now closed) museum in Connecticut
        during the 1970s. Academics and science writers have dismissed their claims as myth and folklore. 
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
        According to the Warrens, they were given the doll in the 1970s by a 28-year-old student nursed 
        named Donna from Hartford, Connecticut, who claimed that the doll could move by itself and
        exhibited malicious and frightening behaviour. The Warrens said a psychic medium has told the student 
        nurse and her roomate that the doll has been taken over by the spirit of a dead 6-year-old girl 
        named Annabelle Higgins. The Warrens claimed the doll was demonically possessed and subsequently 
        placed it in a display box at their Occult Museum in Monroe, Connecticut.
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
        The Warrens publicised various claims about Annabelle over time. Supposedly, the doll inflicted 
        "psychic slashes" that drew blood from victims, caused a priest who insulted the doll to run his car into a tree,
        and stabbed a homicide detective, forcing him into early retirement.
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
        A character based on the Warrens' story is one of the antagonists that appear in the fictional Conjuring Universe!
      </p>
    </div>
  );
}