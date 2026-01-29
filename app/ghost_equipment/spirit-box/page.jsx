"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./spiritbox.css";

export default function SpiritBoxPage() {
  const boxRef = useRef(null);
  const [lights, setLights] = useState({ top: 0, right: 0, bottom: 0, left: 0 });
  const [message, setMessage] = useState("");

  const letters = "AAABCDEEEFGHIIJKLMNOOPQRSTUUVWXYZ";

  useEffect(() => {
    function handleMove(e) {
      if (!boxRef.current) return;

      const rect = boxRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 500; // larger = detects from further away

      // Proximity effect (0-1)
      const proximity = Math.max(0, 1 - distance / maxDistance);

      // Directional effect for each side
      const newLights = {
        top: Math.max(0, -dy / maxDistance + 0.5) * proximity,
        bottom: Math.max(0, dy / maxDistance + 0.5) * proximity,
        left: Math.max(0, -dx / maxDistance + 0.5) * proximity,
        right: Math.max(0, dx / maxDistance + 0.5) * proximity,
      };

      setLights(newLights);

      // Random chance to generate a letter if close enough
      if (proximity > 0.3 && Math.random() < 0.02) {
        setMessage((prev) => prev + letters[Math.floor(Math.random() * letters.length)]);
      }
    }

    function handleLeave() {
      setLights({ top: 0, right: 0, bottom: 0, left: 0 });
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    // Optional: clear message every few seconds
    const interval = setInterval(() => setMessage(""), 5000);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="spiritBoxPage">
      <div className="backWrapper">
        <Link
          href="/ghost_equipment"
          className="backLink"
        >
          ← Back to all ghost equipment
        </Link>
      </div>
      <h1 className="pageTitle">Spirit Box</h1>

      <div
        ref={boxRef}
        className="boxContainer"
        >
        
        {/* Top light */}
        <div
          className="boxLight top" style={{ backgroundColor: `rgba(255,0,0,${lights.top})` }}
        />
        {/* Bottom light */}
        <div
          className="boxLight bottom" style={{ backgroundColor: `rgba(255,0,0,${lights.bottom})` }}
        />
        {/* Left light */}
        <div
          className="boxLight left" style={{ backgroundColor: `rgba(255,0,0,${lights.left})` }}
        />
        {/* Right light */}
        <div
          className="boxLight right" style={{ backgroundColor: `rgba(255,0,0,${lights.right})` }}
        />

        <span className="boxLabel">SPIRIT BOX</span>
      </div>

      <p className="message">
        {message}
      </p>

      <p className="hint">
        Move your cursor around the page to detect “spirit energy.”
      </p>
      {/* Origins Section */}
      <h2 className="sectionTitle">
        Introduction
      </h2>
      <p className="sectionText">
        A Spirit Box is a paranormal investigation device used to attempt communication with spirits. It 
        rapidly scans through radio frequencies, producing fragments of sound that ghost hunters believe 
        spirits can manipulate to form words or responses. Because of its unpredictable and unsettling 
        audio, the Spirit Box is one of the most well-known tools in ghost hunting. Investigators often 
        use Spirit Boxes in reportedly haunted locations where intelligent responses are believed to occur. 
        Short phrases, whispers, or voices are sometimes heard during sessions, making the Spirit Box a popular 
        yet controversial device in paranormal research.
      </p>

      {/* Sightings Section */}
      <h2 className="sectionTitle">
        How It Works
      </h2>
      <p className="sectionText">
        A Spirit Box works by continuously sweeping through AM or FM radio frequencies at a fast rate. 
        This prevents full radio broadcasts from being heard and instead produces brief snippets of static 
        and sound. Ghost hunters believe spirits can influence this audio to communicate by forming words or
        phrases. During investigations, the Spirit Box is typically used in a quiet environment. Investigators 
        ask clear questions and listen closely for responses that may relate to what was asked. Sessions are 
        often recorded so audio can be reviewed later for clarity and context.
      </p>

      {/* Additional Notes (optional) */}
      <h2 className="sectionTitle">
        Why Ghost Hunters Use It?
      </h2>
      <p className="sectionText">
        Spirit Boxes are widely used because they allow for real-time interaction. Unlike EVP recorders, which require playback
         to hear results, Spirit Boxes provide immediate feedback during investigations. This makes sessions feel more interactive
         and intense. Many ghost hunters believe that when responses directly answer questions or use relevant names and phrases,
          it suggests intelligent communication. When used alongside other equipment such as EMF meters or REM-Pods, Spirit Box 
          activity is sometimes considered stronger evidence of paranormal presence.
      </p>
      <h2 className="sectionTitle">
        Limitations and Skepticism
      </h2>
      <p className="sectionText">
        Spirit Boxes are one of the most debated tools in ghost hunting. Because they rely on radio frequencies,
         random words, music fragments, or voices from broadcasts can be mistaken for paranormal communication. 
         This phenomenon is often explained by pareidolia, where the brain interprets random sounds as meaningful
         patterns. Skeptics argue that Spirit Box responses are coincidental and influenced by expectation rather
          than spirits. For this reason, responsible investigators carefully document sessions, control environments,
           and avoid leading questions. Spirit Boxes are best used as a supplementary tool rather than definitive proof
            of paranormal activity.
      </p>
    </div>
  );
}
