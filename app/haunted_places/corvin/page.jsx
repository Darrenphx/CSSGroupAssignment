"use client";

import Link from "next/link";

export default function Corvin() {
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
      {/* Back Link */}
      <div style={{ alignSelf: "flex-start" }}>
        <Link
          href="/haunted_places"
          style={{
            color: "#ccc",
            textDecoration: "underline",
            fontSize: "1rem",
            marginBottom: "1rem",
            transition: "color 0.3s",
          }}
        >
          ← Back to all haunted places
        </Link>
      </div>

      {/* Heading */}
      <h1
        style={{
          marginTop: "1.5rem",
          fontSize: "2.5rem",
          fontWeight: "700",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Corvin Castle, Romania
      </h1>

      {/* Image */}
      <img
        src="/photos/corvin.png"
        alt="Corvin Castle"
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

      {/* Description */}
      <p
        style={{
          marginTop: "2rem",
          lineHeight: "1.8",
          maxWidth: "1100px",
          fontSize: "1.15rem",
          color: "#eee",
        }}
      >
        Corvin Castle is a Gothic fortress in Hunedoara, Romania, tied to legends of Vlad the Impaler.
        Visitors report cold drafts, strange noises, and an eerie presence in the castle halls.
        Its imposing towers and dark history make it one of the most haunted places in Europe.
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
        John Hunyadi, the Voivode (ruler) of Transylvania, ordered the castle to be built in 1441. He chose the location carefully;
         right on top of the ruin of a fortress once built by King Charles I of Hungary. Today, due to border changes, the castle
          stands in Romania, but back then it was on Hungarian land. Corvin Castle is built on top of a hill, right above the Zlaşti
           River. It has several large towers which gives this Renaissance-Gothic castle a romantic touch. Three of these towers 
           (The Capistrano Tower, the Deserted Tower and the Drummer’s Tower) were used as prisons.

        It took about 15 years to construct the castle and when John Hunyadi died in 1456, the work on the castle stagnated. It was 
        in the 17th century that people wanted to renovate the castle. In 1854, a fire caused by lightning destroyed all the wooden
         parts of the castle, except for one thing: the 500-year-old wooden door to the dungeons. It took over 40 years to restore 
         the castle again.   
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
        There have been other reports of people seeing apparitions, shadow figures and orbs. Many EVP’s
         (Electronic Voice Phenomena) have been recorded as well. And there is some violent poltergeist 
         activity going on. People also get overwhelmed by the feeling of dread, screams and footsteps 
         are heard and people have been touched by unseen hands.  
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
        A few years back, some clever tourists managed to get themselves locked in
         at Corvin Castle after hours. What started off as a prank resulted in utter
          fear. When the castle opened its doors the next morning, they were found
           bruised, beaten and literally terrified. They said some unseen force 
           tortured them all night. So, whatever you do, don’t get locked in. 
           Not even for fun. 
      </p>
    </div>
  );
}
