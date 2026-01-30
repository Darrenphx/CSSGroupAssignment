"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./styles.modules.css";

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
        Yōkai
      </h1>


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
        Yōkai often have animal-like features (such as the kappa, depicted as appearing similar to a turtle, 
        and the tengu, commonly depicted with wings), but may also appear humanoid in appearance, such as the
        kuchisake-onna. 
        
        In Japan, farmers have reportedly saw turtle-like creatures near water bodies that tried to pull people in.
        Some villages even put up warning signs and made offerings of cucumbers to keep them away 
        
        Some Yōkai resembled inanimate objects (such as the tsukumogami), while others 
        have no discernible shape. Yōkai are typically described as having spiritual or supernatural abilities, 
        with shapeshifting being the most common trait associated with them. Yōkai that shapeshift are known 
        as bakemono or obake.
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
        Inanimate objects can be considered Yōkai, and some Yōkai may not have any physical appearance at all. 
        While Yōkai are viewed as monsters or dark creatures, not all of them are inherently evil.
      </p>
    </div>
  );
}
