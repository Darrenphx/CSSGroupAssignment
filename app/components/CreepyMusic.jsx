"use client";

import { useRef, useState } from "react";

export default function CreepyMusic() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    console.log("Button clicked");
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.volume = 0.2;
      audioRef.current.loop = true;
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
    <audio ref={audioRef} loop>
  <source src="/audio/creepy.mp3" type="audio/mpeg" />
</audio>


      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#1b1832",
          color: "white",
          border: "1px solid #444",
          borderRadius: "20px",
          padding: "0.5rem 1rem",
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        {playing ? "🔊 Music On": "🔇 Music Off" }
      </button>
    </>
  );
}
