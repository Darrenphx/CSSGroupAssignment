"use client";

import Link from "next/link";

export default function Salem() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "3rem",
        background: "linear-gradient(to bottom, #0f0d1e, #1a142e)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",   // centers everything horizontally
        textAlign: "center", 
        
      }}
    >
      <div style={{ alignSelf: "flex-start" }}>
      <Link href="/haunted_places" style={{ color: "#ccc", textDecoration: "underline" ,}}>
        ← Back to all haunted places
      </Link>
      </div>

      <h1 style={{
          marginTop: "1.5rem",
          fontSize: "2.5rem",
          fontWeight: "700",
          fontFamily: "'Playfair Display', serif",}}>Salem, Massachusetts</h1>

      <img
        src="/photos/Salem.webp"
        style={{
          width: "100%",
          maxWidth: "700px",
          marginTop: "2rem",
          borderRadius: "12px",
          boxShadow:"0 8px 20px rgba(0,0,0,0.5)",
          transition: "transform 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />

      <p
        style={{
          marginTop: "2rem",
          lineHeight: "1.7",
          maxWidth: "1100px",
          fontSize: "1.1rem",
        }}
      >
        Salem is most known for the 1692 Witch Trials. Today, it embraces its dark past
        with museums, walking tours, candlelit reenactments, and October festivals that attract
        over a million visitors each year. The Witch House and the Salem Witch Trials Memorial
        remain must-see landmarks for those curious about its haunted history.
      </p>

      {/* Origins Section */}
      <h2 style={{ marginTop: "2.5rem", fontSize: "1.8rem", fontFamily: "'Playfair Display', serif" }}>
        Origins
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
        Salem is most known for the infamous 1692 Witch Trials, where mass hysteria led to
        accusations, trials, and executions of alleged witches. The town’s dark history has
        shaped its cultural identity and made it a focal point for historical tourism.
      </p>

      {/* Sightings Section */}
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
        Visitors and locals report strange occurrences around the town’s historic sites,
        including ghostly footsteps, shadowy figures, and unexplained cold drafts.
        October events often feature paranormal tours where people claim to witness spirits.
      </p>

      {/* Additional Notes (optional) */}
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
        Today, Salem attracts over a million visitors each year for walking tours, candlelit
        reenactments, museums, and seasonal festivals. The Witch House and Witch Trials Memorial
        are popular stops for those intrigued by its haunted history.
      </p>
    </div>
  );
}
