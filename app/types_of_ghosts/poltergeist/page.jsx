"use client";

import Link from "next/link";
import Image from "next/image";

export default function Poltergeist() {
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
        Poltergeist
      </h1>


      <Image
        src="/photos/poltergeist.jpg"
        alt="Poltergeist"
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
        A poltergeist, also known as "noisy spirit", is a type of ghost or spirit that is responsible 
        for physical disturbances, such as loud noises and objects being moved or destroyed. 
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
        The word 'poltergeist' comes from the German language words 'poltern', which means making sound or 
        to rumble, and 'Geist', which means ghost or spirit. So, the direct translation of a poltergeist is a noisy ghost.
        Foul smells are also associated with poltergeist occurences, as well as spontaneous fires 
        and different electrical issues such as flickering lights. These manifestations have been recorded 
        in many cultures and countries, including Brazil, Australia, the United States, Japan, and most European nations. 
        The first recorded cases date back to the 1st century. Skeptics explain poltergeists as juvenile tricksters fooling 
        credulous adults.
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
        Most claims or fictional descriptions of poltergeists show them as being capable of pinching, biting, hitting, and 
        tripping people. They are also depicted as capable of movement or levitation of objects such as furniture and cutlery, 
        or noises such as knocking on doors.
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
        One of the most famous depictions of a poltergeist in today's media is Peeves the Poltergeist in Harry Potter!
      </p>
    </div>
  );
}