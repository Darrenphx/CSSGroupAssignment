"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./emf.css";

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
    <div className="emfPage">

      <div className="backWrapper">
        <Link
          href="/ghost_equipment"
          className="backLink">
          ← Back to all ghost equipment
        </Link>
      </div>
      <h1 className="pageTitle">
        EMF Meter
      </h1>

      <div
        ref={meterRef}
        className="meter"
      >
        {intensities.map((intensity, i) => (
          <div
            key={i}
            className="meterBar"
            style={{
              backgroundColor: colors[i],
              opacity: intensity,
            }}
          />
        ))}
      </div>

      <p className="hint">
        Move your cursor anywhere on the page — the EMF meter reacts like a real device!
      </p>
      {/* Origins Section */}
      <h2 className="sectionTitle">
        Introduction
      </h2>
      <p className="sectionText">
        An EMF meter, short for Electromagnetic Field meter, is one of 
        the most commonly used tools in ghost hunting. Originally 
        designed for electricians and engineers, it measures invisible 
        energy fields produced by electronic devices and wiring. Over time, 
        paranormal investigators began using EMF meters to detect unusual 
        energy changes during investigations.
      </p>

      {/* Sightings Section */}
      <h2 className="sectionTitle">
        How It Works
      </h2>
      <p className="sectionText">
        An EMF meter works by detecting electromagnetic fields in its surrounding environment. These fields are naturally
         produced by everyday electrical sources such as power lines, wiring inside walls, phones, and electronic devices. 
         When the meter is turned on, it continuously scans the area and displays readings using lights, numbers, or sounds.
        During a ghost investigation, investigators slowly move the EMF meter around a room to establish a baseline reading. 
        Any sudden increase or fluctuation in the readings—without an obvious electrical cause—is noted and often investigated 
        further. Some ghost hunters also ask questions while monitoring the meter, watching for changes that appear to respond 
        in real time.
      </p>

      {/* Additional Notes (optional) */}
      <h2 className="sectionTitle">
        Why Ghost Hunters Use It?
      </h2>
      <p className="sectionText">
        EMF meters are popular in paranormal investigations because they provide immediate and visible feedback. Many 
        investigators believe that spirits use electromagnetic energy to manifest or communicate, causing spikes in EMF
        readings when they are nearby. When EMF activity increases unexpectedly, investigators may treat it as a possible
         sign of paranormal presence, especially if it occurs alongside strange sounds, temperature drops, or personal
         experiences.
      </p>
      <h2 className="sectionTitle">
        Limitations and Skepticism
      </h2>
      <p className="sectionText">
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
