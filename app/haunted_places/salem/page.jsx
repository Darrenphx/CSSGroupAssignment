"use client";

import Link from "next/link";
import "./indivpage.css";

export default function Salem() {
  return (
    <div className="Page">
      <div className="backWrapper">
      <Link href="/haunted_places" className="backLink">
        ← Back to all haunted places
      </Link>
      </div>

      <h1 className="title">Salem, Massachusetts</h1>

      <img
        src="/photos/Salem.webp"
        alt="Salem House"
        className="Image"
      />

      <p className="description">
        Salem is most known for the 1692 Witch Trials. Today, it embraces its dark past
        with museums, walking tours, candlelit reenactments, and October festivals that attract
        over a million visitors each year. The Witch House and the Salem Witch Trials Memorial
        remain must-see landmarks for those curious about its haunted history.
      </p>

      {/* Origins Section */}
      <h2 className="sectionTitle">
        Origins
      </h2>
      <p className="sectionText">
        Salem is most known for the infamous 1692 Witch Trials, where mass hysteria led to
        accusations, trials, and executions of alleged witches. The town’s dark history has
        shaped its cultural identity and made it a focal point for historical tourism.
      </p>

      {/* Sightings Section */}
      <h2 className="sectionTitle">
        Sightings
      </h2>
      <div className="imageRow">
      <img
        src="/photos/window.jpeg"
        alt="shadow figure seen in window"
        className="visual"
        //https://949whom.com/witch-house-cowin-salem-haunted/
      />

      <img
        src="/photos/witch.jpg"
        alt="scary looking woman"
        className="visual"
        //https://redskiesmagazinessu.wordpress.com/2015/01/18/salem-ghost-tour/
      />

      <img
        src="/photos/grave.jpg"
        alt="creepy grave next to creepy house"
        className="visual"
        //https://oddencounters.com/ghosts/Real-Ghost-Photos_Salem-Cemetery.html
      />
      </div>
      <p className="sectionText">
        Visitors and locals report strange occurrences around the town’s historic sites,
        including ghostly footsteps, shadowy figures, and unexplained cold drafts.
        October events often feature paranormal tours where people claim to witness spirits.
      </p>

      {/* Additional Notes (optional) */}
      <h2 className="sectionTitle">
        Fun Fact
      </h2>
      <p className="sectionText">
        Today, Salem attracts over a million visitors each year for walking tours, candlelit
        reenactments, museums, and seasonal festivals. The Witch House and Witch Trials Memorial
        are popular stops for those intrigued by its haunted history.
      </p>
    </div>
  );
}
