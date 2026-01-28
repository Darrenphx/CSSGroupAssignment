"use client";

import Link from "next/link";
import Image from "next/image";

export default function Yokai() {
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
          ← Back to all the types of supernatural beings
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
        Yōkai
      </h1>

      {/* Image */}
      <Image
        src="/photos/yokai.jpg"
        alt="Yokai"
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
        Yōkai are a class of supernatural entities and spirits in Japanese folklore.
        They are a vast range of range of beings, including shapeshifters, ghosts, 
        demons, and tricksters. They can be mischievous, helpful, or malevolent, 
        often appearing as animal-like figures, possessed objects, or humanoids. 
        They embody the mysterious and uncanny aspects of nature and human emotions.
      </p>
      {/* Origins Section */}
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
        The concept of Yōkai varies greatly throughout Japanese culture and historical
        periods. Typically, the older the time period, the higher the number of 
        phenomena deemed to be supernatural and the result of Yōkai. According to 
        Japanese ideas of animism, spirit-like entities were believed to reside in 
        all things, including natural phenomena and objects. Such spirits possessed 
        emotions and personalities: peaceful spirits were known as nigi-mitama, who 
        brought good fortune; violent spirits, known as ara-mitama, brought ill fortune,
        such as illness and natural disasters. Neither type of spirit was considered to
        be Yōkai.  

        Rituals for converting ara-mitama into nigi-mitama were performed, aiming
        to quell malevolent spirits, prevent misfortune and alleviate the fear arising 
        from phenomena and events that otherwise had no explanation. The ritual for 
        converting ara-mitama into nigi-mitama was known as the chinkon, or the calming 
        of the spirits. Chinkon rituals for ara-mitama that failed to achieve deification 
        as benevolent spirits, whether through a lack of sufficient veneration or through
        losing worshippers and thus their divinity, became Yōkai.
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
        Inanimate objects can be considered Yōkai, and some Yōkai may not have 
        
      </p>
    </div>
  );
}
