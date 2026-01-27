"use client";

import Link from "next/link";
import "./indivpage.css";

export default function Lizzie() {
  return (
    <div className="Page">
      <div className="backWrapper">
        <Link
          href="/haunted_places"
          className="backLink" >
          ← Back to all haunted places
        </Link>
      </div>

      <h1 className="title">
        Lizzie Borden House, Massachusetts
      </h1>

      <img
        src="/photos/lizzie.jpeg"
        alt="Lizzie Borden House"
        className="Image"
      />

      <p className="description">
        Famous for the unsolved 1892 murders, the Lizzie Borden House is now a museum and B&B.
        Guests often report unexplained footsteps, creaks, and ghostly activity in the “murder room,”
        making it one of Massachusetts’ spookiest haunted locations.
      </p>
      {/* Origins Section */}
      <h2 className="sectionTitle">
        Origins
      </h2>
      <p className="sectionText">
        The Borden family became infamous after the shocking murders of Andrew and Abby Borden on August 4,
         1892, in their lavish Victorian residence. Andrew, a wealthy businessman known for his frugality, 
         married Abby in 1865. This strained Andrew’s relationship with his daughters from his first marriage,
          Lizzie and Emma. 

       On the day of the murders, Andrew was found dead on the living room sofa, and Abby was discovered in a
        guest room, both victims of multiple axe wounds. Lizzie, 32 at the time, was arrested and tried for the
         murders but acquitted due to lack of evidence despite remaining a prime suspect. 

       Following the trial, Lizzie and Emma inherited their father’s fortune, but the case left a lasting legacy
        of mystery and controversy, making it one of the most famous unsolved murder mysteries in American history.
      </p>

      {/* Sightings Section */}
      <h2 className="sectionTitle">
        Sightings
      </h2>
      <p className="sectionText" >
        The house is also known to be extremely haunted—with spirits of both the victims as 
        well as some kids from next door who were reportedly drowned by their mother in a well.
        A group of visitors all heard what sounded like a man’s gasp from out in the hallway.
         The house was empty except for them in the room. They also asked if anything wanted
         to sing a song or play with us and a piece of equipment that has a database of words
          spit out “Hide and Seek.” which was too perfect to be coincidential. There have been
           reports of children laughing, supposedly the two who were murdered next door in 1848.
            The fire alarm goes off once every couple of months, always at 3 am. Apparitions are
             often caught on camera, and ghostly faces appear in the basement. 
      </p>

      {/* Additional Notes (optional) */}
      <h2 className="sectionTitle">
        Fun Fact
      </h2>
      <p className="sectionText">
        If you sleep in Andrew's room, it is said that a monetary gift is to be left out in 
        tribute to him. It keeps his money-hungry spirit at bay and ensures the weary traveler
         a good night’s sleep. Yes, that is right, you can spend the night at the infamous
          Lizzie Borden house. In addition, it has been renovated to include all the modern 
          amenities not found in Victorian times, all while keeping the era’s decor intact.
      </p>
    </div>
  );
}
