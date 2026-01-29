"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Objects() {
    const hauntedObjects = [
    {
      name: "The Annabelle Doll",
      id:"annabelle",
      image: "/photos/annabelle.jpg",
    },
    {
      name: "The Hope Diamond",
      id:"diamond",
      image: "/photos/hopediamond.jpg"
    },
    {
      name: "The Terracotta Army",
      id:"terracotta",
      image: "/photos/terracotta.jpg"
    },
    {
      name: "The Dybbuk Box",
      id:"box",
      image: "/photos/dybbuk.jpg"
    },
    {
      name: "Tomb of Tutankhamun",
      id:"tomb",
      image: "/photos/tomb.jpg"
    },
    {
      name:"Robert the Doll",
      id:"robert",
      image: "/photos/robert.jpg"
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
          margin: 5rem;
          color: #ffffff;
          margin-bottom: 3rem;
          font-size: 30;
        }
        
        .grid {
          list-style: none;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        .card {
          background-color: #1b1832;
          margin-bottom: 2rem;
          padding: 1rem;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
        }
        
        .cardImage {
          object-fit: cover;
          align-items: center;
          border-radius: 6px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        
        .card:hover .cardImage {
          transform: scale(1.02);
        }
        
        .cardTitle {
          color: #ffffff;
          font-size: 1rem;
        }
        
        @media (max-width: 1023px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 639px) {
          .grid {
            grid-template-columns: 1fr;
            padding: 0 1rem;
          }
        }
      `}</style>
    
    <div className="container">
      {/* Top bar */}
      <div className="topBar" />
      <h1 className="title">Top 6 Haunted Objects</h1>
      <ul className="grid">
        {hauntedObjects.map((place, index) => (
          <li key={index} className="card">
            <Link href={`/haunted_objects/${place.id}`}>
              <Image
                src={place.image}
                alt={place.name}
                width={420}
                height={300}
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