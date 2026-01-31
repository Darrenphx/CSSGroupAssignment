"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./typesofghost.css";

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
    
    <div className="container">
      <h1 className="title"
      
      >Types of Supernatural Beings</h1>
      <ul className="grid">
        {typesOfBeings.map((place, index) => (
          <li
              key={index}
              className="card"
          >
          <Link href={`/types_of_ghosts/${place.id}`}>
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



