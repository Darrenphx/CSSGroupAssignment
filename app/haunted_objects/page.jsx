"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.modules.css"

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
    
    <div className="container">
      <h1 className="title"
      
      >Haunted Objects</h1>
      <ul className="grid">
        {hauntedObjects.map((place, index) => (
          <li
              key={index}
              className="card"
          >
          <Link href={`/haunted_objects/${place.id}`}>
              <img
              src={place.image}
              alt={place.name}
              width={420}
              height={300}
              className="cardImage"/>
            </Link>
            <h2 className="cardTitle">{index + 1}. {place.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}