"use client";
import { useState } from "react";
import Link from "next/link";
export default function Places(){
    const hauntedPlaces = [
    {
      name: "Salem, Massachusetts",
      id:"salem",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjAdbAcEvtMPK86GQ48A4Rq0FXwtGSWIbSgQ&s",
      description: "Salem, most known for the 1692 Witch Trials, has learned to make a living off its own dark history. Each October, more than a million visitors crowd the narrow streets for psychic fairs, walking tours, and candlelit reenactments. The Witch House and the Salem Witch Trials Memorial stay packed, but what’s really impressive is how a town built on hysteria has turned itself into a full-fledged tourism brand.",
    },
    {
      name: "Corvin Castle, Romania",
      id:"corvin",
      image:"https://thelittlehouseofhorrors.com/app/uploads/Corvin-Radu-Dimitrescu-Elian-via-Getty-Images-640x427.png",
      description: "Corvin Castle looks like a place literally designed to host ghosts. The Gothic stronghold in Hunedoara once held Vlad the Impaler, and locals say his spirit never left. Tourists claim to feel cold drafts in sealed chambers and hear voices where no one’s standing. ",
    },
    {
      name: "Lizzie Borden House, Fall River, Massachusetts",
      id:"lizzie-borden",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHS8e21y-lfVhOJzUdp6J_k_-dn-_l5BD8gA&s",
      description: "The murder that inspired a nursery rhyme still creeps through the creaky walls of the Borden home. Overnight guests claim to hear footsteps on the stairs and axes in the distance. Each October, the “murder room” books out months in advance.",
    },
    {
      name: "Eastern State Penitentiary, Philadelphia",
      id:"penitentiary",
      image:"https://www.visitphilly.com/wp-content/uploads/2017/12/crtsy-eastern-state-penitentiary-BT02-2200VP.jpg",
      description: "Once one of the harshest prisons in America, its crumbling cellblocks now host ghost tours and immersive horror events. Staff report strange figures in old guard towers, while visitors swear they’ve heard cell doors slam when no one’s around. Al Capone supposedly saw a ghost here, too, but he also drank bathtub gin daily, so, grain of salt.",
    },
    {
      name: "Hill of Crosses, Lithuania",
      id:"hill-of-crosses",
      image:"https://cdn1.matadornetwork.com/blogs/1/2018/10/Hill-of-Crosses-in-Lithuania-under-fiery-red-skies-1200x850.jpg",
      description: "The Hill of Crosses in Lithuania holds more than 200,000 crucifixes and rosaries left by pilgrims over the past two centuries. During the day, it feels sacred. At night, locals report strange lights weaving through the crosses and faint voices carried by the wind. The scene is both beautiful and unnerving.",
    },
    {
      name:"Tower of London, England",
      id:"tower",
      image:"https://www.hauntedrooms.co.uk/wp-content/uploads/2021/02/Tower-of-London-1600x1016.jpeg",
      description:"A millennium of beheadings and betrayal is bound to lead to some ghostly hauntings. Visitors still report sightings of Anne Boleyn roaming the halls, and the ravens who claim the tower as home are one of the most photographed spectacles.",
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



