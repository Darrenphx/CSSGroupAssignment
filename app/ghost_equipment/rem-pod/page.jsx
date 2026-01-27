"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./rempod.css";

export default function REMPodPage() {
  const totalLights = 12; // total lights around the circle
  const [intensities, setIntensities] = useState(new Array(totalLights).fill(0));
  const podRef = useRef(null);
  const colors = ["#2ecc71", "#a3e635", "#facc15", "#fb923c", "#ef4444"];

  useEffect(() => {
    function handleMove(e) {
      if (!podRef.current) return;

      const rect = podRef.current.getBoundingClientRect();
      const podCenterX = rect.left + rect.width / 2;
      const podCenterY = rect.top + rect.height / 2;

      const dx = e.clientX - podCenterX;
      const dy = e.clientY - podCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 1200;
      const normalized = Math.max(0, 1 - distance / maxDistance);

      // Angle of cursor relative to pod center
      const angle = Math.atan2(dy, dx); // -PI to PI
      const angleStep = (2 * Math.PI) / totalLights;

      const newIntensities = new Array(totalLights).fill(0);

      // Set intensity only for lights in the direction of the cursor
      for (let i = 0; i < totalLights; i++) {
        const lightAngle = i * angleStep - Math.PI / 2; // rotate to start top
        let diff = Math.abs(lightAngle - angle);
        if (diff > Math.PI) diff = 2 * Math.PI - diff; // handle wrap-around
        if (diff < angleStep / 1.5) {
          // close enough, set intensity proportional to distance
          newIntensities[i] = normalized;
        }
      }

      setIntensities(newIntensities);
    }

    function handleLeave() {
      setIntensities(new Array(totalLights).fill(0));
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="rempodPage">
      <div className="backWrapper">
        <Link
          href="/ghost_equipment"
          className="backLink">
          ← Back to all ghost equipment
        </Link>
      </div>
      <h1 className="pageTitle">REM Pod</h1>

      <div
        ref={podRef}
        className="podContainer"
      >
        {intensities.map((intensity, i) => {
          const angle = (i / totalLights) * 2 * Math.PI - Math.PI / 2;
          const radius = 120;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          const color = colors[i % colors.length];

          return (
            <div
              key={i}
              className="podLight"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(${x}px, ${y}px)`,
                backgroundColor: color,
                opacity: intensity,
              }}
            />
          );
        })}
      </div>

      <p className="hint">
        Move your cursor anywhere on the page — the REM Pod lights up in the direction of the “spirit”!
      </p>
      <h2 className="sectionTitle">
        Introduction
      </h2>
      <p className="sectionText">
        A REM-Pod (Radiating Electromagnetic Pod) is a paranormal investigation device designed to detect changes in 
        electromagnetic fields. Unlike an EMF meter, which must be moved around an area, a REM-Pod is placed in one spot 
        and left to monitor its surroundings. When its field is disturbed, the device responds with lights and sound. 
        Ghost hunters believe that spirits can interact with the REM-Pod by entering or manipulating its electromagnetic 
        field. Because of its stationary design and immediate feedback, the REM-Pod is commonly used during night 
        investigations and long observation sessions.
      </p>

      {/* Sightings Section */}
      <h2 className="sectionTitle">
        How It Works
      </h2>
      <p className="sectionText">
        The REM-Pod generates a small, invisible electromagnetic field around its antenna. When something enters or 
        disturbs this field, the device is triggered. This causes the REM-Pod to light up, beep, or alarm, alerting 
        investigators to possible movement or interaction. During investigations, the REM-Pod is often placed in quiet
         rooms, hallways, or near trigger objects. Investigators may ask questions and observe whether the device activates
          in response. Because it remains stationary, it helps detect activity in areas that appear empty or still.
      </p>

      {/* Additional Notes (optional) */}
      <h2 className="sectionTitle">
        Why Ghost Hunters Use It?
      </h2>
      <p className="sectionText">
        REM-Pods are popular because they provide clear and noticeable reactions. The lights and sounds make it easy to
         see when the device has been triggered, even from a distance. This makes them useful during dark investigations
          where visibility is limited. Many ghost hunters believe REM-Pods allow spirits to communicate more easily by 
          interacting with the device’s field. When activations occur repeatedly in response to questions or in controlled 
          environments, investigators may consider it potential paranormal evidence.
      </p>
      <h2 className="sectionTitle">
        Limitations and Skepticism
      </h2>
      <p className="sectionText">
        Like EMF meters, REM-Pods can be affected by natural and environmental factors. 
        Nearby electronic devices, radio signals, or accidental movement can trigger the device. 
        Because of this, false activations are possible. Skeptics argue that REM-Pods detect physical 
        disturbances rather than spirits. For this reason, investigators are encouraged to eliminate 
        environmental causes and use REM-Pods alongside other equipment to confirm findings. Understanding 
        these limitations helps maintain a balanced approach to paranormal investigations
      </p>
    </div>
  );
}

