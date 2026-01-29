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
          background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #16213e 100%);
          padding-bottom: 4rem;
          width: 100%;
          box-sizing: border-box;
          position: relative;
        }
        
        .container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(66, 153, 225, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 69, 19, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .topBar {
          height: 70px;
          background: linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 50%, #4a5568 100%);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
        
        .title {
          text-align: center;
          color: #ffffff;
          margin: 3rem 1rem 4rem;
          font-size: clamp(2rem, 6vw, 3rem);
          font-weight: 700;
          letter-spacing: 2px;
          text-shadow: 
            0 0 10px rgba(66, 153, 225, 0.5),
            0 2px 20px rgba(0, 0, 0, 0.8),
            0 4px 30px rgba(0, 0, 0, 0.6);
          position: relative;
          z-index: 1;
        }
        
        .title::after {
          content: '';
          display: block;
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #4299e1, transparent);
          margin: 1.5rem auto 0;
          border-radius: 2px;
        }
        
        .grid {
          list-style: none;
          padding: 0 1rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        
        .card {
          background: linear-gradient(135deg, rgba(27, 24, 50, 0.9) 0%, rgba(31, 29, 58, 0.9) 100%);
          padding: 1.5rem;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }
        
        .card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 
            0 12px 30px rgba(0, 0, 0, 0.6),
            0 0 30px rgba(66, 153, 225, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border-color: rgba(66, 153, 225, 0.5);
          background: linear-gradient(135deg, rgba(31, 29, 58, 0.95) 0%, rgba(35, 33, 62, 0.95) 100%);
        }
        
        .imageWrapper {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 12px;
          margin-bottom: 1.25rem;
          position: relative;
          background: linear-gradient(135deg, #0f0e1a 0%, #1a1829 100%);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
        }
        
        .cardImage {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: block;
        }
        
        .card:hover .cardImage {
          transform: scale(1.08);
        }
        
        .cardTitle {
          color: #ffffff;
          font-size: clamp(1.1rem, 2.5vw, 1.35rem);
          margin-top: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.8px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }
        
        .cardLink {
          width: 100%;
          display: block;
        }
        
        @media (min-width: 640px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 1.5rem;
            gap: 2.5rem;
          }
          
          .title {
            margin: 4rem 1.5rem 5rem;
          }
          
          .card {
            padding: 1.75rem;
          }
        }
        
        @media (min-width: 1024px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
            padding: 0 2rem;
            gap: 3rem;
          }
          
          .title {
            margin: 5rem 2rem 6rem;
          }
          
          .card {
            padding: 2rem;
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
            <Link href={`/haunted_objects/${place.id}`} className="cardLink">
              <div className="imageWrapper">
                <img
                  src={place.image}
                  alt={place.name}
                  className="cardImage"
                />
              </div>
            </Link>
            <h2 className="cardTitle">{index + 1}. {place.name}</h2>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}