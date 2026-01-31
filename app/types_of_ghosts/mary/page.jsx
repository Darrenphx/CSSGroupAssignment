"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./styles.modules.css";

export default function Mary() {
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
        Bloody Mary
      </h1>


      <Image
        src="/photos/bmary.jpg"
        alt="Mary"
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
        Bloody Mary is a legend of a ghost, phantom, witch, or spirit, conjured to reveal the future. 
        She is said to appear in a mirror when her name is chanted repeatedly. The Bloody Mary apparition 
        may be benevolent or malevolent, depending on historical variations of the legend. Bloody Mary appearances 
        are mostly witnessed in group participation play.
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
        In the modern ritual that began to coalesce in the late 1960s, Bloody Mary allegedly appears to individuals 
        or groups who ritualistically invoke her name in an act of catoptromancy. This is done by repeatedely chanting her 
        name into a mirror placed in a dim or candle-lit room. More modern versions of the rituals are played in a restroom. 
        The name must be uttered 3 times. Some stories suggest you must chant her name into the bathroom mirror 47 
        times before she will come out. 
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
        The Bloody Mary apparitions allegedly appears as a corpse, witch, and ghost that can 
        either be friendly, evil, or a demonic spirit, and is sometimes seen covered in blood (hence the name). The lore surrounding 
        the ritual states that participants may endure the apparition screaming at them, cursing them, strangling them, stealing their 
        soul, drinking their blood, or scratching their eyes out.  
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
        In sleepover sightings, some claim that the lights flickered and a face appeared for a split second.
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
        There is some debate on the identification of Bloody Mary and if she is based on a real woman.
      </p>
    </div>
  );
}