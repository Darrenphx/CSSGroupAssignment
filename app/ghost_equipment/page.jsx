"use client";
import { useState } from "react";
import Link from "next/link";
import "./equipment.css";

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
      //https://www.ebay.com.sg/itm/193786606679
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
    <div className="equipmentPage">
      <h1  className="pageTitle"
      >Ghost Equipment</h1>
      <ul className="equipmentGrid">
        {ghostequipment.map((equipment, index) => (
          <li onClick={() =>
    setOpenIndex(openIndex === index ? null : index)}
            key={index}
            className="equipmentCard" >
              
            <h2 className="equipmentName"><strong>{equipment.name}</strong></h2>
            <img
             src={equipment.image}
             alt={equipment.name}
             className="equipmentImage"/>
        {openIndex === index && (
         <div className="equipmentDetails">
            <p ><strong>Uses: </strong>{equipment.uses}</p>
            <p><strong>How it works: </strong>{equipment.process}</p>
            <p><strong>Fun fact: </strong>{equipment.fact}</p>
            <Link
                href={`/ghost_equipment/${equipment.name.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={(e) => e.stopPropagation()}
                className="exploreLink"
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