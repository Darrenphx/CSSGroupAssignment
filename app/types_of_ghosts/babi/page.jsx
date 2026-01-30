"use client";

import Link from "next/link";
import Image from "next/image";

export default function Babi() {
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
      {/* Back Link */}
      <div style={{ alignSelf: "flex-start" }}>
        <Link
          href="/types_of_ghosts"
          style={{
            color: "#ccc",
            textDecoration: "underline",
            fontSize: "1rem",
            marginBottom: "1rem",
            transition: "color 0.3s",
          }}
        >
          ← Back to all the types of supernatural beings
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
        Babi Ngepet
      </h1>


      <Image
        src="/photos/babi.jpg"
        alt="Babi Ngepet"
        width={700}
        height={450}
        style={{
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
        Babi Ngepet is a boar demon in Indonesian mythology that is commonly known in Java and Bali.
        According to local myth, the creature is believed to be the manifestation of a person practising
        pesugihan babi black magic. Pesugihan is derived from the Javanese word sugih meaning "rich". It 
        is a kind of magic to make people become rich instantly, but in exchange, they must sacrifice something. 
        In this case, they must sacrifice their humanity, allowing themselves to be transformed into a boar 
        for some time, or allowing themselves to be possessed by a boar demon. The human-animal transformation 
        is similar to shapeshifting or the werewolf concept in the West.
      </p>

      <h2 style={{ marginTop: "2.5rem", fontSize: "1.8rem", fontFamily: "'Playfair Display', serif" }}>
        Backstory
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
        Some myths tell of a man enveloped in black robes who miraculously transform into a creature. 
        After the transformation, the demon boar roams the village, scratching its body against walls, 
        doors, cupboards, and furniture. Magically, the belongings of the villagers, such as money, gold, 
        and jewelry, disappear and are carried away by the Babi Ngepet. If the mission is successful, 
        by the time the Babi Ngepet safely returns home and transform back into human form, the black robe 
        will be filled with the stolen money and jewelry.

        The person that practices Babi Ngepet black magic needs assistance from another person. The assistant's 
        task is to stay home and guard the lit candle floating on the basic of water while the Babi Ngepet 
        is in action. If the candle flame is shaking, fading or almost out, it is a sign that the Babi Ngepet is 
        in danger, caught in the act by villagers, or turned back into their human form. Because of this belief, 
        Javanese villagers often chase or even kill any boar wandering around the village at night.
      </p>

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
        In Peseanggrahan, Jakarta, residents said they saw a strange black pig sneaking around houses 
        at night. People caught it and displayed it in a cage, claiming it was a babi ngepet stealing 
        money. Later, police said it was likely just a wild pig, but many locals believed that it was 
        supernatural because money had gone missing and the pig only appeared at night.
      </p>

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
        Babi Ngepet steals money by sneaking into houses and rubbing its body against walls or furniture. 
        This action magically causes money and valuables from that house to transfer to the perpetrator's home.
      </p>
    </div>
  );
}