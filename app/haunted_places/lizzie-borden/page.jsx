"use client";

import Link from "next/link";

export default function Lizzie() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "3rem",
        background: "linear-gradient(to bottom, #0f0d1e, #1a142e)",
        color: "white",
        fontFamily: "'Arial', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div style={{ alignSelf: "flex-start" }}>
        <Link
          href="/haunted_places"
          style={{
            color: "#ccc",
            textDecoration: "underline",
            fontSize: "1rem",
          }}
        >
          ← Back to all haunted places
        </Link>
      </div>

      <h1
        style={{
          marginTop: "1.5rem",
          fontSize: "2.5rem",
          fontWeight: "700",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Lizzie Borden House, Massachusetts
      </h1>

      <img
        src="/photos/lizzie.jpeg"
        alt="Lizzie Borden House"
        style={{
          width: "100%",
          maxWidth: "700px",
          marginTop: "2rem",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
          transition: "transform 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />

      <p
        style={{
          marginTop: "2rem",
          lineHeight: "1.8",
          maxWidth: "1100px",
          fontSize: "1.15rem",
          color: "#eee",
        }}
      >
        Famous for the unsolved 1892 murders, the Lizzie Borden House is now a museum and B&B.
        Guests often report unexplained footsteps, creaks, and ghostly activity in the “murder room,”
        making it one of Massachusetts’ spookiest haunted locations.
      </p>
      {/* Origins Section */}
      <h2 style={{ marginTop: "2.5rem", fontSize: "1.8rem", fontFamily: "'Playfair Display', serif" }}>
        Origins
      </h2>
      <p
        style={{
          marginTop: "1rem",
          lineHeight: "2",
          maxWidth: "900px",
          fontSize: "1.15rem",
          color: "#eee",
          padding: "0 1rem",
          textAlign: "justify",
        }}
      >
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
      <h2 style={{ marginTop: "2rem", fontSize: "1.8rem", fontFamily: "'Playfair Display', serif" }}>
        Sightings
      </h2>
      <p
        style={{
          marginTop: "1rem",
          lineHeight: "2",
          maxWidth: "900px",
          fontSize: "1.15rem",
          color: "#eee",
          padding: "0 1rem",
          textAlign: "justify",
        }}
      >
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
      <h2 style={{ marginTop: "2rem", fontSize: "1.8rem", fontFamily: "'Playfair Display', serif" }}>
        Fun Fact
      </h2>
      <p
        style={{
          marginTop: "1rem",
          lineHeight: "2",
          maxWidth: "900px",
          fontSize: "1.15rem",
          color: "#eee",
          padding: "0 1rem",
          textAlign: "justify",
        }}
      >
        If you sleep in Andrew's room, it is said that a monetary gift is to be left out in 
        tribute to him. It keeps his money-hungry spirit at bay and ensures the weary traveler
         a good night’s sleep. Yes, that is right, you can spend the night at the infamous
          Lizzie Borden house. In addition, it has been renovated to include all the modern 
          amenities not found in Victorian times, all while keeping the era’s decor intact.
      </p>
    </div>
  );
}
