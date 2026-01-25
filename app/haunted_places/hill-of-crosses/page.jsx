"use client";

import Link from "next/link";

export default function Hill() {
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
        Hill of Crosses, Lithuania
      </h1>

      <img
        src="https://cdn1.matadornetwork.com/blogs/1/2018/10/Hill-of-Crosses-in-Lithuania-under-fiery-red-skies-1200x850.jpg"
        alt="Hill of Crosses"
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
        The Hill of Crosses in Lithuania holds over 200,000 crosses left by pilgrims. Locals report
        strange lights and eerie voices at night. The sacred yet unsettling atmosphere makes it
        one of the most mysterious and haunted sites in Europe.
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
        the most renowned story of the hill’s creation is the tale of a desperate father
         whose daughter suddenly fell gravely ill. As the girl lay on her death bed, the 
         father had a vision of a woman who told him to make a wooden cross and place it
          on a nearby hill; if he did so, she said, his daughter would recover. In the 
          morning, the despairing man hurriedly carved a wooden cross and rushed to the 
          hill. When he returned home, his daughter greeted him at the doorway, perfectly 
          well again. Ever since, people have been leaving crosses in hope their prayers 
          will be answered. Yet not every cross has been left by an optimistic pilgrim 
          – some are instead reminders of quiet rebellion. After surviving medieval 
          sieges by the invading German crusaders and 19th-Century uprisings by 
          Lithuanians against Russian Tsar Alexander II, the Hill of Crosses faced
          its most aggressive threat: the Soviet Union. In an effort to stamp out 
          Christianity in the Eastern bloc, the Soviet government attempted to level 
          the hill numerous times during the 1960s and ‘70s: they bulldozed it, 
          burned the wooden crosses and removed the metal and stone ones for scrap 
          and construction. People who brought crosses to the hill were fined and 
          incarcerated. But the crosses on the mound just kept multiplying, left 
          in the dead of night as an act of defiance against religious oppression. 
          Now, more than a quarter of a century after the fall of the Soviet Union, 
          the crosses still stand.
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
        Locals say that you can glimpse a ghost procession of monks at the foot of the 
        hill at sunrise. Throughout the ages, magical appearances, visions of saints 
        and sightings of ghosts have been a part of the hill’s history
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
        The Hill of Crosses, minimally maintained by the municipality of Siauliai 
        and local Franciscan monks, is now covered in more than 100,000 crucifixes 
        and other religious icons – and the number is constantly increasing.
      </p>
    </div>
  );
}
