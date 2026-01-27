"use client";
import React, { useState, useEffect } from "react";
import Snowfall from "react-snowfall";

// const snowflake1 = document.createElement("img")
// snowflake1.src = "/photos/ghost-8250317_640.png"

// const images = [snowflake1]
export default function SnowfallClient() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const snowflake1 = document.createElement("img");
    snowflake1.src = "/photos/ghost-8250317_640.png";

    setImages([snowflake1]);
  }, []);
  return (
    <Snowfall
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        
      }}
      color="red"
      snowflakeCount={10}
      images={images}
      radius={[15,25]}
      opacity={[0.05,0.3]}
      rotationSpeed={[1]}
      
    />
  );
}
