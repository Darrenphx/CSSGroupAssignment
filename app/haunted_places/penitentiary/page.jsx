"use client";

import Link from "next/link";
import "./indivpage.css";

export default function Penitentiary() {
  return (
    <div className="Page">
      <div className="backWrapper">
        <Link
          href="/haunted_places"
          className="backLink" 
        >
          ← Back to all haunted places
        </Link>
      </div>

      <h1 className="title">
        Eastern State Penitentiary, Philadelphia
      </h1>

      <img
        src="/photos/eastern.jpg"
        alt="Eastern State Penitentiary"
        className="Image"
      />

      <p className="description">
        Once one of America’s harshest prisons, Eastern State Penitentiary now hosts ghost tours
        and immersive horror events. Visitors report strange figures, slamming cell doors,
        and eerie noises throughout its historic guard towers.
      </p>
      {/* Origins Section */}
      <h2 className="sectionTitle">
        Origins
      </h2>
      <p className="sectionText">
        Criminal justice in the 1700s was quite different than it is today. Let's 
        say you made the mistake of stealing gold jewelry from your rich boss and 
        you got caught. You would expect to be flogged, whipped, or even hang from 
        the gallows.

       The Quakers of early Philadelphia were pacifists and of course felt uneasy 
       with this. That's when they dreamt up a world where criminals could be 
       forced to truly, genuinely regret their crimes without being physically
        touched. Construction for Eastern State Penitentiary started in 1821. The 
        Quakers had no idea their lofty goal would eventually become considered 
        one of the cruelest forms of corporal punishment.
      </p>

      {/* Sightings Section */}
      <h2 className="sectionTitle">
        Sightings
      </h2>
      <div className="imageRow">
      <img
        src="/photos/stairs.jpeg"
        alt="old crumbling indoor of prison with stairs"
        className="visual"
        //https://adventure.com/eastern-state-penitentiary/
      />

      <img
        src="/photos/shadow.webp"
        alt="shadow figure in doorway"
        className="visual"
        //https://imgur.com/a/yWSBCJ2
      />

      <img
        src="/photos/whitelady.jpg"
        alt="a ghost name white lady in front of penitentiary"
        className="visual"
        //https://www.sheptonmalletprison.com/paranormal-news/ghost-stories-from-behind-bars-the-white-lady/
      />
      </div>
      <p className="sectionText">
        Cellblock 12 is known for echoing voices and cackling; Cellblock 6 for shadowy figures
         darting along the walls; Cellblock 4 for visions of ghostly faces. Many people have 
         reported seeing a silhouette of a guard in one of the towers. Footsteps. Wails. 
         Whispers. The same stories, over and over again.
      </p>

      {/* Additional Notes (optional) */}
      <h2 className="sectionTitle">
        Fun Fact
      </h2>
      <p className="sectionText">
        The penitentiary hosts a "Terror Behind the Walls" experience every Halloween. 
        It's one of the country's top-ranked haunted attractions. More than 200 
        performers are part of the show that's designed to send even the bravest 
        muscleheads crying for their mommies.
      </p>
    </div>
  );
}
