"use client";

import { useRef, useState } from "react";
import "./creepyMusic.css";

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
        className="creepyMusicBtn"
      >
        {playing ? "🔊 Music On": "🔇 Music Off" }
      </button>
    </>
  );
}
