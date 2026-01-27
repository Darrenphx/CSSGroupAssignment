"use client";
import { useState } from "react";
import Link from "next/link";

export default function Equipment(){
    const [openIndex, setOpenIndex] = useState(null);
    const ghostequipment = [
    {
      name: "EMF Meter",
      image: "/photos/emf.jpg",
      //https://www.amazon.sg/Jahyshow-Magnetic-Detector-Paranormal-Equipment/dp/B07WJ46Y1P
      uses: "Presence Detection",
      process: "Responds to anything electronic, including cellphones, appliances and home wiring",
      fact:"Responds to naturally occurring EMF in the atmosphere",
    },
    {
      name: "REM Pod",
      image:"/photos/rempod.jpg",
      uses: "Communication and presence detection",
      process: "Creates small magnectic field",
      fact:"Can be easily spoofed with walkie-talkies and other remote devices",
    },
    {
      name: "Spirit Box",
      image:"/photos/spiritbox.jpg",
      //https://www.norielgrove.com/product-p-750912.html
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
                      height: "130px",
                      objectFit: "cover",
                      borderRadius: "4px",
                      marginBottom:"2rem",
                      borderBlock: "3px solid black",
                 }}
  />
        {openIndex === index && (
         <div style={{ width: "100%", textAlign: "left", marginTop: "0.5rem",color:"white" }}>
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