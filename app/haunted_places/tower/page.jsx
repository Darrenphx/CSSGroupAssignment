"use client";

import Link from "next/link";
import "./indivpage.css";

export default function Tower() {
  return (
    <div className="Page" >
      <div className="backWrapper">
        <Link
          href="/haunted_places"
          className="backLink"
        >
          ← Back to all haunted places
        </Link>
      </div>

      <h1 className="title">
        Tower of London, England
      </h1>

      <img
        src="/photos/tower.webp"
        alt="Tower of London"
        className="Image"
      />

      <p className="description">
        The Tower of London has a millennium of dark history with executions and betrayals.
        Visitors report sightings of Anne Boleyn’s ghost and other spirits, while the tower’s
        ravens remain one of the most photographed spooky attractions.
      </p>
      {/* Origins Section */}
      <h2  className="sectionTitle">
        Origins
      </h2>
      <p className="sectionText">
        The Tower of London is a historic castle built on the River Thames in the city’s 
        center. It was founded in 1066 as part of the Norman Conquest of England. Like 
        other places with a past filled with skullduggery and fear, the Tower is said 
        to be haunted. Most of the ghosts are unfortunate souls who met an untimely–and
         many times unjust–death. (Including death by grizzly bear.) On your London vacation,
          visiting the Tower, regardless of questionable spooks, is a must. Here are thirteen
           spirits that are most often reported.
      </p>

      {/* Sightings Section */}
      <h2  className="sectionTitle">
        Sightings
      </h2>
      <p className="sectionText">
        There is a well known ghost called "White Woman" of the Tower of London. Often, visitors only glimpse a figure
         in white in the corner of their eyes. Then, quite suddenly, they smell the terrible, pungent smell of an old, 
         overpowering perfume. Some visitors then describe the feeling of the world closing in around them; and chills
          run from their neck down their spine. In recent years, tourists to the tower have even reported the sensation 
        that something is tapping them on the shoulder.


      </p>

      {/* Additional Notes (optional) */}
      <h2  className="sectionTitle">
        Fun Fact
      </h2>
      <p className="sectionText">
        The castle was severely damaged during Blitz in the Second World War, but it was repaired and opened to the public. 
        Today, the castle is cared for by the Historic Royal Palace, a charity, and protected as a World Heritage Site.


      </p>
    </div>
  );
}
