"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function EMFMeterPage() {
  const [intensities, setIntensities] = useState([0, 0, 0, 0, 0]);
  const meterRef = useRef(null);

  useEffect(() => {
    function handleMove(e) {
      if (!meterRef.current) return;

      const rect = meterRef.current.getBoundingClientRect();
      const meterCenterX = rect.left + rect.width / 2;
      const meterCenterY = rect.top + rect.height / 2;

      const dx = e.clientX - meterCenterX;
      const dy = e.clientY - meterCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const maxDistance = 600; // increase range for far-away cursor
      let normalized = Math.max(0, 1 - distance / maxDistance);

      // Non-linear curve for smoother effect
      const curve = Math.pow(normalized, 2);

      // Map to 5 bars, staggered lighting
      const newIntensities = [0, 1, 2, 3, 4].map((i) => {
        const threshold = (i + 1) / 5; // stagger
        const intensity = (curve - (threshold - 0.2)) / 0.2;
        return Math.min(Math.max(intensity, 0), 1);
      });

      setIntensities(newIntensities);
    }

    function handleLeave() {
      setIntensities([0, 0, 0, 0, 0]);
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const colors = ["#2ecc71", "#a3e635", "#facc15", "#fb923c", "#ef4444"];
  

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0f0d1e, #1a142e)",
        paddingTop: "3rem",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}

    >

      <div style={{ alignSelf: "flex-start" }}>
        <Link
          href="/ghost_equipment"
          style={{
            color: "#ccc",
            textDecoration: "underline",
            fontSize: "1rem",
            marginBottom: "1rem",
            transition: "color 0.3s",
          }}
        >
          ← Back to all ghost equipment
        </Link>
      </div>
      <h1 style={{ textAlign: "center", fontSize: "3rem", margin: 0 }}>
        EMF Meter
      </h1>

      <div
        ref={meterRef}
        style={{
          margin: "3rem auto",
          width: "400px",
          height: "120px",
          border: "2px solid #555",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          background: "#1b1832",
        }}
      >
        {intensities.map((intensity, i) => (
          <div
            key={i}
            style={{
              width: "50px",
              height: "60px",
              borderRadius: "6px",
              backgroundColor: `rgba(${parseInt(colors[i].slice(1, 3), 16)},${parseInt(
                colors[i].slice(3, 5),
                16
              )},${parseInt(colors[i].slice(5, 7), 16)},${intensity})`,
              transition: "background-color 0.1s",
            }}
          />
        ))}
      </div>

      <p style={{ textAlign: "center", opacity: 0.8 }}>
        Move your cursor anywhere on the page — the EMF meter reacts like a real device!
      </p>
      {/* Origins Section */}
      <h2 style={{ marginTop: "2.5rem", fontSize: "1.8rem", fontFamily: "'Playfair Display', serif" }}>
        Introduction
      </h2>
      <p
        style={{
          marginTop: "1rem",
          lineHeight: "2",
          maxWidth: "1000px",
          fontSize: "1.15rem",
          color: "#eee",
          padding: "0 1rem",
          textAlign: "justify",
        }}
      >
        An EMF meter, short for Electromagnetic Field meter, is one of 
        the most commonly used tools in ghost hunting. Originally 
        designed for electricians and engineers, it measures invisible 
        energy fields produced by electronic devices and wiring. Over time, 
        paranormal investigators began using EMF meters to detect unusual 
        energy changes during investigations.
      </p>

      {/* Sightings Section */}
      <h2 style={{ marginTop: "2rem", fontSize: "1.8rem", fontFamily: "'Playfair Display', serif" }}>
        How It Works
      </h2>
      <p
        style={{
          marginTop: "1rem",
          lineHeight: "2",
          maxWidth: "1000px",
          fontSize: "1.15rem",
          color: "#eee",
          padding: "0 1rem",
          textAlign: "justify",
        }}
      >
        An EMF meter works by detecting electromagnetic fields in its surrounding environment. These fields are naturally
         produced by everyday electrical sources such as power lines, wiring inside walls, phones, and electronic devices. 
         When the meter is turned on, it continuously scans the area and displays readings using lights, numbers, or sounds.
        During a ghost investigation, investigators slowly move the EMF meter around a room to establish a baseline reading. 
        Any sudden increase or fluctuation in the readings—without an obvious electrical cause—is noted and often investigated 
        further. Some ghost hunters also ask questions while monitoring the meter, watching for changes that appear to respond 
        in real time.
      </p>

      {/* Additional Notes (optional) */}
      <h2 style={{ marginTop: "2rem", fontSize: "1.8rem", fontFamily: "'Playfair Display', serif" }}>
        Why Ghost Hunters Use It?
      </h2>
      <p
        style={{
          marginTop: "1rem",
          lineHeight: "2",
          maxWidth: "1000px",
          fontSize: "1.15rem",
          color: "#eee",
          padding: "0 1rem",
          textAlign: "justify",
        }}
      >
        EMF meters are popular in paranormal investigations because they provide immediate and visible feedback. Many 
        investigators believe that spirits use electromagnetic energy to manifest or communicate, causing spikes in EMF
        readings when they are nearby. When EMF activity increases unexpectedly, investigators may treat it as a possible
         sign of paranormal presence, especially if it occurs alongside strange sounds, temperature drops, or personal
         experiences.
      </p>
      <h2 style={{ marginTop: "2rem", fontSize: "1.8rem", fontFamily: "'Playfair Display', serif" }}>
        Limitations and Skepticism
      </h2>
      <p
        style={{
          marginTop: "1rem",
          lineHeight: "2",
          maxWidth: "1000px",
          fontSize: "1.15rem",
          color: "#eee",
          padding: "0 1rem",
          textAlign: "justify",
        }}
      >
        Despite their popularity, EMF meters are not considered scientific proof of ghosts. Many natural
         sources—such as hidden wiring, electrical appliances, or mobile phones—can cause EMF spikes. Because 
        of this, readings must be interpreted carefully. Skeptics argue that EMF meters detect environmental 
        energy rather than spirits. For this reason, responsible ghost hunters use EMF meters alongside other 
        tools and observations, rather than relying on them alone. Understanding these limitations helps keep 
        investigations balanced and realistic.
      </p>
    </div>
  );
}
