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
    <>
      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(to bottom, #020617, #020617);
          padding-bottom: 4rem;
          width: 100%;
          box-sizing: border-box;
        }
        
        .topBar {
          height: 60px;
          background: linear-gradient(to right, #04214a, #888);
        }
        
        .title {
          text-align: center;
          color: #ffffff;
          margin: 2rem 1rem;
          margin-bottom: 2rem;
          font-size: clamp(1.5rem, 4vw, 2rem);
        }
        
        .grid {
          list-style: none;
          padding: 0 1rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .card {
          background-color: #1b1832;
          padding: 1rem;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .cardImage {
          width: 100%;
          height: auto;
          max-width: 420px;
          object-fit: cover;
          border-radius: 6px;
          cursor: pointer;
        }
        
        .cardTitle {
          color: #ffffff;
          font-size: clamp(0.875rem, 2vw, 1rem);
          margin-top: 0.75rem;
        }
        
        @media (min-width: 640px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 1.5rem;
            gap: 2rem;
          }
          
          .title {
            margin: 3rem 1.5rem;
            margin-bottom: 2.5rem;
          }
        }
        
        @media (min-width: 1024px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
            padding: 0 2rem;
            gap: 2rem;
          }
          
          .title {
            margin: 5rem 2rem;
            margin-bottom: 3rem;
          }
        }
      `}</style>
    
    <div className="container">
      {/* Top bar */}
      <div className="topBar" />
      <h1 className="title">Types of Supernatural Beings</h1>
      <ul className="grid">
        {typesOfBeings.map((place, index) => (
          <li key={index} className="card">
            <Link href={`/types_of_ghosts/${place.id}`}>
              <img
                src={place.image}
                alt={place.name}
                className="cardImage"
              />
            </Link>
            <h2 className="cardTitle">{index + 1}. {place.name}</h2>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}



