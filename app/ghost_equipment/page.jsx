"use client";
import { useState } from "react";
import Link from "next/link";

export default function Equipment(){
    const [openIndex, setOpenIndex] = useState(null);
    const ghostequipment = [
    {
      name: "EMF Meter",
      image: "https://m.media-amazon.com/images/I/413ykB2kI9L.jpg",
      uses: "Presence Detection",
      process: "Responds to anything electronic, including cellphones, appliances and home wiring",
      fact:"Responds to naturally occurring EMF in the atmosphere",
    },
    {
      name: "REM Pod",
      image:"data:image/jpeg;base64,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",
      uses: "Communication and presence detection",
      process: "Creates small magnectic field",
      fact:"Can be easily spoofed with walkie-talkies and other remote devices",
    },
    {
      name: "Spirit Box",
      image:"https://m.media-amazon.com/images/I/81uAyAe7YKL._AC_UF894,1000_QL80_.jpg",
      uses: "Communication",
      process: "Scans radio frequencies at extremely high speed",
      fact:"Relies psychological phenomenon pareidolia, where people find patterns in random things",
    },

    //https://www.vice.com/en/article/the-7-most-haunted-places-on-earth-and-why-we-keep-visiting-them/
  ];

   return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient( to bottom, #020617, #020617)",
        paddingBottom: "4rem",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          height: "60px",
          background: "linear-gradient(to right, #04214a, #888)",
        }}
      />
      <h1 style={{
        textAlign: "center",
        margin: "5rem ",
        color: "#ffffff",
        marginBottom:"3rem",
        fontSize: 30,
      }}
      >Ghost Equipment</h1>
      <ul style={{ 
        listStyle: "none",
        padding: 0,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2rem",
        maxWidth: "900px",   // controls how wide the whole grid is
        margin: "0 auto",  }}>
        {ghostequipment.map((equipment, index) => (
          <li onClick={() =>
    setOpenIndex(openIndex === index ? null : index)}
            key={index}
            style={{
                backgroundColor: "#1b1832",
                padding: "1rem",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
                 }}
          >
              
            <h2 style={{ color: "#ffffff",fontSize:"2rem" }}><strong>{equipment.name}</strong></h2>
            <img
             src={equipment.image}
             alt={equipment.name}
             style={{
                      width: "140px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "6px",
                      marginBottom:"2rem"
                 }}
  />
        {openIndex === index && (
         <div style={{ width: "100%", textAlign: "left", marginTop: "0.5rem" }}>
            <p style={{ borderBottom: "1px solid #444", paddingBottom: "6px" }}><strong>Uses: </strong>{equipment.uses}</p>
            <p style={{ borderBottom: "1px solid #444", paddingBottom: "6px" }}><strong>How it works: </strong>{equipment.process}</p>
            <p><strong>Fun fact: </strong>{equipment.fact}</p>
            <Link
                href={`/ghost_equipment/${equipment.name.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={(e) => e.stopPropagation()}
                style={{
                        color: "#7aa2ff",
                        fontSize: "0.9rem",
                        textDecoration: "underline",
                      }}
            >
             Explore more →
            </Link>
        </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}