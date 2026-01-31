"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./styles.modules.css";

export default function Robert() {
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
        The Robert Doll
      </h1>

      <Image
        src="/photos/robert.jpg"
        alt="Robert"
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
        Robert the Doll is reportedly a haunted doll exhibited at the East Martello Museum in Key West, Florida.
        He was once owned by painter, author, and Key West resident Robert Eugene Otto.
      </p>

      <h2 style={{ marginTop: "2.5rem", fontSize: "1.8rem", fontFamily: "'Playfair Display', serif" }}>
        Backstory
      </h2>

      <Image
        src="/photos/robert1.jpg"
        alt="Robert backstory"
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
          marginTop: "1rem",
          lineHeight: "2",
          maxWidth: "900px",
          fontSize: "1.15rem",
          color: "#eee",
          padding: "0 1rem",
          textAlign: "justify",
        }}
      >
        The doll originally belonged to Robert Eugene Otto, an artist described as "eccentric", who 
        belonged to a prominent Key West family. The doll was reportedly manufactured by the Steiff Company
        of Germany, purchased by Otto's grandfather while on a trip to Germany in 1904, and given to young Otto as 
        a birthday gift. The doll's sailor suit was likely an outfit that Otto wore as a child.
      </p>

      <Image
        src="/photos/robert2.jpg"
        alt="Robert backstory"
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
          marginTop: "1rem",
          lineHeight: "2",
          maxWidth: "900px",
          fontSize: "1.15rem",
          color: "#eee",
          padding: "0 1rem",
          textAlign: "justify",
        }}
      >
        According to legend, the doll has supernatural abilities that alllow it to move, change its facial expressions, 
        and make giggling sounds. Some versions of the legend claim that a young girl of "Bahamian descent" gave Otto the 
        doll as a gift or as "retaliation for a wrongdoing". Other stories claim that the doll moved voodoo 
        figurines around the room and was "aware of what went around him". Other legends claim that the doll 
        "vanished" after Otto's house changed ownership several times after his death, or that young Otto 
        triggered the doll's supernatural powers by blaming his childhood mishaps on the doll. According to local 
        folklore, the doll has caused "car accidents, broken bones, job loss, divorce, and a cornucopia of other misfortunes", 
        and museum visitors supposedly experience "post-visit misfortunes" for "failing to respect Robert".
      </p>

      <h2 style={{ marginTop: "2rem", fontSize: "1.8rem", fontFamily: "'Playfair Display', serif" }}>
        Fun Fact
      </h2>

      <Image
        src="/photos/robert3.jpg"
        alt="Robert fun fact"
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
          marginTop: "1rem",
          lineHeight: "2",
          maxWidth: "900px",
          fontSize: "1.15rem",
          color: "#eee",
          padding: "0 1rem",
          textAlign: "justify",
        }}
      >
        Robert the Doll is the inspiration behind the famous killer doll "Chucky" in the 1988 horror film "Child's Play"!
      </p>
    </div>
  );
}