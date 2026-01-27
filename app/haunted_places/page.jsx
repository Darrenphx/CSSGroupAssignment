"use client";
import { useState } from "react";
import Link from "next/link";
export default function Places(){
    const hauntedPlaces = [
    {
      name: "Salem, Massachusetts",
      id:"salem",
      image: "/photos/Salem.webp",
      //https://salemghosts.com/the-most-haunted-places-in-salem/
    },
    {
      name: "Corvin Castle, Romania",
      id:"corvin",
      image:"/photos/corvin.png",
      //https://thelittlehouseofhorrors.com/corvin-castle/
    },
    {
      name: "Lizzie Borden House, Fall River, Massachusetts",
      id:"lizzie-borden",
      image:"/photos/lizzie.jpeg",
      //https://usghostadventures.com/haunted-houses/lizzie-borden-house/
    },
    {
      name: "Eastern State Penitentiary, Philadelphia",
      id:"penitentiary",
      image:"/photos/eastern.jpg",
      //https://www.visitphilly.com/things-to-do/attractions/eastern-state-penitentiary/
    },
    {
      name: "Hill of Crosses, Lithuania",
      id:"hill-of-crosses",
      image:"/photos/hill.jpg",
      //https://matadornetwork.com/read/lithuania-hill-of-crosses/
    },
    {
      name:"Tower of London, England",
      id:"tower",
      image:"/photos/tower.webp",
      //https://www.hauntedrooms.co.uk/the-tower-of-london-ghosts
    }
    //https://www.vice.com/en/article/the-7-most-haunted-places-on-earth-and-why-we-keep-visiting-them/
  ];



   return (
    
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient( to bottom, #020617, #020617)",
        paddingBottom: "4rem",
        width:"100%",
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
      
      >Top 6 Haunted Places</h1>
      <ul   style={{
         listStyle: "none",
         padding: "0 2rem",
         display: "grid",
         gridTemplateColumns: "repeat(3, 1fr)",
         gap: "2rem",
         }}>
        {hauntedPlaces.map((place, index) => (
          <li
              key={index}
              style={{
              backgroundColor: "#1b1832",
              marginBottom: "2rem",
              padding: "1rem",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",   // centers everything horizontally
              textAlign: "center",
              //boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            }}
          >
          <Link href={`/haunted_places/${place.id}`}>
              <img
              src={place.image}
              alt={place.name}
              style={{
                      width: "420px",
                      height: "300px",
                      objectFit: "cover",
                      alignItems:"center",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}  />
            </Link>
            <h2 style={{ color: "#ffffff",fontSize:"1rem", }}>{index + 1}. {place.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}



