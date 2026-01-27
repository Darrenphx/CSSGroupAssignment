"use client";

import Link from "next/link";

export default function Penitentiary() {
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
        Eastern State Penitentiary, Philadelphia
      </h1>

      <img
        src="/photos/eastern.jpg"
        alt="Eastern State Penitentiary"
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
        Once one of America’s harshest prisons, Eastern State Penitentiary now hosts ghost tours
        and immersive horror events. Visitors report strange figures, slamming cell doors,
        and eerie noises throughout its historic guard towers.
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
        Criminal justice in the 1700s was quite different than it is today. Let's 
        say you made the mistake of stealing gold jewelry from your rich boss and 
        you got caught. You would expect to be flogged, whipped, or even hang from 
        the gallows.

       The Quakers of early Philadelphia were pacifists and of course felt uneasy 
       with this. That's when they dreamt up a world where criminals could be 
       forced to truly, genuinely regret their crimes without being physically
        touched. Construction for Eastern State Penitentiary started in 1821. The 
        Quakers had no idea their lofty goal would eventually become considered 
        one of the cruelest forms of corporal punishment.
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
        Cellblock 12 is known for echoing voices and cackling; Cellblock 6 for shadowy figures
         darting along the walls; Cellblock 4 for visions of ghostly faces. Many people have 
         reported seeing a silhouette of a guard in one of the towers. Footsteps. Wails. 
         Whispers. The same stories, over and over again.
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
        The penitentiary hosts a "Terror Behind the Walls" experience every Halloween. 
        It's one of the country's top-ranked haunted attractions. More than 200 
        performers are part of the show that's designed to send even the bravest 
        muscleheads crying for their mommies.
      </p>
    </div>
  );
}
