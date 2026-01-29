"use client";

import Link from "next/link";
import "./indivpage.css";

export default function Corvin() {
  return (
    <div className="Page" >
      {/* Back Link */}
      <div className="backWrapper">
        <Link
          href="/haunted_places"
          className="backLink">
          ← Back to all haunted places
        </Link>
      </div>

      {/* Heading */}
      <h1 className="title">
        Corvin Castle, Romania
      </h1>

      {/* Image */}
      <img
        src="/photos/corvin.png"
        alt="Corvin Castle"
        className="Image"
      />

      {/* Description */}
      <p className="description">
        Corvin Castle is a Gothic fortress in Hunedoara, Romania, tied to legends of Vlad the Impaler.
        Visitors report cold drafts, strange noises, and an eerie presence in the castle halls.
        Its imposing towers and dark history make it one of the most haunted places in Europe.
      </p>
      {/* Origins Section */}
      <h2 className="sectionTitle">
        Origins
      </h2>
      <p className="sectionText" >
        John Hunyadi, the Voivode (ruler) of Transylvania, ordered the castle to be built in 1441. He chose the location carefully;
         right on top of the ruin of a fortress once built by King Charles I of Hungary. Today, due to border changes, the castle
          stands in Romania, but back then it was on Hungarian land. Corvin Castle is built on top of a hill, right above the Zlaşti
           River. It has several large towers which gives this Renaissance-Gothic castle a romantic touch. Three of these towers 
           (The Capistrano Tower, the Deserted Tower and the Drummer’s Tower) were used as prisons.

        It took about 15 years to construct the castle and when John Hunyadi died in 1456, the work on the castle stagnated. It was 
        in the 17th century that people wanted to renovate the castle. In 1854, a fire caused by lightning destroyed all the wooden
         parts of the castle, except for one thing: the 500-year-old wooden door to the dungeons. It took over 40 years to restore 
         the castle again.   
      </p>

      {/* Sightings Section */}
      <h2 className="sectionTitle">
        Sightings
      </h2>
      <div className="imageRow">
      <img
        src="/photos/corvinjail.jpg"
        alt="Corvin Castle"
        className="visual"
        //https://amyscrypt.com/corvin-castle-legends-romania/
      />

      <img
        src="/photos/footsteps.jpg"
        alt="Corvin Castle"
        className="visual"
        //https://becomingthemuse.net/2015/11/03/of-footsteps-in-the-dark/
      />

      <img
        src="/photos/apparitions.avif"
        alt="Corvin Castle"
        className="visual"
        //https://www.freepik.com/premium-ai-image/haunted-house-scene-with-ghostly-apparition-appearing-top-grand-staircase-shrouded-mist_354961458.htm
      />
      </div>
      <p className="sectionText">
        There have been other reports of people seeing apparitions, shadow figures and orbs. Many EVP’s
         (Electronic Voice Phenomena) have been recorded as well. And there is some violent poltergeist 
         activity going on. People also get overwhelmed by the feeling of dread, screams and footsteps 
         are heard and people have been touched by unseen hands.  
      </p>
      

      {/* Additional Notes (optional) */}
      <h2 className="sectionTitle">
        Fun Fact
      </h2>
      <p className="sectionText">
        A few years back, some clever tourists managed to get themselves locked in
         at Corvin Castle after hours. What started off as a prank resulted in utter
          fear. When the castle opened its doors the next morning, they were found
           bruised, beaten and literally terrified. They said some unseen force 
           tortured them all night. So, whatever you do, don’t get locked in. 
           Not even for fun. 
      </p>
    </div>
  );
}
