"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Supernatural(){
    const typesOfBeings = [
    {
      name: "Yokai",
      id:"yokai",
      image: "/photos/yokai.jpg"
    },
    {
      name: "Babi Ngepet",
      id:"babi",
      image: "/photos/babi.jpg"
    },
    {
      name: "Toyol",
      id:"toyol",
      image: "/photos/toyol.jpg"
    },
    {
      name: "Poltergeist",
      id:"poltergeist",
      image: "/photos/poltergeist.jpg"
    },
    {
      name: "La Llorona",
      id:"la",
      image: "/photos/la.jpg"
    },
    {
      name:"Bloody Mary",
      id:"mary",
      image: "/photos/bmary.jpg"
    }
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
      
      >Types of Supernatural Beings</h1>
      <ul   style={{
         listStyle: "none",
         padding: "0 2rem",
         display: "grid",
         gridTemplateColumns: "repeat(3, 1fr)",
         gap: "2rem",
         }}>
        {typesOfBeings.map((place, index) => (
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
          <Link href={`/types_of_ghosts/${place.id}`}>
              <img
              src={place.image}
              alt={place.name}
              width={420}
              height={300}
              style={{
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



