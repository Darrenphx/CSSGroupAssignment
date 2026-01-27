"use client";

import Link from "next/link";

export default function Tower() {
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
          href="/haunted_places"
          style={{ color: "#ccc", textDecoration: "underline", fontSize: "1rem" }}
        >
          ← Back to all haunted places
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
        Tower of London, England
      </h1>

      <img
        src="/photos/tower.webp"
        alt="Tower of London"
        style={{
          width: "100%",
          maxWidth: "700px",
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
        The Tower of London has a millennium of dark history with executions and betrayals.
        Visitors report sightings of Anne Boleyn’s ghost and other spirits, while the tower’s
        ravens remain one of the most photographed spooky attractions.
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
        The Tower of London is a historic castle built on the River Thames in the city’s 
        center. It was founded in 1066 as part of the Norman Conquest of England. Like 
        other places with a past filled with skullduggery and fear, the Tower is said 
        to be haunted. Most of the ghosts are unfortunate souls who met an untimely–and
         many times unjust–death. (Including death by grizzly bear.) On your London vacation,
          visiting the Tower, regardless of questionable spooks, is a must. Here are thirteen
           spirits that are most often reported.
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
        There is a well known ghost called "White Woman" of the Tower of London. Often, visitors only glimpse a figure
         in white in the corner of their eyes. Then, quite suddenly, they smell the terrible, pungent smell of an old, 
         overpowering perfume. Some visitors then describe the feeling of the world closing in around them; and chills
          run from their neck down their spine. In recent years, tourists to the tower have even reported the sensation 
        that something is tapping them on the shoulder.


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
        The castle was severely damaged during Blitz in the Second World War, but it was repaired and opened to the public. 
        Today, the castle is cared for by the Historic Royal Palace, a charity, and protected as a World Heritage Site.


      </p>
    </div>
  );
}
